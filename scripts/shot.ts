/**
 * Puts a real app capture on the brand frame, for use inside a blog post:
 *
 *   yarn shot <capture.png|jpg> <post-slug> <name> [x,y,w,h] [width]
 *
 * 1. <capture> is a screenshot you took yourself in the live app (app.useprofaily.com) on the demo brand. Never a
 *    mock-up or an edited image: the frame proves nothing if the picture inside it is not real.
 * 2. x,y,w,h crops the capture (in its own pixels) to the part the sentence is about; default is the whole capture.
 *    width is the shown width of the cropped capture in CSS px (default 1040; output is drawn at 2x).
 * 3. Draws scripts/shot/template.html in Chrome and writes public/assets/blog/<post-slug>/<name>.jpg.
 * 4. Prints the markdown to paste into posts/<post-slug>.md. Write real alt text: what the reader should see.
 *
 * The build checks every image in a post: it must be under /assets/blog/<post-slug>/, exist, and have alt text.
 *
 * Needs Google Chrome (CHROME=/path/to/chrome to override). JPEG conversion uses macOS `sips`, or ImageMagick
 * `convert` where sips is missing.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const PAD = 40;
const DEFAULT_WIDTH = 1040;
const SCALE = 2;

const [captureArg, slug, name, cropArg, widthArg] = process.argv.slice(2);
if (!captureArg || !slug || !name) {
  console.error("Usage: yarn shot <capture.png|jpg> <post-slug> <name> [x,y,w,h] [width]");
  process.exit(1);
}
if (!/^[a-z0-9-]+$/.test(name)) throw new Error(`Name "${name}" must be lower-case words joined by hyphens, like "approve-button"`);
const root = process.cwd();
if (!fs.existsSync(path.join(root, "posts", `${slug}.md`))) throw new Error(`No post at posts/${slug}.md`);
const capture = path.resolve(captureArg);
if (!fs.existsSync(capture)) throw new Error(`No capture at ${capture}`);

const dims = (file: string): [number, number] => {
  // PNG: width/height at bytes 16-23. JPEG: scan for a SOFn marker.
  const b = fs.readFileSync(file);
  if (b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  for (let i = 2; i < b.length; ) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
    i += 2 + b.readUInt16BE(i + 2);
  }
  throw new Error(`${file} is not a PNG or JPEG`);
};
const [capW, capH] = dims(capture);
const [cx, cy, cw, ch] = cropArg ? cropArg.split(",").map(Number) : [0, 0, capW, capH];
if ([cx, cy, cw, ch].some((n) => !Number.isFinite(n) || n < 0) || cx + cw > capW || cy + ch > capH) {
  throw new Error(`Crop ${cropArg} must sit inside the ${capW}x${capH} capture`);
}
const width = widthArg ? Number(widthArg) : DEFAULT_WIDTH;
const k = width / cw; // capture px -> CSS px
const height = Math.round(ch * k);

const html = fs
  .readFileSync(path.join(root, "scripts/shot/template.html"), "utf8")
  .replaceAll("{{PAD}}", String(PAD))
  .replace("{{WIDTH}}", String(width))
  .replace("{{HEIGHT}}", String(height))
  .replace("{{IMG_W}}", String(Math.round(capW * k)))
  .replace("{{CROP_X}}", String(Math.round(cx * k)))
  .replace("{{CROP_Y}}", String(Math.round(cy * k)))
  .replace("{{SHOT}}", `file://${capture}`);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "shot-"));
fs.writeFileSync(path.join(tmp, "shot.html"), html);
const png = path.join(tmp, "shot.png");
const [outW, outH] = [width + PAD * 2, height + PAD * 2];
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
execFileSync(chrome, ["--headless=new", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=3000", `--force-device-scale-factor=${SCALE}`, `--window-size=${outW},${outH}`, `--screenshot=${png}`, `file://${tmp}/shot.html`], { stdio: "ignore" });

const rel = `/assets/blog/${slug}/${name}.jpg`;
const out = path.join(root, "public", rel);
fs.mkdirSync(path.dirname(out), { recursive: true });
const hasSips = (() => { try { execFileSync("which", ["sips"], { stdio: "ignore" }); return true; } catch { return false; } })();
if (hasSips) execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "86", png, "--out", out], { stdio: "ignore" });
else execFileSync("convert", [png, "-quality", "86", out], { stdio: "ignore" });
fs.rmSync(tmp, { recursive: true, force: true });

console.log(`Wrote public${rel} (${outW * SCALE}x${outH * SCALE}). Paste into posts/${slug}.md, with real alt text:\n\n![What the reader should see in this screenshot](${rel})\n`);
