import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Buffer, checklist layout. Buffer cells come from Buffer's own docs (research notes in
 * research/compare/buffer.md, re-checked 25 Nov 2026). A feature its docs don't show is left out and renders as a cross.
 */
export const buffer: ChecklistComparison = {
  kind: "checklist",
  slug: "buffer-alternative",
  rival: "Buffer",
  meta: {
    title: "Buffer Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Buffer: every Profaily feature side by side with Buffer, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 25, 2026",
  hero: {
    lede:
      "Buffer is a good queue for every kind of post. Profaily does one thing: it gets short videos onto TikTok, Instagram Reels and YouTube in batches, each one checked against each platform before it's scheduled.",
  },
  verdict:
    "If your week is short videos, Profaily brings the whole batch in from Drive, Dropbox, OneDrive or a CSV file. When a platform would refuse a file, one tap fixes it, and if one platform fails you retry just that one while the rest stay posted.",
  workflow: {
    title: "A week of short videos, three platforms",
    lede: "Here's what getting a batch of videos onto TikTok, Reels and Shorts looks like in each tool, going by Buffer's own help center.",
    them: [
      "Upload each video by hand. Buffer's CSV upload takes text and single images, not video, and not YouTube.",
      "Customize the post for each network, then schedule it.",
      "Buffer re-encodes some videos for you. If one still breaks a network's limits, re-export it and upload it again.",
      "Each channel's post is separate after scheduling, so changes are made one post at a time.",
    ],
    us: [
      "Import the whole batch from Google Drive, Dropbox, OneDrive or a CSV file.",
      "Each video gets a tab per platform, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "Schedule it. If one platform fails, retry that one; the rest stay posted.",
    ],
  },  cells: {
    calendar: { mark: "yes", text: "Queue and calendar" },
    scheduling: { mark: "yes", text: "Pick a time, or the queue" },
    queue: { mark: "yes", text: "A posting schedule per channel" },
    drafts: { mark: "yes", text: "Drafts and tags" },
    // support.buffer.com/articles/how-to-upload-posts-in-bulk-to-buffer-cTIhl4mv6H: no video in bulk upload (checked 2026-11-25)
    import: { mark: "no", text: "CSV takes text and single images, not video" },
    tiktok: { mark: "yes", text: "Automatic or notification publishing" },
    instagram: { mark: "yes", text: "Automatic or Notify Me" },
    youtube: { mark: "yes", text: "Shorts" },
    // Facebook: support.buffer.com/article/555-using-facebook-with-buffer (checked 2026-11-25)
    facebook: { mark: "yes", text: "Pages, Reels included" },
    captions: { mark: "yes", text: "Customize for each network" },
    ytTitle: { mark: "yes", text: "Filled from the caption's first line" },
    images: { mark: "yes", text: "Carousels" },
    // support.buffer.com/article/562-using-youtube-shorts-with-buffer: YouTube posts need a video attached (checked 2026-11-25)
    ytImages: { mark: "no", text: "YouTube posts need a video" },
    ready: { mark: "partial", text: "Flags some files in the composer" },
    // support.buffer.com/article/935-troubleshooting-video-uploads-in-buffer (checked 2026-11-25)
    fix: { mark: "partial", text: "Transcodes some videos on upload" },
    status: { mark: "yes", text: "Failed posts show the error message" },
    email: { mark: "yes", text: "Email or push to the team" },
    retry: { mark: "yes", text: "Retry a failed post" },
    team: { mark: "yes", text: "On the Team plan" },
    roles: { mark: "yes", text: "Admin, Creator, Collaborator and Viewer" },
    approvals: { mark: "yes", text: "On the Team plan" },
    brandAccess: { mark: "yes", text: "Per channel" },
    mcp: { mark: "yes", text: "Buffer MCP server" },
    // buffer.com/changelog/talk-to-your-agent-via-mcp (checked 2026-11-25)
    campaigns: { mark: "partial", text: "Claude drafts a week of posts via MCP" },
  },
};
