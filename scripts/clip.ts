/**
 * Puts a real screen recording in the same branded window as `yarn shot`, for a blog post or a help page:
 *
 *   yarn clip <recording.mp4> <slug> <name> [speed]
 *
 * 1. <recording> is a screen recording you made yourself in the real app on the demo account (scripts/capture/flow.py
 *    with --video: light theme, 1280x800, a tap marker on each click, idle stretches capped). Never staged or edited.
 * 2. speed (default 1) plays it faster, e.g. 1.4 for a long flow. Keep the result under about 40 seconds.
 * 3. Writes public/assets/<blog|help>/<slug>/<name>.mp4 (H.264, 1600px wide, no sound, moov first) and <name>.jpg,
 *    its last frame, which the page uses as the poster.
 * 4. In markdown, a recording is written like an image: ![What happens, step by step](/assets/.../<name>.mp4).
 *    PostMarkdown plays it muted, looping and inline, like a GIF. The loader checks the .jpg poster exists.
 *
 * Needs Google Chrome (CHROME=...), ImageMagick `convert`, and ffmpeg/ffprobe on the PATH (FFMPEG=... to override).
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { drawWindow, kindOf } from "./shot";

const [videoArg, slug, name, speedArg] = process.argv.slice(2);
if (!videoArg || !slug || !name) {
  console.error("Usage: yarn clip <recording.mp4> <slug> <name> [speed]");
  process.exit(1);
}
if (!/^[a-z0-9-]+$/.test(name)) throw new Error(`Name "${name}" must be lower-case words joined by hyphens, like "connect-flow"`);
const root = process.cwd();
const kind = kindOf(root, slug);
const video = path.resolve(videoArg);
if (!fs.existsSync(video)) throw new Error(`No recording at ${video}`);
const speed = speedArg ? Number(speedArg) : 1;
if (!(speed > 0)) throw new Error(`Speed ${speedArg} must be a positive number`);
const ffmpeg = process.env.FFMPEG ?? "ffmpeg";
const ffprobe = process.env.FFPROBE ?? "ffprobe";

// The window drawn around a magenta stand-in of the recording's size; the magenta is cut out, so the recording
// shows through the hole and the window's rounded corners and bar sit on top of it.
const [vw, vh] = execFileSync(ffprobe, ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", video]).toString().trim().split(",").map(Number);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clip-"));
const stand = path.join(tmp, "stand.png");
execFileSync("convert", ["-size", `${vw}x${vh}`, "xc:#ff00ff", stand]);
const { png, tmp: shotTmp, screen } = drawWindow(root, stand);
const overlay = path.join(tmp, "frame.png");
// 22% keys out the magenta and its anti-aliased edge without touching the red window dot.
execFileSync("convert", [png, "-fuzz", "22%", "-transparent", "#ff00ff", overlay]);

const rel = `/assets/${kind}/${slug}/${name}.mp4`;
const out = path.join(root, "public", rel);
fs.mkdirSync(path.dirname(out), { recursive: true });
const even = (n: number) => n - (n % 2);
const [W, H] = [even(screen.outW), even(screen.outH)];
const filter = [
  `[1:v]setpts=PTS/${speed},scale=${screen.w + 4}:${screen.h + 4}[v]`,
  `color=white:s=${W}x${H}[bg]`,
  `[bg][v]overlay=${screen.x - 2}:${screen.y - 2}:shortest=1[b]`,
  `[b][0:v]overlay=0:0:shortest=1,scale=1600:-2,fps=30,format=yuv420p`,
].join(";");
execFileSync(ffmpeg, ["-y", "-loglevel", "error", "-loop", "1", "-i", overlay, "-i", video, "-filter_complex", filter, "-c:v", "libx264", "-crf", "26", "-preset", "veryfast", "-movflags", "+faststart", "-an", out]);
execFileSync(ffmpeg, ["-y", "-loglevel", "error", "-sseof", "-0.1", "-i", out, "-frames:v", "1", "-q:v", "4", out.replace(/\.mp4$/, ".jpg")]);
fs.rmSync(tmp, { recursive: true, force: true });
fs.rmSync(shotTmp, { recursive: true, force: true });

const seconds = Number(execFileSync(ffprobe, ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", out]).toString());
const kb = Math.round(fs.statSync(out).size / 1024);
console.log(`Wrote public${rel} (${Math.round(seconds)}s, ${kb} KB) and its poster. Paste into ${kind === "blog" ? "posts" : "help"}/${slug}.md:\n\n![What happens, step by step](${rel})\n`);
if (seconds > 45) console.warn(`That's ${Math.round(seconds)}s. Consider a higher speed so it stays short.`);
