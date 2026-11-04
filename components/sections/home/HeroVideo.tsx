"use client";
import { useEffect, useState } from "react";
import { clipUrl, posterUrl, useLite, useNarrow } from "@/lib/media";

/**
 * The hero's product recording. The page paints its finished frame (a small WebP) first; the recording itself starts
 * loading only after the page has finished loading, and not at all on a weak connection, where the visitor presses Play,
 * or under reduced motion, where the finished frame stays.
 */
export function HeroVideo() {
  const lite = useLite();
  const narrow = useNarrow();
  const [reduce, setReduce] = useState(false);
  const [ready, setReady] = useState(false);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches);
    const go = () => setReady(true);
    if (document.readyState === "complete") {
      const t = window.setTimeout(go, 600);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", go, { once: true });
    return () => window.removeEventListener("load", go);
  }, []);

  const play = !reduce && ready && (!lite || forced);
  const still = reduce ? "hero-publish-done" : "hero-publish-poster";
  const alt = "Profaily composer: a video previewed on YouTube Shorts, TikTok, Instagram Reels and Facebook Reels, then published to all channels";

  return (
    <>
      {play ? (
        <video autoPlay muted loop playsInline preload="auto" poster={posterUrl(still, narrow)} aria-label={alt}>
          <source src={clipUrl("hero-publish", narrow)} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- the recording's finished frame, until the recording is allowed to load
        <img src={posterUrl(still, narrow)} alt={alt} width="1600" height="1000" decoding="async" fetchPriority="high" />
      )}
      {lite && !forced && !reduce && (
        <button type="button" className="mf-play hero-play" onClick={() => setForced(true)}>
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.2v9.6L13 8z" fill="currentColor" /></svg>
          Play demo
        </button>
      )}
    </>
  );
}
