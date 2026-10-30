import { Glyph, Icon } from "@/components/ui/Glyph";
import { navMenus, type NavLink } from "@/content/nav";
import { links } from "@/lib/links";

function DropLink({ link }: { link: NavLink }) {
  return (
    <a href={link.href}>
      <i className="ddi">
        {link.glyph ? <Glyph name={link.glyph} id={`nav-${link.glyph}`} /> : link.icon ? <Icon name={link.icon} /> : null}
      </i>
      <b>{link.title}</b>
      <span>{link.text}</span>
    </a>
  );
}

/** Jobmate's split pill nav: logo tile, link bar with dropdowns, CTA. Dropdowns open on hover (desktop) or click/Enter; NavBehavior wires them. */
export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav" data-nav>
        <a className="nav-seg nav-logo" href="/" aria-label="Profaily home">
          <img src="/assets/profaily-lockup-trim.svg" alt="" width="128" height="28" />
        </a>
        <nav className="nav-seg nav-links" aria-label="Main">
          {navMenus.map((m, i) => (
            <div className={`dd${m.align === "start" ? " start" : ""}`} key={m.label} data-dd>
              <button type="button" aria-expanded="false" aria-controls={`dd-${i}`}>
                {m.label}
                <Icon name="chevron" />
              </button>
              <div className="ddp" id={`dd-${i}`}>
                <div className="ddmain">
                  <div className="ddcols">
                    {m.columns.map((c, j) => (
                      <div className="ddcol" key={j}>
                        {c.heading && <span className="ddh">{c.heading}</span>}
                        {c.links.map((l) => <DropLink key={l.title} link={l} />)}
                      </div>
                    ))}
                  </div>
                  {m.foot && <a className="ddfoot" href={m.foot.href}>{m.foot.label} <Icon name="chevronRight" /></a>}
                </div>
                {m.feature && (
                  <a className="ddfeat" href={m.feature.href}>
                    <span className="ddfimg"><img src={m.feature.image} alt={m.feature.alt} width="1600" height="1231" loading="lazy" /></span>
                    <b>{m.feature.title}</b>
                    <span>{m.feature.text}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
          <a href="/pricing">Pricing</a>
        </nav>
        <a className="nav-seg nav-signin" href={links.login}>Login</a>
        <a className="nav-seg nav-cta" href={links.register}>Sign up</a>
        <button className="nav-seg nav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="msheet" data-burger>
          <Icon name="menu" />
        </button>
      </header>

      <div className="msheet" id="msheet" data-msheet hidden>
        <div className="msheet-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="msheet-top">
            <a href="/" aria-label="Profaily home"><img src="/assets/profaily-lockup-trim.svg" alt="" width="110" height="24" /></a>
            <button className="msheet-close" type="button" aria-label="Close menu" data-close><Icon name="close" /></button>
          </div>
          {navMenus.map((m) => (
            <details key={m.label}>
              <summary>{m.label}<Icon name="chevron" /></summary>
              <div className="mlinks">
                {m.columns.map((c, j) => (
                  <div key={j} style={{ display: "contents" }}>
                    {c.heading && m.columns.length > 1 && <span className="mh">{c.heading}</span>}
                    {c.links.map((l) => <a key={l.title} href={l.href}>{l.title}</a>)}
                  </div>
                ))}
              </div>
            </details>
          ))}
          <a className="mtop" href="/pricing">Pricing</a>
          <div className="mact">
            <a className="btn btn-primary" href={links.register}>Sign up</a>
            <a className="btn btn-ghost" href={links.login}>Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
