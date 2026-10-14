"use client";
import { useEffect } from "react";

// Intentionally dormant: a faithful 1:1 port of the original site.js reveal observer. No `.reveal` markup
// exists in the templates today; kept for parity (smoke injects a probe to prove it still works).
export function RevealBehavior() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  return null;
}
