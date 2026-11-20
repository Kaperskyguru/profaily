import "@/app/styles/compare-features.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { faqJsonLd } from "@/content/comparisons";
import { featureGroups } from "@/content/compare";
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
      <JsonLd data={faqJsonLd(c.faq)} />
      <main className="pg-compare pg-cf">
        <PageHero
          solo
          crumbs={[{ href: "/compare", label: "Compare" }, { label: `Profaily vs ${c.rival}` }]}
          pill={`Profaily vs ${c.rival}`}
          title={<>Profaily vs <em className="cf-em">{c.rival}</em></>}
          lede={c.hero.lede}
          secondary={{ href: "#features", label: "See every feature" }}
          note={`${c.rival} details checked ${c.checked}.`}
        />

        <section className="section tight" id="features" aria-labelledby="ck-score">
          <div className="wrap">
            <h2 id="ck-score" className="sr-only">{`Profaily vs ${c.rival}, feature by feature`}</h2>

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

        <Faq heading={`${c.rival} alternative FAQ`} items={c.faq} />

        <CtaBand heading={c.cta.title} lede={c.cta.body} secondary={{ href: "/pricing", label: "See pricing" }} />
      </main>
    </PageShell>
  );
}
