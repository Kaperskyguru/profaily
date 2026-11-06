import { loadAllPosts } from "./load";

export type { PostContent } from "./types";
export { CATEGORIES, type Category } from "./categories";

/** Every post in posts/*.md, featured first then newest first. A new post needs nothing registered: add the file. */
export const postList = loadAllPosts();

/** Keyed by route slug (/blog/<slug>). */
export const posts = Object.fromEntries(postList.map((p) => [p.slug, p]));
