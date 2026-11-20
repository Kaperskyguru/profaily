import { buffer } from "./buffer";
import { hootsuite } from "./hootsuite";
import { later } from "./later";
import { metricool } from "./metricool";
import { postiz } from "./postiz";
import { publer } from "./publer";
import { repurpose } from "./repurpose";
import { featureGroups, type FeatureId, type FeatureRow } from "./checklist";
import type { AnyComparison } from "./types";

export type { AnyComparison, Cell, ChecklistComparison, Mark } from "./types";
export { featureCount, featureGroups } from "./checklist";

/** Every comparison page, in the order the /compare hub lists them. Add a rival: write its file, add it here. */
export const comparisonList: AnyComparison[] = [metricool, buffer, postiz, repurpose, later, hootsuite, publer];

export const comparisonsBySlug: Record<string, AnyComparison> = Object.fromEntries(comparisonList.map((c) => [c.slug, c]));

/** True when the page shows a tick for the rival on this row (it has the feature, fully or in part). */
export const rivalHas = (c: AnyComparison, id: FeatureId) => c.cells[id]?.mark === "yes" || c.cells[id]?.mark === "partial";

/** The Profaily features the rival's own docs don't show: the rows that render as a cross. */
export const rivalGaps = (c: AnyComparison): FeatureRow[] => featureGroups.flatMap((g) => g.rows).filter((r) => !rivalHas(c, r.id));

/** "A, B and C" */
export const listWords = (words: string[]) => (words.length < 2 ? words.join("") : `${words.slice(0, -1).join(", ")} and ${words.at(-1)}`);
