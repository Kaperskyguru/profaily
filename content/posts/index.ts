import type { PostContent } from "./types";
import { loadPost } from "./load";

export type { PostContent } from "./types";

/** Blog index order: the first post is the featured guide. Add a new post's slug here. The generated posts are parked in content/posts/_parked/ until real ones replace them. */
const slugs: string[] = [];

export const postList: PostContent[] = slugs.map(loadPost);

/** Keyed by route slug (/blog/<slug>). */
export const posts: Record<string, PostContent> = Object.fromEntries(postList.map((p) => [p.slug, p]));
