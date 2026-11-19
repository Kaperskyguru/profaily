import type { Comparison } from "./types";

const shot = (name: string) => `/assets/compare/later-alternative/${name}`;

/**
 * Profaily vs Later. Later facts were checked on help.later.com on 19 Nov 2026 (multi-profile
 * scheduling, Auto Publish vs notification, TikTok and Instagram restrictions, Reels, YouTube Shorts,
 * failed posts, team approvals). Profaily facts: the same verified set as the other compare pages,
 * plus lib/validate.ts in the frontend (Instagram's 15-minute limit) and the mobile web app.
 */
export const later: Comparison = {
  slug: "later-alternative",
  rival: "Later",
  meta: {
    title: "Later Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Later, feature by feature: each video checked for TikTok, Reels and Shorts before you schedule, one-tap file fixes, and one retry for a failed platform.",
  },
  checked: "November 19, 2026",
  hero: {
    lede: "Later plans your feed on a visual calendar across many networks. Profaily does one job: it takes a short video to TikTok, Reels and Shorts, and checks it against each before you schedule, at your desk or on your phone.",
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
    title: "A short video, posted from your phone",
    lede: "Here's what sending one video to TikTok, Reels and Shorts looks like in each tool, going by Later's own help center.",
    them: [
      "Pick the profiles, write the caption, then Customize each post.",
      "In Later's Android app, Shorts can't be scheduled; use desktop or iOS.",
      "For Instagram and TikTok, choose Auto Publish or a notification.",
      "For a notification post, open Instagram or TikTok at the set time and finish it there.",
    ],
    us: [
      "Upload the video once, on your phone or computer.",
      "Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "If one platform fails, retry that one. The rest stay posted.",
    ],
  },
  groups: [
    {
      title: "Scheduling",
      rows: [
        {
          feature: "Calendar and scheduling",
          them: { mark: "yes", text: "Visual calendar, drag and drop" },
          us: { mark: "yes", text: "Calendar by day and week, a time or the next queue slot" },
        },
        {
          feature: "One upload, its own text on each platform",
          them: { mark: "yes", text: "Customize each post before scheduling" },
          us: { mark: "yes", text: "A tab per platform, or Sync to write it once" },
        },
      ],
    },
    {
      title: "On your phone",
      rows: [
        {
          feature: "Schedule YouTube Shorts from an Android phone",
          them: { mark: "no", text: "Not in the Android app; desktop and iOS only" },
          us: { mark: "yes", text: "In your phone's browser, Android or iPhone" },
        },
    ],
    },
    {
      title: "Before it posts",
      rows: [
        {
          feature: "Fixes a file the platform would refuse",
          detail: "Too big for Instagram, or a frame rate TikTok won't take",
          them: { mark: "partial", text: "Trim the video while scheduling" },
          us: { mark: "yes", text: "Compress for Instagram, Convert for TikTok, in one tap" },
        },
      ],
    },
    {
      title: "Teams and clients",
      rows: [
        {
          feature: "Approval before anything posts",
          them: { mark: "yes", text: "On Growth and up; turn off Publish Without Approval for each person" },
          us: { mark: "yes", text: "On the Business plan; an Editor's video goes to review first" },
        },
        {
          feature: "Choose what each person can reach",
          them: { mark: "yes", text: "Access Groups" },
          us: { mark: "yes", text: "Per brand, on the Business plan" },
        },
      ],
    },
  ],
  reasons: [
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
      title: "The same app on every phone",
      body: "Profaily runs in your phone's browser, so Android and iPhone get the same thing: TikTok, Reels and Shorts, scheduled together, with the same checks you'd get at your desk.",
      shot: { src: shot("hero-schedule.jpg"), alt: "Profaily with a short video ready to schedule to TikTok, Instagram and YouTube" },
    },
    {
      title: "You see which platform failed, and why",
      body: "Every platform has its own live status. When one fails, it's marked Failed with the platform's own reason, and you get an email while the others carry on.",
      shot: { src: shot("one-failed.jpg"), alt: "The Publishing window with TikTok and Instagram processing and YouTube marked Failed" },
    },
    {
      title: "Retry the one that failed, nothing else",
      body: "Fix the cause and retry just that platform. Posts that already went out aren't touched, and temporary errors on the platform's side are retried for you.",
      shot: { src: shot("retry.mp4"), alt: "Retrying a failed YouTube post: Publish, Publish now, and YouTube posts" },
    },
  ],
  founder: {
    name: "Solomon Eseme",
    role: "Founder of Profaily",
    quote: ["MasteringBackend posts a short video every day, and they go out through Profaily."],
  },
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
    title: "Try it from your phone",
    body: "Don't test Profaily on a demo clip. Take the video you were about to post, open Profaily on your phone, and send it to TikTok, Instagram and YouTube in one go. See what it flags before you hit schedule. And if anything about Later on this page is out of date by the time you read it, message me and I'll correct it.",
  },
};
