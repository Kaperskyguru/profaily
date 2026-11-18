/**
 * Puts a real app capture in a window on the Profaily background, for a blog post or a help page:
 *
 *   yarn shot <capture.png|jpg> <slug> <name> [x,y,w,h]
 *
 * 1. <capture> is a screenshot you took yourself in the real app on the demo account (scripts/capture/, light theme,
 *    1280x800 at 2x). Never a mock-up or an edited image: the frame proves nothing if the picture inside it is not real.
 * 2. x,y,w,h crops the capture (in its own pixels) to the part the sentence is about; default is the whole capture.
 *    Crop a window or panel when the step happens inside one, so its text can be read at article width.
 * 3. Draws scripts/shot/window.html (a light app window with the three window dots and a soft shadow, on the brand
 *    gradient: mint #8dd796 glowing top right into forest #0d241f, with a thin even margin, like Typefully's product
 *    shots) in Chrome at 2x, and writes public/assets/<blog|help>/<slug>/<name>.jpg, 1600px wide.
 * 4. Prints the markdown to paste into posts/<slug>.md or help/<slug>.md. Write real alt text: what the reader should see.
 *
 * Screen recordings get the same window and background with `yarn clip` (scripts/clip.ts).
 * The build checks every image: it must be under the page's own folder, exist, and have alt text.
 *
 * Needs Google Chrome (CHROME=/path/to/chrome to override) and ImageMagick `convert` or macOS `sips` for the JPEG.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/** The shared geometry, in CSS px (drawn at 2x). scripts/clip.ts uses the same numbers for recordings. */
export const FRAME = { WIN: 756, MARGIN: 22, BAR: 30, SCALE: 2 } as const;

export const dims = (file: string): [number, number] => {
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

/** Draws `capture` (cropped) in the branded window; returns the PNG path and the screen rectangle in output px. */
export const drawWindow = (root: string, capture: string, crop?: [number, number, number, number]) => {
  const [capW, capH] = dims(capture);
  const [cx, cy, cw, ch] = crop ?? [0, 0, capW, capH];
  if ([cx, cy, cw, ch].some((n) => !Number.isFinite(n) || n < 0) || cx + cw > capW || cy + ch > capH) {
    throw new Error(`Crop ${crop?.join(",")} must sit inside the ${capW}x${capH} capture`);
  }
  const { WIN, MARGIN, BAR, SCALE } = FRAME;
  const k = WIN / cw; // capture px -> CSS px
  const imgH = Math.round(ch * k);
  const [outW, outH] = [WIN + MARGIN * 2, MARGIN + BAR + imgH + MARGIN];
  const html = fs
    .readFileSync(path.join(root, "scripts/shot/window.html"), "utf8")
    .replaceAll("{{MARGIN}}", String(MARGIN))
    .replaceAll("{{WIN}}", String(WIN))
    .replaceAll("{{BAR}}", String(BAR))
    .replaceAll("{{OUT_W}}", String(outW))
    .replaceAll("{{OUT_H}}", String(outH))
    .replace("{{IMG_H}}", String(imgH))
    .replace("{{IMG_W}}", String(Math.round(capW * k)))
    .replace("{{CROP_X}}", String(Math.round(cx * k)))
    .replace("{{CROP_Y}}", String(Math.round(cy * k)))
    .replace("{{SHOT}}", `file://${capture}`);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "shot-"));
  fs.writeFileSync(path.join(tmp, "shot.html"), html);
  const png = path.join(tmp, "shot.png");
  const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  execFileSync(chrome, ["--headless=new", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=3000", `--force-device-scale-factor=${SCALE}`, `--window-size=${outW},${outH}`, `--screenshot=${png}`, `file://${tmp}/shot.html`], { stdio: "ignore" });
  const screen = { x: MARGIN * SCALE, y: (MARGIN + BAR) * SCALE, w: WIN * SCALE, h: imgH * SCALE, outW: outW * SCALE, outH: outH * SCALE };
  return { png, tmp, screen };
};

export const toJpeg = (png: string, out: string) => {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const hasSips = (() => { try { execFileSync("which", ["sips"], { stdio: "ignore" }); return true; } catch { return false; } })();
  if (hasSips) execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "84", png, "--out", out], { stdio: "ignore" });
  else execFileSync("convert", [png, "-strip", "-quality", "84", "-interlace", "Plane", out], { stdio: "ignore" });
};

/** A blog post (posts/<slug>.md) or a help page (help/<slug>.md); its media live in that kind's own folder. */
export const kindOf = (root: string, slug: string) => {
  const kind = fs.existsSync(path.join(root, "posts", `${slug}.md`)) ? "blog" : fs.existsSync(path.join(root, "help", `${slug}.md`)) ? "help" : null;
  if (!kind) throw new Error(`No post at posts/${slug}.md or help page at help/${slug}.md`);
  return kind;
};

if (require.main === module) {
  const [captureArg, slug, name, cropArg] = process.argv.slice(2);
  if (!captureArg || !slug || !name) {
    console.error("Usage: yarn shot <capture.png|jpg> <slug> <name> [x,y,w,h]");
    process.exit(1);
  }
  if (!/^[a-z0-9-]+$/.test(name)) throw new Error(`Name "${name}" must be lower-case words joined by hyphens, like "approve-button"`);
  const root = process.cwd();
  const kind = kindOf(root, slug);
  const capture = path.resolve(captureArg);
  if (!fs.existsSync(capture)) throw new Error(`No capture at ${capture}`);
  const crop = cropArg ? (cropArg.split(",").map(Number) as [number, number, number, number]) : undefined;
  const { png, tmp, screen } = drawWindow(root, capture, crop);
  const rel = `/assets/${kind}/${slug}/${name}.jpg`;
  toJpeg(png, path.join(root, "public", rel));
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`Wrote public${rel} (${screen.outW}x${screen.outH}). Paste into ${kind === "blog" ? "posts" : "help"}/${slug}.md, with real alt text:\n\n![What the reader should see in this screenshot](${rel})\n`);
}
