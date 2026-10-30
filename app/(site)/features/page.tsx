import "@/app/styles/features.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ChannelStrip } from "@/components/templates/FeaturePage";
import { Arrow } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { featureGroups, featuresHubMeta } from "@/content/features-hub";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(featuresHubMeta);

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={featuresHubMeta.path} />
      <main className="pg-feature pg-features-hub">
        <PageHero
          solo
          crumbs={[{ label: "Features" }]}
          pill="All features"
          title="Everything for short-form video, in one place"
          lede="Plan the operation, publish with channel-aware checks, respond to audience intent, route leads, and use evidence to improve what comes next."
          secondary={{ href: "/pricing", label: "See pricing" }}
        />

        <div className="wrap fx-hub-intro">
          <div className="sec-head center">
            <h2>Built around the work businesses need to do</h2>
            <p className="lead">Follow the product journey from video planning to reliable publishing, audience response, lead follow-up, and learning.</p>
          </div>
        </div>

        {featureGroups.map((g, gi) => {
          const items = g.capabilities.items;
          const hid = `group-${gi}-h`;
          return (
            <section className="section tight fx-group" aria-labelledby={hid} key={g.meta.path}>
              <div className="wrap">
                <div className="sec-head fx-head">
                  <div>
                    <h2 id={hid}>{g.name}</h2>
                    <p className="lead">{g.hero.title}</p>
                  </div>
                  <a className="more-link" href={g.meta.path}>Learn more<span className="sr-only"> about {g.name}</span> <Arrow /></a>
                </div>
                <div className={items.length % 4 === 0 ? "grid-4" : "grid-3"}>
                  {items.map((it) => (
                    <a className="tile-card rv" href={`${g.meta.path}#${it.id}`} key={it.id}>
                      <h3>{it.title}</h3>
                      <p>{it.body}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <ChannelStrip
          id="channels"
          idPrefix="hub"
          heading="Built for TikTok, Instagram, YouTube, and Facebook"
          lede="See what the connected workflow delivers for each channel and where channel requirements shape available actions."
        />

        <CtaBand />
      </main>
    </PageShell>
  );
}
