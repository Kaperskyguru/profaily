import { footerGroups } from "@/content/nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-layout">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <a href="/"><img src="/assets/profaily-lockup-white.svg" alt="Profaily" /></a>
              <p>The operating system for short-form video marketing.</p>
            </div>
            <div className="footer-meta">
              <span>© 2026 Profaily</span>
              <span>Platform actions depend on account access and network capabilities.</span>
            </div>
          </div>
          <nav className="footer-link-grid" aria-label="Footer">
            {footerGroups.map((g) => (
              <section className="footer-col footer-link-group" key={g.heading}>
                <h4>{g.heading}</h4>
                <div className="footer-link-list">
                  {g.links.map((l) => <a href={l.href} key={l.href}>{l.label}</a>)}
                </div>
              </section>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
