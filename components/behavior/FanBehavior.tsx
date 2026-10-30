"use client";
import { useEffect } from "react";

/** Spreads every `[data-fan]` player stack when it scrolls into view (once). */
export function FanBehavior() {
  useEffect(() => {
    const fans = Array.from(document.querySelectorAll<HTMLElement>("[data-fan]"));
    if (!("IntersectionObserver" in window)) {
      fans.forEach((f) => f.classList.add("go"));
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("go"); io.unobserve(e.target); } }),
      { threshold: 0.3 },
    );
    fans.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);
  return null;
}
