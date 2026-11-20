import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Postiz, checklist layout. Postiz cells come from Postiz's own docs (research notes in
 * /home/claude/articles/postiz/facts.md). A feature its docs don't show is left out and renders as a cross.
 */
export const postiz: ChecklistComparison = {
  kind: "checklist",
  slug: "postiz-alternative",
  rival: "Postiz",
  meta: {
    title: "Postiz Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Postiz: every Profaily feature side by side with Postiz, from scheduling and captions to pre-post checks, approvals and AI apps.",
  },
  checked: "November 20, 2026",
  hero: {
    lede:
      "Postiz posts to a long list of networks, and you can run it on your own server. Profaily is for people whose week is short videos. It checks each one against TikTok, Instagram and YouTube before you schedule, and fixes the file when a platform would refuse it.",
  },
  verdict:
    "If your week is short videos, Profaily checks each one against TikTok, Reels and Shorts before you schedule, fixes the file in one tap when a platform would refuse it, and lets your team approve videos before they go out.",
  cells: {
    calendar: { mark: "yes", text: "Calendar" },
    scheduling: { mark: "yes", text: "Pick a time, or a time slot" },
    queue: { mark: "yes", text: "Posting time slots per channel" },
    drafts: { mark: "yes", text: "Drafts and tags" },
    tiktok: { mark: "yes", text: "Direct post or upload" },
    instagram: { mark: "yes", text: "Yes" },
    youtube: { mark: "yes", text: "Yes" },
    captions: { mark: "yes", text: "Global tab, or detach a channel" },
    ytTitle: { mark: "yes", text: "A title setting" },
    images: { mark: "yes", text: "Yes" },
    ready: { mark: "yes", text: "Checks file count and type" },
    status: { mark: "yes", text: "Red ring with the platform's reason" },
    team: { mark: "yes", text: "Team plan and up" },
    roles: { mark: "yes", text: "User, Admin and Super Admin" },
    brandAccess: { mark: "yes", text: "Separate organisations" },
    mcp: { mark: "yes", text: "MCP server, CLI and API" },
  },
};
