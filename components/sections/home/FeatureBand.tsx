"use client";
import { useEffect, useRef, useState } from "react";
import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";
import { FeatureTip } from "@/components/ui/FeatureTip";
import { clipUrl, posterUrl, useLite, useNarrow, useNear } from "@/lib/media";
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
  /** The part of the 1440 x 900 recording the frame shows: left, top, width and height in percent. The frame takes this rectangle's own proportions, so at any width it shows exactly this and nothing is trimmed. Edges sit on the app's own boundaries. */
  crop: [number, number, number, number];
  /** Height over width of the recording itself; 0.625 (1440 x 900) unless it was recorded at another size. */
  ar?: number;
};

const MAX = 20;

const ITEMS: Item[] = [
  {
    label: "Publish everywhere at once",
    icon: "upload",
    title: "Upload once. Publish everywhere.",
    text: "Add a video once, then schedule it to TikTok, Instagram, YouTube and Facebook in each channel’s own format.",
    clip: "publish",
    secs: 17.4,
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 1.1053,
  },
  {
    label: "Built for modern teams",
    icon: "users",
    title: "Built for modern teams",
    text: "Comments, approvals and shared review links keep every video on brief before it goes out.",
    clip: "teams",
    secs: 14.2,
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 0.9071,
  },
  {
    label: "Write one caption, adjust it per channel",
    icon: "edit",
    title: "Write one caption, adjust it per channel",
    text: "Write the caption once and see how it reads on every channel as you type.",
    clip: "write",
    secs: 13,
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 1.0214,
  },
  {
    label: "Let ChatGPT draft it, your team approve it",
    icon: "plug",
    title: "A workspace for humans and agents",
    text: "Let Claude or ChatGPT draft, queue and schedule videos for your team through MCP.",
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 1.1,
  },
  {
    label: "Every brand’s videos on one calendar",
    icon: "calendar",
    title: "A calendar built for scheduling",
    text: "See what is scheduled, in review and ready to ship, across every brand and team member.",
    clip: "calendar",
    secs: 14.6,
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 0.65,
  },
  {
    label: "Schedule a month of videos from one CSV",
    icon: "table",
    title: "Bring a month of videos in one file",
    text: "Import a CSV, or pull videos from Google Drive, Dropbox and OneDrive, and schedule them in one pass.",
    clip: "import",
    secs: 9,
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 0.9088,
  },
  {
    label: "See it in each channel’s player before it goes out",
    icon: "phone",
    title: "Check every channel before you publish",
    text: "See each video in its own channel’s player, so nothing goes out cropped or cut off.",
    clip: "previews",
    secs: 13.2,
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 1.0214,
  },
  {
    label: "Know which videos went live, and fix what failed",
    icon: "queue",
    title: "Know where every video stands",
    text: "One list of every video you sent, with its status and live link on each channel.",
    clip: "tracking",
    secs: 11.7,
    look: "fill",
    crop: [0, 0, 100, 100],
    ar: 0.9414,
  },
];

/** Ordered by value to a business: brands, review, queue and imports first; conveniences last. */
const MORE: [IconName, string][] = [
  ["layers", "Several brands"],
  ["eye", "Shareable review links"],
  ["queue", "Posting queue"],
  ["upload", "Drive, Dropbox, OneDrive"],
  ["bell", "Phone alerts"],
  ["roles", "Team roles"],
  ["clock", "Schedule in plain words"],
  ["image", "Media library"],
  ["tag", "Tags"],
  ["braces", "Variables"],
  ["gallery", "Carousels"],
  ["resize", "Auto resize"],
  ["retry", "Auto video conversion"],
  ["phone", "Installable phone app"],
  ["monitor", "Desktop app"],
  ["smile", "Emojis"],
  ["moon", "Dark mode"],
  ["command", "Keyboard shortcuts"],
];

const rate = (i: number) => Math.max(1, (ITEMS[i].secs ?? 0) / MAX);
const ms = (i: number) =>
  ITEMS[i].secs ? Math.max(7000, Math.round((ITEMS[i].secs / rate(i)) * 1000) + 400) : AGENT_STEPS.length * AGENT_STEP_MS;
const wrap = (i: number, cur: number) => {
  const n = ITEMS.length;
  return ((i - cur + n + n / 2) % n) - n / 2;
};

type Line = { k: "me" | "ai" | "tool"; t: string };
/** The walkthrough on the "humans and agents" item: what is said in ChatGPT on top, and what that did in Profaily below, one step at a time. */
const AGENT_STEPS: { src: string; alt: string; lines: Line[] }[] = [
  {
    src: "/assets/app/mcp-1-draft.webp",
    alt: "Profaily composer: the Launch day draft ChatGPT created, with every channel selected",
    lines: [
      { k: "me", t: "Schedule the Launch day video for tomorrow at 9am on every channel. Write the caption." },
      { k: "tool", t: "Found Launch day in your library" },
      { k: "tool", t: "Draft created in Profaily" },
    ],
  },
  {
    src: "/assets/app/mcp-2-send.webp",
    alt: "Profaily Send for review window: tomorrow 9am, with YouTube, TikTok, Instagram and Facebook ready",
    lines: [
      { k: "tool", t: "Draft created in Profaily" },
      { k: "ai", t: "The draft is ready, with a caption written for each channel." },
      { k: "me", t: "Send it to Solomon for approval." },
    ],
  },
  {
    src: "/assets/app/mcp-3-sent.webp",
    alt: "Profaily showing the video In review, with the message Sent for review",
    lines: [
      { k: "me", t: "Send it to Solomon for approval." },
      { k: "tool", t: "Sent to Solomon Eseme for review" },
      { k: "ai", t: "Sent. Nothing is scheduled until Solomon approves it." },
    ],
  },
  {
    src: "/assets/app/mcp-4-review.webp",
    alt: "Profaily as the producer: the video In review with Request changes and Approve and schedule",
    lines: [
      { k: "ai", t: "Sent. Nothing is scheduled until Solomon approves it." },
      { k: "tool", t: "Solomon is reviewing in Profaily" },
    ],
  },
  {
    src: "/assets/app/mcp-5-queue.webp",
    alt: "Profaily queue: the video scheduled for tomorrow at 09:00 on every channel",
    lines: [
      { k: "tool", t: "Approved by Solomon Eseme" },
      { k: "tool", t: "Scheduled for tomorrow, 09:00" },
      { k: "ai", t: "Approved. Launch day goes out tomorrow at 9:00 on every channel." },
    ],
  },
];
const AGENT_STEP_MS = 3300;

/** ChatGPT's side of the walkthrough above, and Profaily's side below it, in step. */
function Agents() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(AGENT_STEPS.length - 1);
      return;
    }
    const t = window.setInterval(() => setStep((n) => (n + 1) % AGENT_STEPS.length), AGENT_STEP_MS);
    return () => clearInterval(t);
  }, []);
  const cur = AGENT_STEPS[step];
  return (
    <div className="ad" role="img" aria-label="ChatGPT drafts a video in Profaily and sends it to a producer for approval; once approved, it is scheduled.">
      <div className="ad-chat" aria-hidden="true">
        <b>ChatGPT</b>
        <div className="ad-thread" key={step}>
          {cur.lines.map((l, i) =>
            l.k === "me" ? (
              <p className="ad-me" key={i} style={{ animationDelay: `${i * 160}ms` }}>{l.t}</p>
            ) : l.k === "tool" ? (
              <p className="ad-tool" key={i} style={{ animationDelay: `${i * 160}ms` }}>
                {l.t.includes("Solomon Eseme") ? (
                  // eslint-disable-next-line @next/next/no-img-element -- the founder, who signs off in this walkthrough
                  <img className="founder-av" src="/assets/founder-solomon-eseme.webp" alt="" width="20" height="20" />
                ) : (
                  <span className="ad-mark"><img src="/icon.svg" alt="" width="12" height="12" /></span>
                )}
                {l.t}
                {l.t.includes("Solomon Eseme") && <em className="founder-tag">Founder</em>}
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </p>
            ) : (
              <p className="ad-ai" key={i} style={{ animationDelay: `${i * 160}ms` }}>{l.t}</p>
            ),
          )}
        </div>
      </div>
      <div className="ad-app" aria-hidden="true">
        {AGENT_STEPS.map((x, i) => (
          // eslint-disable-next-line @next/next/no-img-element -- a real still of the app
          <img key={x.src} className={i === step ? "on" : ""} src={x.src} alt="" width="1600" height="1231" loading="lazy" />
        ))}
      </div>
      <span className="sr-only">{cur.alt}</span>
    </div>
  );
}

/** The feature band: a roller that always keeps the current feature in the middle and loops forever, with the message and a real recording for each. */
export function FeatureBand({ light = false }: { light?: boolean } = {}) {
  const [cur, setCur] = useState(0);
  const [wide, setWide] = useState(false);
  const prev = useRef(0);
  const root = useRef<HTMLElement>(null);
  const seen = useRef(false);
  const reduce = useRef(false);
  const [tick, setTick] = useState(0);
  const lite = useLite();
  const narrow = useNarrow();
  const near = useNear(root, "700px");
  /** On a weak connection the visitor chooses to load the recording. */
  const [forced, setForced] = useState(false);
  const playable = near && (!lite || forced);

  useEffect(() => {
    reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mq = matchMedia("(min-width: 1021px)");
    const onMq = () => setWide(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);
    const io = new IntersectionObserver(
      (e) => {
        seen.current = e[0].isIntersecting;
        setTick((t) => t + 1);
      },
      { threshold: 0.3 },
    );
    if (root.current) io.observe(root.current);
    return () => {
      mq.removeEventListener("change", onMq);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    prev.current = cur;
  });

  useEffect(() => {
    if (reduce.current || !seen.current || (lite && !forced)) return;
    const t = window.setTimeout(
      () => setCur((c) => (c + 1) % ITEMS.length),
      ms(cur),
    );
    return () => clearTimeout(t);
  }, [cur, tick, lite, forced]);

  const it = ITEMS[cur];
  const c = it.crop;
  const mediaStyle = {
    width: `${10000 / c[2]}cqw`,
    left: `${-(100 * c[0]) / c[2]}cqw`,
    top: `${-(c[1] / 100) * (10000 / c[2]) * (it.ar ?? 0.625)}cqw`,
  };

  return (
    <>
      <section className={`band${light ? " light" : ""}`} ref={root} aria-labelledby="band-h">
        <div className="pin">
          <div className="wrap grid">
            <div>
              <div className="msgbox" key={cur}>
                <h2 id="band-h">{it.title}</h2>
                <p className="lead">{it.text}</p>
              </div>
              <div className="panels">
                {ITEMS.map((x, i) => (
                  <div
                    key={x.label}
                    className={`panel${i === cur ? " on" : ""}`}
                    id={`band-p${i}`}
                    role="tabpanel"
                    aria-labelledby={`band-t${i}`}
                    hidden={i !== cur && !wide ? true : undefined}
                  >
                    {i === cur && (
                      <div className={`mf ${x.look}`}>
                        <div className="in" style={{ aspectRatio: String(c[2] / (it.ar ?? 0.625) / c[3]) }}>
                          {x.clip ? (
                            playable ? (
                              <video
                                key={`${i}-${tick}`}
                                src={clipUrl(`feat-${x.clip}`, narrow)}
                                poster={posterUrl(`feat-${x.clip}`, narrow)}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                style={mediaStyle}
                                ref={(v) => {
                                  if (v) v.playbackRate = rate(i);
                                }}
                              />
                            ) : (
                              <>
                                {/* eslint-disable-next-line @next/next/no-img-element -- the recording's finished frame, until the recording is allowed to load */}
                                <img className="vp" src={posterUrl(`feat-${x.clip}`, narrow)} alt="" decoding="async" style={mediaStyle} />
                                {lite && !forced && (
                                  <button type="button" className="mf-play" onClick={() => setForced(true)}>
                                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.2v9.6L13 8z" fill="currentColor" /></svg>
                                    Play demo
                                  </button>
                                )}
                              </>
                            )
                          ) : (
                            <Agents />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="arc" role="tablist" aria-label="What Profaily does">
              {ITEMS.map((x, i) => {
                const d = wrap(i, cur),
                  ad = Math.abs(d);
                const jumped = Math.abs(d - wrap(i, prev.current)) > 1.5;
                /* Jobmate's arc: the active label is the furthest left, the rest step right and close up as they leave. */
                const y =
                  Math.sign(d) * (ad <= 1 ? ad * 100 : 100 + (ad - 1) * 84);
                const style = wide
                  ? {
                      transform: `translate(${ad * 60}px, ${y}px) translateY(-50%)`,
                      opacity:
                        ad > 2.6 ? 0 : ad < 0.5 ? 1 : ad < 1.5 ? 0.88 : 0.42,
                      filter: ad > 1.5 ? "blur(3px)" : "none",
                      transition: jumped ? "none" : undefined,
                      pointerEvents: ad > 2.6 ? ("none" as const) : undefined,
                    }
                  : undefined;
                return (
                  <button
                    key={x.label}
                    type="button"
                    role="tab"
                    id={`band-t${i}`}
                    aria-selected={i === cur}
                    aria-controls={`band-p${i}`}
                    tabIndex={i === cur ? 0 : -1}
                    className={i === cur ? "on" : ""}
                    style={style}
                    onClick={() => {
                      setCur(i);
                      setTick((t) => t + 1);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                        e.preventDefault();
                        setCur((cur + 1) % ITEMS.length);
                      }
                      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                        e.preventDefault();
                        setCur((cur + ITEMS.length - 1) % ITEMS.length);
                      }
                    }}
                  >
                    <span className="ic">
                      <Icon name={x.icon} />
                    </span>
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
        <ul>
          {MORE.map(([icon, label]) => (
            <li key={label}>
              <Icon name={icon} />
              <FeatureTip label={label} />
            </li>
          ))}
        </ul>
        <OAuthButtons lead="Start scheduling across your brands:" />
      </div>
    </>
  );
}
