import type { ReactNode } from "react";
import { Arrow } from "@/components/ui/Glyph";
import { links } from "@/lib/links";

/** Real customers, shown as a stack of round marks. */
const CUSTOMERS = [
  { name: "FastApply", src: "/assets/customer-logos/fastapply-mark.png", flat: true },
  { name: "ApplyScout", src: "/assets/customer-logos/applyscout.svg" },
  { name: "Mastering Backend", src: "/assets/customer-logos/mastering-backend.png" },
  { name: "Droomwork", src: "/assets/customer-logos/droomwork-mark.svg" },
];

/** The closing card on subpages: the old "Discover Profaily" promo, with real screenshots stacked beside the ask. */
export function CtaBand({
  heading = "Put your video marketing workflow in one place",
  lede = "Plan and publish across TikTok, Instagram, YouTube and Facebook. Keep each channel’s details in view, then follow every video from one workspace.",
  primary = { href: links.register, label: "Check out Profaily" },
  secondary,
}: {
  heading?: string;
  lede?: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="wrap section tight" aria-label="Get started">
      <div className="disc">
        <div className="disc-copy">
          <p className="disc-name">
            Discover <img src="/icon.svg" alt="" width="18" height="18" /> Profaily
          </p>
          <h2>{heading}</h2>
          {lede && <p className="lead">{lede}</p>}
          <div className="actions">
            <a className="btn btn-mint" href={primary.href}>{primary.label} <Arrow /></a>
            {secondary && <a className="btn btn-ghost" href={secondary.href}>{secondary.label}</a>}
          </div>
          <div className="disc-proof">
            <ul aria-label="Businesses using Profaily">
              {CUSTOMERS.map((c) => (
                <li key={c.name} title={c.name}>
                  <img src={c.src} alt="" className={"flat" in c ? "flat" : undefined} loading="lazy" />
                </li>
              ))}
            </ul>
            <span>Creators using Profaily</span>
          </div>
        </div>
        <div className="disc-stack" aria-hidden="true">
          <img className="s3" src="/assets/app/mcp-4-review.jpg" alt="" width="1600" height="1231" loading="lazy" />
          <img className="s2" src="/assets/app/mcp-5-queue.jpg" alt="" width="1600" height="1231" loading="lazy" />
          <img className="s1" src="/assets/app/mcp-6-calendar.jpg" alt="" width="1600" height="1231" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
