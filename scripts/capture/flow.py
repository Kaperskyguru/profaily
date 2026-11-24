"""Run a real flow in the local app (http://localhost:3002) as a demo user; take stills and record an MP4.

usage: python3 scripts/capture/flow.py <name> <start-path> '<steps-json>' [--video] [--user captures/state.json]

Desktop by default: 1280x800 at 2x, light theme (what `yarn shot` / `yarn clip` expect). PHONE=1 for 390x844.
Stills and recordings go to captures/ (git-ignored); then frame them with `yarn shot` and `yarn clip`.
Facebook's "Coming soon" rows and the Next.js dev badge are hidden (hide-unapproved.js).

steps: ["tap", target], ["tapforce", target], ["tapif", target], ["mark", "<js returning an element>"] (then tap
       "[data-flow-target]"), ["wait", ms], ["shot", name], ["fill", target, text], ["type", target, text],
       ["key", "Escape"], ["upload", selector, path], ["uploadmany", selector, [paths]], ["js", code], ["eval", code], ["text"], ["scroll", y]
target: a CSS selector, {"role": .., "name": .., "exact": true}, {"text": ..}, {"label": ..} or {"placeholder": ..}
--video records a CDP screencast with a green tap marker on every click; idle stretches are capped at 1.3 s."""
import asyncio, sys, json, os, shutil, subprocess
from playwright.async_api import async_playwright
name, url, steps = sys.argv[1], sys.argv[2], json.loads(sys.argv[3])
video = "--video" in sys.argv
state = sys.argv[sys.argv.index("--user")+1] if "--user" in sys.argv else "captures/state.json"
OUT = os.environ.get("CAPTURE_OUT", "captures"); os.makedirs(OUT, exist_ok=True)
HERE = os.path.dirname(os.path.abspath(__file__))
TAP_JS = """([x,y])=>{const d=document.createElement('div');d.style.cssText=`position:fixed;left:${x-22}px;top:${y-22}px;width:44px;height:44px;border-radius:50%;background:rgba(141,215,150,.55);border:3px solid #2f7a43;z-index:2147483647;pointer-events:none;transition:transform .5s,opacity .5s`;document.body.appendChild(d);requestAnimationFrame(()=>{d.style.transform='scale(1.25)'});setTimeout(()=>{d.style.opacity='0'},650);setTimeout(()=>d.remove(),1200)}"""
def loc(pg, s):
    if isinstance(s, dict):
        if "role" in s: return pg.get_by_role(s["role"], name=s["name"], exact=s.get("exact", False)).first
        if "text" in s: return pg.get_by_text(s["text"], exact=s.get("exact", False)).first
        if "label" in s: return pg.get_by_label(s["label"]).first
        if "placeholder" in s: return pg.get_by_placeholder(s["placeholder"]).first
    return pg.locator(s).first
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        DESK = os.environ.get("PHONE") != "1"
        opts = dict(storage_state=state, viewport={"width":390,"height":844}, device_scale_factor=2, is_mobile=True, has_touch=True)
        if DESK: opts = dict(storage_state=state, viewport={"width":1280,"height":800}, device_scale_factor=2, color_scheme="light")
        ctx = await b.new_context(**opts)
        await ctx.add_init_script(path=os.path.join(HERE, "hide-unapproved.js"))
        if True: await ctx.add_init_script("try{localStorage.setItem('theme','light')}catch(e){}")
        pg = await ctx.new_page()
        await pg.goto("http://localhost:3002"+url); await pg.wait_for_timeout(9000)
        await pg.add_style_tag(content="nextjs-portal{display:none!important}")
        try: await pg.get_by_role("button", name="Reject").click(timeout=1500); await pg.wait_for_timeout(400)
        except Exception: pass
        frames = []
        if video:
            # CDP screencast at device pixels (780 wide), started after loading and the cookie banner.
            cdp = await ctx.new_cdp_session(pg)
            fdir = f"{OUT}/_frames_{name}"; shutil.rmtree(fdir, ignore_errors=True); os.makedirs(fdir)
            async def on_frame(ev):
                i = len(frames); path = f"{fdir}/{i:05d}.jpg"
                import base64; open(path, "wb").write(base64.b64decode(ev["data"]))
                frames.append((path, ev["metadata"]["timestamp"]))
                try: await cdp.send("Page.screencastFrameAck", {"sessionId": ev["sessionId"]})
                except Exception: pass
            cdp.on("Page.screencastFrame", lambda ev: asyncio.ensure_future(on_frame(ev)))
            await cdp.send("Page.startScreencast", {"format": "jpeg", "quality": 92, "maxWidth": 1600 if DESK else 780, "maxHeight": 1688, "everyNthFrame": 1})
            await pg.wait_for_timeout(700)
        for s in steps:
            k = s[0]
            if k == "tap":
                l = loc(pg, s[1]); await l.scroll_into_view_if_needed(timeout=15000); await pg.wait_for_timeout(350); bb = await l.bounding_box()
                if bb and video: await pg.evaluate(TAP_JS, [bb["x"]+bb["width"]/2, bb["y"]+bb["height"]/2]); await pg.wait_for_timeout(450)
                await l.click(timeout=15000); await pg.wait_for_timeout(s[2] if len(s) > 2 else 1400)
            elif k == "tapforce":
                l = loc(pg, s[1]); bb = await l.bounding_box()
                if bb and video: await pg.evaluate(TAP_JS, [bb["x"]+bb["width"]/2, bb["y"]+bb["height"]/2]); await pg.wait_for_timeout(450)
                await l.click(force=True); await pg.wait_for_timeout(s[2] if len(s) > 2 else 1400)
            elif k == "tapif":
                try:
                    l = loc(pg, s[1]); await l.wait_for(state="visible", timeout=s[2] if len(s) > 2 else 4000); await l.click(); await pg.wait_for_timeout(1500)
                except Exception: pass
            elif k == "mark":
                await pg.evaluate("document.querySelectorAll('[data-flow-target]').forEach(e=>e.removeAttribute('data-flow-target'))")
                await pg.evaluate(f"(()=>{{const el=({s[1]});el.setAttribute('data-flow-target','1')}})()")
            elif k == "eval":
                print("eval", await pg.evaluate(s[1]))
            elif k == "key":
                await pg.keyboard.press(s[1]); await pg.wait_for_timeout(s[2] if len(s) > 2 else 800)
            elif k == "wait": await pg.wait_for_timeout(s[1])
            elif k == "shot": await pg.screenshot(path=f"{OUT}/{s[1]}.png"); print("shot", s[1])
            elif k == "fill": await loc(pg, s[1]).fill(s[2]); await pg.wait_for_timeout(500)
            elif k == "type": await loc(pg, s[1]).click(); await pg.keyboard.type(s[2], delay=45); await pg.wait_for_timeout(500)
            elif k == "upload":
                # A fresh copy each run (new metadata), so the library's "already uploaded" check doesn't stop the flow.
                import uuid; src = s[2]; tmp = f"/tmp/{os.path.basename(src)}"
                subprocess.run(["ffmpeg","-y","-loglevel","error","-i",src,"-c","copy","-metadata",f"comment={uuid.uuid4()}",tmp], check=True)
                await pg.set_input_files(s[1], tmp); await pg.wait_for_timeout(s[3] if len(s) > 3 else 6000)
            elif k == "uploadmany":
                # Several files at once (an image post), as they are: images carry no "already uploaded" metadata.
                await pg.set_input_files(s[1], s[2]); await pg.wait_for_timeout(s[3] if len(s) > 3 else 8000)
            elif k == "js": await pg.evaluate(s[1]); await pg.wait_for_timeout(800)
            elif k == "text": print((await pg.inner_text("body"))[:4000])
            elif k == "scroll": await pg.evaluate(f"window.scrollTo(0,{s[1]})"); await pg.wait_for_timeout(500)
        await pg.wait_for_timeout(1200)
        if video:
            await cdp.send("Page.stopScreencast"); await pg.wait_for_timeout(300)
        await ctx.close(); await b.close()
        if video and len(frames) > 1:
            # Each frame shown for as long as it was on screen, then a small, sharp MP4 for the web.
            lst = f"{OUT}/_frames_{name}.txt"
            with open(lst, "w") as f:
                for (path, ts), nxt in zip(frames, frames[1:] + [(None, frames[-1][1] + 1.0)]):
                    f.write(f"file '{path}'\nduration {min(1.3, max(0.02, nxt[1]-ts)):.3f}\n")
                f.write(f"file '{frames[-1][0]}'\n")
            subprocess.run(["ffmpeg","-y","-loglevel","error","-f","concat","-safe","0","-i",lst,"-vf",("scale=1600:-2" if os.environ.get("PHONE")!="1" else "scale=780:-2")+",fps=30","-c:v","libx264","-pix_fmt","yuv420p","-crf","24","-preset","veryfast","-movflags","+faststart","-an",f"{OUT}/{name}.mp4"], check=True)
            print("video", f"{OUT}/{name}.mp4", len(frames), "frames")
asyncio.run(main())
