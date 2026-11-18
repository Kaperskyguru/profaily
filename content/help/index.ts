import { loadAllHelpPages } from "./load";

export type { HelpPage } from "./types";
export { HELP_SECTIONS } from "./sections";

/** Every live help page, in index order. */
export const helpList = loadAllHelpPages();
export const helpPages = Object.fromEntries(helpList.map((p) => [p.slug, p]));
