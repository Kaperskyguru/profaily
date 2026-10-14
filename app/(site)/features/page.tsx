import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { PlatformIcon } from "@/components/ui/icons";
import { featureGroups, featuresHubMeta, hubPlatforms } from "@/content/features-hub";
import { links } from "@/lib/links";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(featuresHubMeta);

const pad = (n: number) => String(n).padStart(2, "0");

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={featuresHubMeta.path} />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb"><a href="/">Home</a><span>›</span><span>Features</span></div>
            <h1>Everything around short-form video marketing, in one flow.</h1>
            <p className="lede">Plan the operation, publish with channel-aware checks, respond to audience intent, route leads, and use evidence to improve what comes next.</p>
            <div className="actions">
              <a className="button primary" href={links.register}>Start your 5-day free trial&nbsp; →</a>
              <a className="button secondary" href="/pricing">See pricing</a>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">All features</div>
              <h2>Built around the work businesses need to do.</h2>
              <p>Follow the product journey from video planning to reliable publishing, audience response, lead follow-up, and learning.</p>
            </div>
            {featureGroups.map((group, i) => (
              <div className="feature-index-group" key={group.href}>
                <div className="feature-index-head">
                  <h3><span className="phase-number">{pad(i + 1)}</span>{group.title}</h3>
                  <a href={group.href}>Detailed page&nbsp; →</a>
                </div>
                <div className="feature-index-items">
                  {group.items.map(([anchor, label], j) => (
                    <a href={`${group.href}#${anchor}`} key={anchor}><span>{pad(j + 1)}</span><b>{label}</b></a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="page-section alt" id="channels">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Video-based platforms</div>
              <h2>Built for TikTok, Instagram, YouTube, and Facebook.</h2>
              <p>See what the connected workflow delivers for each network and where platform requirements shape available actions.</p>
            </div>
            <div className="platform-grid">
              {hubPlatforms.map((p) => (
                <a className="platform-card" href={p.href} key={p.href}>
                  <span className={`platform-badge platform-icon ${p.platform}-icon`}>
                    <PlatformIcon platform={p.platform} gradientId={p.gradientId} />
                  </span>
                  <h3>{p.name} <span className="arrow">↗</span></h3>
                  <p>{p.body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
