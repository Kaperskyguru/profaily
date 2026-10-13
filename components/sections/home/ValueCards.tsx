import { valueCards } from "@/content/home";

export function ValueCards() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Make every video easier to manage—and more valuable to the business.</h2>
          <p>Connect video planning and publishing to audience response, lead follow-up, and performance learning while keeping each step visible and under control.</p>
        </div>
        <div className="value-grid">
          {valueCards.map((c) => (
            <article className="value-card" key={c.title}>
              <div className="value-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
