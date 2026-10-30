import type { ReactNode } from "react";

/** A 9:16 player frame showing the real "Welcome to Profaily" video frame. */
export function Phone({ label, chip, children, style }: { label?: string; chip?: string; children?: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="ph" style={style}>
      <div className="s">
        <img src="/assets/app/welcome-frame.jpg" alt="" width="540" height="960" loading="lazy" decoding="async" />
        {label && <span className="lbl" data-ui>{label}</span>}
        {chip && <span className="chip" data-ui>{chip}</span>}
        {children}
      </div>
    </div>
  );
}

/** Four players fanning out from one video; `.go` (added by FanBehavior when in view) spreads them. */
export function Fan({ chips = ["Posted", "Posted", "Posted", "18:00"], id }: { chips?: string[]; id?: string }) {
  const labels = ["TikTok", "Reels", "Shorts", "Facebook"];
  return (
    <div className="fan4" data-fan id={id} role="img" aria-label="One video fanning out to TikTok, Instagram Reels, YouTube Shorts and Facebook">
      {labels.map((l, i) => <Phone key={l} label={l} chip={chips[i]} />)}
    </div>
  );
}
