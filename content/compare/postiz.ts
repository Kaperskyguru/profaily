import type { Comparison } from "./types";

const shot = (name: string) => `/assets/compare/postiz-alternative/${name}`;

/**
 * Profaily vs Postiz. Postiz facts were checked on docs.postiz.com and the Postiz GitHub README on
 * 19 Nov 2026 (composer, media limits and formats, posting rules by platform, failed posts, approvals,
 * team roles, self-hosting). Profaily facts: the same verified set as the Metricool and Buffer pages,
 * plus lib/upload.ts in the frontend (MP4 and MOV, up to 4 GB).
 */
export const postiz: Comparison = {
  slug: "postiz-alternative",
  rival: "Postiz",
  meta: {
    title: "Postiz Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Postiz, feature by feature: video checks before you schedule, one-tap file fixes, MOV uploads, approvals and access per brand for your team.",
  },
  checked: "November 19, 2026",
  hero: {
    lede: "Postiz posts to a long list of networks, and you can run it on your own server. Profaily is for people whose week is short videos. It checks each one against TikTok, Instagram and YouTube before you schedule, and fixes the file when a platform would refuse it.",
    shot: {
      src: shot("hero-schedule.jpg"),
      alt: "Profaily with a short video open and the Schedule or publish window showing TikTok, Instagram and YouTube each marked Ready",
    },
  },
  stats: [
    { value: "4 GB", label: "MP4 or MOV, straight from your phone or editor" },
    { value: "Ready", label: "or exactly what to fix, on every platform, before you schedule" },
    { value: "1 tap", label: "to shrink a video for Instagram or fix its frame rate for TikTok" },
    { value: "Approve", label: "an Editor's video before it can be scheduled, on the Business plan" },
  ],
  workflow: {
    title: "One short video, three platforms",
    lede: "Here's what posting the same video to TikTok, Reels and Shorts looks like in each tool, going by Postiz's own docs.",
    them: [
      "Export the video as MP4 under 1 GB. A MOV has to be converted first.",
      "Write it in the Global tab, then detach any channel that needs its own text.",
      "If a platform won't take the file, re-encode it yourself, or through the API or CLI, and upload again.",
      "Keep it as a draft and send a preview link for comments, then schedule it yourself.",
      "A failed post gets a red ring on the calendar, with the reason in a tooltip.",
    ],
    us: [
      "Upload the MP4 or MOV you already have, up to 4 GB.",
      "Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "An Editor's video waits for a Producer or Admin to approve it.",
    ],
  },
  groups: [
    {
      title: "Scheduling",
      rows: [
        {
          feature: "Calendar and scheduling",
          them: { mark: "yes", text: "Calendar, with posting time slots per channel" },
          us: { mark: "yes", text: "Calendar by day and week, a time or the next queue slot" },
        },
      ],
    },
    {
      title: "Videos and captions",
      rows: [
        {
          feature: "One upload, its own text on each platform",
          them: { mark: "yes", text: "Global tab, or detach a channel to edit it" },
          us: { mark: "yes", text: "A tab per platform, or Sync to write it once" },
        },
        {
          feature: "YouTube title",
          them: { mark: "yes", text: "A title setting" },
          us: { mark: "yes", text: "Its own title, or the caption's first sentence" },
        },
        {
          feature: "Takes the video file you already have",
          detail: "The MOV your phone records, without converting it first",
          them: { mark: "partial", text: "MP4 only, up to 1 GB" },
          us: { mark: "yes", text: "MP4 or MOV, up to 4 GB" },
        },
      ],
    },
    {
      title: "Before it posts",
      rows: [
        {
          feature: "Checks every platform before you schedule",
          detail: "Size, length and format, against each platform's own limits",
          them: { mark: "partial", text: "Checks file count and type, text length and required settings" },
          us: { mark: "yes", text: "Each platform marked Ready, or told what to fix" },
        },
        {
          feature: "Fixes a file the platform would refuse",
          detail: "Too big for Instagram, or a frame rate TikTok won't take",
          them: { mark: "partial", text: "Optional re-encode through the API or CLI; in the app, do it yourself" },
          us: { mark: "yes", text: "Compress for Instagram, Convert for TikTok, in one tap" },
        },
      ],
    },
    {
      title: "When something goes wrong",
      rows: [
        {
          feature: "Shows why a post failed",
          them: { mark: "yes", text: "Red ring on the calendar; the reason in a tooltip" },
          us: { mark: "yes", text: "Live status per platform, with the platform's own reason" },
        },
      ],
    },
    {
      title: "Teams and clients",
      rows: [
        {
          feature: "Approval before anything posts",
          them: { mark: "partial", text: "Preview link with comments; keep it a draft until you're happy" },
          us: { mark: "yes", text: "On the Business plan; an Editor's video goes to review first" },
        },
        {
          feature: "Roles that decide who can publish",
          them: { mark: "partial", text: "User, Admin and Super Admin, across the whole organisation" },
          us: { mark: "yes", text: "On the Business plan: Viewer, Editor, Producer and Admin" },
        },
        {
          feature: "Choose what each person can reach",
          them: { mark: "partial", text: "Per organisation; no access per channel inside one" },
          us: { mark: "yes", text: "Per brand, on the Business plan" },
        },
      ],
    },
    {
      title: "AI apps",
      rows: [
        {
          feature: "Draft and schedule from ChatGPT or Claude",
          them: { mark: "yes", text: "MCP server, CLI and public API" },
          us: { mark: "yes", text: "Drafts, review, scheduling and whole campaigns; nothing is scheduled until you confirm" },
        },
      ],
    },
  ],
  reasons: [
    {
      title: "You find out before the post is due",
      body: "Before you schedule, Profaily checks the video against TikTok, Instagram and YouTube one by one: size, length and format. Each platform says Ready, or tells you what to change while there's still time.",
      shot: { src: shot("ready-check.jpg"), alt: "The Schedule or publish window with TikTok, Instagram and YouTube each marked Ready" },
    },
    {
      title: "The file gets fixed for you",
      body: "If a video is too big for Instagram, tap Compress. If its frame rate is one TikTok won't take, tap Convert. Profaily makes a copy for that platform only, and the others still get your original.",
      shot: { src: shot("convert-tiktok.jpg"), alt: "The TikTok tab warning that the video is 120 fps, with a Convert button" },
    },
    {
      title: "Upload what your phone recorded",
      body: "iPhones record MOV. Profaily takes MP4 or MOV up to 4 GB, so there's no export step between filming and scheduling.",
      shot: { src: shot("dropzone.jpg"), alt: "The Profaily composer: Drop a video to start, mp4, mov, or images, up to 4 GB" },
    },
    {
      title: "Nothing goes out without a yes",
      body: "On the Business plan, an Editor's video waits for a Producer or Admin. They approve it and schedule it, or send it back with what to change.",
      shot: { src: shot("approve.jpg"), alt: "A video in review with Request changes and Approve and schedule buttons" },
    },
    {
      title: "Each platform reports back on its own",
      body: "Every platform has its own live status. When one fails, it's marked Failed with the platform's reason and you get an email, while the others carry on.",
      shot: { src: shot("one-failed.jpg"), alt: "The Publishing window with TikTok and Instagram processing and YouTube marked Failed" },
    },
  ],
  founder: {
    name: "Solomon Eseme",
    role: "Founder of Profaily",
    quote: [
      "MasteringBackend posts a short video every day, and they go out through Profaily.",
      "I built it so the step between filming and posting is uploading the file you have and seeing Ready on each platform. No converting, no codec guides.",
    ],
  },
  faq: [
    {
      q: "What is the best Postiz alternative for TikTok, Reels and Shorts?",
      a: "If short video is most of what you post, Profaily is built for it. It checks each video against TikTok, Instagram and YouTube before you schedule and fixes common file problems in one tap. On the Business plan, an Editor's video waits for approval.",
    },
    {
      q: "Can I upload a MOV file to Postiz?",
      a: "Postiz's docs list MP4 as the video type it accepts, up to 1 GB, and say renaming a MOV won't get it through; you convert it first. Profaily takes MP4 or MOV up to 4 GB.",
    },
    {
      q: "Does Postiz have post approvals?",
      a: "Postiz lets you share a preview link that others can comment on, and its docs suggest keeping the post as a draft while it's reviewed; there's no approved flag that blocks publishing. In Profaily, on the Business plan, an Editor's video can't be scheduled until a Producer or Admin approves it.",
    },
    {
      q: "Do I need my own developer apps to self-host Postiz?",
      a: "Yes. Postiz's README says self-hosted installs need your own developer app on most platforms, including TikTok, Instagram and YouTube, and approval from Meta, YouTube or TikTok can take weeks. Postiz Cloud uses its own approved apps. Profaily is hosted, so you connect your accounts and start.",
    },
    {
      q: "Can I switch from Postiz to Profaily without losing anything?",
      a: "Connecting your accounts to Profaily doesn't touch Postiz, so your Postiz posts and history stay in Postiz. Bring your videos into Profaily from your device, Google Drive, Dropbox, OneDrive or a CSV file.",
    },
  ],
  cta: {
    title: "Try it on the video you filmed today",
    body: "Don't test Profaily on a demo clip. Take the video you were about to post, the MOV straight off your phone if that's what you have, and send it to TikTok, Instagram and YouTube from Profaily. See what it flags before you hit schedule. And if anything about Postiz on this page is out of date by the time you read it, message me and I'll correct it.",
  },
};
