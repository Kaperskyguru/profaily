"use client";
import { useEffect } from "react";

export function LazyVideoBehavior() {
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("[data-lazy-video]"));
    if (!videos.length) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = (v: HTMLVideoElement) => {
      if (v.dataset.videoLoaded !== "true") {
        v.querySelectorAll<HTMLSourceElement>("source[data-src]").forEach((s) => {
          s.src = s.dataset.src!;
          s.removeAttribute("data-src");
        });
        v.dataset.videoLoaded = "true";
        v.load();
      }
      v.play().catch(() => {});
    };
    const sync = () =>
      videos.forEach((v) => {
        if (motion.matches || v.dataset.inView !== "true") v.pause();
        else start(v);
      });
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            const v = e.target as HTMLVideoElement;
            v.dataset.inView = String(e.isIntersecting);
            if (e.isIntersecting && !motion.matches) start(v);
            else v.pause();
          }),
        { rootMargin: "200px 0px" },
      );
      videos.forEach((v) => observer!.observe(v));
    } else {
      videos.forEach((v) => (v.dataset.inView = "true"));
      sync();
    }
    motion.addEventListener("change", sync);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", sync);
    };
  }, []);
  return null;
}
