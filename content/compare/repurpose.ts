import type { Comparison } from "./types";

const shot = (name: string) => `/assets/compare/repurpose-io-alternative/${name}`;

/**
 * Profaily vs Repurpose.io. Repurpose facts were checked on support.repurpose.io and the pricing page on
 * 19 Nov 2026 (workflows and sources, auto publish, watermarks, TikTok and Instagram FAQs, YouTube Shorts
 * limits, failed-job reasons, republish). Profaily facts: the same verified set as the other compare pages.
 */
export const repurpose: Comparison = {
  slug: "repurpose-io-alternative",
  rival: "Repurpose.io",
  meta: {
    title: "Repurpose.io Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Repurpose.io, feature by feature: upload from your phone, schedule TikTok, Reels and Shorts in one place, checked for each platform first.",
  },
  checked: "November 19, 2026",
  hero: {
    lede: "Repurpose.io moves videos along workflows, one per platform: from a TikTok, a Reel, or a Drive or Dropbox folder to wherever you send it. Profaily starts with the file on your phone or computer. You upload it once, write it up for each platform in one place, and schedule all three together.",
    shot: {
      src: shot("hero-schedule.jpg"),
      alt: "Profaily with a short video open and the Schedule or publish window showing TikTok, Instagram and YouTube each marked Ready",
    },
  },
  stats: [
    { value: "1 upload", label: "goes to TikTok, Instagram Reels and YouTube, with its own text on each" },
    { value: "Ready", label: "or what to fix, on every platform, before you schedule" },
    { value: "1 tap", label: "to shrink a video for Instagram or fix its frame rate for TikTok" },
    { value: "1 retry", label: "for the platform that failed, while the others stay posted" },
  ],
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
  },
  groups: [
    {
      title: "Getting the video in",
      rows: [
        {
          feature: "Start from the video file you have",
          detail: "Before it's posted anywhere",
          them: { mark: "partial", text: "From a Drive or Dropbox folder; otherwise from a post already on TikTok, Instagram or YouTube" },
          us: { mark: "yes", text: "Upload from your device, or import from Drive, Dropbox, OneDrive or a CSV file" },
        },
        {
          feature: "No watermark on the copies",
          them: { mark: "yes", text: "Pulls the original before TikTok or Instagram adds one" },
          us: { mark: "yes", text: "You upload your own file, so there's nothing to remove" },
        },
    ],
    },
    {
      title: "Scheduling",
      rows: [
        {
          feature: "Calendar and scheduling",
          them: { mark: "yes", text: "Month, week and day calendar; auto publish or a set time" },
          us: { mark: "yes", text: "Calendar by day and week, a time or the next queue slot" },
        },
        {
          feature: "Schedule all three from one place",
          them: { mark: "partial", text: "One workflow per platform, each scheduled on its own" },
          us: { mark: "yes", text: "One schedule for TikTok, Reels and Shorts" },
        },
      ],
    },
    {
      title: "Before it posts",
      rows: [
        {
          feature: "Checks every platform before you schedule",
          detail: "Size, length and format, against each platform's own limits",
          them: { mark: "partial", text: "Shorts length and shape are set in the workflow" },
          us: { mark: "yes", text: "Each platform marked Ready, or told what to fix" },
        },
        {
          feature: "A video longer than a Short",
          them: { mark: "partial", text: "Skipped or trimmed in auto mode; trim it by hand to schedule it" },
          us: { mark: "yes", text: "Goes to YouTube as a regular video; nothing is skipped or cut" },
        },
        {
          feature: "Fixes a file the platform would refuse",
          detail: "Too big for Instagram, or a frame rate TikTok won't take",
          them: { mark: "partial", text: "Trims Shorts and reformats to square or vertical" },
          us: { mark: "yes", text: "Compress for Instagram, Convert for TikTok, in one tap" },
        },
      ],
    },
    {
      title: "When something goes wrong",
      rows: [
        {
          feature: "Shows why a post failed",
          them: { mark: "yes", text: "The failed job's reason, on web and mobile" },
          us: { mark: "yes", text: "Live status per platform, with the platform's own reason" },
        },
        {
          feature: "Try a failed post again",
          them: { mark: "yes", text: "Republish" },
          us: { mark: "yes", text: "Retry that platform; the ones that posted aren't touched" },
        },
      ],
    },
  ],
  reasons: [
    {
      title: "One upload, one schedule",
      body: "Upload the video once and you see TikTok, Instagram and YouTube side by side, each with its own text. Pick a time and all three are scheduled together.",
      shot: { src: shot("hero-schedule.jpg"), alt: "The Schedule or publish window with TikTok, Instagram and YouTube selected for one video" },
    },
    {
      title: "Bring in the files you already have",
      body: "Upload from your device, or import from Google Drive, Dropbox, OneDrive or a CSV file. The video doesn't need to live on another platform first.",
      shot: { src: shot("import-menu.jpg"), alt: "The Profaily composer's Import menu: From device, Camera, Import CSV, Google Drive, Dropbox and OneDrive" },
    },
    {
      title: "You find out before the post is due",
      body: "Before you schedule, Profaily checks the video against TikTok, Instagram and YouTube one by one. Each platform says Ready, or tells you what to change while there's still time.",
      shot: { src: shot("ready-check.jpg"), alt: "The Schedule or publish window with TikTok, Instagram and YouTube each marked Ready" },
    },
    {
      title: "The file gets fixed for you",
      body: "If a video is too big for Instagram, tap Compress. If its frame rate is one TikTok won't take, tap Convert. Profaily makes a copy for that platform only, and the others still get your original.",
      shot: { src: shot("convert-tiktok.jpg"), alt: "The TikTok tab warning that the video is 120 fps, with a Convert button" },
    },
    {
      title: "Your team signs off first",
      body: "On the Business plan, an Editor's video waits for a Producer or Admin. They approve and schedule it, or send it back with what to change.",
      shot: { src: shot("approve.jpg"), alt: "A video in review with Request changes and Approve and schedule buttons" },
    },
  ],
  founder: {
    name: "Solomon Eseme",
    role: "Founder of Profaily",
    quote: [
      "MasteringBackend posts a short video every day, and they go out through Profaily.",
    ],
  },
  faq: [
    {
      q: "What is the best Repurpose.io alternative for TikTok, Reels and Shorts?",
      a: "If you want to take a new video from your phone to TikTok, Reels and Shorts in one go, Profaily is built for that. You upload once, each platform gets its own caption, and Profaily checks the video against each platform before you schedule.",
    },
    {
      q: "Why can't Repurpose.io see my TikTok video?",
      a: "Repurpose.io's help center says it can only pull TikTok videos marked Public, and TikTok drafts aren't supported as a source. Its answer for videos that aren't public is a Drive or Dropbox folder. In Profaily you can also upload the file straight from your phone or computer.",
    },
    {
      q: "Why did Repurpose.io skip my YouTube Short?",
      a: "In auto mode, Repurpose.io skips videos longer than the Shorts length set in your workflow, unless you turn on auto trim, which cuts the end. You can still trim and schedule a skipped video by hand. In Profaily, a vertical video over three minutes goes to YouTube as a regular video instead, so nothing is skipped or cut.",
    },
    {
      q: "Does Profaily remove the TikTok watermark?",
      a: "There's no watermark to remove. You upload your own video file, and each platform gets that file, not a download from TikTok.",
    },
    {
      q: "Can I switch from Repurpose.io to Profaily without losing anything?",
      a: "Connecting your accounts to Profaily doesn't touch Repurpose.io, so your workflows there keep running until you turn them off. Turn off auto publish for any video you move, so it doesn't post twice. Bring your videos into Profaily from your device, Google Drive, Dropbox, OneDrive or a CSV file.",
    },
  ],
  cta: {
    title: "Try it on the next video you film",
    body: "Don't test Profaily on a demo clip. Upload the next video straight from your phone and send it to TikTok, Instagram and YouTube from Profaily in one go. See what it flags before you hit schedule. And if anything about Repurpose.io on this page is out of date by the time you read it, message me and I'll correct it.",
  },
};
