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
    lede: "Every feature on our pricing page, next to what Metricool's own docs say it does.",
  },
  cells: {
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
