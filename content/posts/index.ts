import type { PostContent } from "./types";
import { post as oneVideoFourPlatforms } from "./one-video-four-platforms";
import { post as approvalWorkflow } from "./short-form-video-approval-workflow";
import { post as measurement } from "./short-form-video-measurement";
import { post as publishingWorkflow } from "./short-form-video-publishing-workflow";
import { post as commentsIntoLeads } from "./turn-video-comments-into-leads";

export type { PostContent } from "./types";

/** Blog index order: the first post is the featured guide. */
export const postList: PostContent[] = [
  oneVideoFourPlatforms,
  publishingWorkflow,
  commentsIntoLeads,
  measurement,
  approvalWorkflow,
];

/** Keyed by route slug (/blog/<slug>). */
export const posts: Record<string, PostContent> = Object.fromEntries(postList.map((p) => [p.slug, p]));
