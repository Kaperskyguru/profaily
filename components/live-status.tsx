"use client";

import { useEffect, useState } from "react";

type Status = "draft" | "scheduled" | "publishing" | "posted";

/**
 * A status pill that moves once from `from` to `to` after `delayMs`.
 *
 * The server renders `from`, so the page is complete without JavaScript; this
 * only plays the hero demo's one transition. Skipped under reduced motion.
 */
export function LiveStatus({
  from,
  to,
  delayMs = 2600,
}: {
  from: Status;
  to: Status;
  delayMs?: number;
}) {
  const [status, setStatus] = useState<Status>(from);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setStatus(to), delayMs);
    return () => clearTimeout(t);
  }, [to, delayMs]);

  return (
    <span className="pill" data-s={status} aria-live="polite">
      {status}
    </span>
  );
}
