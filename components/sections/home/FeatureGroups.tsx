"use client";
import { useEffect, useRef, useState } from "react";

type Feature = {
  title: string;
  text: string;
  /** public/assets/app/feat-<clip>.mp4 and its poster. */
  clip: string;
  /** The second of the recording shown while it rests, the same frame as its poster. */
  rest: number;
  /** The part of the 1440 x 900 recording the tile keeps: left, top and width in percent. */
  crop: [number, number, number];
};

type Group = { id: string; title: string; lead: string; features: Feature[] };

const GROUPS: Group[] = [
  {
    id: "making",
    title: "Making videos",
    lead: "Bring videos in once, write the caption once, and see how each channel will show it.",
    features: [
      { title: "Upload once", text: "Drop a video, or import it from Google Drive, Dropbox, OneDrive or a CSV.", clip: "upload", rest: 3.2, crop: [36, 4, 50] },
      { title: "Write captions", text: "Write one caption, then tune it for each channel as you type.", clip: "write", rest: 6, crop: [26, 6, 64] },
      { title: "Preview every channel", text: "See each video in the player of its channel before it goes out.", clip: "previews", rest: 5, crop: [44, 8, 56] },
    ],
  },
  {
    id: "distributing",
    title: "Distributing videos",
    lead: "Connect your channels, fill the calendar, and get approval before anything goes live.",
    features: [
      { title: "Connect channels", text: "Connect TikTok, Instagram, YouTube and Facebook in one click each.", clip: "connect", rest: 9, crop: [28, 24, 44] },
      { title: "Fill the calendar", text: "Drag videos onto the days they should go out, across every brand.", clip: "fill", rest: 15, crop: [20, 2, 80] },
      { title: "Team approval", text: "Comment on a video, request changes or approve it before it is scheduled.", clip: "approve", rest: 7.6, crop: [38, 0, 62] },
    ],
  },
];

/** One group: a list of features on the left, a large recording of the selected one on the right. It plays on its own, one feature after another, and a bar on the active feature shows how far through its recording it is. Hovering or focusing the group holds it; a click picks a feature. */
function Group({ g }: { g: Group }) {
  const [i, setI] = useState(0);
  const [p, setP] = useState(0);
  const [motion, setMotion] = useState(false);
  const [seen, setSeen] = useState(false);
  const [held, setHeld] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  useEffect(() => { setMotion(!matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    const el = root.current;
    if (!el || !("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const running = motion && seen && !held;
  useEffect(() => {
    const v = vid.current;
    if (!v || !motion) return;
    if (running) v.play().catch(() => {});
    else v.pause();
  }, [running, i, motion]);
  const f = g.features[i];
  const pick = (n: number) => { setI(n); setP(0); };

  return (
    <div className="group" id={g.id} ref={root}>
      <header>
        <h2>{g.title}</h2>
        <p className="lead">{g.lead}</p>
      </header>
      <div className="gbody" onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)} onFocus={() => setHeld(true)} onBlur={() => setHeld(false)}>
        <ul className="glist" role="tablist" aria-label={g.title}>
          {g.features.map((x, n) => (
            <li key={x.title}>
              <button type="button" role="tab" aria-selected={n === i} className={n === i ? "on" : ""} onClick={() => pick(n)}
                style={n === i ? ({ "--p": p } as React.CSSProperties) : undefined}>
                <b>{x.title}</b>
                <span>{x.text}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="gpane">
          <div className="in" role="tabpanel">
            <video
              ref={vid}
              key={`${g.id}-${f.clip}`}
              src={`/assets/app/feat-${f.clip}.mp4`}
              poster={`/assets/app/feat-${f.clip}.jpg`}
              muted playsInline preload="auto"
              onTimeUpdate={(e) => { const v = e.currentTarget; if (v.duration) setP(v.currentTime / v.duration); }}
              onEnded={() => { if (motion) pick((i + 1) % g.features.length); }}
              aria-label={`${f.title}: recording of the app`}
              style={{ width: `${10000 / f.crop[2]}cqw`, left: `${-(100 * f.crop[0]) / f.crop[2]}cqw`, top: `${-(f.crop[1] / 100) * (10000 / f.crop[2]) * 0.625}cqw` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Making videos" and "Distributing videos": each group is one card holding its features, every one with a real recording of the app. */
export function FeatureGroups() {
  return (
    <section className="wrap groups" aria-label="What Profaily does">
      {GROUPS.map((g) => <Group g={g} key={g.id} />)}
    </section>
  );
}
