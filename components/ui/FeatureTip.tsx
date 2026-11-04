"use client";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { tipFor } from "@/content/tips";

const GAP = 10;
const EDGE = 12;
const OPEN_MS = 90;
const CLOSE_MS = 140;

/**
 * A label that explains itself on hover, like the feature names on Typefully's pricing page: a card with the
 * feature's name, one plain sentence, an optional "Learn more" link and, where there is one, a real capture
 * of it in the app. Text is in content/tips.ts.
 *
 * The card always opens below its label. It is drawn in a portal so no section's overflow can clip it. It opens on hover, focus or tap, stays
 * open while the pointer is on it (so "Learn more" can be reached), and closes on Esc, on a tap outside, or
 * when the page scrolls. A label with no entry renders as plain text.
 */
export function FeatureTip({ label, children }: { label: string; children?: ReactNode }) {
  const tip = tipFor(label);
  const uid = useId();
  const trigger = useRef<HTMLSpanElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  /** The page scroll the card itself asks for (below) must not close it. */
  const nudged = useRef(0);
  const [open, setOpen] = useState(false);
  const [at, setAt] = useState<{ left: number; top: number } | null>(null);

  const later = useCallback((to: boolean, ms: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(to), ms);
  }, []);
  const now = useCallback((to: boolean) => {
    window.clearTimeout(timer.current);
    setOpen(to);
  }, []);

  // Place the card once it has a size, centred under the label and kept inside the screen's sides.
  useLayoutEffect(() => {
    if (!open || !trigger.current || !card.current) return;
    const t = trigger.current.getBoundingClientRect();
    const c = card.current.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const left = Math.min(Math.max(EDGE, t.left + t.width / 2 - c.width / 2), vw - c.width - EDGE);
    // The card always opens under its label, never above it. When the label sits low on the screen the page is scrolled just far enough to bring the whole card into view.
    let top = t.bottom + GAP;
    const over = top + c.height + EDGE - window.innerHeight;
    if (over > 0) {
      nudged.current = Date.now() + 700;
      window.scrollBy({ top: over, behavior: "auto" });
      top -= over;
    }
    setAt({ left, top });
  }, [open]);

  useEffect(() => {
    if (!open) {
      setAt(null);
      return;
    }
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onDown = (e: PointerEvent) => {
      const n = e.target as Node;
      if (!trigger.current?.contains(n) && !card.current?.contains(n)) close();
    };
    const onScroll = () => Date.now() > nudged.current && close();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", close);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", close);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  if (!tip) return <>{children ?? label}</>;

  const m = tip.media;
  return (
    <>
      <span
        ref={trigger}
        className="tip-t"
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-describedby={`${uid}-d`}
        onPointerEnter={(e) => e.pointerType === "mouse" && later(true, OPEN_MS)}
        onPointerLeave={(e) => e.pointerType === "mouse" && later(false, CLOSE_MS)}
        onFocus={(e) => e.currentTarget.matches(":focus-visible") && now(true)}
        onBlur={(e) => !card.current?.contains(e.relatedTarget as Node) && now(false)}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
      >
        {children ?? label}
      </span>
      <span id={`${uid}-d`} className="sr-only">
        {tip.text}
      </span>
      {open &&
        createPortal(
          <div
            ref={card}
            className={`tipcard${m ? " has-media" : ""}`}
            style={at ? { left: at.left, top: at.top } : { left: 0, top: 0, visibility: "hidden" }}
            onPointerEnter={(e) => e.pointerType === "mouse" && later(true, 0)}
            onPointerLeave={(e) => e.pointerType === "mouse" && later(false, CLOSE_MS)}
          >
            <div className="tipcard-b">
              <p className="tipcard-h">{tip.title}</p>
              <p className="tipcard-p">{tip.text}</p>
              {tip.learn && (
                <a className="tipcard-learn" href={tip.learn}>
                  Learn more
                </a>
              )}
            </div>
            {m && (
              <div className="tipcard-m">
                {m.kind === "video" ? (
                  <video src={m.src} poster={m.poster} width={m.w} height={m.h} autoPlay muted loop playsInline preload="auto" aria-label={m.alt} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.src} width={m.w} height={m.h} alt={m.alt} decoding="async" />
                )}
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
