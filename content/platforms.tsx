/**
 * PlatformContent fields (everything else on the platform pages is shared template markup):
 *  name                      "TikTok" etc. (breadcrumb, h2s, how-it-works intro, FAQ heading)
 *  meta                      title, description, path (og:url only -> <OgUrl>)
 *  hero.eyebrow/title/lede
 *  mock.fields[]             {label,value} field rows or {toggle} rows, in order
 *  mock.rowLabel/statusClass/statusText   final mock-row ("status" | "status warn")
 *  benefits[3]               {title, body}
 *  steps[3]                  {title, body}  (step numbers derived 01..03)
 *  faq[3]                    {q, a}
 */
import type { ReactNode } from "react";

export type PlatformContent = {
  name: string;
  meta: { title: string; description: string; path: string };
  hero: { eyebrow: string; title: string; lede: string };
  mock: {
    fields: ({ label: string; value: string } | { toggle: string })[];
    rowLabel: string;
    statusClass: string;
    statusText: string;
  };
  benefits: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  faq: { q: string; a: ReactNode }[];
};

export const platforms = {
  tiktok: {
    name: "TikTok",
    meta: { title: "TikTok video marketing | Profaily", description: "Prepare short-form video for TikTok, review the controls available to your connected account, schedule or publish, and follow its status. Then connect eligible audience activity to the next business action.", path: "/tiktok" },
    hero: { eyebrow: "Short-form video marketing on TikTok", title: "Run TikTok publishing and response from one workflow.", lede: "Prepare short-form video for TikTok, review the controls available to your connected account, schedule or publish, and follow its status. Then connect eligible audience activity to the next business action." },
    mock: {
      fields: [
        { label: "Caption", value: "A simpler way to move every video forward." },
        { label: "Privacy", value: "Available to this account ▾" },
        { toggle: "Allow comments" },
        { toggle: "Commercial content disclosure" },
      ],
      rowLabel: "Account settings checked", statusClass: "status", statusText: "Ready",
    },
    benefits: [
      { title: "TikTok-specific post setup", body: "Customize the caption, available privacy options, interaction settings, cover frame, and commercial-content disclosures for the connected account." },
      { title: "Account-aware publishing", body: "Check creator settings and publishing readiness before sending. Follow processing and final status so an accepted upload is not mistaken for a finished post." },
      { title: "Engagement to qualified interest", body: "Bring eligible comments or messages into response and lead workflows where TikTok permissions and product capabilities allow." },
    ],
    steps: [
      { title: "Connect the right account", body: "Authorize an eligible TikTok account and see its available posting controls." },
      { title: "Prepare the video for TikTok", body: "Write TikTok-specific copy, choose available interaction and disclosure settings, and check the post before scheduling." },
      { title: "Track status and next actions", body: "Follow publishing progress and route eligible audience conversations into automation or lead qualification." },
    ],
    faq: [
      { q: "Can I customize the TikTok post separately?", a: "Yes. The TikTok destination has its own caption and supported publishing controls while using the same source video." },
      { q: "Can Profaily publish publicly on every TikTok account?", a: "Publishing visibility and actions depend on TikTok app access, account eligibility, permissions, and the options TikTok returns for that account." },
      { q: "Can TikTok comments become leads?", a: "Eligible comments and messages can enter Profaily’s conversation and lead workflows where the platform makes the required access available." },
    ],
  },
  instagram: {
    name: "Instagram",
    meta: { title: "Instagram video marketing | Profaily", description: "Keep Instagram Reels in the same video-first operation as your other channels. Tailor Reel details, schedule confidently, review publishing status, and connect eligible responses to follow-up.", path: "/instagram" },
    hero: { eyebrow: "Short-form video marketing on Instagram", title: "Plan and publish Reels with every channel detail in view.", lede: "Keep Instagram Reels in the same video-first operation as your other channels. Tailor Reel details, schedule confidently, review publishing status, and connect eligible responses to follow-up." },
    mock: {
      fields: [
        { label: "Reel caption", value: "Make your next video easier to publish." },
        { label: "Cover frame", value: "Choose from video · Edit cover" },
        { toggle: "Also share to Feed" },
        { label: "Collaboration details", value: "Set where supported" },
      ],
      rowLabel: "Professional account connected", statusClass: "status", statusText: "Ready",
    },
    benefits: [
      { title: "Reel-ready publishing", body: "Set Instagram-specific caption, cover, feed placement, and other supported Reel details independently from other platform versions." },
      { title: "Connected calendar and status", body: "Coordinate Reels alongside TikTok, YouTube, and Facebook plans; see per-destination progress and handle exceptions." },
      { title: "Response and lead workflows", body: "Bring supported comments and business messages into automation, qualification, and human follow-up workflows." },
    ],
    steps: [
      { title: "Connect a professional account", body: "Authorize an eligible Instagram Business or Creator account and review the permissions available." },
      { title: "Tailor the Reel", body: "Use the shared source video, then refine the caption, cover, feed placement, and other supported metadata." },
      { title: "Publish and follow response", body: "Schedule or publish, track processing and status, then connect eligible audience interactions to follow-up." },
    ],
    faq: [
      { q: "Does Profaily edit or resize Reels?", a: "No. Profaily uses your uploaded video as provided. You can change the Reel details, but video editing and resizing are not part of this workflow." },
      { q: "Can I set different Instagram metadata?", a: "Yes. Instagram’s caption and supported Reel options can be set independently from other destinations." },
      { q: "Which Instagram accounts are supported?", a: "Publishing requires an eligible professional account and the permissions available to the Profaily connection." },
    ],
  },
  youtube: {
    name: "YouTube",
    meta: { title: "YouTube video marketing | Profaily", description: "Prepare the video, title, description, audience details, and visibility for YouTube. Schedule it with the rest of your short-form videos and follow processing and publishing status from one workspace.", path: "/youtube" },
    hero: { eyebrow: "Short-form video marketing on YouTube", title: "Bring YouTube Shorts into your video workflow.", lede: "Prepare the video, title, description, audience details, and visibility for YouTube. Schedule it with the rest of your short-form videos and follow processing and publishing status from one workspace." },
    mock: {
      fields: [
        { label: "Title", value: "A better way to manage short-form video" },
        { label: "Description", value: "Publish, respond, and learn in one workflow…" },
        { label: "Audience", value: "Made for kids? · Select one" },
        { toggle: "Schedule for later" },
      ],
      rowLabel: "Visibility and audience reviewed", statusClass: "status warn", statusText: "Review",
    },
    benefits: [
      { title: "Purpose-built video details", body: "Write a YouTube title and description, set required audience details, and choose available visibility and scheduling options." },
      { title: "Consistent cross-channel planning", body: "Keep a YouTube version in the same calendar as other platform posts while preserving its distinct metadata." },
      { title: "Clear processing and outcomes", body: "Follow YouTube’s upload and processing lifecycle so teams can see what is still underway and what needs action." },
    ],
    steps: [
      { title: "Connect a YouTube channel", body: "Authorize the channel and select the destination for the video." },
      { title: "Complete video details", body: "Add a YouTube-specific title and description, set audience information, and review channel requirements." },
      { title: "Schedule and monitor", body: "Choose visibility and timing, then follow the video through upload, processing, and final status." },
    ],
    faq: [
      { q: "Can YouTube have a different title and description?", a: "Yes. YouTube title and description fields are independent from the captions and titles used on other platforms." },
      { q: "Can I schedule a YouTube video?", a: "Profaily can schedule eligible video posts; available options depend on the channel’s permissions and YouTube requirements." },
      { q: "Does Profaily change my video into a Short?", a: "Profaily publishes the source video you provide. Whether YouTube classifies it as a Short depends on YouTube’s current rules and the video itself." },
    ],
  },
  facebook: {
    name: "Facebook",
    meta: { title: "Facebook video marketing | Profaily", description: "Prepare Reels and videos for the right Facebook Page, set the Page-level details, schedule with the shared video calendar, and track each result. Follow supported comments and messages into the same response and lead workflows.", path: "/facebook" },
    hero: { eyebrow: "Short-form video marketing on Facebook", title: "Manage Facebook Page video publishing alongside every channel.", lede: "Prepare Reels and videos for the right Facebook Page, set the Page-level details, schedule with the shared video calendar, and track each result. Follow supported comments and messages into the same response and lead workflows." },
    mock: {
      fields: [
        { label: "Facebook Page", value: "Profaily Studio Page ▾" },
        { label: "Title / description", value: "A simpler short-form video operation" },
        { label: "Post format", value: "Video · Reel where eligible" },
        { toggle: "Schedule this post" },
      ],
      rowLabel: "Page permissions checked", statusClass: "status", statusText: "Ready",
    },
    benefits: [
      { title: "Page-aware publishing", body: "Connect a Facebook Page with the required publishing role and prepare video or Reels posts for that destination." },
      { title: "One calendar, distinct Page posts", body: "Coordinate Facebook timing with other channels while keeping its title, description, schedule, and status independent." },
      { title: "Publishing to follow-up", body: "Bring eligible Page comments or messages into automation, lead routing, and performance learning where available." },
    ],
    steps: [
      { title: "Connect the Facebook Page", body: "Authorize a Page and review its role and publishing permissions." },
      { title: "Prepare Page video", body: "Set Facebook-specific title, description, destination, and available schedule options." },
      { title: "Track and follow up", body: "Monitor publishing status and route eligible audience activity into the next step." },
    ],
    faq: [
      { q: "Can Profaily publish to a personal Facebook profile?", a: "The publishing workflow is designed for Facebook Pages with the required Page permissions." },
      { q: "Can one video be used on Facebook and other platforms?", a: "Yes. Profaily can create separate destination posts from one source video, with Facebook details managed independently." },
      { q: "Will every Facebook video appear as a Reel?", a: "The final surface is determined by Facebook and can depend on the video and platform behavior; Profaily does not promise a particular surface for every upload." },
    ],
  },
} satisfies Record<string, PlatformContent>;
