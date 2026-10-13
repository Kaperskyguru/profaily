import { mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { ROUTES } from "./routes";

const VIEWPORTS = [{ w: 390, h: 844 }, { w: 1280, h: 800 }];
const slug = (route: string) => (route === "/" ? "home" : route.slice(1).replaceAll("/", "__"));
const ONLY = process.env.ONLY?.split(",").map((s) => s.trim()).filter(Boolean);

async function shot(label: string, base: string) {
  const dir = join("tests/visual", label);
  mkdirSync(dir, { recursive: true });
  const routes = ONLY ? ROUTES.filter((r) => ONLY.includes(r.route)) : ROUTES;
  if (ONLY && routes.length !== ONLY.length) throw new Error(`ONLY has unknown routes: ${ONLY.filter((o) => !ROUTES.some((r) => r.route === o)).join(",")}`);
  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, reducedMotion: "reduce", deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const { route } of routes) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
        document.querySelectorAll(".reveal").forEach((n) => n.classList.add("visible"));
        window.scrollTo(0, 0);
      });
      // SMIL/CSS animation inside <img src=svg> cannot be paused; hide it so shots are deterministic.
      await page.addStyleTag({ content: ".crosspost-animation-frame img{visibility:hidden!important}" });
      await page.waitForTimeout(300);
      await page.screenshot({ path: join(dir, `${slug(route)}-${vp.w}.png`), fullPage: true, animations: "disabled", caret: "hide" });
      console.log(`shot ${label} ${route} @${vp.w}`);
    }
    await ctx.close();
  }
  await browser.close();
}

function diff(a: string, b: string) {
  mkdirSync("tests/visual/diff", { recursive: true });
  let failed = 0;
  for (const f of readdirSync(join("tests/visual", a))) {
    const A = PNG.sync.read(readFileSync(join("tests/visual", a, f)));
    const B = PNG.sync.read(readFileSync(join("tests/visual", b, f)));
    if (A.width !== B.width || A.height !== B.height) { console.log(`FAIL ${f}: size ${A.width}x${A.height} vs ${B.width}x${B.height}`); failed++; continue; }
    const out = new PNG({ width: A.width, height: A.height });
    const n = pixelmatch(A.data, B.data, out.data, A.width, A.height, { threshold: 0 });
    if (n) { writeFileSync(join("tests/visual/diff", f), PNG.sync.write(out)); console.log(`FAIL ${f}: ${n}px differ`); failed++; }
    else console.log(`PASS ${f}`);
  }
  process.exit(failed ? 1 : 0);
}

const [cmd, x, y] = process.argv.slice(2);
if (cmd === "shot") shot(x, y);
else if (cmd === "diff") diff(x, y);
else throw new Error("usage: yarn visual shot <label> <baseUrl> | diff <labelA> <labelB>");
