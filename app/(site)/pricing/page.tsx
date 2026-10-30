import "@/app/styles/pricing.css";
import { PageShell } from "@/components/layout/PageShell";
import { PlanPrice } from "@/components/sections/shared/PlanPrice";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { Faq } from "@/components/sections/shared/Faq";
import { LogoMarquee } from "@/components/sections/shared/LogoMarquee";
import { Pricing } from "@/components/sections/shared/Pricing";
import { Glyph, Icon, type IconName, type Integration } from "@/components/ui/Glyph";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { faqJsonLd } from "@/content/comparisons";
import { plans, TRIAL_DAYS } from "@/content/plans";
import { compareSections, pricingFaq, pricingMeta, type Cell } from "@/content/pricing";
import { links } from "@/lib/links";

const CHANNELS = ["tiktok", "instagram", "youtube", "facebook"];
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(pricingMeta);

const [creator, business] = plans;

function Value({ v }: { v: Cell }) {
  if (v === true) return <><Icon name="check" /><span className="sr-only">Included</span></>;
  if (v === false) return <><span className="no" aria-hidden="true">—</span><span className="sr-only">Not included</span></>;
  return <>{v}</>;
}

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={pricingMeta.path} />
      <JsonLd data={faqJsonLd(pricingFaq)} />
      <main className="pg-pricing">
        <Pricing as="h1" />

        <section className="wrap section tight compare" aria-labelledby="compare-h">
          <div className="sec-head center rv">
            <h2 id="compare-h">Compare plans and features</h2>
            <p className="lead">Both plans distribute to TikTok, Instagram, YouTube and Facebook. Business adds brands, team members and approvals.</p>
          </div>
          <div className="table-wrap rv">
            <table>
              <caption className="sr-only">Creator and Business plans compared</caption>
              <thead>
                <tr>
                  <th scope="col"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="plan-col">
                    {creator.name}
                    <small><PlanPrice plan="creator" /></small>
                    <a className="btn btn-ghost" href={links.register}>{creator.cta}</a>
                  </th>
                  <th scope="col" className="plan-col rec">
                    {business.name}
                    <small><PlanPrice plan="business" /></small>
                    <a className="btn btn-primary" href={links.register}>{business.cta}</a>
                  </th>
                </tr>
              </thead>
              {compareSections.map((sec) => (
                <tbody key={sec.title}>
                  <tr className="grp">
                    <th scope="colgroup" colSpan={3}>
                      {sec.title}
                      {sec.description && <span>{sec.description}</span>}
                    </th>
                  </tr>
                  {sec.rows.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">
                        <span className="rl">
                          {CHANNELS.includes(r.icon) ? <Glyph name={r.icon as Integration} id={`cmp-${r.icon}`} /> : <Icon name={r.icon as IconName} />}
                          <span>
                            {r.label}
                            {r.note && <em>{r.note}</em>}
                            <small>{r.tip}</small>
                          </span>
                        </span>
                      </th>
                      <td><Value v={r.creator} /></td>
                      <td className="rec"><Value v={r.business} /></td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
          <p className="fine">
            Prices shown are monthly; yearly prices are in the plan cards above. The {TRIAL_DAYS}-day free trial is on Business.
          </p>
        </section>

        <LogoMarquee />

        <Faq
          id="pricing-faq"
          heading="Pricing questions"
          lede={<>Something else? Email <a href="mailto:support@useprofaily.com">support@useprofaily.com</a> or see <a href="/contact">contact</a>.</>}
          items={pricingFaq}
        />

        <CtaBand
          heading="Try Business free for 14 days"
          lede="Connect your channels, schedule a week of videos, and invite your team before you pay."
          secondary={{ href: "/contact", label: "Questions? Contact us" }}
        />
      </main>
    </PageShell>
  );
}
