"use client";
import { useEffect, useState } from "react";

/**
 * "In this guide": the list of the article's sections, with the one being read marked. A section is the current
 * one once its heading has scrolled up to the reading line (just under the header) and the next has not.
 * Without script it is a plain list of links.
 */
export function ArticleToc({ items }: { items: { id: string; label: string }[] }) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const heads = items.map((t) => document.getElementById(t.id)).filter((el): el is HTMLElement => !!el);
    if (!heads.length) return;
    const LINE = 140;
    let raf = 0;
    const update = () => {
      raf = 0;
      let id: string | null = null;
      for (const h of heads) if (h.getBoundingClientRect().top <= LINE) id = h.id;
      setCurrent(id);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <ol>
      {items.map((t) => (
        <li key={t.id}>
          <a href={`#${t.id}`} aria-current={current === t.id ? "location" : undefined}>
            {t.label}
          </a>
        </li>
      ))}
    </ol>
  );
}
