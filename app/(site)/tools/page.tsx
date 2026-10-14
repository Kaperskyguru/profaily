import { PageShell } from "@/components/layout/PageShell";
import { Banner } from "@/components/sections/shared/Banner";
import { OgUrl } from "@/components/ui/OgUrl";
import { toolCards, toolsIndexMeta } from "@/content/tools";
import { links } from "@/lib/links";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(toolsIndexMeta);

const suite = [
  { icon: "↗", name: "Auto Cross Post", note: "New video → selected channels" },
  { icon: "◉", name: "Profile Manager", note: "One update → connected profiles" },
  { icon: "↻", name: "Smart Repost", note: "Library video → fresh copy → channels" },
];

export default function Page() {
  return (
    <PageShell toolsIntro="Focused tools for the work around your social channels.">
      <OgUrl path={toolsIndexMeta.path} />
      <main className="tools-page">
        {" "}
        <section className="page-hero tools-hero">
          <div className="wrap page-hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/">Home</a>
                <span>·</span>
                <span>Tools</span>
              </div>
              <div className="eyebrow">PROFAILY TOOLS</div>
              <h1>Make more of every social post.</h1>
              <p className="lede">Focused tools for the work around your channels: distribute new videos, manage profile updates, and put eligible library videos back into rotation.</p>
              <div className="tool-cta-row">
                <a className="button primary" href={links.register}>Start your free trial&nbsp; →</a>
                <a className="button secondary" href="/features">Explore Profaily</a>
              </div>
            </div>
            <div className="tool-hero-visual tool-suite-visual" aria-label="Profaily tools: video distribution and profile management">
              <div className="tool-visual-kicker">THREE PRACTICAL TOOLS</div>
              {suite.map((s) => (
                <div className="tool-suite-row" key={s.name}>
                  <span className="tool-suite-icon">{s.icon}</span>
                  <div>
                    <strong>{s.name}</strong>
                    <small>{s.note}</small>
                  </div>
                  <span className="tool-suite-arrow">↗</span>
                </div>
              ))}
              <div className="tool-visual-note">Set up once. Keep your social work moving.</div>
            </div>
          </div>
        </section>
        {" "}
        <section className="page-section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">CHOOSE A TOOL</div>
              <h2>Three tools. One connected workspace.</h2>
              <p>Spend less time repeating the same work across platforms. Choose the tool that fits what you need to do.</p>
            </div>
            <div className="tool-product-grid">
              {toolCards.map((t) => (
                <a className="tool-product-card" href={t.href} key={t.href}>
                  <div className="tool-card-icon">{t.icon}</div>
                  <div className="eyebrow">{t.eyebrow}</div>
                  <h3>{t.name}</h3>
                  <p>{t.body}</p>
                  <span className="feature-link">{`See how ${t.name} works\u00a0 →`}</span>
                  <div className="tool-card-platforms">{t.platforms}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
        {" "}
        <Banner
          eyebrow="YOUR CHANNELS, WORKING TOGETHER"
          heading="Keep the work moving after you publish."
          body="Bring distribution, publishing, and profile updates into the same social workflow."
        />
        {" "}
      </main>
    </PageShell>
  );
}
