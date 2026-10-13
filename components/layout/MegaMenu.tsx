import { Chevron, PlatformIcon } from "@/components/ui/icons";
import type { MegaColumn, MegaLinkData } from "@/content/nav";

function MegaLink({ link }: { link: MegaLinkData }) {
  const icon = link.icon;
  return (
    <a className="mega-link" href={link.href}>
      {typeof icon === "string" ? (
        <span className="mega-icon">{icon}</span>
      ) : (
        <span className={`mega-icon platform-icon ${icon.platform}-icon`}>
          <PlatformIcon platform={icon.platform} />
        </span>
      )}
      <span>
        <b>{link.title}</b>
        <small>{link.text}</small>
      </span>
    </a>
  );
}

export function MegaMenu(props: {
  id: string;
  label: string;
  extraClass?: string;
  columns?: MegaColumn[];
  children?: React.ReactNode; // custom columns (tools)
  foot: { href: string; strong: string; rest: string; cta: string };
}) {
  return (
    <div className="nav-group">
      <button className="menu-trigger" aria-expanded="false" aria-controls={props.id}>
        {props.label} <Chevron />
      </button>
      <div className={`mega-menu${props.extraClass ? " " + props.extraClass : ""}`} id={props.id}>
        <div className="mega-grid">
          {props.columns?.map((c) => (
            <div className="mega-col" key={c.heading}>
              <h3>{c.heading}</h3>
              {c.links.map((l) => <MegaLink key={l.href} link={l} />)}
            </div>
          ))}
          {props.children}
        </div>
        <a className="mega-foot" href={props.foot.href}>
          <span><strong>{props.foot.strong}</strong> {props.foot.rest}</span>
          <span>{props.foot.cta}&nbsp; →</span>
        </a>
      </div>
    </div>
  );
}
export { MegaLink };
