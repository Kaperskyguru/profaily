import { buffer } from "./buffer";
import { metricool } from "./metricool";
import { postiz } from "./postiz";
import type { Comparison } from "./types";

export type { Cell, Comparison, FeatureRow, Mark } from "./types";

/** Every comparison page, in the order the /compare hub lists them. Add a rival: write its file, add it here. */
export const comparisonList: Comparison[] = [metricool, buffer, postiz];

export const comparisonsBySlug: Record<string, Comparison> = Object.fromEntries(comparisonList.map((c) => [c.slug, c]));
