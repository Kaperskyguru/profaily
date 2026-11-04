"use client";
import { useEffect, useRef, useState } from "react";
import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";

type Feature = {
  title: string;
  text: string;
  /** public/assets/app/feat-<clip>.mp4 and its poster. */
  clip: string;
  /** The second of the recording shown while it rests, the same frame as its poster. */
  rest: number;
  /** The part of the 1440 x 900 recording the tile keeps: left, top and width in percent. */
  crop: [number, number, number];
  /** The tighter part of the recording the small card still keeps, so the still reads at thumbnail size. */
  thumb?: [number, number, number];
  /** Height over width of the recording; 0.625 (16:10) unless it is a close-up square. */
  ar?: number;
};

type Group = { id: string; title: string; lead: string; features: Feature[]; layout?: Layout };

type Layout = "list" | "cards";

const GROUPS: Group[] = [
  {
    id: "making",
    title: "Making videos",
    lead: "Bring videos in once, write one caption, and check how each channel will show it.",
    features: [
      { title: "Upload once", text: "Drop in a video, or import from Google Drive, Dropbox, OneDrive or a CSV.", clip: "dupload", rest: 3.4, crop: [0, 16.7, 100], ar: 1 },
      { title: "Write captions", text: "Write once, then adjust a single channel without touching the others.", clip: "dwrite", rest: 4.2, crop: [0, 16.7, 100], ar: 1 },
      { title: "Preview every channel", text: "See each video in its channel’s own player before it goes out.", clip: "dpreviews", rest: 3, crop: [0, 16.7, 100], ar: 1 },
    ],
  },
  {
    id: "distributing",
    title: "Distributing videos",
    lead: "Connect your channels, schedule across brands, and get videos approved before they go out.",
    features: [
      { title: "Connect channels", text: "Link TikTok, Instagram, YouTube and Facebook to a brand, one click each.", clip: "dconnect", rest: 6.5, crop: [0, 16.7, 100], ar: 1 },
      { title: "Fill the calendar", text: "Drag videos onto the days they should go out, across every brand in your team.", clip: "dfill", rest: 14, crop: [0, 16.7, 100], ar: 1 },
      { title: "Team approval", text: "Your team comments, asks for changes or approves. Nothing is scheduled until someone says yes.", clip: "dapprove", rest: 5.2, crop: [0, 16.7, 100], ar: 1 },
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
    <div className={`group${g.layout === "cards" ? " plain" : ""}`} id={g.id} ref={root}>
      <header>
        <h2>{g.title}</h2>
        <p className="lead">{g.lead}</p>
      </header>
      <div className={`gbody${g.layout === "cards" ? " cards" : ""}`} onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)} onFocus={() => setHeld(true)} onBlur={() => setHeld(false)}>
        <ul className="glist" role="tablist" aria-label={g.title}>
          {g.features.map((x, n) => (
            <li key={x.title}>
              <button type="button" role="tab" aria-selected={n === i} className={n === i ? "on" : ""} onClick={() => pick(n)}
                style={n === i ? ({ "--p": p } as React.CSSProperties) : undefined}>
                {g.layout === "cards" && (
                  <span className="gthumb" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element -- a still of the recording */}
                    <img src={`/assets/app/feat-${x.clip}.jpg`} alt="" loading="lazy" style={(() => { const t = x.thumb ?? x.crop; return { width: `${10000 / t[2]}cqw`, left: `${-(100 * t[0]) / t[2]}cqw`, top: `${-(t[1] / 100) * (10000 / t[2]) * (x.ar ?? 0.625)}cqw` }; })()} />
                  </span>
                )}
                <b>{x.title}</b>
                <span className="gtext">{x.text}</span>
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
              style={{ width: `${10000 / f.crop[2]}cqw`, left: `${-(100 * f.crop[0]) / f.crop[2]}cqw`, top: `${-(f.crop[1] / 100) * (10000 / f.crop[2]) * (f.ar ?? 0.625)}cqw` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Making videos" and "Distributing videos": each group is one card holding its features, every one with a real recording of the app. */
/** The close-up recordings the full-width section uses: square, cropped to the part of the real app that proves each feature. */
const BAND_FEATURES: Feature[] = [
  { title: "Connect channels", text: "Link TikTok, Instagram, YouTube and Facebook to a brand, one click each.", clip: "dconnect", rest: 6.5, crop: [0, 0, 100], thumb: [0, 11, 100], ar: 1 },
  { title: "Fill the calendar", text: "Drag videos onto the days they should go out, across every brand in your team.", clip: "dfill", rest: 14, crop: [0, 0, 100], thumb: [26, 30, 74], ar: 1 },
  { title: "Team approval", text: "Your team comments, asks for changes or approves. Nothing is scheduled until someone says yes.", clip: "dapprove", rest: 5.2, crop: [0, 0, 100], thumb: [58, 19, 42], ar: 1 },
];

export function FeatureGroups({ only }: { only?: string } = {}) {
  return (
    <section className="wrap groups" aria-label="What Profaily does">
      {GROUPS.filter((g) => !only || g.id === only).map((g) => <Group g={g} key={g.id} />)}
    </section>
  );
}

/**
 * "Distributing videos" as its own full-width deep-green section (the Typefully "Queue your content in seconds" arrangement):
 * centred title, three stacked cards each with a still of its recording, one large recording beside them, and the sign-up row
 * beneath. page.tsx chooses between this and the plain group above with DISTRIBUTING_AS_BAND.
 */
export function DistributingBand({ tone = "forest" }: { tone?: "forest" | "light" } = {}) {
  const g = { ...GROUPS.find((x) => x.id === "distributing")!, layout: "cards" as Layout, features: BAND_FEATURES };
  return (
    <section className={`dband${tone === "light" ? " light" : ""}`} aria-label="Distributing videos">
      <div className="wrap">
        <Group g={g} />
        <OAuthButtons lead="Start scheduling across your brands:" />
      </div>
    </section>
  );
}
