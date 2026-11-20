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
    lede:
      "Repurpose.io moves videos along workflows, one per platform. Profaily starts with the file on your phone or computer. You upload it once, write it up for each platform in one place, and schedule all three together.",
  },
  verdict:
    "If you want to take a new video from your phone to TikTok, Reels and Shorts in one go, Profaily gives you one upload, one place to write each caption, one schedule, and a check for each platform before it goes out.",
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
