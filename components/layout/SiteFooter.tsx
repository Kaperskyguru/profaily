import { footerGroups } from "@/content/nav";
import { links } from "@/lib/links";

/** Buffer's footer layout (link columns, big wordmark, small print) in Profaily green. */
export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <nav className="cols" aria-label="Footer">
          {footerGroups.map((g) => (
            <div className="lk" key={g.heading}>
              <h2>{g.heading}</h2>
              {g.links.map((l) => <a key={`${g.heading}-${l.label}`} href={l.href}>{l.label}</a>)}
            </div>
          ))}
        </nav>
        <div className="bottom">
          <a href="/" aria-label="Profaily home">
            <img className="big" src="/assets/profaily-lockup-mint-trim.svg" alt="" width="480" height="105" loading="lazy" />
          </a>
          <div className="right">
            <p className="tag">The Agentic OS for short-form video marketing.</p>
            <p className="legal">
              © 2026 Profaily <span aria-hidden="true">|</span> <a href={links.privacy}>Privacy</a>{" "}
              <span aria-hidden="true">|</span> <a href={links.terms}>Terms</a> <span aria-hidden="true">|</span>{" "}
              <a href="/contact">Contact</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
