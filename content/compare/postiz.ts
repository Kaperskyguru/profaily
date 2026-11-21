import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Postiz, checklist layout. Postiz cells come from Postiz's own docs (research notes in
 * research/compare/postiz.md, re-checked 21 Nov 2026). A feature its docs don't show is left out and renders as a cross.
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
  checked: "November 21, 2026",
  hero: {
    lede:
      "Postiz posts to a long list of networks, and you can run it on your own server. Profaily is for people whose week is short videos. It checks each one against TikTok, Instagram and YouTube before you schedule, and fixes the file when a platform would refuse it.",
  },
  verdict:
    "If your week is short videos, Profaily checks each one against TikTok, Reels and Shorts before you schedule, fixes the file in one tap when a platform would refuse it, and lets your team approve videos before they go out.",
  workflow: {
    title: "One short video, three platforms",
    lede: "Here's what posting the same video to TikTok, Reels and Shorts looks like in each tool, going by Postiz's own docs.",
    them: [
      "Export the video as MP4 under 1 GB. A MOV has to be converted first.",
      "Write it in the Global tab, then detach any channel that needs its own text.",
      "If a platform won't take the file, re-encode it yourself, or with the API or CLI adjust option, and upload again.",
      "Keep it as a draft and send a preview link for comments, then schedule it yourself.",
      "A failed post gets a red ring on the calendar, with the reason in a tooltip, and a failure email if turned on.",
    ],
    us: [
      "Upload the MP4 or MOV you already have, up to 4 GB.",
      "Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "An Editor's video waits for a Producer or Admin to approve it.",
    ],
  },  cells: {
    calendar: { mark: "yes", text: "Calendar" },
    scheduling: { mark: "yes", text: "Pick a time; next free slot via API" },
    queue: { mark: "partial", text: "Time slots per channel; RSS posts fill them" },
    drafts: { mark: "yes", text: "Drafts and tags" },
    tiktok: { mark: "yes", text: "Direct post or upload" },
    instagram: { mark: "yes", text: "Posts, Reels, Stories and carousels" },
    youtube: { mark: "yes", text: "Yes" },
    // Facebook: docs.postiz.com/public-api/providers/facebook (checked 2026-11-20)
    facebook: { mark: "yes", text: "Page posts and videos" },
    captions: { mark: "yes", text: "Global tab, or detach a channel" },
    ytTitle: { mark: "yes", text: "A title setting" },
    images: { mark: "yes", text: "Yes" },
    ready: { mark: "partial", text: "Checks text, settings, file count and type" },
    fix: { mark: "partial", text: "Opt-in re-encode on API and CLI uploads" },
    status: { mark: "yes", text: "Red ring with the platform's reason" },
    email: { mark: "yes", text: "Failure emails, a settings toggle" },
    retry: { mark: "partial", text: "Reschedule the failed channel yourself" },
    team: { mark: "yes", text: "Team plan and up" },
    roles: { mark: "yes", text: "User, Admin and Super Admin" },
    brandAccess: { mark: "partial", text: "Separate organisations per brand" },
    mcp: { mark: "yes", text: "MCP server, CLI and API" },
    campaigns: { mark: "partial", text: "AI agents plan and schedule posts" },
  },
};
