"use client";
import { useEffect } from "react";

/**
 * Home hero motion: integration tiles drift away from the cursor (Buffer), and the product recording
 * plays on a loop. Under reduced motion the tiles stay put and the recording shows its finished frame.
 */
export function HeroBehavior() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The product recording: still on its last frame ("Done. 4 of 4 posted") for reduced motion.
    const video = document.querySelector<HTMLVideoElement>("[data-hero-video]");
    if (video && reduce) {
      video.removeAttribute("autoplay"); video.pause();
      video.poster = "/assets/app/hero-publish-done.jpg";
    }
    const timers: number[] = [];

    const tiles = Array.from(document.querySelectorAll<HTMLElement>("[data-tile]"));
    let mx = -999, my = -999, raf = 0;
    const place = () => {
      raf = 0;
      tiles.forEach((t, i) => {
        const r = t.getBoundingClientRect();
        const ox = Number(t.dataset.ox || 0), oy = Number(t.dataset.oy || 0);
        const dx = r.left + r.width / 2 - ox - mx, dy = r.top + r.height / 2 - oy - my;
        const d = Math.hypot(dx, dy);
        let px = 0, py = 0;
        if (d < 200 && d > 0) { const f = ((200 - d) / 200) * 22; px = (dx / d) * f; py = (dy / d) * f; }
        const drift = window.scrollY * (i % 2 ? -0.06 : -0.1);
        t.dataset.ox = String(px); t.dataset.oy = String(py + drift);
        t.style.transform = `translate(${px.toFixed(1)}px, ${(py + drift).toFixed(1)}px)`;
      });
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(place); };
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; queue(); };
    if (!reduce) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("scroll", queue, { passive: true });
    }
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", queue);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
