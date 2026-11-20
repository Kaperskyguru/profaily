import { Arrow } from "@/components/ui/Glyph";
import { featureCount, listWords, rivalGaps, type AnyComparison } from "@/content/compare";

const SHOWN = 3;

/**
 * One row per rival: its name, the Profaily features its own docs don't show, and how many of the
 * features it does show. Used by the /compare hub and "More comparisons" under each page.
 */
export function CompareList({ items, level = "h2" }: { items: AnyComparison[]; level?: "h2" | "h3" }) {
  const H = level;
  return (
    <ul className="cmp-list-rows">
      {items.map((c) => {
        const gaps = rivalGaps(c);
        const named = gaps.slice(0, SHOWN).map((g) => g.label.charAt(0).toLowerCase() + g.label.slice(1));
        const rest = gaps.length - named.length;
        return (
          <li className="rv" key={c.slug}>
            <a className="cmp-row" href={`/compare/${c.slug}`}>
              <H className="cmp-row-h">{`Profaily vs ${c.rival}`}</H>
              <p className="cmp-row-gaps">
                {gaps.length === 0
                  ? `${c.rival}'s docs show every feature on the list.`
                  : `Not in ${c.rival}'s docs: ${rest > 0 ? `${named.join(", ")} and ${rest} more` : listWords(named)}.`}
              </p>
              <p className="cmp-row-count">
                <b>{`${featureCount - gaps.length} of ${featureCount}`}</b>
                <span>{`Profaily features in ${c.rival}`}</span>
              </p>
              <span className="cmp-row-go" aria-hidden="true"><Arrow /></span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
