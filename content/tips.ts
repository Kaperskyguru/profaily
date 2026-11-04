/**
 * The hover cards (components/ui/FeatureTip.tsx): what a feature is, in a sentence or two, with a real
 * capture of it in the app when there is one. Keyed by the label the page shows, so the home page's
 * "And much more" list and the pricing table can share an entry.
 *
 * A card is one of three shapes, like the cards on Typefully's pricing page: text only, text with a
 * "Learn more" link, or text with a picture or a short loop. Every picture is a crop of the real app at 2x
 * (public/assets/tips), or a frame of a recording already on the site (public/assets/app).
 */
export type TipMedia = {
  src: string;
  /** A short muted loop; `poster` is shown until it plays. */
  kind?: "image" | "video";
  poster?: string;
  w: number;
  h: number;
  alt: string;
};
export type Tip = { title: string; text: string; media?: TipMedia; learn?: string };

const T = "/assets/tips/";
const A = "/assets/app/";

const img = (file: string, w: number, h: number, alt: string): TipMedia => ({ src: `${T}${file}.webp`, w, h, alt });

const library = img("library", 880, 459, "The Media Library: every video in the brand as a card showing its cover, with search, filters and status tabs");
const tags = img("tags", 880, 764, "A video's tag menu with the tag launch typed and the option to create it");
const emoji = img("emoji", 880, 933, "The emoji picker open under a caption");
const schedule = img("schedule", 880, 380, "The Schedule window with “tomorrow 9am” typed and Thu 5 Nov, 09:00 shown beneath it");
const queue = img("queue", 880, 735, "The Queue tab listing scheduled videos by day");
const brands = img("brands", 880, 947, "The brand switcher listing Profaily, Northwind Coffee, Lumen Studio and Harbor Fitness");
const team = img("team", 880, 717, "Team settings: Alex Morgan as an Editor with access to 1 of 4 brands");
const share = img("share", 880, 569, "The Share and collaborate window with a public link and an internal link");
const alerts = img("alerts", 880, 326, "Notification settings: an email when something goes wrong, and alerts on this device");
const install = img("install", 880, 667, "How to install Profaily on iPhone, Android or a computer");
const shortcuts = img("shortcuts", 880, 880, "The keyboard shortcuts list: N for a new video, 1 to 3 for the tabs, ⌘ Enter to publish");
const appearance = img("appearance", 880, 792, "Appearance settings: light, dark or system theme");
const calendar = img("calendar", 880, 425, "December on the calendar with scheduled videos on several days");
const agents = img("agents", 880, 532, "AI & Integrations settings: Claude, ChatGPT and MCP");

const importMenu = { src: `${A}feat-dupload.webp`, w: 1280, h: 960, alt: "The Import menu on a new video: From device, Camera, Import CSV, Google Drive, Dropbox and OneDrive" } satisfies TipMedia;
const approve = { src: `${A}feat-dapprove.webp`, w: 1280, h: 1280, alt: "A video waiting for approval with the activity panel beside it, and Request changes and Approve and schedule at the top" } satisfies TipMedia;
const connect = { src: `${A}feat-dconnect.webp`, w: 720, h: 720, alt: "The Connect a channel window with TikTok, Instagram, YouTube and Facebook" } satisfies TipMedia;
const perChannel: TipMedia = { src: `${A}feat-dwrite.mp4`, poster: `${A}feat-dwrite.webp`, kind: "video", w: 1280, h: 962, alt: "A caption being edited for one channel while the others keep the original" };
const previews: TipMedia = { src: `${A}feat-dpreviews.mp4`, poster: `${A}feat-dpreviews.webp`, kind: "video", w: 1280, h: 962, alt: "The same video previewed in the TikTok, Instagram, Facebook and YouTube players" };

const tipList: Tip[] = [
  // --- the home page's "And much more" list
  { title: "Media library", text: "Every video in a brand in one place, shown by its cover. Search it, filter by status, or select several at once.", media: library },
  { title: "Tags", text: "Tag a video as you work. Create a tag by typing it, or manage them all in one place.", media: tags },
  { title: "Variables", text: "Save text you reuse, then drop it into any caption. A variable can hold a different value for each channel." },
  { title: "Emojis", text: "Add emojis from the composer without leaving the caption.", media: emoji },
  { title: "Carousels", text: "Add several images to one post and send them as a carousel, or send each image on its own." },
  { title: "Auto resize", text: "Each channel shows your video in its own format. Check every player before you publish, so nothing goes out cropped.", media: previews },
  { title: "Auto video conversion", text: "Upload a video in the format you have. Profaily converts it to what each channel accepts." },
  { title: "Schedule in plain words", text: "Type when, like “tomorrow 9am”, and Profaily turns it into a date and time for you to confirm.", media: schedule },
  { title: "Posting queue", text: "Set a weekly rhythm and videos fill the next free slot. See what is coming up, day by day.", media: queue },
  { title: "Drive, Dropbox, OneDrive", text: "Bring in videos from the cloud storage you already use. Paste a link, or import many at once from a CSV.", media: importMenu },
  { title: "Several brands", text: "Keep each business or client apart, with its own channels, schedule and history. Switch between them in one click.", media: brands, learn: "/made-for/agencies" },
  { title: "Team roles", text: "Give each person a role, Viewer, Editor, Producer or Admin, and choose which brands they can open.", media: team, learn: "/made-for/agencies" },
  { title: "Shareable review links", text: "Share a draft with a link. Anyone who has it can watch the video and leave comments, even outside your team.", media: share },
  { title: "Phone alerts", text: "Turn on notifications and get an alert on your phone when a video fails or a channel needs reconnecting.", media: alerts },
  { title: "Installable phone app", text: "Add Profaily to the home screen of an iPhone or Android phone and open it like any other app.", media: install },
  { title: "Desktop app", text: "Install Profaily from Chrome or Edge and it opens in its own window, with no browser bar." },
  { title: "Keyboard shortcuts", text: "Press N for a new video, 1 to 3 to switch tabs, and ⌘ Enter to publish. Press ? to see them all.", media: shortcuts },
  { title: "Dark mode", text: "Choose light, dark, or match your device.", media: appearance },

  // --- the pricing table (rows that are not already above)
  { title: "Calendar", text: "See everything scheduled by month, week or day, across your brands.", media: calendar },
  { title: "Scheduling", text: "Pick a time, type it in plain words, or take the next free queue slot.", media: schedule },
  { title: "Queue slots", text: "Set a weekly rhythm and videos fill the next free slot.", media: queue },
  { title: "Drafts and tags", text: "Keep videos as drafts and label them with tags until they are ready.", media: tags },
  { title: "Import videos", text: "Bring in many videos at once from Drive, OneDrive, Dropbox or a CSV file.", media: importMenu },
  { title: "TikTok", text: "Schedule and publish your videos to TikTok, with TikTok’s own caption and privacy settings.", learn: "/tiktok" },
  { title: "Instagram", text: "Schedule and publish your videos to Instagram Reels, with a caption of their own.", learn: "/instagram" },
  { title: "YouTube", text: "Schedule and publish Shorts to YouTube, with the title YouTube needs.", learn: "/youtube" },
  { title: "Facebook", text: "Schedule and publish Reels to a Facebook Page, or send a text-only post.", learn: "/facebook" },
  { title: "A caption per channel", text: "Write one caption, then change it for any channel without touching the others.", media: perChannel },
  { title: "Titles and variables", text: "Add the title YouTube needs, and variables whose value differs per channel." },
  { title: "Images as well as videos", text: "Distribute images too, as a carousel or one per file." },
  { title: "Text-only to Facebook", text: "Send text with no file to a Facebook Page." },
  { title: "Brands", text: "A brand holds the channels, schedule and history of one business or client.", media: brands },
  { title: "Connected channels", text: "The accounts you can connect across all your brands.", media: connect },
  { title: "Team members", text: "Everyone who can work in your team, counting invites." },
  { title: "AI app calls per month", text: "Each action Claude or ChatGPT takes for you, like drafting or scheduling a video, counts as one call.", media: agents },
  { title: "Shared team", text: "Invite people to work in the same videos, each with a role." },
  { title: "Roles", text: "Decide who can view, edit, schedule or manage.", media: team, learn: "/made-for/agencies" },
  { title: "Approvals before distributing", text: "An editor sends a video for review before it goes out. A producer approves it or asks for changes.", media: approve, learn: "/made-for/agencies" },
  { title: "Choose which brands each team member sees", text: "Give each team member access to only some brands.", media: team },
  { title: "AI apps (MCP)", text: "Connect Claude or ChatGPT to plan and schedule for you.", media: agents, learn: "/made-for/ai-first" },
  { title: "Plan whole campaigns", text: "Ask an AI app to lay out and schedule a full campaign.", learn: "/made-for/ai-first" },
  { title: "Remove the #profaily tag", text: "Turn off the #profaily tag added to the end of your videos." },
];

const byLabel = new Map(tipList.map((t) => [t.title, t]));

/** The card for a label, or null when there is none (the label then renders as plain text). */
export const tipFor = (label: string): Tip | null => byLabel.get(label) ?? null;
