"use client";
import { useEffect, useRef, useState } from "react";
import { Glyph, Icon, type IconName } from "@/components/ui/Glyph";

/** Bump when a recording is replaced, so browsers drop the old file instead of showing it from cache. */
const REC_V = "12";

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
      { title: "Upload once", text: "Drop in a video, or import from Google Drive, Dropbox, OneDrive or a CSV.", clip: "dupload", rest: 3.4, crop: [0, 0, 100], ar: 0.75 },
      { title: "Write captions", text: "Write once, then adjust a single channel without touching the others.", clip: "dwrite", rest: 4.2, crop: [0, 0, 100], ar: 0.75 },
      { title: "Preview every channel", text: "See each video in its channel’s own player before it goes out.", clip: "dpreviews", rest: 3, crop: [0, 0, 100], ar: 0.75 },
    ],
  },
  {
    id: "distributing",
    title: "Distributing videos",
    lead: "Connect your channels, schedule across brands, and get videos approved before they go out.",
    features: [
      { title: "Connect channels", text: "Link TikTok, Instagram, YouTube and Facebook to a brand, one click each.", clip: "dconnect", rest: 6.5, crop: [0, 16.7, 100], ar: 1 },
      { title: "Fill the calendar", text: "Drag videos onto the days they should go out, across every brand in your team.", clip: "dfill", rest: 14, crop: [0, 16.7, 100], ar: 1 },
      { title: "Team approval", text: "Your team comments, asks for changes or approves. Nothing is scheduled until someone says yes.", clip: "dapprove", rest: 7.2, crop: [0, 16.7, 100], ar: 1 },
    ],
  },
];

/** The small branded picture on each card of the full-width section, in place of a still: the thing the feature is about, drawn from our own marks. */
function CardArt({ clip }: { clip: string }) {
  if (clip === "dconnect")
    return (
      <>
        {(["tiktok", "instagram", "youtube", "facebook"] as const).map((n) => (
          <span className="ga-chip" key={n}><Glyph name={n} id={`ga-${n}`} /></span>
        ))}
      </>
    );
  if (clip === "dfill")
    return (
      <span className="ga-cal">
        {Array.from({ length: 21 }, (_, k) => (
          <i key={k} className={[3, 9, 12, 17].includes(k) ? "on" : ""} />
        ))}
      </span>
    );
  return (
    <>
      <span className="ga-av">A</span>
      <span className="ga-ok"><Icon name="seal" />Approved</span>
    </>
  );
}

/** The small icon tile on each "Making videos" item, the plain-list counterpart of the art on the Distributing cards. */
const TILE: Record<string, IconName> = { dupload: "upload", dwrite: "edit", dpreviews: "phone" };

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
                  <span className="gicon" aria-hidden="true"><CardArt clip={x.clip} /></span>
                )}
                {g.layout !== "cards" && TILE[x.clip] && <span className="gtile" aria-hidden="true"><Icon name={TILE[x.clip]} /></span>}
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
              src={`/assets/app/feat-${f.clip}.mp4?v=${REC_V}`}
              poster={`/assets/app/feat-${f.clip}.jpg?v=${REC_V}`}
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
  { title: "Team approval", text: "Your team comments, asks for changes or approves. Nothing is scheduled until someone says yes.", clip: "dapprove", rest: 7.2, crop: [0, 0, 100], thumb: [58, 19, 42], ar: 1 },
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
      </div>
    </section>
  );
}
