import { positioning } from "@/content/positioning";
import "@/app/styles/compare.css";
import "@/app/styles/compare-features.css";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { CompareList } from "@/components/sections/compare/CompareList";
import { Arrow, Glyph } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { links } from "@/lib/links";
import { comparisonList, featureCount, featureGroups, listWords, rivalGaps, rivalHas } from "@/content/compare";
import type { Cell, ChecklistComparison } from "@/content/compare";
import { faqJsonLd } from "@/content/comparisons";
import { plans, TRIAL_DAYS, YEARLY_SAVING } from "@/content/plans";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/**
 * The questions under "The short version", each answered only from this page's own data (the rival's
 * cells and the plans), so they never say more than the table does. Also emitted as FAQPage JSON-LD.
 */
function questions(c: ChecklistComparison) {
  const gaps = rivalGaps(c);
  const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
  const channel = (id: "tiktok" | "instagram" | "youtube", name: string) => {
    const cell = c.cells[id];
    return cell && cell.mark !== "no" ? `${name}: ${lower(cell.text)}` : `${name}: not shown in its docs`;
  };
  const [creator, business] = plans;
  return [
    {
      q: `What does Profaily do that ${c.rival} doesn't?`,
      a: gaps.length
        ? `${c.rival}'s own website and help center, checked ${c.checked}, don't show ${gaps.length} of the ${featureCount} Profaily features on this page: ${listWords(gaps.map((g) => lower(g.label)))}.`
        : `${c.rival}'s own website and help center, checked ${c.checked}, show all ${featureCount} Profaily features on this page. The difference is in how each one works, set out row by row in the table.`,
    },
    {
      q: `Does ${c.rival} publish to TikTok, Instagram Reels and YouTube Shorts?`,
      a: `${[channel("tiktok", "TikTok"), channel("instagram", "Instagram"), channel("youtube", "YouTube")].join(". ")}. Profaily publishes straight to all three, and to longer YouTube videos too.`,
    },
    {
      q: "How much does Profaily cost?",
      a: `${creator.name} is ${creator.price.usd.m} a month for one person. ${business.name} is ${business.price.usd.m} a month for teams that approve videos before they go out, and comes with a ${TRIAL_DAYS}-day free trial. Paying yearly saves ${YEARLY_SAVING}%.`,
    },
  ];
}

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
  const faq = questions(c);
  return (
    <PageShell>
      <OgUrl path={path} type="website" title={c.meta.title} description={c.meta.description} image={undefined} />
      <JsonLd data={faqJsonLd(faq)} />
      <main className="pg-compare pg-cf">
        <PageHero
          solo
          crumbs={[{ href: "/compare", label: "Compare" }, { label: `Profaily vs ${c.rival}` }]}
          title={<>Looking for a <em className="cf-em">{c.rival} alternative</em>?</>}
          lede={c.hero.lede}
          secondary={{ href: "#features", label: "Compare features" }}
          note={`${c.rival} details checked ${c.checked}.`}
        />

        <section className="cf-hero-media" aria-label="Profaily">
          <div className="wrap">
            <img className="cf-hero-shot" src="/assets/compare/hero-schedule.jpg" alt="Profaily with a short video open and the Schedule or publish window showing TikTok, Instagram and YouTube each marked Ready" width={1600} height={1092} />
            <p className="cf-posts-to">
              <span>Publishes to</span>
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
                  <section className="ck-group" key={g.title} aria-labelledby={`ck-${slug(g.title)}`}>
                    <header className="ck-group-head">
                      <h3 id={`ck-${slug(g.title)}`}>{g.title}</h3>
                    </header>
                    <table className="ck-table">
                      <thead>
                        <tr>
                          <th scope="col"><span className="sr-only">Feature</span></th>
                          <th scope="col" className="us">Profaily</th>
                          <th scope="col">{c.rival}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Rows the rival has (tick) first, then the ones it doesn't (cross); each side keeps its order. */}
                        {[...g.rows.filter((r) => rivalHas(c, r.id)), ...g.rows.filter((r) => !rivalHas(c, r.id))].map((r) => (
                          <tr key={r.id}>
                            <th scope="row" className="ck-label">{r.label}<small>{r.us}</small></th>
                            <td><Tick cell={{ mark: "yes", text: r.us }} who="Profaily" /></td>
                            <td><Tick cell={c.cells[r.id]} who={c.rival} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

        <Faq heading={`Switching from ${c.rival}`} items={faq} id="ck-faq" />

        <section className="wrap section tight" aria-labelledby="ck-cta">
          <div className="ck-cta">
            <div className="ck-cta-copy">
              <h2 id="ck-cta">
                Choose{" "}
                <span className="ck-cta-name">
                  Profaily
                  <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10C48 4 120 2 197 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
                </span>{" "}
                if video is how you grow
              </h2>
              <p>{positioning.sub}</p>
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
            <CompareList items={comparisonList.filter((o) => o.slug !== c.slug)} level="h3" />
          </div>
        </section>

        <CtaBand />
      </main>
    </PageShell>
  );
}
