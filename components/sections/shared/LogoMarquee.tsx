/**
 * "Businesses using Profaily": the same strip as the app's pricing dialog
 * (frontend/components/billing/customer-logos.tsx): flat logos at 60%, a 70s loop, still under reduced motion.
 */
const LOGOS = [
  { name: "FastApply", src: "/assets/customer-logos/fastapply.png", w: 140, h: 39, cls: "flat" },
  { name: "ApplyScout", src: "/assets/customer-logos/applyscout.svg", w: 32, h: 32, cls: "flat", withName: true },
  { name: "Mastering Backend", src: "/assets/customer-logos/mastering-backend.png", w: 32, h: 32, cls: "grey", withName: true },
  { name: "Droomwork", src: "/assets/customer-logos/droomwork.svg", w: 150, h: 41, cls: "flat" },
];

/** One loop: the set twice, so the moving row is always wider than the strip and never shows a gap. */
const LOOP = [...LOGOS, ...LOGOS];

function Pass({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined}>
      {LOOP.map((l, i) => (
        <li key={`${l.name}-${i}`} aria-hidden={i >= LOGOS.length || undefined}>
          <img src={l.src} alt={hidden || l.withName || i >= LOGOS.length ? "" : l.name} width={l.w} height={l.h} className={l.cls} style={{ width: l.w }} loading="lazy" />
          {l.withName && <span>{l.name}</span>}
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <section className="wrap logos" aria-label="Businesses using Profaily">
      <p>Businesses using Profaily</p>
      <div className="logo-marquee">
        <div className="logo-track">
          <Pass />
          <Pass hidden />
        </div>
      </div>
    </section>
  );
}
