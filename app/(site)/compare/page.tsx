import "@/app/styles/compare.css";
import { PageShell } from "@/components/layout/PageShell";
import { CompareList } from "@/components/sections/compare/CompareList";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { OgUrl } from "@/components/ui/OgUrl";
import { comparisonList, featureCount } from "@/content/compare";
import { ORIGIN, pageMetadata } from "@/lib/metadata";

const meta = {
  title: "Profaily vs Buffer, Later, Metricool and more | Profaily",
  description: `Profaily compared with Buffer, Later, Metricool, Postiz and Repurpose.io for TikTok, Instagram Reels and YouTube Shorts: the same ${featureCount} features, checked against each tool's own help center.`,
  path: "/compare",
};

export const metadata = pageMetadata(meta);

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={meta.path} type="website" title={meta.title} description={meta.description} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Profaily comparisons",
          itemListElement: comparisonList.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Profaily vs ${c.rival}`,
            url: `${ORIGIN}/compare/${c.slug}`,
          })),
        }}
      />
      <main className="pg-compare">
        <PageHero
          solo
          crumbs={[{ label: "Compare" }]}
          title="Profaily vs other schedulers"
          lede={`The same ${featureCount} Profaily features, set against each tool's own website and help center. Pick the tool you use today.`}
          secondary={{ href: "/pricing", label: "See pricing" }}
        />
        <section className="section tight" aria-label="Comparisons">
          <div className="wrap">
            <CompareList items={comparisonList} />
          </div>
        </section>
        <CtaBand secondary={{ href: "/features", label: "Explore all features" }} />
      </main>
    </PageShell>
  );
}
