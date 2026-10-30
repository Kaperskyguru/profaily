"use client";
import { useState } from "react";
import { Glyph } from "@/components/ui/Glyph";

/** Limits the app enforces (backend/src/extensions/platforms/limits.ts). */
const LIMIT = { tiktok: 2200, instagram: 2200, youtube: 100, facebook: 63206 };
const START = "Your API is slow because of N+1 queries, not your server. Here is the 30-second fix we teach every Mastering Backend student. #backend #softwareengineering";

function Clip({ text, n }: { text: string; n: number }) {
  if (text.length <= n) return <>{text}</>;
  return <>{text.slice(0, n).trimEnd()}<span className="more">… more</span></>;
}

/** "Try it with your own caption": one caption, four player frames, the real per-channel limits. */
export function LiveCaption() {
  const [cap, setCap] = useState(START);
  const [title, setTitle] = useState("Fix N+1 queries in 30 seconds");
  const rows: [string, number, number][] = [
    ["TikTok caption", cap.length, LIMIT.tiktok],
    ["Instagram caption", cap.length, LIMIT.instagram],
    ["YouTube title", title.length, LIMIT.youtube],
    ["Facebook caption", cap.length, LIMIT.facebook],
  ];
  const frame = (children: React.ReactNode) => (
    <div className="ph"><div className="s"><img src="/assets/app/welcome-frame.jpg" alt="" width="540" height="960" loading="lazy" decoding="async" />{children}</div></div>
  );
  return (
    <div className="live rv" id="try" aria-labelledby="try-h">
      <div>
        <h4 id="try-h">Try it with your own caption</h4>
        <p className="hint">Type below and watch it land in each channel, with the same limits Profaily checks.</p>
        <div className="fld">
          <label htmlFor="try-cap">Caption</label>
          <textarea id="try-cap" value={cap} onChange={(e) => setCap(e.target.value)} />
        </div>
        <div className="fld">
          <label htmlFor="try-title">YouTube title</label>
          <input id="try-title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="counts" aria-live="polite">
          {rows.map(([label, n, max]) => (
            <div key={label} className={n > max ? "over" : undefined}>
              <span>{label}{n > max ? " is too long" : ""}</span>
              <span>{n.toLocaleString("en-US")} / {max.toLocaleString("en-US")}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="phones" aria-hidden="true">
        <figure>{frame(<div className="cap" data-ui><b>@masteringbackend</b><Clip text={cap} n={84} /></div>)}<figcaption><Glyph name="tiktok" id="lc-tt" />TikTok</figcaption></figure>
        <figure>{frame(<div className="cap" data-ui><b>masteringbackend</b><Clip text={cap} n={62} /></div>)}<figcaption><Glyph name="instagram" id="lc-ig" />Reels</figcaption></figure>
        <figure>{frame(<div className="cap yt" data-ui>{title || "Add a title for YouTube"}</div>)}<figcaption><Glyph name="youtube" id="lc-yt" />Shorts</figcaption></figure>
        <figure>{frame(<div className="cap" data-ui><b>Mastering Backend</b><Clip text={cap} n={110} /></div>)}<figcaption><Glyph name="facebook" id="lc-fb" />Facebook</figcaption></figure>
      </div>
    </div>
  );
}
