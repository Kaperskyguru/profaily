import type { ReactNode } from "react";
import { Arrow } from "@/components/ui/Glyph";
import { links } from "@/lib/links";
import { Crumbs } from "./Crumbs";

/**
 * Subpage hero on the off-white grid ground: breadcrumbs, mint pill, h1, lede, actions, note, and an
 * optional visual on the right. `solo` centres it with no visual (hubs).
 */
export function PageHero({
  crumbs,
  pill,
  title,
  lede,
  primary = { href: links.register, label: "Start 14-day free trial" },
  secondary,
  note,
  visual,
  solo,
}: {
  crumbs?: { href?: string; label: string }[];
  pill?: string;
  title: ReactNode;
  lede?: ReactNode;
  primary?: { href: string; label: string } | null;
  secondary?: { href: string; label: string };
  note?: ReactNode;
  visual?: ReactNode;
  solo?: boolean;
}) {
  return (
    <header className={`page-hero has-grid${solo ? " solo" : ""}`}>
      <div className="wrap grid">
        <div>
          {crumbs && <Crumbs items={crumbs} />}
          {pill && <p><span className="pill">{pill}</span></p>}
          <h1>{typeof title === "string" ? title.replace(/(\w)-(\w)/g, "$1\u2011$2") : title}</h1>
          {lede && <p className="lead">{lede}</p>}
          {(primary || secondary) && (
            <div className="actions">
              {primary && <a className="btn btn-primary" href={primary.href}>{primary.label} <Arrow /></a>}
              {secondary && <a className="btn btn-ghost" href={secondary.href}>{secondary.label}</a>}
            </div>
          )}
          {note && <p className="note">{note}</p>}
        </div>
        {visual && <div className="visual">{visual}</div>}
      </div>
    </header>
  );
}
