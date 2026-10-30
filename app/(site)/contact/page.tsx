import "@/app/styles/pricing.css";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBand } from "@/components/sections/shared/CtaBand";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Icon } from "@/components/ui/Glyph";
import { OgUrl } from "@/components/ui/OgUrl";
import { contactCards, contactHero, contactMeta, PRIVACY_EMAIL, SUPPORT_EMAIL } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(contactMeta);

const mailto = (email: string, subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export default function Page() {
  return (
    <PageShell>
      <OgUrl path={contactMeta.path} />
      <main id="main" className="pg-contact">
        <PageHero
          solo
          crumbs={[{ label: "Contact" }]}
          pill="Contact Profaily"
          title={contactHero.title}
          lede={contactHero.lede}
          primary={null}
          secondary={{ href: mailto(SUPPORT_EMAIL, "Profaily support"), label: "Email support" }}
          note={
            <>
              Support and billing: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              <br />
              Privacy: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
            </>
          }
        />

        <section className="wrap section tight" aria-labelledby="routes-h">
          <h2 id="routes-h" className="sr-only">Ways to reach us</h2>
          <div className="grid-3">
            {contactCards.map((c, i) => (
              <article className="tile-card rv" style={{ ["--d" as string]: `${i * 0.08}s` }} key={c.heading}>
                <span className="tile-ic"><Icon name={c.icon} /></span>
                <h3>{c.heading}</h3>
                <p>{c.body}</p>
                <a className="mail" href={mailto(c.email, c.subject)}>{c.email}</a>
                <div className="links">
                  {c.links.map((l) => (
                    <a className="more-link" href={l.href} key={l.href}>{l.label}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="more rv">
            <a className="more-link" href="/pricing">Compare plans</a>
            <a className="more-link" href="/pricing#pricing-faq">Pricing questions</a>
          </div>
        </section>

        <CtaBand secondary={{ href: "/pricing", label: "See pricing" }} />
      </main>
    </PageShell>
  );
}
