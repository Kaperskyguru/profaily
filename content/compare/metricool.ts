import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Metricool, checklist layout. Metricool cells come from Metricool's own docs (research notes in
 * /home/claude/articles/metricool/facts.md). A feature its docs don't show is left out and renders as a cross.
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
  checked: "November 19, 2026",
  hero: {
    lede:
      "Profaily is built for one job: getting each short video onto TikTok, Instagram Reels and YouTube the way each platform wants it, and telling you straight when one didn't make it.",
  },
  verdict:
    "Metricool covers a lot of ground: planning, analytics and reporting across many networks. If most of what you post is short video, Profaily is built for that one job: each video checked for TikTok, Reels and Shorts before you schedule, a one-tap fix when a platform would refuse the file, and a retry for just the platform that failed.",
  workflow: {
    title: "One short video, three platforms",
    lede: "Here's what posting the same video to TikTok, Reels and Shorts looks like in each tool, going by Metricool's own help center.",
    them: [
      "Create the post and edit it per network.",
      "Check each network's video requirements in the help center yourself.",
      "If a Reel fails on file size, export a smaller file and try again.",
      "TikToks with effects, stickers or music outside the Top 100 go out as Sent, for you to finish in the TikTok app.",
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
    scheduling: { mark: "yes", text: "Pick a date and time" },
    import: { mark: "yes", text: "CSV with public Drive or Dropbox links" },
    tiktok: { mark: "yes", text: "Yes" },
    instagram: { mark: "yes", text: "Yes" },
    youtube: { mark: "yes", text: "Yes" },
    captions: { mark: "yes", text: "Edit per network" },
    ytTitle: { mark: "yes", text: "A title field" },
    status: { mark: "yes", text: "Sent or Published per network" },
    team: { mark: "yes", text: "On the Advanced plan" },
    roles: { mark: "yes", text: "On the Advanced plan" },
    approvals: { mark: "yes", text: "On the Advanced plan" },
    brandAccess: { mark: "yes", text: "Brand permissions per user" },
    mcp: { mark: "yes", text: "Metricool MCP" },
  },
};
