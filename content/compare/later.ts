import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Later, checklist layout. Later facts were checked on help.later.com on 19-20 Nov 2026
 * (multi-profile scheduling, Quick Schedule, Media Library uploads, Auto Publish, Reels, YouTube Shorts,
 * failed posts, team approvals and Access Groups). Rows Later's docs don't cover stay empty ("Not stated").
 */
export const later: ChecklistComparison = {
  kind: "checklist",
  slug: "later-alternative",
  rival: "Later",
  meta: {
    title: "Later Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Later: every Profaily feature side by side with Later, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 20, 2026",
  hero: {
    lede: "Every feature on our pricing page, next to what Later's own help center says it does.",
    shot: {
      src: "/assets/compare/later-alternative/hero-schedule.jpg",
      alt: "Profaily with a short video open and the Schedule or publish window showing TikTok, Instagram and YouTube each marked Ready",
    },
  },
  cells: {
    calendar: { mark: "yes", text: "Visual calendar, drag and drop" },
    scheduling: { mark: "yes", text: "Pick a time, or a Quick Schedule slot" },
    queue: { mark: "partial", text: "Quick Schedule slots, but not for posts to several profiles" },
    drafts: { mark: "yes", text: "Drafts, and labels in the Media Library" },
    import: { mark: "partial", text: "Upload from Dropbox or Canva into the Media Library" },
    tiktok: { mark: "yes", text: "Auto Publish or a notification" },
    instagram: { mark: "yes", text: "Auto Publish or a notification" },
    youtube: { mark: "partial", text: "Shorts only, from desktop or iOS" },
    captions: { mark: "yes", text: "Customize each post" },
    ytTitle: { mark: "yes", text: "A title field" },
    images: { mark: "yes", text: "Multi-Photo carousels" },
    team: { mark: "yes", text: "On Growth and up" },
    roles: { mark: "yes", text: "Owner, Reviewer, Member and Member (Restricted)" },
    approvals: { mark: "yes", text: "With Publish Without Approval turned off, or Member (Restricted)" },
    brandAccess: { mark: "yes", text: "Access Groups" },
  },
  verdict:
    "Later is a broad social calendar for many networks. If most of what you post is short video, Profaily covers the whole trip from upload to a confirmed post on TikTok, Reels and Shorts: the checks and fixes before it goes out, a live status for each platform, and a retry for the one that failed.",
  faq: [
    {
      q: "What is the best Later alternative for TikTok, Reels and Shorts?",
      a: "For people who mostly post short videos, I'd say Profaily. You upload once, it checks the video against TikTok, Instagram and YouTube before you schedule, and when one platform fails you see why and retry just that one.",
    },
    {
      q: "Can I schedule YouTube Shorts from Android with Later?",
      a: "Not in Later's Android app at the moment. Later's help center says YouTube Shorts can be scheduled from desktop and iOS, not Android. Profaily runs in your phone's browser, so you can schedule Shorts from an Android phone.",
    },
    {
      q: "When does Later make me finish a Reel in Instagram?",
      a: "Later's help center says to use notification publishing when a Reel uses audio Instagram doesn't let other apps add, has more than one clip, or is longer than 90 seconds and scheduled from Later's Android app. You get a notification and finish the post in Instagram.",
    },
    {
      q: "Does approval stop a post from going out in Later?",
      a: "Not by default. Later's help center says approval status doesn't block publishing, unless the person has the Member (Restricted) role or you turn off Publish Without Approval for them. In Profaily, on the Business plan, an Editor's video can't be scheduled until a Producer or Admin approves it.",
    },
    {
      q: "Can I switch from Later to Profaily without losing anything?",
      a: "Connecting your accounts to Profaily doesn't touch Later, so your calendar, media and history stay in Later. Bring your videos into Profaily from your device, Google Drive, Dropbox, OneDrive or a CSV file.",
    },
  ],
  cta: {
    title: "Try it on the video you were about to post",
    body: "Don't test Profaily on a demo clip. Take the video you were about to post, open Profaily on your phone, and send it to TikTok, Instagram and YouTube in one go. See what it flags before you hit schedule. And if anything about Later on this page is out of date by the time you read it, message me and I'll correct it.",
  },
};
