import { positioning } from "@/content/positioning";

/** The positioning line, shown in every hero, the closing band and the footer. */
export function FitLine({ withSub = false, className = "" }: { withSub?: boolean; className?: string }) {
  return (
    <p className={`fit-line ${className}`.trim()}>
      <span className="fit-dot" aria-hidden="true" />
      <span>
        <b>{positioning.line}</b>
        {withSub && <span className="fit-sub"> {positioning.sub}</span>}
      </span>
    </p>
  );
}
