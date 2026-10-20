import { suiteCards } from "@/content/home";

export function FeatureSuite() {
  return (
    <section
      className="section light feature-suite-section"
      aria-labelledby="feature-suite-title"
    >
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">From finished video to distribution</div>
          <h2 id="feature-suite-title">
            Keep every video moving toward publish.
          </h2>
          <p>
            Bring the videos in, sort out the details, and keep your team on the
            same schedule.
          </p>
        </div>
        <div className="feature-suite-stories">
          {suiteCards.map((c, index) => (
            <article
              className={`feature-suite-story${index === 1 ? " feature-suite-story-reverse" : ""}`}
              key={c.kicker}
            >
              <div className="feature-suite-copy">
                <span className="feature-suite-kicker">{c.kicker}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <figure className="feature-suite-visual">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  width={c.width}
                  height={c.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
