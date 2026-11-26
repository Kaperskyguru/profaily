import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Publer, checklist layout. Publer cells come from Publer's own help center, plans page and blog
 * (research notes in research/compare/publer.md, checked 20 Nov 2026, re-checked 26 Nov 2026). A feature its docs don't show is left
 * out and renders as a cross.
 */
export const publer: ChecklistComparison = {
  kind: "checklist",
  slug: "publer-alternative",
  rival: "Publer",
  meta: {
    title: "Publer Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Publer: every Profaily feature side by side with Publer, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 26, 2026",
  hero: {
    lede:
      "Publer is a broad scheduler for over a dozen networks, with bulk tools, client approvals and AI built in. Profaily is built for short video: one upload to TikTok, Reels and Shorts, checked against each platform before you schedule.",
  },
  verdict:
    "If your week is mostly short videos, Profaily handles the parts that usually go wrong. Every platform is checked and marked Ready before you schedule. When TikTok or Instagram would refuse a file, one tap fixes it.",
  workflow: {
    title: "One short video, to TikTok, Reels and Shorts",
    lede: "Here's what sending one video to all three looks like in each tool, going by Publer's own help center.",
    them: [
      "Click Create, pick your TikTok, Instagram and YouTube accounts, and upload the video.",
      "Choose Reel for Instagram and Short for YouTube, and add a YouTube title.",
      "Use Customize Post to give each account its own text.",
      "Schedule it, or AutoSchedule it to the next free slot.",
      "If one account fails, it's marked Failed with the reason. Reschedule just that one; the rest stay posted.",
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
    calendar: { mark: "yes", text: "Month, week and day views, drag to reschedule" },
    scheduling: { mark: "yes", text: "Pick a time, or AutoSchedule to the next slot" },
    queue: { mark: "yes", text: "A posting schedule per account" },
    drafts: { mark: "yes", text: "Drafts and color-coded labels" },
    import: { mark: "yes", text: "A CSV of up to 500 posts, videos included" },
    // TikTok: publer.com/help/en/article/managing-tiktok-accounts-in-publer-1gloujj (checked 2026-11-26)
    tiktok: { mark: "yes", text: "Direct, or a push-notification reminder" },
    // Instagram: publer.com/help/en/article/how-to-schedule-instagram-reels-1a7l0mu (checked 2026-11-26)
    instagram: { mark: "yes", text: "Reels directly, or via reminders" },
    // YouTube: publer.com/integrations/youtube (checked 2026-11-26)
    youtube: { mark: "yes", text: "Shorts and full-length videos" },
    // Facebook: publer.com/help/en/article/how-to-schedule-facebook-reels-w7ty8g (checked 2026-11-26)
    facebook: { mark: "yes", text: "Reels and videos to Pages" },
    captions: { mark: "yes", text: "Customize Post for each account" },
    ytTitle: { mark: "yes", text: "A title field" },
    variables: { mark: "partial", text: "Mention shortcodes, set per network" },
    images: { mark: "yes", text: "Carousels, or one post per file" },
    ready: { mark: "partial", text: "Flags post issues; checks TikTok account limits" },
    status: { mark: "yes", text: "Failed per account, with the reason" },
    email: { mark: "yes", text: "Email per failure, or a daily digest" },
    retry: { mark: "partial", text: "Reschedule just the failed account" },
    team: { mark: "yes", text: "Workspaces with members" },
    roles: { mark: "yes", text: "Owner, Admin, Editor and Client" },
    approvals: { mark: "yes", text: "Admin, Owner or Client approval" },
    brandAccess: { mark: "yes", text: "Per social account" },
    mcp: { mark: "yes", text: "Publer MCP, on Business and Enterprise" },
    campaigns: { mark: "yes", text: "Publer MCP can plan campaigns" },
  },
};
