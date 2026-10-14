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
  await page.mouse.click(5, 790);
  check(`${tag}: outside click closes`, await page.locator(".nav-group.open").count() === 0);
}

(async () => {
  const browser = await chromium.launch();
  try {
  // Review Focus 1: behavior survives page -> page (full reloads here, so also assert on 2nd page)
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await page.goto(BASE + "/");
  await navCases(page, "pricing");
  await page.goto(BASE + "/");
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
  // Task 10: blog filter. Every real category has a card, so the empty state is proven by
  // re-labelling every card's data-category in the live DOM and clicking a filter again.
  const blog = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await blog.goto(BASE + "/blog");
  await blog.waitForLoadState("networkidle");
  const cats = await blog.locator("[data-blog-filter]").evaluateAll((els) => els.map((e) => (e as HTMLElement).dataset.blogFilter!));
  const total = await blog.locator(".blog-card").count();
  for (const c of cats) {
    await blog.click(`[data-blog-filter="${c}"]`);
    const visible = await blog.locator(".blog-card:not([hidden])").count();
    const empty = await blog.locator("#blog-empty").isVisible();
    const expected = c === "all guides" ? total : await blog.locator(`.blog-card[data-category="${c}"]`).count();
    const pressed = await blog.locator('[data-blog-filter][aria-pressed="true"]').evaluateAll((els) => els.map((e) => (e as HTMLElement).dataset.blogFilter));
    check(`blog filter "${c}"`, visible === expected && empty === (expected === 0) && pressed.length === 1 && pressed[0] === c, `${visible}/${expected}`);
  }
  await blog.evaluate(() => document.querySelectorAll<HTMLElement>(".blog-card").forEach((card) => (card.dataset.category = "__none__")));
  await blog.click('[data-blog-filter="publishing"]');
  const noneVisible = await blog.locator(".blog-card:not([hidden])").count();
  check("blog filter: empty state shown when no card matches", noneVisible === 0 && (await blog.locator("#blog-empty").isVisible()));
  await blog.click('[data-blog-filter="all guides"]');
  check("blog filter: empty state hidden again by All guides", (await blog.locator("#blog-empty").isVisible()) === false);
  } catch (e) {
    check("smoke run", false, String(e));
  } finally {
    await browser.close();
  }
  process.exit(results.some(([, ok]) => !ok) ? 1 : 0);
})();
