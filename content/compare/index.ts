import { buffer } from "./buffer";
import { later } from "./later";
import { metricool } from "./metricool";
import { postiz } from "./postiz";
import { repurpose } from "./repurpose";
import type { Comparison } from "./types";

export type { Cell, Comparison, FeatureRow, Mark } from "./types";

/** Every comparison page, in the order the /compare hub lists them. Add a rival: write its file, add it here. */
export const comparisonList: Comparison[] = [metricool, buffer, postiz, repurpose, later];

export const comparisonsBySlug: Record<string, Comparison> = Object.fromEntries(comparisonList.map((c) => [c.slug, c]));
