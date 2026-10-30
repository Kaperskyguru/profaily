"use client";
import { useRef, useState } from "react";
import { Arrow } from "@/components/ui/Glyph";

const TABS = [
  {
    tab: "Businesses",
    h: "Post every weekday without hiring a social team",
    p: "Film a batch on Monday, schedule the week, and let each video reach TikTok, Reels, Shorts and Facebook while you run the business.",
    plan: "Business · $39 a month",
    list: [["3", "brands, each with its own channels and schedule"], ["5", "teammates, with approval before anything posts"], ["1", "upload for every channel"]],
  },
  {
    tab: "Creators",
    h: "Keep TikTok, Reels and Shorts fed from one place",
    p: "One upload, a caption tuned for each channel, and a queue that keeps you posting on the days you don’t feel like it.",
    plan: "Creator · $15 a month",
    list: [["1", "brand with up to 4 channels"], ["2", "posting times a day, filled from your queue"], ["0", "re-uploads to each channel"]],
  },
  {
    tab: "Agencies",
    h: "Run every client’s video calendar with sign-off",
    p: "Each client gets their own brand space. Your team drafts, the client approves by link, and nothing goes out without a yes.",
    plan: "Business · $39 a month",
    list: [["3", "client brands, each with its own channels"], ["12", "connected channels"], ["5", "teammates with roles"]],
  },
];

export function MadeFor() {
  const [i, setI] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);
  const t = TABS[i];
  const go = (n: number) => { setI(n); btns.current[n]?.focus(); };
  return (
    <section className="wrap section made" id="made" aria-labelledby="made-h">
      <div className="head">
        <h2 id="made-h">Made for the people who post the videos</h2>
        <div className="tabs" role="tablist" aria-label="Who it’s for">
          {TABS.map((x, n) => (
            <button key={x.tab} ref={(el) => { btns.current[n] = el; }} type="button" role="tab" id={`made-t${n}`} aria-selected={n === i} aria-controls="made-p" tabIndex={n === i ? 0 : -1}
              onClick={() => setI(n)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") { e.preventDefault(); go((i + 1) % TABS.length); }
                if (e.key === "ArrowLeft") { e.preventDefault(); go((i + TABS.length - 1) % TABS.length); }
              }}>{x.tab}</button>
          ))}
        </div>
      </div>
      <div className="tp" id="made-p" role="tabpanel" aria-labelledby={`made-t${i}`} key={i}>
        <div className="big">
          <div><h3>{t.h}</h3><p>{t.p}</p></div>
          <div className="tp-plan"><span>{t.plan}</span><a className="btn btn-primary" href="#pricing">See the plan <Arrow /></a></div>
        </div>
        <div className="list">
          {t.list.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
        </div>
      </div>
    </section>
  );
}
