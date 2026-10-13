import { chromium, type Page } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3003";
const results: [string, boolean, string?][] = [];
const check = (name: string, ok: boolean, info?: string) => { results.push([name, ok, info]); console.log(`${ok ? "PASS" : "FAIL"} ${name}${info ? " — " + info : ""}`); };

async function navCases(page: Page, tag: string) {
  await page.click(".menu-trigger >> nth=0");
  check(`${tag}: mega opens`, await page.locator(".nav-group.open").count() === 1);
  await page.keyboard.press("Escape");
  check(`${tag}: Escape closes`, await page.locator(".nav-group.open").count() === 0);
  await page.click(".menu-trigger >> nth=0");
  await page.click("h1");
  check(`${tag}: outside click closes`, await page.locator(".nav-group.open").count() === 0);
}

(async () => {
  const browser = await chromium.launch();
  // Review Focus 1: behavior survives page -> page (full reloads here, so also assert on 2nd page)
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await page.goto(BASE + "/pricing");
  await navCases(page, "pricing");
  await page.goto(BASE + "/tiktok");
  await navCases(page, "tiktok");
  // Review Focus 4: reduced motion never loads lazy videos
  const rm = await (await browser.newContext({ reducedMotion: "reduce" })).newPage();
  await rm.goto(BASE + "/");
  await rm.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await rm.waitForTimeout(500);
  const loaded = await rm.locator("[data-lazy-video][data-video-loaded=true]").count();
  check("reduced-motion: no lazy video loaded", loaded === 0, String(loaded));
  const heroSrc = await rm.locator(".hero-photo").evaluate((i: HTMLImageElement) => i.currentSrc);
  check("reduced-motion: hero is static png", heroSrc.endsWith("profaily-hero-studio.png"), heroSrc);
  await browser.close();
  process.exit(results.some(([, ok]) => !ok) ? 1 : 0);
})();
