import "@/app/styles/compare.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Arrow } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { comparisonList } from "@/content/compare";
import { pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Profaily vs other schedulers | Profaily",
  description: "Profaily compared feature by feature with the schedulers short-video teams use for TikTok, Instagram Reels and YouTube Shorts.",
  path: "/compare",
};

export const metadata = pageMetadata(meta);

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={meta.path} type="website" title={meta.title} description={meta.description} />
      <main className="pg-compare">
        <PageHero
          solo
          crumbs={[{ label: "Compare" }]}
          title="Profaily vs other schedulers"
          lede="How Profaily compares, feature by feature, with the tools short-video teams use today."
          secondary={{ href: "/pricing", label: "See pricing" }}
        />
        <section className="section tight" aria-label="Comparisons">
          <div className="wrap grid-3">
            {comparisonList.map((c) => (
              <a className="tile-card" href={`/compare/${c.slug}`} key={c.slug}>
                <h2 className="cmp-hub-h">{`Profaily vs ${c.rival}`}</h2>
                <p>{c.meta.description}</p>
                <span className="more-link">See the comparison <Arrow /></span>
              </a>
            ))}
          </div>
        </section>
        <CtaBand secondary={{ href: "/features", label: "Explore all features" }} />
      </main>
    </PageShell>
  );
}
