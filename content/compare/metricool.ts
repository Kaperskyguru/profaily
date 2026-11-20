import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Metricool, checklist layout. Metricool cells come from Metricool's own docs (research notes in
 * research/compare/metricool.md, re-checked 20 Nov 2026). A feature its docs don't show is left out and renders as a cross.
 */
export const metricool: ChecklistComparison = {
  kind: "checklist",
  slug: "metricool-alternative",
  rival: "Metricool",
  meta: {
    title: "Metricool Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Metricool: every Profaily feature side by side with Metricool, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 20, 2026",
  hero: {
    lede:
      "Metricool is a broad social tool, strong on analytics and reports across many networks. Profaily is built for one job: getting each short video onto TikTok, Instagram Reels and YouTube the way each platform wants it, and telling you straight when one didn't make it.",
  },
  verdict:
    "If most of what you post is short video, Profaily checks each one for TikTok, Reels and Shorts before you schedule. If a platform would refuse the file, one tap fixes it. And if one platform fails, you retry just that one while the rest stay posted.",
  workflow: {
    title: "One short video, three platforms",
    lede: "Here's what posting the same video to TikTok, Reels and Shorts looks like in each tool, going by Metricool's own help center.",
    them: [
      "Create the post and edit it per network.",
      "Metricool checks format, size and ratio when you save. Codec and bitrate are left to each network.",
      "If a video fails on bitrate, HDR or HEVC, export it again and post it as a new copy.",
      "If one network fails, duplicate the post and untick the networks that already published.",
    ],
    us: [
      "Upload once. Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "Schedule it, or send it for approval first.",
      "If one platform fails, retry that one. The rest stay posted.",
    ],
  },  cells: {
    calendar: { mark: "yes", text: "Planner calendar" },
    scheduling: { mark: "yes", text: "Pick a time, or add to an Autolist" },
    queue: { mark: "yes", text: "Autolists: weekly time slots, filled in order" },
    drafts: { mark: "yes", text: "Drafts, a Posts Library and tags" },
    import: { mark: "yes", text: "CSV with public Drive or Dropbox links" },
    tiktok: { mark: "yes", text: "Yes" },
    instagram: { mark: "yes", text: "Yes" },
    youtube: { mark: "yes", text: "Yes" },
    // Facebook: help.metricool.com/schedule-and-publish-on-facebook-ycu1b (checked 2026-11-20)
    facebook: { mark: "yes", text: "Posts, Reels and Stories on Pages" },
    captions: { mark: "yes", text: "Edit per network" },
    ytTitle: { mark: "yes", text: "A title field" },
    images: { mark: "yes", text: "Carousels on Instagram and TikTok" },
    ready: { mark: "partial", text: "Format, size and ratio checked on save" },
    status: { mark: "yes", text: "Published, Sent or error, per network" },
    email: { mark: "yes", text: "Email when a post can't publish" },
    retry: { mark: "partial", text: "Duplicate the post, untick networks already posted" },
    team: { mark: "yes", text: "On Advanced and Custom plans" },
    roles: { mark: "yes", text: "Six roles, plus custom roles" },
    approvals: { mark: "yes", text: "On Advanced, with outside reviewers" },
    brandAccess: { mark: "yes", text: "A role for each brand" },
    mcp: { mark: "yes", text: "Metricool MCP" },
    campaigns: { mark: "partial", text: "Claude drafts a week of posts via MCP" },
  },
};
