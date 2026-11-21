import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Vista Social, checklist layout. Vista Social cells come from Vista Social's own help center,
 * pricing page, integration pages and blog (research notes in research/compare/vista-social.md, checked
 * 21 Nov 2026). A feature its docs don't show is left out and renders as a cross.
 */
export const vistaSocial: ChecklistComparison = {
  kind: "checklist",
  slug: "vista-social-alternative",
  rival: "Vista Social",
  meta: {
    title: "Vista Social Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Vista Social: every Profaily feature side by side with Vista Social, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 21, 2026",
  hero: {
    lede:
      "Vista Social is an all-in-one suite for teams and agencies, with publishing, an inbox, reviews, listening and reports, plus approvals and its own AI agent. Profaily does one job: it gets a short video onto TikTok, Reels and Shorts from one upload, and checks it against each platform before you schedule.",
  },
  verdict:
    "If your week is mostly short videos, Profaily keeps the whole trip in one place. You upload once, write each caption, and see every platform marked Ready before it goes. A file TikTok or Instagram would refuse is fixed with one tap, and if one platform fails you retry just that one.",
  workflow: {
    title: "One short video, to TikTok, Reels and Shorts",
    lede: "Here's what sending one video to all three looks like in each tool, going by Vista Social's own help center.",
    them: [
      "Create a post, pick your TikTok, Instagram and YouTube profiles, and add the video.",
      "Edit each network's caption in its preview, or keep one for all.",
      "Add a YouTube title, and set TikTok's comment, duet and stitch options.",
      "Publish, pick a time, add it to a queue, or send it for approval.",
      "If one fails, it's marked Failed with the error. Duplicate the post, fix it and schedule it again.",
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
    calendar: { mark: "yes", text: "Month, week and day views, with filters" },
    scheduling: { mark: "yes", text: "Pick a time, or the next open queue slot" },
    queue: { mark: "yes", text: "Time slots per profile" },
    drafts: { mark: "yes", text: "Draft posts and post labels" },
    import: { mark: "yes", text: "CSV, or media from Drive, Dropbox or OneDrive" },
    // TikTok: support.vistasocial.com/hc/en-us/articles/4419165964827 (checked 2026-11-21)
    tiktok: { mark: "yes", text: "Auto-publish, or a phone reminder" },
    // Instagram: support.vistasocial.com/hc/en-us/articles/4430358197275 (checked 2026-11-21)
    instagram: { mark: "yes", text: "Reels published directly" },
    // YouTube: support.vistasocial.com/hc/en-us/articles/4475062292763 (checked 2026-11-21)
    youtube: { mark: "yes", text: "Videos and Shorts" },
    // Facebook: support.vistasocial.com/hc/en-us/articles/49453905957915 (checked 2026-11-21)
    facebook: { mark: "yes", text: "Reels and videos to Pages" },
    captions: { mark: "yes", text: "Edit each network's caption in the preview" },
    ytTitle: { mark: "yes", text: "A video title field" },
    variables: { mark: "yes", text: "Custom fields, a value per profile" },
    images: { mark: "yes", text: "Carousels, or one post per file" },
    ready: { mark: "partial", text: "Checks drafts made through its MCP" },
    fix: { mark: "partial", text: "Automatic video processing for Instagram and Facebook" },
    status: { mark: "yes", text: "Failed in the calendar, with the platform's error" },
    email: { mark: "partial", text: "Post failure notification, by email if set" },
    retry: { mark: "partial", text: "Duplicate the failed post and schedule again" },
    team: { mark: "yes", text: "Users on every plan" },
    roles: { mark: "yes", text: "Admin, Profile Group admin and Restricted" },
    approvals: { mark: "yes", text: "Single-step, or multi-step on Advanced and up" },
    brandAccess: { mark: "yes", text: "Per profile group" },
    mcp: { mark: "yes", text: "Vista Social MCP, on paid plans" },
    campaigns: { mark: "yes", text: "Ask Vista drafts and schedules a campaign" },
  },
};
