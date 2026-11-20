import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Hootsuite, checklist layout. Hootsuite facts were checked on help.hootsuite.com and
 * hootsuite.com/plans on 20 Nov 2026 (Social OS / Perch, calendar, recommended times, AutoSchedule, drafts,
 * Bulk Composer, TikTok, Instagram, YouTube, video requirements, post failures, approvals, permissions, MCP).
 * Rows Hootsuite's docs don't cover stay empty and render as a cross.
 */
export const hootsuite: ChecklistComparison = {
  kind: "checklist",
  slug: "hootsuite-alternative",
  rival: "Hootsuite",
  meta: {
    title: "Hootsuite Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Hootsuite: every Profaily feature side by side with Hootsuite, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 20, 2026",
  hero: {
    lede:
      "Hootsuite is built for social teams running every network, with an inbox, listening and ads beside the calendar. Profaily is built for one thing: getting a short video onto TikTok, Reels and Shorts, checked against each before you schedule.",
  },
  verdict:
    "If your week is mostly short videos, Profaily keeps each one to a single upload. Every platform is checked before it goes, a file TikTok or Instagram would refuse is fixed with one tap, and if one platform fails you retry just that one while the others stay posted.",
  workflow: {
    title: "One short video, to TikTok, Reels and Shorts",
    lede: "Here's what sending one video to all three looks like in each tool, going by Hootsuite's own help center.",
    them: [
      "Create a post for TikTok and Instagram, then customize each network's tab.",
      "TikTok's limits apply: 23 to 60 fps, 3 seconds to 10 minutes.",
      "For YouTube, open the separate YouTube video form, upload the file there too and add a title.",
      "If a post fails, you get an email. Find it in the calendar, edit it, then reschedule or publish.",
    ],
    us: [
      "Upload the video once, on your phone or computer.",
      "Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "If one platform fails, retry that one. The rest stay posted.",
    ],
  },
  cells: {
    calendar: { mark: "yes", text: "Content calendar, drag to reschedule" },
    scheduling: { mark: "yes", text: "Pick a time, or a recommended time" },
    queue: { mark: "partial", text: "AutoSchedule on mobile; best time in a range on the web" },
    drafts: { mark: "yes", text: "Unlimited drafts; tags on Advanced and up" },
    import: { mark: "yes", text: "Bulk Composer: a CSV of up to 350 posts, media added per post" },
    tiktok: { mark: "yes", text: "Direct, or a mobile notification" },
    instagram: { mark: "yes", text: "Direct for Business profiles, or a mobile notification" },
    youtube: { mark: "yes", text: "Shorts and longer videos, from a separate YouTube video form" },
    // Facebook: help.hootsuite.com/s/article/create-fb (checked 2026-11-20)
    facebook: { mark: "yes", text: "Posts, stories and reels" },
    captions: { mark: "yes", text: "A tab per network to customize" },
    ytTitle: { mark: "yes", text: "A title field" },
    images: { mark: "yes", text: "Up to 10 images in an Instagram post" },
    ready: { mark: "partial", text: "Composer flags media that breaks a network's rules" },
    fix: { mark: "partial", text: "Adjusts file size, dimensions and bit rate for you" },
    status: { mark: "yes", text: "Failed posts marked red, with the error" },
    email: { mark: "yes", text: "Email when a scheduled post fails" },
    retry: { mark: "partial", text: "Shows which accounts failed, to fix and resend" },
    team: { mark: "yes", text: "Seats on every plan" },
    roles: { mark: "yes", text: "Organization, team and social account permissions" },
    approvals: { mark: "yes", text: "On Advanced, Business and Enterprise" },
    brandAccess: { mark: "yes", text: "Per social account" },
    mcp: { mark: "yes", text: "Perch MCP server" },
    campaigns: { mark: "yes", text: "Perch MCP: plan campaigns and draft posts" },
  },
};
