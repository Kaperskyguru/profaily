/**
 * Renders a blog cover: public/assets/blog-featured-<slug>.jpg, 1200x630.
 *
 *   yarn cover <slug> "<title with one [highlighted phrase]>" [capture] [left,top,width]
 *
 *   capture        a file in public/assets/app (default ch-tiktok-composer.jpg)
 *   left,top,width how the capture sits in the 860px-wide window (default -352,-6,1229: the composer's
 *                  channel tabs and phone preview)
 *
 * Example: yarn cover post-to-tiktok-reels-shorts-at-the-same-time "Post to TikTok, Reels and Shorts [at the same time]"
 *
 * Needs Google Chrome (CHROME=/path/to/chrome to override) and network for the Inter Tight font. macOS `sips`
 * converts the screenshot to JPEG.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const [slug, title, shot = "ch-tiktok-composer.jpg", place = "-352,-6,1229"] = process.argv.slice(2);
if (!slug || !title || !/\[[^\]]+\]/.test(title)) {
  console.error('Usage: yarn cover <slug> "<title with one [highlighted phrase]>" [capture] [left,top,width]');
  process.exit(1);
}
const root = process.cwd();
const capture = path.join(root, "public/assets/app", shot);
if (!fs.existsSync(capture)) throw new Error(`No capture at public/assets/app/${shot}`);
const [left, top, width] = place.split(",").map(Number);

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const html = fs
  .readFileSync(path.join(root, "scripts/cover/template.html"), "utf8")
  .replace("{{TITLE}}", esc(title).replace(/\s*\[([^\]]+)\]\s*/, '<br><span class="hl">$1</span>'))
  .replace("{{SHOT}}", `file://${capture}`)
  .replace("{{SHOT_STYLE}}", `left:${left}px;top:${top}px;width:${width}px`);

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cover-"));
fs.copyFileSync(path.join(root, "scripts/cover/lockup-white.svg"), path.join(tmp, "lockup-white.svg"));
fs.writeFileSync(path.join(tmp, "cover.html"), html);
const png = path.join(tmp, "cover.png");
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
execFileSync(chrome, ["--headless=new", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=5000", "--window-size=1200,630", `--screenshot=${png}`, `file://${tmp}/cover.html`], { stdio: "ignore" });

const out = path.join(root, `public/assets/blog-featured-${slug}.jpg`);
execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "86", png, "--out", out], { stdio: "ignore" });
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`Wrote ${path.relative(root, out)}`);
