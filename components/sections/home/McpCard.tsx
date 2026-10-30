"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { OAuthButtons } from "@/components/sections/shared/OAuthButtons";

/*
 * Typefully-style scripted demo, built as live page code (not a video file): one clock, and every
 * frame is a pure function of `t`. The dashboard on the left is the REAL Profaily app: six captures of
 * the actual review flow (editor drafts and sends for review, producer approves, calendar), taken from
 * the running app with a seeded local team. The ChatGPT side is scripted around the real MCP tools
 * (list_media, list_channels, create_draft, send_for_review, approve_review, get_calendar).
 * The page rests on its final frame for reduced motion and without JavaScript.
 */

const END = 28.5;
const CPS = 38;

const PROMPTS = [
  { start: 0.7, send: 3.4, text: "Schedule the Meet Miso video for tomorrow at 9am on every channel. Write the caption." },
  { start: 12.4, send: 14.0, text: "Send it to Tunde for approval." },
  { start: 21.9, send: 23.4, text: "Is it approved? Show me the calendar." },
];

type Item =
  | { id: string; kind: "user" | "ai"; at: number; text: string }
  | { id: string; kind: "tool"; at: number; done: number; label: string; result: string };

const THREAD: Item[] = [
  { id: "u1", kind: "user", at: PROMPTS[0].send, text: PROMPTS[0].text },
  { id: "a1", kind: "ai", at: 3.8, text: "On it. Let me find the video in your library." },
  { id: "t1", kind: "tool", at: 4.5, done: 5.9, label: "Searching your media library", result: "Found Meet Miso in your library" },
  { id: "t2", kind: "tool", at: 6.1, done: 7.1, label: "Checking connected channels", result: "YouTube, TikTok, Instagram and Facebook" },
  { id: "t3", kind: "tool", at: 7.3, done: 8.7, label: "Creating a draft", result: "Draft created in Profaily" },
  { id: "a2", kind: "ai", at: 11.2, text: "The draft is ready, with a caption written for each channel. All the channels accept it." },
  { id: "u2", kind: "user", at: PROMPTS[1].send, text: PROMPTS[1].text },
  { id: "t4", kind: "tool", at: 14.4, done: 15.6, label: "Sending for review", result: "Sent to Tunde Bello for review" },
  { id: "a3", kind: "ai", at: 16.0, text: "Sent. Nothing is scheduled until Tunde approves it." },
  { id: "u3", kind: "user", at: PROMPTS[2].send, text: PROMPTS[2].text },
  { id: "t5", kind: "tool", at: 23.8, done: 24.8, label: "Checking the review", result: "Approved by Tunde Bello" },
  { id: "t6", kind: "tool", at: 25.0, done: 26.1, label: "Loading your calendar", result: "Scheduled for Sat 31 Oct, 09:00" },
  { id: "a4", kind: "ai", at: 26.5, text: "Approved. Meet Miso goes out on Saturday at 9:00 on YouTube, TikTok, Instagram and Facebook." },
];

/* The real dashboard frames, and when each takes the screen. `z`/`o` = zoom and origin inside the pane. */
const SHOTS = [
  { src: "/assets/app/mcp-1-draft.jpg", from: 8.0, z: 1.5, o: "0% 0%", alt: "Profaily composer: the Meet Miso draft ChatGPT created, with every channel selected" },
  { src: "/assets/app/mcp-2-send.jpg", from: 14.0, z: 1, o: "50% 50%", alt: "Profaily Send for review dialog: tomorrow 9am, Sat 31 Oct 09:00, with YouTube, TikTok, Instagram and Facebook ready" },
  { src: "/assets/app/mcp-3-sent.jpg", from: 15.6, z: 1.5, o: "0% 0%", alt: "Profaily showing the video In review, with the toast Sent for review, for Tomorrow 09:00" },
  { src: "/assets/app/mcp-4-review.jpg", from: 17.4, z: 1.5, o: "100% 0%", alt: "Profaily as the producer: the video In review with Request changes and Approve and schedule" },
  { src: "/assets/app/mcp-5-queue.jpg", from: 20.4, z: 1.5, o: "0% 0%", alt: "Profaily queue: the video Scheduled for Tomorrow, Sat 31 Oct at 09:00 on multiple channels" },
  { src: "/assets/app/mcp-6-calendar.jpg", from: 25.0, z: 1.12, o: "100% 0%", alt: "Profaily calendar: the Meet Miso video on Saturday 31 October at 09:00" },
] as const;


const typed = (text: string, start: number, t: number) =>
  text.slice(0, Math.max(0, Math.min(text.length, Math.floor((t - start) * CPS))));

function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m3.5 8.4 3 3 6-6.6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function McpCard(_: { bare?: boolean } = {}) {
  const [t, setT] = useState(END);
  const [ended, setEnded] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const started = useRef(false);

  const play = useCallback(() => {
    cancelAnimationFrame(raf.current);
    let last = performance.now();
    let now = 0;
    setT(0);
    setEnded(false);
    const tick = (ts: number) => {
      now += Math.min(0.1, (ts - last) / 1000);
      last = ts;
      if (now >= END) { setT(END); setEnded(true); return; }
      setT(now);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          io.disconnect();
          play();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf.current); };
  }, [play]);

  const prompt = PROMPTS.find((p) => t >= p.start && t < p.send);
  const composer = prompt ? typed(prompt.text, prompt.start, t) : "";
  const shown = THREAD.filter((i) => t >= i.at);
  const active = SHOTS.reduce((a, s, i) => (t >= s.from ? i : a), -1);
  const shot = SHOTS[Math.max(0, active)];
  // The producer approves in the dashboard: a click lands on "Approve and schedule" just before the queue frame.
  const approveClick = t >= 18.4 && t < 20.4;
  const pressed = t >= 19.7 && t < 20.4;

  return (
    <div className="sh mcp-card rv" ref={root}>
      <p className="sr-only">A walkthrough. In ChatGPT, someone asks for the Meet Miso video to go out tomorrow at 9am on every channel. ChatGPT drafts it in Profaily through the MCP server and sends it to the producer for review. The producer approves it in the Profaily dashboard, and the video appears on the calendar for Saturday 31 October at 09:00.</p>
      <div className="mcp-grid">
        <div className="mcp-view" data-ui>
          <div className="mcp-pane" aria-hidden="true">
          <div className="mcp-empty" style={{ opacity: active < 0 ? 1 : 0 }}>
            <img src="/icon.svg" alt="" width="34" height="34" />
            <span>Mastering Backend</span>
          </div>
          <div className="mcp-zoom" style={{ transform: `scale(${shot.z})`, transformOrigin: shot.o }}>
            {SHOTS.map((s, i) => (
              <img key={s.src} src={s.src} alt="" width="1800" height="1125" loading="lazy" style={{ opacity: i === active ? 1 : 0 }} />
            ))}
            {approveClick && (
              <span className={`mcp-cursor${pressed ? " press" : ""}`} style={{ left: "79.2%", top: "3.6%" }}>
                <svg viewBox="0 0 20 24"><path d="M2 1.5v17.2l4.7-4.2 3.1 7 3.2-1.4-3.1-6.9H17L2 1.5Z" fill="#fff" stroke="#0d241f" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </span>
            )}
          </div>
          </div>
          {ended && (
            <div className="mcp-end">
              <button type="button" className="mcp-again" onClick={() => { started.current = true; play(); }}>
                <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10a6 6 0 1 1-1.9-4.4M16 3.5v3.6h-3.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Replay
              </button>
            </div>
          )}
        </div>

        <div className="mcp-chat" aria-hidden="true">
          <div className="mcp-chat-top">
            <b>ChatGPT</b><small>Illustration of the conversation</small>
          </div>
          <div className="mcp-thread">
            {shown.map((i) =>
              i.kind === "tool" ? (
                <div className={`mcp-tool mcp-in${t >= i.done ? " done" : ""}`} key={i.id}>
                  <span className="mcp-mark"><img src="/assets/profaily-mark-white-trim.svg" alt="" width="12" height="12" /></span>
                  <span>{t >= i.done ? i.result : `${i.label}…`}</span>
                  {t >= i.done ? <Check /> : <i className="mcp-spin" />}
                </div>
              ) : (
                <p className={`mcp-msg ${i.kind === "user" ? "mcp-me" : "mcp-bot"} mcp-in`} key={i.id}>{i.text}</p>
              ),
            )}
          </div>
          <div className="mcp-input">
            <p className={composer ? "" : "mcp-ph"}>
              {composer || "Ask anything"}
              {composer && <span className="mcp-caret" />}
            </p>
            <span className={`mcp-send${composer ? " on" : ""}`}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function McpIntro() {
  return (
    <div className="mcp-intro">
      <h2 id="mcp-h">Ask ChatGPT.<br />Profaily schedules it.</h2>
      <p className="lead">Connect ChatGPT or Claude to Profaily and ask for a video to go out. It is drafted, sent to your producer for approval, and placed on the calendar, under your team&rsquo;s own review rules.</p>
      <OAuthButtons lead="Start your free trial:" />
    </div>
  );
}

export function McpSection() {
  return (
    <section className="wrap mcp-section" id="ask-chatgpt" aria-labelledby="mcp-h">
      <McpIntro />
      <McpCard />
    </section>
  );
}
