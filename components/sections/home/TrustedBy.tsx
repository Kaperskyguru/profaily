type Logo = { name: string; href: string; src: string; w: number; h: number; look: "flat" | "grey"; withName?: boolean };

/**
 * Only real customers belong here. Add creators and agencies as further groups once there are names and
 * logos to show; a group's heading appears as soon as there is more than one.
 */
const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Businesses",
    logos: [
      { name: "FastApply", href: "https://fastapply.co/", src: "/assets/customer-logos/fastapply.png", w: 150, h: 42, look: "flat" },
      { name: "ApplyScout", href: "https://applyscout.app/", src: "/assets/customer-logos/applyscout.svg", w: 38, h: 38, look: "flat", withName: true },
      { name: "Mastering Backend", href: "https://masteringbackend.com/", src: "/assets/customer-logos/mastering-backend.png", w: 38, h: 38, look: "grey", withName: true },
      { name: "Droomwork", href: "https://droomwork.io/", src: "/assets/customer-logos/droomwork.svg", w: 160, h: 44, look: "flat" },
    ],
  },
];

const LOGOS = GROUPS.flatMap((g) => g.logos);
/** One loop: the set twice, so the moving row is always wider than the screen and never shows a gap. */
const LOOP = [...LOGOS, ...LOGOS];

function Pass({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined}>
      {LOOP.map((l, i) => {
        const copy = hidden || i >= LOGOS.length;
        return (
          <li key={`${l.name}-${i}`} aria-hidden={i >= LOGOS.length || undefined}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={copy ? undefined : `${l.name} website`} tabIndex={copy ? -1 : undefined}>
              <img src={l.src} alt="" width={l.w} height={l.h} className={l.look} style={{ width: l.w }} loading="lazy" />
              {l.withName && <span>{l.name}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** White band under the hero recording: the recording fades out into it (Jobmate), then the logos run past. */
export function TrustedBy() {
  return (
    <section className="trusted" aria-labelledby="trusted-h">
      <div className="wrap">
        <h2 id="trusted-h">Businesses using Profaily:</h2>
      </div>
      <div className="tmarq">
        <div className="logo-track">
          <Pass />
          <Pass hidden />
        </div>
      </div>
    </section>
  );
}
