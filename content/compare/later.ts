import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Later, checklist layout. Later facts were checked on help.later.com on 19-20 Nov 2026
 * (multi-profile scheduling, Quick Schedule, Media Library uploads, Auto Publish, Reels, YouTube Shorts,
 * failed posts, team approvals and Access Groups). Rows Later's docs don't cover stay empty ("Not stated").
 */
export const later: ChecklistComparison = {
  kind: "checklist",
  slug: "later-alternative",
  rival: "Later",
  meta: {
    title: "Later Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Later: every Profaily feature side by side with Later, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 20, 2026",
  hero: {
    lede:
      "Later plans your feed on a visual calendar across many networks. Profaily does one job: it takes a short video to TikTok, Reels and Shorts, and checks it against each before you schedule.",
  },
  verdict:
    "If most of what you post is short video, Profaily covers the whole trip from upload to a confirmed post on TikTok, Reels and Shorts: the checks and fixes before it goes out, a live status for each platform, and a retry for the one that failed.",
  cells: {
    calendar: { mark: "yes", text: "Visual calendar, drag and drop" },
    scheduling: { mark: "yes", text: "Pick a time, or a Quick Schedule slot" },
    queue: { mark: "partial", text: "Quick Schedule slots, but not for posts to several profiles" },
    drafts: { mark: "yes", text: "Drafts, and labels in the Media Library" },
    import: { mark: "partial", text: "Upload from Dropbox or Canva into the Media Library" },
    tiktok: { mark: "yes", text: "Auto Publish or a notification" },
    instagram: { mark: "yes", text: "Auto Publish or a notification" },
    youtube: { mark: "partial", text: "Shorts only, from desktop or iOS" },
    captions: { mark: "yes", text: "Customize each post" },
    ytTitle: { mark: "yes", text: "A title field" },
    images: { mark: "yes", text: "Multi-Photo carousels" },
    team: { mark: "yes", text: "On Growth and up" },
    roles: { mark: "yes", text: "Owner, Reviewer, Member and Member (Restricted)" },
    approvals: { mark: "yes", text: "With Publish Without Approval turned off, or Member (Restricted)" },
    brandAccess: { mark: "yes", text: "Access Groups" },
  },
};
