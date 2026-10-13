import { suiteCards } from "@/content/home";

export function FeatureSuite() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Explore the product</div>
          <h2>Every part of the operation works together.</h2>
          <p>Explore the capabilities behind the full short-form video marketing workflow.</p>
        </div>
        <div className="suite-grid">
          {suiteCards.map((c) => (
            <article className={c.all ? "feature-card feature-card-all" : "feature-card"} key={c.href}>
              <a className="feature-card-main" href={c.href}>
                <span className="card-kicker">{c.kicker}</span>
                <span className="arrow">↗</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </a>
              <ul>
                {c.items.map((i) => (
                  <li key={i.label}>{i.href ? <a href={i.href}>{i.label}</a> : i.label}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
