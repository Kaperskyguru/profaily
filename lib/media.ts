"use client";
import { useEffect, useState } from "react";

/**
 * How the page treats video on a weak connection.
 *
 * The recordings are the heaviest thing on the site, so they are the first thing to give up when the network is poor:
 * on Save-Data, on a 2G/3G connection, or when the visitor asks for reduced data, the page shows each recording's
 * finished frame (a small WebP) and lets the visitor press Play. Everyone else gets the video, but only once its
 * section is close to the screen, and the phone-sized file on a narrow screen.
 */
type Conn = { saveData?: boolean; effectiveType?: string; addEventListener?: (t: string, f: () => void) => void; removeEventListener?: (t: string, f: () => void) => void };

const conn = (): Conn | undefined => (typeof navigator === "undefined" ? undefined : (navigator as Navigator & { connection?: Conn }).connection);

const weak = () => {
  if (typeof window === "undefined") return false;
  const c = conn();
  if (c?.saveData) return true;
  if (c?.effectiveType && ["slow-2g", "2g", "3g"].includes(c.effectiveType)) return true;
  return window.matchMedia("(prefers-reduced-data: reduce)").matches;
};

/** True on a weak connection or Save-Data; false on the server and until the browser has been asked. */
export function useLite(): boolean {
  const [lite, setLite] = useState(false);
  useEffect(() => {
    const sync = () => setLite(weak());
    sync();
    const c = conn();
    c?.addEventListener?.("change", sync);
    return () => c?.removeEventListener?.("change", sync);
  }, []);
  return lite;
}

/** True once the element is within `margin` of the screen, and stays true. */
export function useNear(ref: React.RefObject<Element | null>, margin = "500px"): boolean {
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, margin]);
  return near;
}

/** True on a phone-sized screen, where the 760px file is plenty. */
export function useNarrow(): boolean {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return narrow;
}

/** The recording's files under /assets/app: `feat-<clip>` or `hero-publish`, desktop or phone sized. */
export const REC_V = "13";
export const clipUrl = (name: string, narrow: boolean) => `/assets/app/${name}${narrow ? ".m" : ""}.mp4?v=${REC_V}`;
export const posterUrl = (name: string, narrow: boolean) => `/assets/app/${name}${narrow ? ".m" : ""}.webp?v=${REC_V}`;
