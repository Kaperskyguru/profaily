import { valueCards } from "@/content/home";

export function ValueCards() {
  return (
    <section className="section light" id="workflow">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">For creators, businesses, and agencies</div>
          <h2>Distribute more videos consistently across platforms.</h2>
          <p>
            If you run a business, work with a team, or publish for clients,
            there’s already plenty to do. Profaily helps you keep track of the
            videos, reviews, and posting dates.
          </p>
        </div>
        <div className="value-grid">
          {valueCards.map((c) => (
            <article className="value-card" key={c.title}>
              <div className="value-icon" aria-hidden="true">
                {c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
