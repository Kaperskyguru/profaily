import type { Comparison } from "./types";

const shot = (name: string) => `/assets/compare/buffer-alternative/${name}`;

/**
 * Profaily vs Buffer. Buffer facts were checked on Buffer's own help center on 19 Nov 2026
 * (bulk upload, automatic vs Notify Me publishing, YouTube Shorts, video troubleshooting,
 * roles and draft approvals, the MCP server); "Retry now" and send-to-queue are from Buffer's blog. Profaily facts are the same verified
 * set the Metricool page uses: the composer, Ready checks, Compress and Convert, per-platform
 * status and retry, reviews, and the pricing page's feature list.
 */
export const buffer: Comparison = {
  slug: "buffer-alternative",
  rival: "Buffer",
  meta: {
    title: "Buffer Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Buffer, feature by feature: bulk import for videos, checks before you schedule, one-tap file fixes and a clear status for every platform.",
  },
  checked: "November 19, 2026",
  hero: {
    lede: "Buffer is a good queue for every kind of post. Profaily does one thing: it gets short videos onto TikTok, Instagram Reels and YouTube in batches, each one checked against each platform before it's scheduled.",
    shot: {
      src: shot("hero-schedule.jpg"),
      alt: "Profaily with a short video open and the Schedule or publish window showing TikTok, Instagram and YouTube each marked Ready",
    },
  },
  stats: [
    { value: "1 import", label: "brings a batch of videos in from Google Drive, Dropbox, OneDrive or a CSV file" },
    { value: "Ready", label: "or exactly what to fix, on every platform, before you schedule" },
    { value: "1 tap", label: "to fix a file Instagram or TikTok would refuse" },
    { value: "1 retry", label: "for the platform that failed, while the others stay posted" },
  ],
  workflow: {
    title: "A week of short videos, three platforms",
    lede: "Here's what getting a batch of videos onto TikTok, Reels and Shorts looks like in each tool, going by Buffer's own help center.",
    them: [
      "Upload each video by hand. Buffer's CSV upload takes text and single images, not video, and not YouTube.",
      "Customize the post for each network, then schedule it.",
      "If a network rejects the file, resize or re-export it and upload it again.",
      "Each channel's post is separate after scheduling, so changes are made queue by queue.",
    ],
    us: [
      "Import the whole batch from Google Drive, Dropbox, OneDrive or a CSV file.",
      "Each video gets a tab per platform, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "Schedule it. If one platform fails, retry that one; the rest stay posted.",
    ],
  },
  groups: [
    {
      title: "Scheduling",
      rows: [
        {
          feature: "Calendar and scheduling",
          them: { mark: "yes", text: "Queue and calendar, with a posting schedule per channel" },
          us: { mark: "yes", text: "Calendar by day and week, a time or the next queue slot" },
        },
        {
          feature: "Import videos in bulk",
          detail: "A week of videos in one go, not one upload at a time",
          them: { mark: "no", text: "CSV upload takes text and single images only; not YouTube" },
          us: { mark: "yes", text: "Google Drive, OneDrive, Dropbox or a CSV file" },
        },
      ],
    },
    {
      title: "Videos and captions",
      rows: [
        {
          feature: "One upload, its own text on each platform",
          them: { mark: "yes", text: "Customize for each network" },
          us: { mark: "yes", text: "A tab per platform, or Sync to write it once" },
        },
        {
          feature: "YouTube title",
          them: { mark: "yes", text: "Filled from the caption's first line until you edit it" },
          us: { mark: "yes", text: "Its own title, or the caption's first sentence" },
        },
      ],
    },
    {
      title: "Before it posts",
      rows: [
        {
          feature: "Checks every platform before you schedule",
          detail: "Size, length and format, against each platform's own limits",
          them: { mark: "partial", text: "Flags some files in the composer; others fail when the network rejects them" },
          us: { mark: "yes", text: "Each platform marked Ready, or told what to fix" },
        },
        {
          feature: "Fixes a file the platform would refuse",
          detail: "Too big for Instagram, or a frame rate TikTok won't take",
          them: { mark: "no", text: "No one-tap fix for Instagram's size limit or TikTok's frame rates" },
          us: { mark: "yes", text: "Compress for Instagram, Convert for TikTok, in one tap" },
        },
      ],
    },
    {
      title: "When something goes wrong",
      rows: [
        {
          feature: "Retry only the platform that failed",
          them: { mark: "yes", text: "Retry now, or send it back to the queue" },
          us: { mark: "yes", text: "One tap; the platforms that posted aren't touched" },
        },
      ],
    },
    {
      title: "Teams and clients",
      rows: [
        {
          feature: "Shared team with roles",
          them: { mark: "yes", text: "On the Team plan: Admin, Creator, Collaborator and Viewer" },
          us: { mark: "yes", text: "On the Business plan: Viewer, Editor, Producer and Admin" },
        },
        {
          feature: "Approval before anything posts",
          them: { mark: "yes", text: "On the Team plan" },
          us: { mark: "yes", text: "On the Business plan; an Editor's video goes to review first" },
        },
        {
          feature: "Choose what each person can reach",
          them: { mark: "yes", text: "Per channel" },
          us: { mark: "yes", text: "Per brand, on the Business plan" },
        },
      ],
    },
    {
      title: "AI apps",
      rows: [
        {
          feature: "Draft and schedule from ChatGPT or Claude",
          them: { mark: "yes", text: "Buffer MCP server" },
          us: { mark: "yes", text: "Drafts, review, scheduling and whole campaigns; nothing is scheduled until you confirm" },
        },
      ],
    },
  ],
  reasons: [
    {
      title: "A week of videos goes in at once",
      body: "If you film five videos on a Sunday, you shouldn't upload them five times. Bring the batch in from Google Drive, Dropbox, OneDrive or a CSV file, then write each one up for each platform.",
      shot: { src: shot("import-menu.jpg"), alt: "The Profaily composer's Import menu: From device, Camera, Import CSV, Google Drive, Dropbox and OneDrive" },
    },
    {
      title: "You find out before the post is due",
      body: "Before you schedule, Profaily checks the video against TikTok, Instagram and YouTube one by one. Each platform says Ready, or tells you exactly what to change, while you still have time to change it.",
      shot: { src: shot("ready-check.jpg"), alt: "The Schedule or publish window with TikTok, Instagram and YouTube each marked Ready" },
    },
    {
      title: "The file gets fixed for you",
      body: "If a video is too big for Instagram, tap Compress. If its frame rate is one TikTok won't take, tap Convert. Profaily makes a copy for that platform only, and the others still get your original.",
      shot: { src: shot("convert-tiktok.jpg"), alt: "The TikTok tab warning that the video is 120 fps, with a Convert button" },
    },
    {
      title: "You see which platform failed, and why",
      body: "Every platform has its own live status. When one fails, it's marked Failed with the platform's own reason, TikTok included, and you get an email while the others carry on.",
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
    quote: [
      "MasteringBackend posts a short video every day, and they go out through Profaily, scheduled from Claude.",
      "What I look for each morning is simple: every platform marked Ready, or one plain line telling me what to fix. Then I leave it alone.",
    ],
  },
  faq: [
    {
      q: "What is the best Buffer alternative for TikTok, Reels and Shorts?",
      a: "If short video is most of what you post, Profaily is built for it. It imports videos in bulk, checks each one against TikTok, Instagram and YouTube before you schedule, fixes file problems in one tap, and shows you exactly which platform failed and why.",
    },
    {
      q: "Can I bulk upload videos to Buffer?",
      a: "Not with its CSV upload. Buffer's help center says bulk upload takes text and single-image posts only, and doesn't work for YouTube, so in the app you add videos post by post. Profaily imports videos in bulk from Google Drive, Dropbox, OneDrive or a CSV file.",
    },
    {
      q: "Why did Buffer send my Instagram post to my phone?",
      a: "Buffer posts to Instagram automatically only when the post meets Instagram's rules. If the video's aspect ratio is outside Instagram's range, or you add stickers, topics or product tags, Buffer switches the post to Notify Me and you finish it in the Instagram app.",
    },
    {
      q: "Can I switch from Buffer to Profaily without losing anything?",
      a: "Yes. Connecting your accounts to Profaily doesn't touch Buffer, so your queue, history and reports stay where they are. Bring your videos in from Google Drive, Dropbox, OneDrive or a CSV file.",
    },
    {
      q: "Which plan do I need for approvals?",
      a: "In Profaily, approvals come with the Business plan. Buffer includes draft approvals on its Team plan.",
    },
  ],
  cta: {
    title: "Try it on next week's batch",
    body: "Don't test Profaily on a demo clip. Take the videos you filmed for next week, the ones you'd normally upload to Buffer one by one, and bring the whole batch into Profaily. See what it flags before you hit schedule. And if anything about Buffer on this page is out of date by the time you read it, message me and I'll correct it.",
  },
};
