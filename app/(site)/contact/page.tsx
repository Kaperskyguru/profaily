import { PageShell } from "@/components/layout/PageShell";
import { OgUrl } from "@/components/ui/OgUrl";
import { contactCards, contactMeta } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(contactMeta);

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={contactMeta.path} />
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb"><a href="/">Home</a><span>·</span><span>Contact Us</span></div>
            <div className="eyebrow">CONTACT PROFAILY</div>
            <h1>How can we help?</h1>
            <p className="lede">Choose the right route for product support, plan questions, or privacy requests.</p>
          </div>
        </section>
        <section className="page-section">
          <div className="wrap">
            <div className="value-grid">
              {contactCards.map((c) => (
                <article className="value-card" key={c.heading}>
                  <div className="eyebrow">{c.eyebrow}</div>
                  <h3>{c.heading}</h3>
                  <p>{c.body}</p>
                  {c.links.map((l) => (
                    <a className="feature-link" href={l.href} key={l.href}>{l.label}&nbsp; →</a>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
