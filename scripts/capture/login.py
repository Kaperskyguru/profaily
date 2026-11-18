"""Sign in to the local app once and save the session for flow.py.
usage: python3 scripts/capture/login.py [email] [password] [captures/state.json]
Defaults to the demo account (demo@useprofaily.com). Local password sign-in only; production has none."""
import asyncio, os, sys
from playwright.async_api import async_playwright
email = sys.argv[1] if len(sys.argv) > 1 else "demo@useprofaily.com"
password = sys.argv[2] if len(sys.argv) > 2 else "Demo-Profaily-2026!"
out = sys.argv[3] if len(sys.argv) > 3 else "captures/state.json"
async def main():
    os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width": 1280, "height": 800}, device_scale_factor=2)
        pg = await ctx.new_page()
        await pg.goto("http://localhost:3002/auth/login"); await pg.wait_for_selector("input[type=email]", timeout=120000)
        await pg.fill("input[type=email]", email); await pg.fill("input[type=password]", password)
        await pg.keyboard.press("Enter")
        await pg.wait_for_url(lambda u: "/auth/" not in u, timeout=120000); await pg.wait_for_timeout(8000)
        await ctx.storage_state(path=out); print("signed in as", email, "->", out)
        await b.close()
asyncio.run(main())
