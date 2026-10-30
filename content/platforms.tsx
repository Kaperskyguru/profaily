/**
 * One landing page per channel (/tiktok, /instagram, /youtube, /facebook), each written as if that channel
 * were the only product: Tailwind's Pinterest page and Buffer's channel pages are the model.
 *
 * PlatformContent fields (everything else on the channel pages is shared template markup):
 *  key       route slug + Glyph name
 *  name      "TikTok" etc.
 *  meta      title, description, path
 *  hero      the h1 and the line under it
 *  shots     real Profaily captures for this channel: the composer with its player preview, and the scheduling
 *            dialog with only this channel switched on (public/assets/app/ch-<key>-*.jpg)
 *  steps[4]  preview, schedule, approve, track: title, lead, two points, and which capture sits beside it
 *  benefits  four plain statements
 *  specs     the limits the app checks for this channel (backend/src/extensions/platforms/limits.ts)
 *  faq       plain text; the FAQPage JSON-LD is derived from it
 */
export type PlatformKey = "tiktok" | "instagram" | "youtube" | "facebook";

export type StepImage = "composer" | "dialog" | "review" | "calendar";

export type PlatformContent = {
  key: PlatformKey;
  name: string;
  meta: { title: string; description: string; path: string };
  hero: { title: string; lede: string };
  shots: { composer: { src: string; alt: string }; dialog: { src: string; alt: string } };
  steps: { verb: string; title: string; lead: string; points: [string, string]; image: StepImage }[];
  benefits: { title: string; body: string }[];
  specs: [string, string][];
  specsNote: string;
  faq: { q: string; a: string }[];
};

const REVIEW = { verb: "Approve", title: "Get a yes before it goes live", image: "review" as const };
const CALENDAR = { verb: "Track", image: "calendar" as const };

const assistant = (name: string) => ({
  title: "Plan it from ChatGPT or Claude",
  body: `Ask your assistant to draft, send for review and schedule ${name} videos through Profaily’s MCP server. Your approval rules still apply.`,
});

const approvalFaq = (name: string) => ({
  q: `Can my team approve ${name} videos before they go out?`,
  a: "Yes. An editor sends the video for review, and a producer approves it or asks for changes. Nothing is scheduled until it is approved.",
});

const assistantFaq = (name: string) => ({
  q: `Can I plan ${name} videos from ChatGPT or Claude?`,
  a: `Yes. Connect your assistant to Profaily over MCP and ask it to draft, send for review and schedule ${name} videos. A producer still has to approve them.`,
});


export const platforms = {
  tiktok: {
    key: "tiktok",
    name: "TikTok",
    meta: {
      title: "Schedule TikTok videos | Profaily",
      description: "Schedule and publish TikTok videos from one calendar. Preview in the TikTok player, set privacy and interaction options, get approval, and follow every post.",
      path: "/tiktok",
    },
    hero: {
      title: "Schedule your TikTok videos",
      lede: "Plan, preview and publish TikTok videos from one calendar. Set who can see each post, get a yes from your team, and see where every video stands.",
    },
    shots: {
      composer: { src: "/assets/app/ch-tiktok-composer.jpg", alt: "Profaily composer showing a kitten video and its caption in a TikTok player preview" },
      dialog: { src: "/assets/app/ch-tiktok-dialog.jpg", alt: "Profaily scheduling dialog with only TikTok switched on: who can see the post, comments, duet and stitch" },
    },
    steps: [
      { verb: "Preview", title: "See it in the TikTok player first", lead: "Upload your video and write the caption. Profaily shows it in a TikTok preview, so you can check the caption before anything is scheduled.", points: ["A TikTok caption of its own; your other channels keep theirs", "Import from Google Drive, Dropbox, OneDrive or a CSV"], image: "composer" },
      { verb: "Schedule", title: "Set your TikTok options once", lead: "Choose who can see the post, whether people can comment, duet or stitch, and whether it promotes goods or services. Then pick a time, or take the next open slot.", points: ["Options come from your connected TikTok account", "Profaily flags what TikTok would refuse before the post is sent"], image: "dialog" },
      { ...REVIEW, lead: "Send the video to a producer for review. They can comment, ask for changes or approve it, and nothing is scheduled until they do.", points: ["Comments and changes stay on the video", "Share a review link with a client"] },
      { ...CALENDAR, title: "Follow every TikTok on one calendar", lead: "See what is scheduled, in review and posted, across your whole team and every channel. Move a video by dragging it to a new day.", points: ["Status for every post, updated as it changes", "A link to the live TikTok once it posts"] },
    ],
    benefits: [
      { title: "Built around how TikTok publishing works", body: "Profaily reads the options TikTok returns for your account and shows only those, so you set privacy and interactions the same way every time." },
      { title: "The same video on more channels", body: "Send one upload to TikTok, Instagram Reels, YouTube Shorts and Facebook, with a caption written for each." },
      { title: "A queue you do not have to babysit", body: "Set your posting times once. New videos drop into the next open slot, and you can ask for a time in plain words, like “next Tuesday 6pm”." },
      assistant("TikTok"),
    ],
    specs: [
      ["Caption", "Up to 2,200 characters"],
      ["Video length", "Up to 10 minutes"],
      ["File size", "Up to 4 GB"],
      ["Preview", "TikTok player, in the composer"],
      ["Review", "Send for approval before it is scheduled"],
    ],
    specsNote: "Limits come from TikTok and are checked in Profaily before a post is sent. Publishing options depend on your connected account and TikTok’s permissions.",
    faq: [
      { q: "How do I schedule a TikTok with Profaily?", a: "Connect your TikTok account, upload a video, write the caption, then choose a time or the next open slot and press Schedule. If your team uses review, send it for approval first." },
      { q: "Can I customize the TikTok post separately?", a: "Yes. The TikTok destination has its own caption and supported publishing controls while using the same source video." },
      { q: "Can Profaily publish publicly on every TikTok account?", a: "Publishing visibility and actions depend on TikTok app access, account eligibility, permissions, and the options TikTok returns for that account." },
      { q: "Can I post the same video to Instagram, YouTube and Facebook?", a: "Yes. One upload can go to every connected channel, each with its own caption and settings." },
      approvalFaq("TikTok"),
      assistantFaq("TikTok"),
    ],
  },
  instagram: {
    key: "instagram",
    name: "Instagram",
    meta: {
      title: "Schedule Instagram Reels | Profaily",
      description: "Schedule and publish Instagram Reels from one calendar. Preview the Reel, set the caption and cover, get approval, and follow every post.",
      path: "/instagram",
    },
    hero: {
      title: "Schedule your Instagram Reels",
      lede: "Plan, preview and publish Instagram Reels from one calendar. Set the caption and cover, get a yes from your team, and keep Reels in step with your other channels.",
    },
    shots: {
      composer: { src: "/assets/app/ch-instagram-composer.jpg", alt: "Profaily composer showing a puppy video and its caption in an Instagram Reels preview" },
      dialog: { src: "/assets/app/ch-instagram-dialog.jpg", alt: "Profaily scheduling dialog with only Instagram switched on and marked Ready" },
    },
    steps: [
      { verb: "Preview", title: "See the Reel before it posts", lead: "Upload the video and write the caption. Profaily shows it in an Instagram Reels preview, caption included.", points: ["An Instagram caption of its own, up to 2,200 characters", "Choose the cover frame from the video"], image: "composer" },
      { verb: "Schedule", title: "Set the Reel details", lead: "Choose the cover, decide whether the Reel also shows on your Feed, and pick a time or the next open slot.", points: ["Feed sharing is a setting, not a second upload", "Profaily checks the video against Instagram’s limits first"], image: "dialog" },
      { ...REVIEW, lead: "Send the Reel to a producer for review. They can comment, ask for changes or approve it, and nothing is scheduled until they do.", points: ["Comments and changes stay on the video", "Share a review link with a client"] },
      { ...CALENDAR, title: "Keep Reels on the same calendar", lead: "See what is scheduled, in review and posted, next to your TikTok, YouTube and Facebook videos. Move a Reel by dragging it to a new day.", points: ["Status for every post, updated as it changes", "A link to the live Reel once it posts"] },
    ],
    benefits: [
      { title: "Reel details in one place", body: "Caption, cover frame and Feed placement sit next to a Reels preview, so you see the result as you set it." },
      { title: "The same video on more channels", body: "Send one upload to Instagram Reels, TikTok, YouTube Shorts and Facebook, with a caption written for each." },
      { title: "A queue you do not have to babysit", body: "Set your posting times once. New videos drop into the next open slot, and you can ask for a time in plain words, like “next Tuesday 6pm”." },
      assistant("Instagram"),
    ],
    specs: [
      ["Caption", "Up to 2,200 characters"],
      ["Video length", "Up to 15 minutes"],
      ["File size", "Up to 300 MB"],
      ["Account", "Instagram Business or Creator"],
      ["Preview", "Reels player, in the composer"],
    ],
    specsNote: "Limits come from Instagram and are checked in Profaily before a post is sent. Publishing needs an eligible professional account and the permissions your connection allows.",
    faq: [
      { q: "How do I schedule an Instagram Reel with Profaily?", a: "Connect your professional Instagram account, upload a video, write the caption and choose a cover, then pick a time or the next open slot and press Schedule." },
      { q: "Does Profaily edit or resize Reels?", a: "No. Profaily uses your uploaded video as provided. You can change the Reel details, but video editing and resizing are not part of this workflow." },
      { q: "Can I set different Instagram metadata?", a: "Yes. Instagram’s caption and supported Reel options can be set independently from other destinations." },
      { q: "Which Instagram accounts are supported?", a: "Publishing requires an eligible professional account and the permissions available to the Profaily connection." },
      approvalFaq("Instagram"),
      assistantFaq("Instagram"),
    ],
  },
  youtube: {
    key: "youtube",
    name: "YouTube",
    meta: {
      title: "Schedule YouTube Shorts and videos | Profaily",
      description: "Schedule and publish YouTube Shorts and videos from one calendar. Write the title and description, preview the Short, get approval, and follow every upload.",
      path: "/youtube",
    },
    hero: {
      title: "Schedule your YouTube Shorts and videos",
      lede: "Prepare the title, description and visibility, preview the Short, and schedule it with the rest of your short-form videos. Get a yes from your team first.",
    },
    shots: {
      composer: { src: "/assets/app/ch-youtube-composer.jpg", alt: "Profaily composer showing a puppy video and its title in a YouTube Shorts preview" },
      dialog: { src: "/assets/app/ch-youtube-dialog.jpg", alt: "Profaily scheduling dialog with only YouTube switched on and marked Ready" },
    },
    steps: [
      { verb: "Preview", title: "Write the title, see the Short", lead: "Upload the video and write the caption. The first sentence becomes the YouTube title, and Profaily shows it in a Shorts preview.", points: ["Title up to 100 characters, description up to 5,000", "A YouTube version of its own; other channels keep theirs"], image: "composer" },
      { verb: "Schedule", title: "Set visibility and audience", lead: "Choose visibility, say whether the video is made for kids, and pick a time or the next open slot.", points: ["Required audience details are asked before you send", "Profaily checks the video against YouTube’s limits first"], image: "dialog" },
      { ...REVIEW, lead: "Send the video to a producer for review. They can comment, ask for changes or approve it, and nothing is scheduled until they do.", points: ["Comments and changes stay on the video", "Share a review link with a client"] },
      { ...CALENDAR, title: "Follow every upload on one calendar", lead: "See what is scheduled, in review and posted, next to your TikTok, Instagram and Facebook videos. Move a video by dragging it to a new day.", points: ["Status for every post, from upload to published", "A link to the live video once it posts"] },
    ],
    benefits: [
      { title: "Title and description done properly", body: "Write a YouTube title and description, set audience details, and choose visibility, with a Shorts preview beside you." },
      { title: "The same video on more channels", body: "Send one upload to YouTube, TikTok, Instagram Reels and Facebook, with a caption written for each." },
      { title: "A queue you do not have to babysit", body: "Set your posting times once. New videos drop into the next open slot, and you can ask for a time in plain words, like “next Tuesday 6pm”." },
      assistant("YouTube"),
    ],
    specs: [
      ["Title", "Up to 100 characters"],
      ["Description", "Up to 5,000 characters"],
      ["Video length", "Up to 12 hours"],
      ["File size", "Up to 256 GB"],
      ["Preview", "Shorts player, in the composer"],
    ],
    specsNote: "Limits come from YouTube and are checked in Profaily before a video is sent. Available options depend on the channel’s permissions and YouTube’s requirements.",
    faq: [
      { q: "How do I schedule a YouTube Short with Profaily?", a: "Connect your YouTube channel, upload a video, write the title and description, then pick a time or the next open slot and press Schedule." },
      { q: "Can YouTube have a different title and description?", a: "Yes. YouTube title and description fields are independent from the captions and titles used on other channels." },
      { q: "Does Profaily change my video into a Short?", a: "Profaily publishes the source video you provide. Whether YouTube classifies it as a Short depends on YouTube’s current rules and the video itself." },
      { q: "Can I schedule a YouTube video for later?", a: "Yes. Profaily can schedule eligible video posts; available options depend on the channel’s permissions and YouTube requirements." },
      approvalFaq("YouTube"),
      assistantFaq("YouTube"),
    ],
  },
  facebook: {
    key: "facebook",
    name: "Facebook",
    meta: {
      title: "Schedule Facebook Page videos | Profaily",
      description: "Schedule and publish videos and Reels to your Facebook Page from one calendar. Preview the post, get approval, and follow every result.",
      path: "/facebook",
    },
    hero: {
      title: "Schedule videos to your Facebook Page",
      lede: "Prepare Reels and videos for your Page, preview them, and schedule with the rest of your channels. Get a yes from your team before anything goes out.",
    },
    shots: {
      composer: { src: "/assets/app/ch-facebook-composer.jpg", alt: "Profaily composer showing a kitten video and its caption in a Facebook Reels preview" },
      dialog: { src: "/assets/app/ch-facebook-dialog.jpg", alt: "Profaily scheduling dialog with only Facebook switched on and marked Ready" },
    },
    steps: [
      { verb: "Preview", title: "See the post the way Facebook shows it", lead: "Upload the video and write the title and description. Profaily shows it in a Facebook preview before anything is scheduled.", points: ["A Facebook title and description of their own", "Import from Google Drive, Dropbox, OneDrive or a CSV"], image: "composer" },
      { verb: "Schedule", title: "Pick the Page and the time", lead: "Choose the Facebook Page, set the format, and pick a time or the next open slot.", points: ["Videos publish as a Reel where Facebook allows it", "Profaily checks the post against your Page permissions first"], image: "dialog" },
      { ...REVIEW, lead: "Send the video to a producer for review. They can comment, ask for changes or approve it, and nothing is scheduled until they do.", points: ["Comments and changes stay on the video", "Share a review link with a client"] },
      { ...CALENDAR, title: "Follow every Page post on one calendar", lead: "See what is scheduled, in review and posted, next to your TikTok, Instagram and YouTube videos. Move a video by dragging it to a new day.", points: ["Status for every post, updated as it changes", "A link to the live post once it publishes"] },
    ],
    benefits: [
      { title: "Made for Facebook Pages", body: "Connect a Page you manage and prepare video and Reels posts for that destination, each with its own title, description and schedule." },
      { title: "The same video on more channels", body: "Send one upload to Facebook, TikTok, Instagram Reels and YouTube Shorts, with a caption written for each." },
      { title: "A queue you do not have to babysit", body: "Set your posting times once. New videos drop into the next open slot, and you can ask for a time in plain words, like “next Tuesday 6pm”." },
      assistant("Facebook"),
    ],
    specs: [
      ["Description", "Up to 63,206 characters"],
      ["File size", "Up to 10 GB"],
      ["Destination", "A Facebook Page you manage"],
      ["Preview", "Facebook player, in the composer"],
      ["Review", "Send for approval before it is scheduled"],
    ],
    specsNote: "Limits come from Facebook and are checked in Profaily before a post is sent. Publishing needs a Page with the required role and the permissions your connection allows.",
    faq: [
      { q: "How do I schedule a Facebook video with Profaily?", a: "Connect your Facebook Page, upload a video, write the title and description, then pick a time or the next open slot and press Schedule." },
      { q: "Can Profaily publish to a personal Facebook profile?", a: "The publishing workflow is designed for Facebook Pages with the required Page permissions." },
      { q: "Can one video be used on Facebook and other channels?", a: "Yes. Profaily can create separate destination posts from one source video, with Facebook details managed independently." },
      { q: "Will every Facebook video appear as a Reel?", a: "The final surface is determined by Facebook and can depend on the video and platform behavior; Profaily does not promise a particular surface for every upload." },
      approvalFaq("Facebook"),
      assistantFaq("Facebook"),
    ],
  },
} satisfies Record<PlatformKey, PlatformContent>;

export const platformOrder: PlatformKey[] = ["tiktok", "instagram", "youtube", "facebook"];
