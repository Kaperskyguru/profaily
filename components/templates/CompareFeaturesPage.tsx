import "@/app/styles/compare-features.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Glyph } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { faqJsonLd } from "@/content/comparisons";
import type { Cell, Comparison, Mark } from "@/content/compare";

const MARK_LABEL: Record<Mark, string> = { yes: "Yes", partial: "Partly", no: "No" };

function MarkIcon({ mark }: { mark: Mark }) {
  return (
    <span className={`cf-mark ${mark}`} aria-hidden="true">
      <svg viewBox="0 0 20 20" width="20" height="20">
        {mark === "yes" && <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />}
        {mark === "partial" && <path d="M6 10h8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />}
        {mark === "no" && <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />}
      </svg>
    </span>
  );
}

function CellView({ cell, who }: { cell: Cell; who: string }) {
  return (
    <>
      <MarkIcon mark={cell.mark} />
      <span className="sr-only">{`${who}: ${MARK_LABEL[cell.mark]}. `}</span>
      <span className="cf-cell-text">{cell.text}</span>
    </>
  );
}

function Media({ src, alt }: { src: string; alt: string }) {
  return src.endsWith(".mp4")
    ? <video className="cf-media" src={src} poster={src.replace(/\.mp4$/, ".jpg")} autoPlay muted loop playsInline preload="metadata" aria-label={alt} />
    : <img className="cf-media" src={src} alt={alt} loading="lazy" decoding="async" />;
}

/** /compare/<slug>: Profaily next to one rival, feature by feature (content in content/compare). */
export function CompareFeaturesPage({ c }: { c: Comparison }) {
  const path = `/compare/${c.slug}`;
  return (
    <PageShell>
      <OgUrl path={path} type="website" title={c.meta.title} description={c.meta.description} image={undefined} />
      <JsonLd data={faqJsonLd(c.faq)} />
      <main className="pg-compare pg-cf">
        <PageHero
          solo
          crumbs={[{ href: "/compare", label: "Compare" }, { label: `Profaily vs ${c.rival}` }]}
          pill={`Profaily vs ${c.rival}`}
          title={<>Looking for a <em className="cf-em">{c.rival} alternative</em>?</>}
          lede={c.hero.lede}
          secondary={{ href: "#features", label: "Compare features" }}
          note={`${c.rival} details checked ${c.checked}.`}
        />

        <section className="cf-hero-media" aria-label="Profaily">
          <div className="wrap">
            <img className="cf-hero-shot" src={c.hero.shot.src} alt={c.hero.shot.alt} width={1600} height={1092} />
            <p className="cf-posts-to">
              <span>Posts to</span>
              {(["tiktok", "instagram", "youtube"] as const).map((p) => <Glyph key={p} name={p} id={`cf-${p}`} />)}
            </p>
          </div>
        </section>

        <section className="section tight" aria-label="Profaily in numbers">
          <div className="wrap cf-stats">
            {c.stats.map((s) => (
              <div className="cf-stat" key={s.value}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section tight" aria-labelledby="cf-flow">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cf-flow">{c.workflow.title}</h2>
              <p className="lead">{c.workflow.lede}</p>
            </div>
            <div className="cf-flow">
              {[
                { who: `With ${c.rival}`, steps: c.workflow.them, us: false },
                { who: "With Profaily", steps: c.workflow.us, us: true },
              ].map((col) => (
                <article className={`cf-flow-card${col.us ? " us" : ""}`} key={col.who}>
                  <h3>{col.who}</h3>
                  <ol>{col.steps.map((s) => <li key={s}>{s}</li>)}</ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section tight" id="features" aria-labelledby="cf-table">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cf-table">{`Profaily vs ${c.rival}, feature by feature`}</h2>
              <p className="lead">{`Everything a short-video team uses every week, side by side. ${c.rival} details come from its own website and help center.`}</p>
            </div>
            <div className="cf-table" role="region" aria-label={`Profaily versus ${c.rival}, feature by feature`} tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col"><span className="sr-only">Feature</span></th>
                    <th scope="col">{c.rival}</th>
                    <th scope="col" className="us">Profaily</th>
                  </tr>
                </thead>
                {c.groups.map((g) => (
                  <tbody key={g.title}>
                    <tr className="cf-group"><th scope="rowgroup" colSpan={3}>{g.title}</th></tr>
                    {g.rows.map((r) => (
                      <tr key={r.feature}>
                        <th scope="row">{r.feature}{r.detail && <small>{r.detail}</small>}</th>
                        <td data-who={c.rival}><CellView cell={r.them} who={c.rival} /></td>
                        <td className="us" data-who="Profaily"><CellView cell={r.us} who="Profaily" /></td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
            <p className="cf-foot">{`${c.rival} details checked ${c.checked} on ${c.rival}'s own website and help center. Plans and features change; if something here is out of date, tell us and we'll fix it.`}</p>
          </div>
        </section>

        <section className="section tight" aria-labelledby="cf-why">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="cf-why">{`Why short-video teams pick Profaily over ${c.rival}`}</h2>
            </div>
            <div className="cf-reasons">
              {c.reasons.map((r, i) => (
                <article className={`cf-reason${i % 2 ? " flip" : ""}`} key={r.title}>
                  <div className="cf-reason-text">
                    <span className="cf-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                  <div className="cf-reason-shot"><Media src={r.shot.src} alt={r.shot.alt} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section tight" aria-label={`A note from ${c.founder.name}`}>
          <div className="wrap">
            <figure className="cf-founder">
              <blockquote>{c.founder.quote.map((q) => <p key={q.slice(0, 20)}>{q}</p>)}</blockquote>
              <figcaption>
                <span className="cf-avatar" aria-hidden="true">{c.founder.name.split(" ").map((w) => w[0]).join("")}</span>
                <span><b>{c.founder.name}</b><span>{c.founder.role}</span></span>
              </figcaption>
            </figure>
          </div>
        </section>

        <Faq heading={`${c.rival} alternative FAQ`} items={c.faq} />

        <CtaBand
          heading={c.cta.title}
          lede={c.cta.body}
          secondary={{ href: "/pricing", label: "See pricing" }}
        />
      </main>
    </PageShell>
  );
}
