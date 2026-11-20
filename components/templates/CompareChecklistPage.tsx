import "@/app/styles/compare.css";
import "@/app/styles/compare-features.css";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Arrow, Glyph } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { links } from "@/lib/links";
import { comparisonList, featureGroups } from "@/content/compare";
import type { Cell, ChecklistComparison } from "@/content/compare";

/** Shown as a tick when the tool has it (fully or in part), a cross when its docs don't show it. */
function Tick({ cell, who }: { cell: Cell | undefined; who: string }) {
  const has = cell?.mark === "yes" || cell?.mark === "partial";
  return (
    <span className={`ck-tick ${has ? "yes" : "no"}`} title={cell?.text}>
      <span className={`cf-mark ${has ? "yes" : "no"}`} aria-hidden="true">
        <svg viewBox="0 0 20 20" width="20" height="20">
          {has
            ? <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            : <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />}
        </svg>
      </span>
      <span className="sr-only">{`${who}: ${has ? "yes" : "no"}`}</span>
    </span>
  );
}

/** /compare/<slug>, checklist layout: every Profaily feature, with the rival's cell for each. */
export function CompareChecklistPage({ c }: { c: ChecklistComparison }) {
  const path = `/compare/${c.slug}`;
  return (
    <PageShell>
      <OgUrl path={path} type="website" title={c.meta.title} description={c.meta.description} image={undefined} />
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
            <img className="cf-hero-shot" src="/assets/compare/hero-schedule.jpg" alt="Profaily with a short video open and the Schedule or publish window showing TikTok, Instagram and YouTube each marked Ready" width={1600} height={1092} />
            <p className="cf-posts-to">
              <span>Posts to</span>
              {(["tiktok", "instagram", "youtube"] as const).map((p) => <Glyph key={p} name={p} id={`cf-${p}`} />)}
            </p>
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
                  <ol>{col.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section tight" id="features" aria-labelledby="ck-score">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="ck-score">{`Profaily vs ${c.rival}, feature by feature`}</h2>
            </div>

            <div className="ck-groups">
              {featureGroups.map((g) => {
                return (
                  <section className="ck-group" key={g.title} aria-labelledby={`ck-${g.title}`}>
                    <header className="ck-group-head">
                      <h3 id={`ck-${g.title}`}>{g.title}</h3>
                    </header>
                    <div className="ck-head-row" aria-hidden="true">
                      <span />
                      <span className="us">Profaily</span>
                      <span>{c.rival}</span>
                    </div>
                    <ul className="ck-rows">
                      {g.rows.map((r) => (
                        <li className="ck-row" key={r.id}>
                          <span className="ck-label">{r.label}<small>{r.us}</small></span>
                          <Tick cell={{ mark: "yes", text: r.us }} who="Profaily" />
                          <Tick cell={c.cells[r.id]} who={c.rival} />
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>

            <p className="cf-foot">{`${c.rival} details come from ${c.rival}'s own website and help center, checked ${c.checked}. If something here is out of date, tell us and we'll fix it.`}</p>
          </div>
        </section>

        <section className="section tight" aria-labelledby="ck-verdict">
          <div className="wrap">
            <div className="ck-verdict">
              <h2 id="ck-verdict">The short version</h2>
              <p>{c.verdict}</p>
            </div>
          </div>
        </section>

        <section className="wrap section tight" aria-labelledby="ck-cta">
          <div className="ck-cta">
            <div className="ck-cta-copy">
              <h2 id="ck-cta">
                Choose{" "}
                <span className="ck-cta-name">
                  Profaily
                  <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10C48 4 120 2 197 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
                </span>{" "}
                for your short videos
              </h2>
              <p>One upload to TikTok, Reels and Shorts, checked for each platform before it goes out.</p>
            </div>
            <div className="ck-cta-act">
              <svg className="ck-cta-loop" viewBox="0 0 120 130" aria-hidden="true">
                <path d="M30 120C70 90 75 40 45 15C25 0 5 20 25 45C45 70 85 80 112 74" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M100 64l13 10-11 13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a className="ck-cta-btn" href={links.register}>Start for $0 <Arrow /></a>
            </div>
          </div>
        </section>
        <section className="section tight" aria-labelledby="ck-more">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="ck-more">More comparisons</h2>
            </div>
            <div className="grid-3">
              {comparisonList.filter((o) => o.slug !== c.slug).map((o) => (
                <a className="tile-card" href={`/compare/${o.slug}`} key={o.slug}>
                  <h3 className="cmp-hub-h">{`Profaily vs ${o.rival}`}</h3>
                  <p>{o.meta.description}</p>
                  <span className="more-link">See the comparison <Arrow /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </PageShell>
  );
}
