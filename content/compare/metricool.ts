import type { Comparison } from "./types";

const shot = (name: string) => `/assets/compare/metricool-alternative/${name}`;

/**
 * Profaily vs Metricool. Metricool facts were checked on Metricool's own site and help center on 19 Nov 2026
 * (multiposting, approvals, "Sent" status, TikTok captions, requirements); the notes and links live with the
 * research for this page. Profaily facts: the composer, limits.ts (Ready), media-probe/compress.ts and
 * variants.ts (Compress, Convert), scheduling routes (retry one channel), reviews (approvals).
 */
export const metricool: Comparison = {
  slug: "metricool-alternative",
  rival: "Metricool",
  meta: {
    title: "Metricool Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Metricool, feature by feature: checks before you schedule, one-tap file fixes, a status for every platform and approvals on the Business plan.",
  },
  checked: "November 19, 2026",
  hero: {
    lede: "Profaily is built for one job: getting each short video onto TikTok, Instagram Reels and YouTube the way each platform wants it, and telling you straight when one didn't make it.",
    shot: {
      src: shot("hero-schedule.jpg"),
      alt: "Profaily with a short video open and the Schedule or publish window showing TikTok, Instagram and YouTube each marked Ready",
    },
  },
  stats: [
    { value: "1 upload", label: "goes to TikTok, Instagram Reels and YouTube, with its own text on each" },
    { value: "Ready", label: "or exactly what to fix, on every platform, before you schedule" },
    { value: "1 tap", label: "to fix a file Instagram or TikTok would refuse" },
    { value: "1 retry", label: "for the platform that failed, while the others stay posted" },
  ],
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
  },
  groups: [
    {
      title: "Scheduling",
      rows: [
        {
          feature: "Calendar and scheduling",
          them: { mark: "yes", text: "Planner calendar" },
          us: { mark: "yes", text: "Calendar by day and week, a time or the next queue slot" },
        },
        {
          feature: "Import videos in bulk",
          them: { mark: "yes", text: "CSV, with public Google Drive or Dropbox links" },
          us: { mark: "yes", text: "Google Drive, OneDrive, Dropbox or a CSV file" },
        },
      ],
    },
    {
      title: "Videos and captions",
      rows: [
        {
          feature: "One upload, its own text on each platform",
          them: { mark: "yes", text: "Multiposting, edit per network" },
          us: { mark: "yes", text: "A tab per platform, or Sync to write it once" },
        },
        {
          feature: "YouTube title",
          them: { mark: "yes", text: "A title field" },
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
          them: { mark: "partial", text: "Requirements listed in its help center" },
          us: { mark: "yes", text: "Each platform marked Ready, or told what to fix" },
        },
        {
          feature: "Fixes a file the platform would refuse",
          detail: "Too big for Instagram, or a frame rate TikTok won't take",
          them: { mark: "no", text: "Export a new file yourself" },
          us: { mark: "yes", text: "Compress for Instagram, Convert for TikTok, in one tap" },
        },
      ],
    },
    {
      title: "When something goes wrong",
      rows: [
        {
          feature: "A clear status for each platform",
          them: { mark: "partial", text: "Sent and Published are both green; hover to tell them apart" },
          us: { mark: "yes", text: "Live status per platform, with the platform's own reason when one fails" },
        },
        {
          feature: "Tells you when TikTok flags the caption",
          them: { mark: "no", text: "The video goes out without its text, and Metricool can't say which word" },
          us: { mark: "yes", text: "\u201cTikTok flagged the caption as risky or spammy. Edit it and retry.\u201d" },
        },
        {
          feature: "Retry only the platform that failed",
          them: { mark: "partial", text: "Duplicate the post and untick the networks that published" },
          us: { mark: "yes", text: "One tap; the platforms that posted aren't touched" },
        },
      ],
    },
    {
      title: "Teams and clients",
      rows: [
        {
          feature: "Shared team with roles",
          them: { mark: "yes", text: "On the Advanced plan" },
          us: { mark: "yes", text: "On the Business plan: Viewer, Editor, Producer and Admin" },
        },
        {
          feature: "Approval before anything posts",
          them: { mark: "yes", text: "On the Advanced plan" },
          us: { mark: "yes", text: "On the Business plan; an Editor's video goes to review first" },
        },
        {
          feature: "Choose which brands each person sees",
          them: { mark: "yes", text: "Brand permissions per user" },
          us: { mark: "yes", text: "On the Business plan" },
        },
      ],
    },
    {
      title: "AI apps",
      rows: [
        {
          feature: "Draft and schedule from ChatGPT or Claude",
          them: { mark: "yes", text: "Metricool MCP" },
          us: { mark: "yes", text: "Drafts, review, scheduling and whole campaigns; nothing is scheduled until you confirm" },
        },
      ],
    },
  ],
  reasons: [
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
      title: "A failed post can't pass for a posted one",
      body: "Every platform has its own live status. When one fails, it's marked Failed with the platform's own reason, and you get an email, while the other platforms carry on.",
      shot: { src: shot("one-failed.jpg"), alt: "The Publishing window with TikTok and Instagram processing and YouTube marked Failed" },
    },
    {
      title: "Retry the one that failed, nothing else",
      body: "Fix the cause and retry just that platform. Posts that already went out aren't touched, and temporary errors on the platform's side are retried for you.",
      shot: { src: shot("retry.mp4"), alt: "Retrying a failed YouTube post: Publish, Publish now, and YouTube posts" },
    },
    {
      title: "Nothing goes out without a yes",
      body: "On the Business plan, an Editor's video waits for a Producer or Admin to approve it before it can be scheduled.",
      shot: { src: shot("approve.jpg"), alt: "A video in review with Request changes and Approve and schedule buttons" },
    },
  ],
  founder: {
    name: "Solomon Eseme",
    role: "Founder of Profaily",
    quote: [
      "A founder signed up after seeing Profaily on my WhatsApp status. His first video went live on Instagram and YouTube, and TikTok refused it with a frame-rate error that told him nothing about what to do next.",
      "I didn't want the answer to be “go back to your editor and export it again”. So we added a warning on the TikTok tab and a one-tap fix. That's the kind of tool Profaily is.",
    ],
  },
  faq: [
    {
      q: "What is the best Metricool alternative for TikTok, Reels and Shorts?",
      a: "If short video is most of what you post, Profaily is built for it. It checks each video against TikTok, Instagram and YouTube before you schedule, fixes file problems in one tap, and shows you exactly which platform failed and why.",
    },
    {
      q: "Can I switch from Metricool to Profaily without losing anything?",
      a: "Yes. Connecting your accounts to Profaily doesn't touch Metricool, so your history and reports stay where they are. Upload your videos again or import them from Google Drive, Dropbox, OneDrive or a CSV file.",
    },
    {
      q: "Why did my TikTok post from Metricool go out without a caption?",
      a: "Metricool's help center says that when TikTok rejects words in a caption, the post doesn't fail; the video goes out without text, and Metricool can't tell which word caused it. When TikTok flags a caption in Profaily, you're told in plain words so you can edit it and retry.",
    },
    {
      q: "Why does Metricool say Sent when my video isn't on TikTok?",
      a: "Sent means Metricool sent you a notification to finish the post in the TikTok app, because auto-publish was off or the video used effects, stickers, music outside the Top 100, a location, a duet or a stitch. Sent and Published both show green, so you hover over the status to see which one you have.",
    },
    {
      q: "Which plan do I need for approvals?",
      a: "In Profaily, approvals come with the Business plan. Metricool includes its approval system on its Advanced plan.",
    },
    {
      q: "How does the Profaily trial work?",
      a: "You get 14 days of the Business plan, with approvals included. It asks for a card when you start.",
    },
  ],
  cta: {
    title: "Try it on a video you were going to post anyway",
    body: "Don't test Profaily on a demo clip. Take this week's real video, the one you'd normally push through Metricool, and send it to TikTok, Instagram and YouTube from Profaily. See what it flags before you hit schedule. And if anything about Metricool on this page is out of date by the time you read it, message me and I'll correct it.",
  },
};
