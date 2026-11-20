import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Repurpose.io, checklist layout. Repurpose.io cells come from Repurpose.io's own docs (research notes in
 * /home/claude/articles/repurpose/facts.md). A feature its docs don't show is left out and renders as a cross.
 */
export const repurpose: ChecklistComparison = {
  kind: "checklist",
  slug: "repurpose-io-alternative",
  rival: "Repurpose.io",
  meta: {
    title: "Repurpose.io Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Repurpose.io: every Profaily feature side by side with Repurpose.io, from scheduling and captions to pre-post checks, retries and teams.",
  },
  checked: "November 20, 2026",
  hero: {
    lede: "Every feature on our pricing page, next to what Repurpose.io's own docs say it does.",
  },
  cells: {
    calendar: { mark: "yes", text: "Month, week and day" },
    scheduling: { mark: "yes", text: "A set time, or auto publish slots" },
    queue: { mark: "yes", text: "Auto publish time slots" },
    import: { mark: "yes", text: "Google Drive or Dropbox folders as a source" },
    tiktok: { mark: "yes", text: "Yes" },
    instagram: { mark: "yes", text: "Yes" },
    youtube: { mark: "yes", text: "Videos and Shorts" },
    captions: { mark: "yes", text: "Edit each scheduled post" },
    ytTitle: { mark: "yes", text: "Edit the title" },
    images: { mark: "yes", text: "Photos and carousels" },
    status: { mark: "yes", text: "The failed job's reason" },
    retry: { mark: "yes", text: "Republish" },
  },
};
