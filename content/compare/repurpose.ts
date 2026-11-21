import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Repurpose.io, checklist layout. Repurpose.io cells come from Repurpose.io's own docs (research notes in
 * research/compare/repurpose.md, re-checked 21 Nov 2026). A feature its docs don't show is left out and renders as a cross.
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
  checked: "November 21, 2026",
  hero: {
    lede:
      "Repurpose.io moves videos along workflows, one per platform. Profaily starts with the file on your phone or computer. You upload it once, write it up for each platform in one place, and schedule all three together.",
  },
  verdict:
    "If you want to take a new video from your phone to TikTok, Reels and Shorts in one go, Profaily gives you one upload, one place to write each caption, one schedule, and a check for each platform before it goes out.",
  workflow: {
    title: "A new video, from your camera roll to three platforms",
    lede: "Here's what getting a new video onto TikTok, Reels and Shorts looks like in each tool, going by Repurpose.io's own help center.",
    them: [
      "Put the video in a Drive or Dropbox folder, or post it on TikTok first. There's no upload from your device.",
      "Set up one workflow for each platform you want it on.",
      "Auto publish into time slots, or schedule each copy for a date and time.",
      "In auto mode, a video over your Shorts length is skipped or trimmed; you can still schedule it by hand.",
      "If a job fails, read the reason and republish it.",
    ],
    us: [
      "Upload the video once, from your device or a cloud folder.",
      "Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Schedule all three for the same time, or publish now.",
      "If one platform fails, retry that one. The rest stay posted.",
    ],
  },  cells: {
    calendar: { mark: "yes", text: "Month, week and day" },
    scheduling: { mark: "yes", text: "A set time, or auto publish slots" },
    queue: { mark: "yes", text: "Auto publish time slots" },
    import: { mark: "yes", text: "Google Drive or Dropbox folders as a source" },
    tiktok: { mark: "yes", text: "Yes" },
    instagram: { mark: "yes", text: "Yes" },
    youtube: { mark: "yes", text: "Videos and Shorts" },
    // Facebook: support.repurpose.io/en/article/how-to-connect-your-facebook-account-in-repurpose-e833we (checked 2026-11-20)
    facebook: { mark: "yes", text: "Reels, Stories and images to Pages" },
    captions: { mark: "yes", text: "Edit each scheduled post" },
    ytTitle: { mark: "yes", text: "Edit the title" },
    images: { mark: "yes", text: "Photos and carousels" },
    status: { mark: "yes", text: "The failed job's reason" },
    email: { mark: "yes", text: "Failure emails, off by default" },
    retry: { mark: "yes", text: "Republish" },
  },
};
