"use client";
import { useEffect } from "react";

/**
 * Jobmate's "settle": `.rv` elements (and the standard page parts) below the first screen start lowered and faded, and rise in as
 * they scroll into view. Anything already on screen is never hidden, and without JS nothing is.
 */
export function RevealBehavior() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Explicit `.rv` blocks, plus the parts every page is built from, so subpages rise in the same way.
    const AUTO = ".tile-card, .steps > li, .table-wrap, .faq details, .sh, .cta-band, .mc, .grid-2 > *, .grid-3 > *, .grid-4 > *, .sec-head, .fr .txt, .groups .group, .dband header, .dband .gbody, .more-lt > p, .more-lt li, .more-lt .signup, .close, .mcp-intro > *";
    // Where each part comes from, so a section does not rise as one slab: text from the left, the picture it explains from the right, small parts fade.
    const DIR: Record<string, string> = {
      "from-l": ".mcp-intro > h2, .groups .glist, .dband .glist, .band .panels, .close h2, .more-lt > p",
      "from-r": ".mcp-intro > .lead, .groups .gpane, .dband .gpane, .band .arc, .close .lead",
      "fade": ".more-lt li, .site-foot .cols > *, .trusted",
      "zoom": ".mcp-card, .close .signup, .more-lt .signup",
    };
    const DIRSEL = Object.values(DIR).join(", ");
    const nodes = Array.from(new Set(document.querySelectorAll<HTMLElement>(`.rv, ${AUTO}, ${DIRSEL}`)));
    nodes.forEach((n) => { for (const [cls, sel] of Object.entries(DIR)) if (n.matches(sel)) n.classList.add(cls); });
    // Siblings in one row rise one after another (70ms apart), unless the block sets its own --d.
    nodes.forEach((n) => {
      if (!n.classList.contains("rv")) n.classList.add("rv");
      if (!n.style.getPropertyValue("--d") && n.parentElement) {
        const i = Array.from(n.parentElement.children).indexOf(n);
        if (i > 0) n.style.setProperty("--d", n.matches(".more-lt li") ? `${Math.min(i, 11) * 0.04}s` : `${Math.min(i, 5) * 0.07}s`);
      }
    });
    const fold = window.innerHeight * 0.92;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("pre");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top > fold) {
        n.classList.add("pre");
        io.observe(n);
      }
    });
    return () => io.disconnect();
  }, []);
  return null;
}
