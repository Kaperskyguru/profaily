/**
 * Makes a post's cover and points the post at it:
 *
 *   yarn cover <slug> ["words with one [highlighted phrase]"] [capture] [left,top,width]
 *
 * 1. Reads posts/<slug>.md. The cover's words are the second argument, else the post's `cover` field, else its
 *    title; a phrase in [brackets] goes on the mint block. The capture (a file in public/assets/app) is the third
 *    argument, else `coverShot`, else the composer. left,top,width place the capture in the 860px window.
 * 2. Draws scripts/cover/template.html in Chrome and writes public/assets/blog-featured-<slug>.jpg (1200x630).
 * 3. Writes into the post's frontmatter: `cover` and `coverShot` (when given here) and
 *    `coverImage: "/assets/blog-featured-<slug>.jpg?v=<hash>"`, so the article, the blog cards and og:image show
 *    the new cover and no cache serves the old one. Nothing else in the file changes.
 *
 * Needs Google Chrome (CHROME=/path/to/chrome to override), network for the Inter Tight font, and macOS `sips`.
 */
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import matter from "gray-matter";

const DEFAULT_SHOT = "ch-tiktok-composer.jpg";
const DEFAULT_PLACE = "-352,-6,1229";

const [slug, wordsArg, shotArg, place = DEFAULT_PLACE] = process.argv.slice(2);
if (!slug) {
  console.error('Usage: yarn cover <slug> ["words with one [highlighted phrase]"] [capture] [left,top,width]');
  process.exit(1);
}
const root = process.cwd();
const postFile = path.join(root, "posts", `${slug}.md`);
if (!fs.existsSync(postFile)) throw new Error(`No post at posts/${slug}.md`);
const source = fs.readFileSync(postFile, "utf8");
const { data } = matter(source);

const words: string = wordsArg ?? data.cover ?? data.title;
if (typeof words !== "string" || !words.trim()) throw new Error(`posts/${slug}.md has no title to put on the cover`);
const m = /^([^[\]]+?)\s*\[([^[\]]+)\]$/.exec(words.trim());
if (!m && /[[\]]/.test(words)) throw new Error('Mark one phrase at the end in [brackets], like "Post to TikTok [at the same time]"');
const shot: string = shotArg ?? data.coverShot ?? DEFAULT_SHOT;
const capture = path.join(root, "public/assets/app", shot);
if (!fs.existsSync(capture)) throw new Error(`No capture at public/assets/app/${shot}`);
const [left, top, width] = place.split(",").map(Number);

// --- draw
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const title = m ? `${esc(m[1])}<br><span class="hl">${esc(m[2])}</span>` : esc(words.trim());
const html = fs
  .readFileSync(path.join(root, "scripts/cover/template.html"), "utf8")
  .replace("{{TITLE}}", title)
  .replace("{{SHOT}}", `file://${capture}`)
  .replace("{{SHOT_STYLE}}", `left:${left}px;top:${top}px;width:${width}px`);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cover-"));
fs.copyFileSync(path.join(root, "scripts/cover/lockup-white.svg"), path.join(tmp, "lockup-white.svg"));
fs.writeFileSync(path.join(tmp, "cover.html"), html);
const png = path.join(tmp, "cover.png");
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
execFileSync(chrome, ["--headless=new", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=5000", "--window-size=1200,630", `--screenshot=${png}`, `file://${tmp}/cover.html`], { stdio: "ignore" });
const rel = `/assets/blog-featured-${slug}.jpg`;
const out = path.join(root, "public", rel);
execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "86", png, "--out", out], { stdio: "ignore" });
fs.rmSync(tmp, { recursive: true, force: true });

// --- point the post at it: edit only these frontmatter lines, keep the rest of the file byte for byte
const hash = crypto.createHash("sha1").update(fs.readFileSync(out)).digest("hex").slice(0, 8);
const fields: [string, string | undefined][] = [
  ["cover", wordsArg ?? (data.cover === undefined ? undefined : words)],
  ["coverShot", shotArg],
  ["coverImage", `${rel}?v=${hash}`],
];
const fm = /^---\n([\s\S]*?)\n---/.exec(source);
if (!fm) throw new Error(`posts/${slug}.md has no frontmatter`);
let head = fm[1];
for (const [key, value] of fields) {
  if (value === undefined) continue;
  const line = `${key}: ${JSON.stringify(value)}`;
  const re = new RegExp(`^${key}:.*$`, "m");
  head = re.test(head) ? head.replace(re, line) : `${head}\n${line}`;
}
fs.writeFileSync(postFile, source.replace(fm[0], `---\n${head}\n---`));
console.log(`Wrote public${rel} and updated posts/${slug}.md (coverImage ${rel}?v=${hash})`);
