import type { PostContent } from "./types";
import { loadPost } from "./load";

export type { PostContent } from "./types";

/** Blog index order: the first post is the featured guide. Add a new post's slug here. */
const slugs = [
  "one-video-four-platforms",
  "short-form-video-publishing-workflow",
  "turn-video-comments-into-leads",
  "short-form-video-measurement",
  "short-form-video-approval-workflow",
];

export const postList: PostContent[] = slugs.map(loadPost);

/** Keyed by route slug (/blog/<slug>). */
export const posts: Record<string, PostContent> = Object.fromEntries(postList.map((p) => [p.slug, p]));
