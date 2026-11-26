import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Sked Social, checklist layout. Sked cells come from Sked's own help center, feature and integration
 * pages, blog and pricing page (research notes in research/compare/sked-social.md, checked 26 Nov 2026). A feature
 * its docs don't show is left out and renders as a cross.
 */
export const skedSocial: ChecklistComparison = {
  kind: "checklist",
  slug: "sked-social-alternative",
  rival: "Sked Social",
  meta: {
    title: "Sked Social Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Sked Social: every Profaily feature side by side with Sked Social, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 26, 2026",
  hero: {
    lede:
      "Sked Social is a social workspace for agencies and brands with many accounts. It has client approvals, an inbox and reports next to auto-publishing on nine networks. Profaily is built for short video: one upload goes to TikTok, Reels and Shorts, checked against each platform before you schedule.",
  },
  verdict:
    "If your week is mostly short videos, Profaily shows which platforms are Ready before anything is booked. When TikTok or Instagram would refuse a file, one tap fixes it.",
  workflow: {
    title: "One short video, to TikTok, Reels and Shorts",
    lede: "Here's what sending one video to all three looks like in each tool, going by Sked Social's own help center.",
    them: [
      "Open Create Post, pick your TikTok, Instagram and YouTube accounts, and add the video.",
      "Write one caption. To change it for a platform, turn on Customize for that one. It then becomes its own post.",
      "Add the YouTube title, category, description and tags, and set TikTok's privacy, comment and duet options.",
      "Pick a time, or use Queue post to take the next free slot.",
      "If a post fails, Sked emails the admin. Open archives to see the error, then use post again.",
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
    scheduling: { mark: "yes", text: "Pick a time, or Queue post to the next slot" },
    queue: { mark: "yes", text: "Weekly time slots for each account" },
    drafts: { mark: "yes", text: "Drafts and labels" },
    import: { mark: "partial", text: "Bulk create; Drive and Dropbox sync on Accelerate" },
    // TikTok: skedsocial.com/integrations/tiktok-scheduler (checked 2026-11-26)
    tiktok: { mark: "yes", text: "Auto-published, no phone reminder" },
    // Instagram: skedsocial.com/integrations/instagram-scheduler (checked 2026-11-26)
    instagram: { mark: "yes", text: "Reels auto-published" },
    // YouTube: skedsocial.com/integrations/youtube (checked 2026-11-26)
    youtube: { mark: "yes", text: "Shorts and longer videos" },
    // Facebook: skedsocial.com/integrations/facebook-scheduler (checked 2026-11-26)
    facebook: { mark: "yes", text: "Pages: Reels, videos and Stories" },
    captions: { mark: "yes", text: "Customize the post for each platform" },
    ytTitle: { mark: "yes", text: "Title, category, description and tags" },
    images: { mark: "yes", text: "Carousels, or one post per file" },
    ytImages: { mark: "partial", text: "Build a video from images in the editor" },
    ready: { mark: "partial", text: "Flags Instagram images outside size limits" },
    fix: { mark: "partial", text: "Re-encodes uploads, up to 1080 wide" },
    status: { mark: "yes", text: "Each platform's status and error, in archives" },
    email: { mark: "yes", text: "Email to the admin when a post fails" },
    retry: { mark: "partial", text: "Post again on just the failed post" },
    team: { mark: "yes", text: "Users on every plan" },
    roles: { mark: "yes", text: "Role-based access, on Accelerate" },
    approvals: { mark: "yes", text: "Internal and client approvals by link" },
    brandAccess: { mark: "yes", text: "Per social profile" },
    mcp: { mark: "yes", text: "Sked Social MCP; scheduling needs an add-on" },
    campaigns: { mark: "partial", text: "Its MCP drafts and schedules posts" },
  },
};
