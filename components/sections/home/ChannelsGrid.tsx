import { platformCards } from "@/content/home";

export function ChannelsGrid() {
  return (
    <section className="section dark-alt" id="channels">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Connected platforms</div>
          <h2>One workflow for every channel you publish to.</h2>
          <p>Keep network-specific controls and business value in view from a single video operation.</p>
        </div>
        <div className="platform-grid">
          {platformCards.map((c) => (
            <a className="platform-card" href={c.href} key={c.href}>
              <span className={`platform-badge platform-icon ${c.cls}`}>{c.icon}</span>
              <h3>{c.name} <span className="arrow">↗</span></h3>
              <p>{c.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
