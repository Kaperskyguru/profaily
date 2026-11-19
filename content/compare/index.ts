import { buffer } from "./buffer";
import { later } from "./later";
import { metricool } from "./metricool";
import { postiz } from "./postiz";
import { repurpose } from "./repurpose";
import type { AnyComparison } from "./types";

export type { AnyComparison, Cell, ChecklistComparison, Comparison, FeatureRow, Mark } from "./types";
export { featureCount, featureGroups } from "./checklist";

/** Every comparison page, in the order the /compare hub lists them. Add a rival: write its file, add it here. */
export const comparisonList: AnyComparison[] = [metricool, buffer, postiz, repurpose, later];

export const comparisonsBySlug: Record<string, AnyComparison> = Object.fromEntries(comparisonList.map((c) => [c.slug, c]));
