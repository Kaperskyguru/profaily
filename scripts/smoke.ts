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
  // Behavior survives page -> page. Plain <a> navigation is a full reload and PageShell remounts per page,
  // so goto() is equivalent to a link click.
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await page.goto(BASE + "/pricing");
  await navCases(page, "pricing");
  await page.goto(BASE + "/tiktok");
  await navCases(page, "tiktok");
  // Reduced motion: hero stays the static png, and lazy videos (only rendered on blog posts) are never loaded.
  const rm = await (await browser.newContext({ reducedMotion: "reduce" })).newPage();
  await rm.goto(BASE + "/");
  const heroSrc = await rm.locator(".hero-photo").evaluate((i: HTMLImageElement) => i.currentSrc);
  check("reduced-motion: hero is static png", heroSrc.endsWith("profaily-hero-studio.png"), heroSrc);
  const lazyPost = BASE + "/blog/one-video-four-platforms";
  const lazyCase = async (ctxOpts: Parameters<typeof browser.newContext>[0], tag: string, expectLoaded: boolean) => {
    const p = await (await browser.newContext(ctxOpts)).newPage();
    await p.goto(lazyPost);
    await p.waitForLoadState("networkidle");
    const present = await p.locator("[data-lazy-video]").count();
    check(`${tag}: lazy video element present`, present > 0, String(present));
    await p.locator("[data-lazy-video]").first().scrollIntoViewIfNeeded();
    await p.waitForTimeout(600);
    const loaded = await p.locator("[data-lazy-video][data-video-loaded=true]").count();
    const pending = await p.locator("source[data-src]").count();
    const srcd = await p.locator("[data-lazy-video] source[src]").count();
    if (expectLoaded) check(`${tag}: lazy video loads on scroll`, loaded > 0 && pending === 0 && srcd > 0, `loaded=${loaded} pending=${pending} src=${srcd}`);
    else check(`${tag}: lazy video untouched`, loaded === 0 && pending > 0, `loaded=${loaded} pending=${pending}`);
  };
  await lazyCase({ reducedMotion: "reduce", viewport: { width: 1280, height: 800 } }, "reduced-motion", false);
  await lazyCase({ viewport: { width: 1280, height: 800 } }, "normal-motion", true);
  // Blog filter. Every real category has a card, so the empty state is proven by
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
  // Interaction cases (wait for network idle so behavior islands are hydrated)
  const mob = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await mob.goto(BASE + "/");
  await mob.waitForLoadState("networkidle");
  await mob.waitForTimeout(300);
  await mob.click(".mobile-menu");
  check("mobile: hamburger opens nav", await mob.locator(".main-nav.mobile-open").count() === 1);
  await mob.keyboard.press("Escape");
  check("mobile: Escape closes nav", await mob.locator(".main-nav.mobile-open").count() === 0);
  const vid = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await vid.goto(BASE + "/");
  await vid.waitForLoadState("networkidle");
  await vid.waitForTimeout(300);
  const modalOpen = () => vid.locator("#walkthrough-modal").evaluate((d) => d.hasAttribute("open"));
  await vid.locator("[data-video-open]").first().click();
  check("video modal: opens", await modalOpen());
  await vid.locator("#walkthrough-modal [data-video-close]").first().click();
  check("video modal: closes via [data-video-close]", !(await modalOpen()));
  await vid.locator("[data-video-open]").first().click();
  check("video modal: reopens", await modalOpen());
  await vid.keyboard.press("Escape");
  check("video modal: closes via Escape", !(await modalOpen()));
  // The shipped markup (and the pre-rebuild site) contains no .reveal element, so inject one before
  // hydration (outside <body>, so React is unaffected) to prove RevealBehavior still wires the observer.
  const rv = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await rv.addInitScript(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const sp = document.createElement("div");
      sp.id = "reveal-probe";
      sp.className = "reveal";
      sp.style.cssText = "position:absolute;top:3000px;left:0;width:100px;height:100px";
      document.documentElement.appendChild(sp);
    });
  });
  await rv.goto(BASE + "/");
  await rv.waitForLoadState("networkidle");
  await rv.waitForTimeout(300);
  const before = await rv.locator("#reveal-probe").evaluate((e) => e.classList.contains("visible"));
  await rv.evaluate(() => window.scrollTo(0, 2800));
  await rv.waitForTimeout(600);
  check("reveal: .reveal gains .visible only once scrolled into view", !before && (await rv.locator("#reveal-probe").evaluate((e) => e.classList.contains("visible"))));
  // The pixel shots hide the crosspost SVG during pixel shots, so verify it really renders here.
  const cp = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await cp.goto(BASE + "/tools/auto-cross-posting");
  await cp.waitForLoadState("load");
  const img = cp.locator(".crosspost-animation-frame img").first();
  await img.scrollIntoViewIfNeeded();
  await cp.waitForFunction(() => { const i = document.querySelector<HTMLImageElement>(".crosspost-animation-frame img"); return !!i && i.complete; });
  const nat = await img.evaluate((i: HTMLImageElement) => i.naturalWidth);
  const box = await img.boundingBox();
  check("crosspost svg: loaded with non-zero box", nat > 0 && !!box && box.width > 0 && box.height > 0, `${nat} ${JSON.stringify(box)}`);
  // Legacy URLs + 404
  const noFollow = (await browser.newContext()).request;
  for (const [from, to] of [
    ["/pricing.html?utm=x", "/pricing?utm=x"],
    ["/index.html", "/"],
    ["/blog/index.html", "/blog"],
    ["/compare/buffer-alternative/index.html", "/compare/buffer-alternative"],
    ["/tools/smart-repost.html", "/tools/smart-repost"],
  ] as const) {
    const r = await noFollow.get(BASE + from, { maxRedirects: 0 });
    check(`redirect ${from}`, r.status() === 308 && r.headers()["location"] === to, `${r.status()} ${r.headers()["location"]}`);
  }
  for (const path of ["/nope", "/blog/nope", "/tools/nope", "/compare/nope"])
    check(`unknown path 404 ${path}`, (await noFollow.get(BASE + path)).status() === 404);
  // No hardcoded app host when overridden (run server with NEXT_PUBLIC_APP_URL=https://app.example.test)
  if (!process.env.NEXT_PUBLIC_APP_URL) console.log("SKIP app url override (set NEXT_PUBLIC_APP_URL on both build and smoke)");
  else {
    for (const route of ["/", "/pricing", "/blog/one-video-four-platforms", "/contact"]) {
      const html = await (await noFollow.get(BASE + route)).text();
      check(`app url override ${route}`, !html.includes("app.useprofaily.com") && html.includes(process.env.NEXT_PUBLIC_APP_URL), "");
    }
  }
  } catch (e) {
    check("smoke run", false, String(e));
  } finally {
    await browser.close();
  }
  process.exit(results.some(([, ok]) => !ok) ? 1 : 0);
})();
