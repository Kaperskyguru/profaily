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
  /** The same, tighter, for the narrow frame on a phone. */
  mcrop?: [number, number, number];
};

const MAX = 14;

const ITEMS: Item[] = [
  {
    label: "Publish everywhere at once",
    icon: "upload",
    title: "Upload Once. Publish everywhere.",
    text: "Add a video once, then schedule it to TikTok, Instagram, YouTube and Facebook in each channel’s own format.",
    clip: "publish",
    secs: 16.9,
    look: "fill",
    crop: [27, 3, 68],
    mcrop: [28, 2, 46],
  },
  {
    label: "Built for modern teams",
    icon: "users",
    title: "Built for modern teams",
    text: "Comments, approvals and shared review links keep every video on brief before it goes out.",
    clip: "teams",
    secs: 17.2,
    look: "fill",
    crop: [40, 0, 60],
    mcrop: [44, 0, 56],
  },
  {
    label: "A better place to create",
    icon: "edit",
    title: "A better place to create",
    text: "Write the caption once and see how it reads on every channel as you type.",
    clip: "write",
    secs: 8.5,
    look: "fill",
    crop: [26, 0, 70],
    mcrop: [28, 0, 60],
  },
  {
    label: "Humans and agents",
    icon: "plug",
    title: "A workspace for humans and agents",
    text: "Let Claude or ChatGPT draft, queue and schedule videos for your team through MCP.",
    look: "fill",
    crop: [0, 0, 100],
  },
  {
    label: "A calendar for scheduling",
    icon: "calendar",
    title: "A calendar built for scheduling",
    text: "See what is scheduled, in review and ready to ship, across every brand and team member.",
    clip: "calendar",
    secs: 10.1,
    look: "fill",
    crop: [0, 0, 70],
    mcrop: [0, 0, 62],
  },
  {
    label: "A month in one file",
    icon: "table",
    title: "Bring a month of videos in one file",
    text: "Import a CSV, or pull videos from Google Drive, Dropbox and OneDrive, and schedule them in one pass.",
    clip: "import",
    secs: 5.8,
    look: "fill",
    crop: [0, 0, 80],
    mcrop: [18, 0, 66],
  },
  {
    label: "Previews before you ship",
    icon: "phone",
    title: "Check every channel before you publish",
    text: "See each video in its own channel’s player, so nothing goes out cropped or cut off.",
    clip: "previews",
    secs: 10.6,
    look: "fill",
    crop: [26, 0, 70],
    mcrop: [28, 0, 60],
  },
  {
    label: "Every channel, tracked",
    icon: "queue",
    title: "Know where every video stands",
    text: "One list of every video you sent, with its status and live link on each channel.",
    clip: "tracking",
    secs: 7.9,
    look: "fill",
    crop: [22, 6, 76],
    mcrop: [24, 8, 60],
  },
];

const MORE: [IconName, string][] = [
  ["image", "Media library"],
  ["tag", "Tags"],
  ["braces", "Variables"],
  ["smile", "Emojis"],
  ["gallery", "Carousels"],
  ["resize", "Auto resize"],
  ["retry", "Auto video conversion"],
  ["clock", "Schedule in plain words"],
  ["queue", "Posting queue"],
  ["upload", "Drive, Dropbox, OneDrive"],
  ["layers", "Several brands"],
  ["roles", "Team roles"],
  ["eye", "Shareable review links"],
  ["bell", "Phone alerts"],
  ["phone", "Installable phone app"],
  ["monitor", "Desktop app"],
  ["command", "Keyboard shortcuts"],
  ["moon", "Dark mode"],
];

const rate = (i: number) => Math.max(1, (ITEMS[i].secs ?? 0) / MAX);
const ms = (i: number) =>
  ITEMS[i].secs ? Math.round((ITEMS[i].secs / rate(i)) * 1000) + 400 : AGENT_STEPS.length * AGENT_STEP_MS + 400;
const wrap = (i: number, cur: number) => {
  const n = ITEMS.length;
  return ((i - cur + n + n / 2) % n) - n / 2;
};

const AGENT_STEPS = [
  { src: "/assets/app/mcp-1-draft.jpg", alt: "Profaily composer: the Meet Miso draft an assistant created, with every channel selected" },
  { src: "/assets/app/mcp-2-send.jpg", alt: "Profaily Send for review dialog: tomorrow 9am, with YouTube, TikTok, Instagram and Facebook ready" },
  { src: "/assets/app/mcp-4-review.jpg", alt: "Profaily as the producer: the video In review with Request changes and Approve and schedule" },
  { src: "/assets/app/mcp-5-queue.jpg", alt: "Profaily queue: the video Scheduled for Saturday 31 October at 09:00 on multiple channels" },
];
const AGENT_STEP_MS = 2800;

/** What an assistant leaves behind in the app: the draft, the review request, the sign-off and the scheduled video, one after another. */
function Agents() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setStep((n) => (n + 1) % AGENT_STEPS.length), AGENT_STEP_MS);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      {AGENT_STEPS.map((x, i) => (
        <img
          key={x.src}
          className={`agents-shot${i === step ? " on" : ""}`}
          src={x.src}
          alt={i === step ? x.alt : ""}
          aria-hidden={i === step ? undefined : true}
          width="1600"
          height="1231"
          loading="lazy"
        />
      ))}
    </>
  );
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
    if (reduce.current || !seen.current) return;
    const t = window.setTimeout(
      () => setCur((c) => (c + 1) % ITEMS.length),
      ms(cur),
    );
    return () => clearTimeout(t);
  }, [cur, tick]);

  const it = ITEMS[cur];
  const c = (wide ? it.crop : it.mcrop ?? it.crop);

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
                        <div className="in">
                          {x.clip ? (
                            <video
                              key={`${i}-${tick}`}
                              src={`/assets/app/feat-${x.clip}.mp4`}
                              poster={`/assets/app/feat-${x.clip}.jpg`}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="auto"
                              style={{
                                width: `${10000 / c[2]}cqw`,
                                left: `${-(100 * c[0]) / c[2]}cqw`,
                                top: `${-(c[1] / 100) * (10000 / c[2]) * 0.625}cqw`,
                              }}
                              ref={(v) => {
                                if (v) v.playbackRate = rate(i);
                              }}
                            />
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
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
