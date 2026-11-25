import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Later, checklist layout. Later facts were checked on help.later.com on 19-20 Nov 2026 and re-checked on 25 Nov 2026
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
  checked: "November 25, 2026",
  hero: {
    lede:
      "Later plans your feed on a visual calendar across many networks. Profaily does one job: it takes a short video to TikTok, Reels and Shorts, and checks it against each before you schedule.",
  },
  verdict:
    "If most of what you post is short video, Profaily covers the whole trip from upload to a confirmed post on TikTok, Reels and Shorts: the checks and fixes before it goes out, a live status for each platform, and a retry for the one that failed.",
  workflow: {
    title: "A short video, posted from your phone",
    lede: "Here's what sending one video to TikTok, Reels and Shorts looks like in each tool, going by Later's own help center.",
    them: [
      "Pick the profiles, write the caption, then Customize each post.",
      "In Later's Android app, Shorts can't be scheduled; use desktop or iOS.",
      "For Instagram and TikTok, choose Auto Publish or a notification.",
      "For a notification post, open Instagram or TikTok at the set time and finish it there.",
    ],
    us: [
      "Upload the video once, on your phone or computer.",
      "Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "If one platform fails, retry that one. The rest stay posted.",
    ],
  },  cells: {
    calendar: { mark: "yes", text: "Visual calendar, drag and drop" },
    scheduling: { mark: "yes", text: "Pick a time, or a Quick Schedule slot" },
    queue: { mark: "partial", text: "Quick Schedule slots, but not for posts to several profiles" },
    drafts: { mark: "yes", text: "Drafts and post tags" },
    import: { mark: "partial", text: "Bulk upload from Dropbox, Google Drive or Canva" },
    tiktok: { mark: "yes", text: "Auto Publish or a notification" },
    instagram: { mark: "yes", text: "Auto Publish or a notification" },
    youtube: { mark: "partial", text: "Shorts only, from desktop or iOS" },
    // Facebook: help.later.com/hc/en-us/articles/11605658940183 (checked 2026-11-20)
    facebook: { mark: "yes", text: "Reels to Pages, on paid plans" },
    captions: { mark: "yes", text: "Customize each post" },
    ytTitle: { mark: "yes", text: "A title field" },
    images: { mark: "yes", text: "Multi-Photo carousels, on paid plans" },
    ready: { mark: "partial", text: "Flags profiles that can't take the media type" },
    team: { mark: "yes", text: "On Growth and up" },
    roles: { mark: "yes", text: "Account Owner, Reviewer, Member and Member (Restricted)" },
    approvals: { mark: "yes", text: "With Publish Without Approval turned off, or Member (Restricted)" },
    brandAccess: { mark: "yes", text: "Access Groups" },
  },
};
