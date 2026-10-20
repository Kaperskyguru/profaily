import { platformCards } from "@/content/home";

export function ChannelsGrid() {
  return (
    <section className="section light" id="channels">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Where you can post</div>
          <h2>Plan videos for the places your audience watches.</h2>
          <p>Prepare each video for TikTok, Instagram Reels, YouTube Shorts, and Facebook from the same publishing calendar.</p>
        </div>
        <div className="platform-grid">
          {platformCards.map((c) => (
            <a className="platform-card" href={c.href} key={c.href}>
              <span className={`platform-badge platform-icon ${c.cls}`}>{c.icon}</span>
              <h3>{`${c.name} `}<span className="arrow">↗</span></h3>
              <p>{c.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
