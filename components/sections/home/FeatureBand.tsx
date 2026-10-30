"use client";
import { useEffect, useRef, useState } from "react";
import { Glyph, Icon, type IconName } from "@/components/ui/Glyph";

type Look = "fill" | "card" | "strip";
type Item = {
  /** The roller label. */
  label: string;
  icon: IconName;
  /** The message, shown as the section heading while this feature is on. */
  title: string;
  text: string;
  /** Real recording of the app (public/assets/app/feat-<clip>.mp4) and its length in seconds. */
  clip?: string;
  secs?: number;
  look: Look;
    /** The part of the recording the frame keeps: left, top and width, in percent of the 1440 x 900 source. */
  crop: [number, number, number];
};

const MAX = 8.5;

const ITEMS: Item[] = [
  { label: "Built for modern teams", icon: "users", title: "Built for modern teams", text: "Comments, approvals and shared links make collaboration a breeze.", clip: "teams", secs: 15.5, look: "fill", crop: [28, 6, 64] },
  { label: "Publish everywhere at once", icon: "upload", title: "Publish everywhere at once", text: "Schedule one video to TikTok, Instagram, YouTube and Facebook, each in its own format.", clip: "publish", secs: 13.1, look: "card", crop: [27, 3, 46] },
  { label: "A better place to create", icon: "edit", title: "A better place to create", text: "Write one caption and see it on every channel as you type.", clip: "write", secs: 8.5, look: "fill", crop: [27, 8, 62] },
  { label: "Humans and agents", icon: "plug", title: "A workspace for humans and agents", text: "Claude and ChatGPT can queue drafts and manage your calendar through MCP.", look: "card", crop: [0, 0, 100] },
  { label: "A calendar for scheduling", icon: "calendar", title: "A calendar built for scheduling", text: "See what is scheduled, in review and ready to ship, across the whole team.", clip: "calendar", secs: 10.4, look: "fill", crop: [48, 0, 52] },
  { label: "A month in one file", icon: "table", title: "Bring a month of videos in one file", text: "Import a CSV or pull videos from Google Drive, Dropbox and OneDrive.", clip: "import", secs: 5.8, look: "fill", crop: [25, 3, 60] },
  { label: "Previews before you ship", icon: "phone", title: "Real previews before you ship", text: "Check each video in its own channel’s player before it goes live.", clip: "previews", secs: 10.6, look: "card", crop: [63, 11, 34] },
  { label: "Every channel, tracked", icon: "queue", title: "Know what happened on every channel", text: "One list of every video you sent out, and where it stands on each channel.", clip: "tracking", secs: 4.3, look: "strip", crop: [27, 20, 68] },
];

const MORE: [IconName, string][] = [
  ["phone", "Installable phone app"],
  ["bell", "Phone alerts"],
  ["layers", "Several brands"],
  ["roles", "Team roles"],
  ["eye", "Shareable review links"],
  ["upload", "Drive, Dropbox and OneDrive"],
  ["queue", "Posting queue"],
  ["clock", "Natural language scheduling"],
];

const rate = (i: number) => Math.max(1, (ITEMS[i].secs ?? 0) / MAX);
const ms = (i: number) => (ITEMS[i].secs ? Math.round((ITEMS[i].secs / rate(i)) * 1000) + 400 : 6500);
const wrap = (i: number, cur: number) => { const n = ITEMS.length; return ((i - cur + n + n / 2) % n) - n / 2; };

function Agents() {
  return <img className="agents-shot" src="/assets/app/mcp-5-queue.jpg" alt="Profaily queue: a video scheduled for Saturday 31 October at 09:00 on multiple channels, the result of asking an assistant to schedule it" width="1600" height="1231" loading="lazy" />;
}

/** The feature band: a roller that always keeps the current feature in the middle and loops forever, with the message and a real recording for each. */
export function FeatureBand() {
  const [cur, setCur] = useState(0);
  const [wide, setWide] = useState(false);
  const prev = useRef(0);
  const root = useRef<HTMLElement>(null);
  const seen = useRef(false);
  const reduce = useRef(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mq = matchMedia("(min-width: 1021px)");
    const onMq = () => setWide(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);
    const io = new IntersectionObserver((e) => { seen.current = e[0].isIntersecting; setTick((t) => t + 1); }, { threshold: 0.3 });
    if (root.current) io.observe(root.current);
    return () => { mq.removeEventListener("change", onMq); io.disconnect(); };
  }, []);

  useEffect(() => { prev.current = cur; });

  useEffect(() => {
    if (reduce.current || !seen.current) return;
    const t = window.setTimeout(() => setCur((c) => (c + 1) % ITEMS.length), ms(cur));
    return () => clearTimeout(t);
  }, [cur, tick]);

  const it = ITEMS[cur];

  return (
    <>
    <section className="band" ref={root} aria-labelledby="band-h">
      <div className="pin">
        <div className="wrap grid">
          <div>
            <div className="msgbox" key={cur}>
              <h2 id="band-h">{it.title}</h2>
              <p className="lead">{it.text}</p>
            </div>
            <div className="panels">
              {ITEMS.map((x, i) => (
                <div key={x.label} className={`panel${i === cur ? " on" : ""}`} id={`band-p${i}`} role="tabpanel" aria-labelledby={`band-t${i}`} hidden={i !== cur && !wide ? true : undefined}>
                  {i === cur && (
                    <div className={`mf ${x.look}`}>
                      <div className="in">
                        {x.clip ? (
                          <video
                            key={`${i}-${tick}`}
                            src={`/assets/app/feat-${x.clip}.mp4`}
                            poster={`/assets/app/feat-${x.clip}.jpg`}
                            autoPlay muted loop playsInline preload="auto"
                            style={{ width: `${10000 / x.crop[2]}cqw`, left: `${-(100 * x.crop[0]) / x.crop[2]}cqw`, top: `${-(x.crop[1] / 100) * (10000 / x.crop[2]) * 0.625}cqw` }}
                            ref={(v) => { if (v) v.playbackRate = rate(i); }}
                          />
                        ) : <Agents />}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="arc" role="tablist" aria-label="What Profaily does">
            {ITEMS.map((x, i) => {
              const d = wrap(i, cur), ad = Math.abs(d);
              const jumped = Math.abs(d - wrap(i, prev.current)) > 1.5;
              /* Jobmate's arc: the active label is the furthest left, the rest step right and close up as they leave. */
              const y = Math.sign(d) * (ad <= 1 ? ad * 100 : 100 + (ad - 1) * 84);
              const style = wide
                ? { transform: `translate(${ad * 60}px, ${y}px) translateY(-50%)`, opacity: ad > 2.6 ? 0 : ad < 0.5 ? 1 : ad < 1.5 ? 0.88 : 0.42, filter: ad > 1.5 ? "blur(3px)" : "none", transition: jumped ? "none" : undefined, pointerEvents: ad > 2.6 ? "none" as const : undefined }
                : undefined;
              return (
                <button key={x.label} type="button" role="tab" id={`band-t${i}`} aria-selected={i === cur} aria-controls={`band-p${i}`} tabIndex={i === cur ? 0 : -1}
                  className={i === cur ? "on" : ""} style={style} onClick={() => { setCur(i); setTick((t) => t + 1); }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); setCur((cur + 1) % ITEMS.length); }
                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); setCur((cur + ITEMS.length - 1) % ITEMS.length); }
                  }}>
                  <span className="ic"><Icon name={x.icon} /></span>
                  {x.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
        <div className="wrap more-lt">
          <p>And much more:</p>
          <ul>{MORE.map(([icon, label]) => <li key={label}><Icon name={icon} />{label}</li>)}</ul>
        </div>
    </>
  );
}
