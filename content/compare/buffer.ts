import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Buffer, checklist layout. Buffer cells come from Buffer's own docs (research notes in
 * /home/claude/articles/buffer/facts.md). A feature its docs don't show is left out and renders as a cross.
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
  checked: "November 20, 2026",
  hero: {
    lede:
      "Buffer is a good queue for every kind of post. Profaily does one thing: it gets short videos onto TikTok, Instagram Reels and YouTube in batches, each one checked against each platform before it's scheduled.",
  },
  verdict:
    "If your week is short videos, Profaily brings the whole batch in from Drive, Dropbox, OneDrive or a CSV file, checks each one for TikTok, Reels and Shorts before you schedule, and fixes the file in one tap when a platform would refuse it.",
  cells: {
    calendar: { mark: "yes", text: "Queue and calendar" },
    scheduling: { mark: "yes", text: "Pick a time, or the queue" },
    queue: { mark: "yes", text: "A posting schedule per channel" },
    drafts: { mark: "yes", text: "Drafts and tags" },
    tiktok: { mark: "yes", text: "Automatic or Notify Me" },
    instagram: { mark: "yes", text: "Automatic or Notify Me" },
    youtube: { mark: "yes", text: "Shorts" },
    captions: { mark: "yes", text: "Customize for each network" },
    ytTitle: { mark: "yes", text: "Filled from the caption's first line" },
    images: { mark: "yes", text: "Carousels" },
    ready: { mark: "yes", text: "Flags some files in the composer" },
    status: { mark: "yes", text: "Failed posts tagged with the reason" },
    email: { mark: "yes", text: "Email to the account owner" },
    retry: { mark: "yes", text: "Retry now, or back to the queue" },
    team: { mark: "yes", text: "On the Team plan" },
    roles: { mark: "yes", text: "Admin, Creator, Collaborator and Viewer" },
    approvals: { mark: "yes", text: "On the Team plan" },
    brandAccess: { mark: "yes", text: "Per channel" },
    mcp: { mark: "yes", text: "Buffer MCP server" },
  },
};
