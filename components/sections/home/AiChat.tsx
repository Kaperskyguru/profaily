"use client";
import { useEffect, useRef, useState } from "react";

const MSG = "Schedule these 20 Mastering Backend videos on TikTok, Reels, Shorts and Facebook. Weekdays at 10:00 and 18:00, starting Monday.";
const STEPS: [string, string][] = [
  ["Reading 20 videos from your library", "list_media"],
  ["Checking each video against every channel", "validate_distribution_plan"],
  ["Booking 80 posts", "schedule_campaign"],
];
const ROWS: [string, string, string][] = [
  ["Mon 10:00", "Fix N+1 queries in 30 seconds", "4 channels"],
  ["Mon 18:00", "REST vs. GraphQL in 45 seconds", "4 channels"],
  ["Tue 10:00", "System design: rate limiting", "3 channels"],
  ["Tue 18:00", "Redis caching in one minute", "4 channels"],
];

/** Buffer's scripted assistant demo: the prompt types, the real MCP tools tick off, the plan fills in. */
export function AiChat() {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState(0);
  const [stage, setStage] = useState(0); // 0..3 steps shown, 4..7 rows, 8 answer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setTyped(MSG.length); setStage(9); return; }
    const timers: number[] = [];
    const io = new IntersectionObserver((e) => {
      if (!e[0].isIntersecting) return;
      io.disconnect();
      for (let i = 1; i <= MSG.length; i++) timers.push(window.setTimeout(() => setTyped(i), i * 22));
      const t0 = MSG.length * 22 + 500;
      for (let s = 1; s <= 9; s++) timers.push(window.setTimeout(() => setStage(s), t0 + (s <= 4 ? s * 900 : 4 * 900 + (s - 4) * 160)));
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, []);
  return (
    <div className="chat" ref={ref} role="img" aria-label={`Example conversation: “${MSG}” Claude reads 20 videos, checks them against every channel and books 80 posts from Monday 2 to Friday 13 November.`} data-ui>
      <div className="u">{MSG.slice(0, typed)}{typed < MSG.length && <span className="caret" />}</div>
      {STEPS.map(([t, tool], i) => (
        <div key={tool} className={`step${stage > i ? " in" : ""}${stage > i + 1 ? " done" : ""}`}><i />{t} <code>{tool}</code></div>
      ))}
      <table><tbody>
        {ROWS.map((r, i) => (
          <tr key={r[0]} className={stage > 4 + i ? "in" : ""}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>
        ))}
      </tbody></table>
      <p className={`a${stage >= 9 ? " in" : ""}`}>Done. 20 videos from Mon 2 to Fri 13 November. The rate limiting video is 11:40, so TikTok skips it; the other three channels keep it.</p>
      <div className="in-box">Write a message…</div>
    </div>
  );
}
