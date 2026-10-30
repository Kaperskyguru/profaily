/**
 * "Made for" pages: one landing page per kind of customer, Buffer's /made-for/* format (h1 "Profaily for X", a tagline,
 * four benefits, four feature rows with real product captures, FAQ, close). Every claim is something the app does today:
 * plans from content/plans.ts, tools from backend/src/mcp/tools. A public REST API and an Agency plan do not exist yet, so
 * these pages never promise them.
 */
export type AudienceKey = "creators" | "businesses" | "agencies" | "developers" | "ai-first";

export type Row = {
  verb: string;
  title: string;
  lead: string;
  points: [string, string, string];
  image?: { src: string; alt: string };
  /** A code sample instead of a picture (developers). */
  code?: string;
  /** The live ChatGPT demo instead of a picture. */
  demo?: "mcp";
};

export type AudienceContent = {
  key: AudienceKey;
  label: string;
  nav: string;
  meta: { title: string; description: string; path: string };
  hero: { title: string; tagline: string; lede: string; image: { src: string; alt: string } };
  benefits: { title: string; body: string }[];
  rows: Row[];
  faq: { q: string; a: string }[];
  close: { heading: string; lede: string };
};

const shot = (name: string, alt: string) => ({ src: `/assets/app/${name}.jpg`, alt });

export const audiences: Record<AudienceKey, AudienceContent> = {
  creators: {
    key: "creators",
    label: "Creators",
    nav: "Post every day without living in four apps",
    meta: {
      title: "Profaily for creators | Schedule short-form video everywhere",
      description: "Upload a video once and Profaily posts it to TikTok, Instagram Reels, YouTube and Facebook, each with its own caption, on a schedule you set once.",
      path: "/made-for/creators",
    },
    hero: {
      title: "Profaily for creators",
      tagline: "Post every day without living in four apps",
      lede: "Upload a video once. Profaily posts it to TikTok, Instagram Reels, YouTube and Facebook, each with its own caption, on a schedule you set once.",
      image: shot("ch-tiktok-composer", "Profaily composer with a kitten video and its caption in a TikTok preview"),
    },
    benefits: [
      { title: "One upload, four channels", body: "Send the same video to TikTok, Instagram Reels, YouTube and Facebook without exporting it four times." },
      { title: "See it before it posts", body: "Each channel gets its own caption and its own player preview, so nothing surprises you after it goes live." },
      { title: "A queue that fills itself", body: "Set your posting times once. New videos drop into the next open slot, or say “next Tuesday 6pm”." },
      { title: "Plan from ChatGPT or Claude", body: "Ask your assistant to draft and schedule videos for you. You still see what goes out and when." },
    ],
    rows: [
      { verb: "Create", title: "Write once, tune for each channel", lead: "One caption to start, then change it for any channel without touching the others. A shorter one for TikTok, a title for YouTube.", points: ["Real player previews for every channel", "Reuse text with variables instead of retyping it", "Drafts stay saved while you work"], image: shot("ch-instagram-composer", "Profaily composer with a puppy video in an Instagram Reels preview") },
      { verb: "Import", title: "Bring in a month of videos in one go", lead: "Paste links from Google Drive, Dropbox or OneDrive, or upload a spreadsheet with a caption and a time for each video.", points: ["Problems are flagged before anything is scheduled", "Fix the few that need it, schedule the rest", "No downloading and re-uploading"], image: shot("feat-import", "Profaily CSV import: drop a file and see which columns it reads") },
      { verb: "Schedule", title: "Fill your week in one sitting", lead: "Your posting slots fill with the next video you add. The calendar shows the week and the month, and dragging a video moves it.", points: ["Say when in plain words", "Add to your own calendar", "One calendar for every channel"], image: shot("mcp-6-calendar", "Profaily calendar with the Meet Miso video scheduled for Saturday at 09:00") },
      { verb: "Track", title: "Know what posted and what didn’t", lead: "The Publishing Center lists every video and where it stands on each channel, with a link to the live post.", points: ["If one channel fails, the others still post", "Retry only the one that failed", "Phone alerts when a video posts or needs you"], image: shot("feat-tracking", "Profaily Publishing Center listing a video and its status on each channel") },
    ],
    faq: [
      { q: "How much does Profaily cost for a creator?", a: "The Creator plan is $15 a month, or $12 a month billed yearly. It includes one brand, four connected channels and a monthly allowance of AI app calls." },
      { q: "Which channels can I post to?", a: "TikTok, Instagram Reels, YouTube (Shorts and longer videos) and Facebook Pages. We go deep on these four instead of shallow on twenty." },
      { q: "Does Profaily edit my videos?", a: "No. It posts the file you upload. The previews show how each channel will frame it, and anything a channel won’t accept is flagged before it is scheduled." },
      { q: "Can I use it on my phone?", a: "Yes. Profaily installs to your home screen and can alert you when a video posts or needs you." },
      { q: "What happens if one channel fails?", a: "The others still post. You see which one stopped and why, fix what it needs, and retry only that one." },
    ],
    close: { heading: "Make posting every day feel lighter", lede: "Upload once, see it in every player, and let the schedule do the rest." },
  },

  businesses: {
    key: "businesses",
    label: "Businesses",
    nav: "Keep video distribution on track across your team",
    meta: {
      title: "Profaily for businesses | Short-form video with team approval",
      description: "Plan, review and schedule short-form video across TikTok, Instagram Reels, YouTube and Facebook with roles, approvals and one shared calendar.",
      path: "/made-for/businesses",
    },
    hero: {
      title: "Profaily for businesses",
      tagline: "Keep video distribution on track across your team",
      lede: "Everyone sees the same calendar. Editors prepare videos, a producer says yes, and Profaily posts them to every channel on schedule.",
      image: shot("mcp-4-review", "Profaily as the producer: the Meet Miso video in review with Request changes and Approve and schedule"),
    },
    benefits: [
      { title: "Nothing goes out unapproved", body: "Editors send a video for review. A producer comments, asks for changes or approves. Only then is it scheduled." },
      { title: "Roles for everyone", body: "Admins, producers, editors and viewers each see and do what their role allows." },
      { title: "Brands kept apart", body: "Give each brand its own channels, schedule and history, and choose which brands each person sees." },
      { title: "One shared calendar", body: "See what is scheduled, in review and posted across every brand and channel." },
    ],
    rows: [
      { verb: "Approve", title: "A yes before it goes live", lead: "Review happens on the video itself, with comments and changes kept in one thread, so nobody hunts through chat for the latest cut.", points: ["Send for review, comment, request changes, approve", "Share a review link with someone outside the team", "A history of every change"], image: shot("mcp-4-review", "Profaily as the producer: the Meet Miso video in review with Request changes and Approve and schedule") },
      { verb: "Plan", title: "One calendar for the whole team", lead: "Posting slots keep the week full. Drag a video to a new day, or ask for a time in plain words.", points: ["Day, week and month views", "Posting slots for each brand", "Add scheduled videos to your own calendar"], image: shot("mcp-6-calendar", "Profaily week calendar with the Meet Miso video scheduled for Saturday at 09:00") },
      { verb: "Import", title: "Bring a campaign in as a file", lead: "Upload a spreadsheet or paste Drive, Dropbox and OneDrive links. Check what is flagged, then schedule the batch.", points: ["A caption and a time for every video", "Videos too long or titles too long are caught first", "Review before anything is sent"], image: shot("feat-import", "Profaily CSV import: drop a file and see which columns it reads") },
      { verb: "Track", title: "See every result in one place", lead: "The Publishing Center shows each video’s status on each channel, with a link to the live post and a retry where something failed.", points: ["Status per channel, live as it changes", "Retry only the channel that failed", "Alerts to the people who need to act"], image: shot("feat-tracking", "Profaily Publishing Center listing a video and its status on each channel") },
    ],
    faq: [
      { q: "What does the Business plan include?", a: "Three brands, twelve connected channels, five team members, roles and approvals before distributing. It starts with a 14-day free trial." },
      { q: "Who can approve a video?", a: "Producers and admins. Editors prepare videos and send them for review, and nothing is scheduled until a producer approves." },
      { q: "Can we keep several brands separate?", a: "Yes. Each brand has its own channels, schedule and history, and you choose which brands each team member can see." },
      { q: "Do we need to be on every channel?", a: "No. Connect the ones you use: TikTok, Instagram, YouTube and Facebook." },
      { q: "Can our assistant schedule videos for us?", a: "Yes. Connect Claude or ChatGPT to Profaily and ask it to draft, send for review and schedule. Your approval rules still apply." },
    ],
    close: { heading: "Give your team one place to publish from", lede: "Try Business free for 14 days. Connect your channels and invite your team before you pay." },
  },

  agencies: {
    key: "agencies",
    label: "Agencies",
    nav: "Run every client’s video from one workspace",
    meta: {
      title: "Profaily for agencies | Manage client short-form video",
      description: "Run short-form video for every client from one workspace: a brand per client, review links, approvals and a calendar across all of them.",
      path: "/made-for/agencies",
    },
    hero: {
      title: "Profaily for agencies",
      tagline: "Run every client’s video from one workspace",
      lede: "Give each client a brand with its own channels and schedule, get their yes before anything goes live, and see every client on one calendar.",
      image: shot("mcp-6-calendar", "Profaily week calendar with the Meet Miso video scheduled for Saturday at 09:00"),
    },
    benefits: [
      { title: "A brand for every client", body: "Each client’s channels, schedule and history stay in their own brand, so nothing gets mixed up." },
      { title: "Your team sees what they should", body: "Choose which brands each team member can open, and give them the role that fits the job." },
      { title: "Client sign-off built in", body: "Send a video for review and share a link, so the client can look before it is approved." },
      { title: "One calendar across clients", body: "See what is going out for everyone this week without opening six accounts." },
    ],
    rows: [
      { verb: "Organize", title: "Every client in its own brand", lead: "Add a client, connect their channels, set their posting slots. Switch between brands from the top of the app.", points: ["Separate channels, slots and history per brand", "Admins decide which brands each person sees", "Add and remove people as projects start and end"], image: shot("feat-fill", "Profaily calendar showing four brands, each with its own scheduled videos") },
      { verb: "Approve", title: "Get the yes without a chase", lead: "Review happens on the video. Your producer approves it, and a share link lets someone outside the team see it first.", points: ["Comments and requested changes stay on the video", "Nothing is scheduled until it is approved", "A record of who approved what"], image: shot("mcp-4-review", "Profaily as the producer: the Meet Miso video in review with Request changes and Approve and schedule") },
      { verb: "Import", title: "Load a client’s month in one file", lead: "A spreadsheet or a folder of Drive, Dropbox or OneDrive links becomes a schedule you can check and send in one pass.", points: ["A caption and a time for each video", "Flagged rows are fixed first", "Schedule the batch once it is clean"], image: shot("feat-import", "Profaily CSV import: drop a file and see which columns it reads") },
      { verb: "Track", title: "Know where every client stands", lead: "See each video’s status on every channel, with links to the live posts you can send to the client.", points: ["Status per channel, per brand", "Retry only what failed", "Alerts when something needs you"], image: shot("feat-tracking", "Profaily Publishing Center listing a video and its status on each channel") },
    ],
    faq: [
      { q: "How many clients can I manage?", a: "The Business plan includes three brands, twelve connected channels and five team members. If you manage more, contact us and we will talk through it." },
      { q: "Can a client approve their own videos?", a: "Producers and admins approve. A client can see a video through a share link before you approve it." },
      { q: "Can I control what my team sees?", a: "Yes. Roles set what someone can do, and you choose which brands each person can open." },
      { q: "Do you have a partner or commission program?", a: "Not yet. Contact us if you would like to talk about working together." },
      { q: "Which channels do my clients need?", a: "Whichever of TikTok, Instagram Reels, YouTube and Facebook they use. Each brand connects its own." },
    ],
    close: { heading: "Run your client roster from one place", lede: "Try Business free for 14 days. Set up your first client brand and see how it feels." },
  },

  developers: {
    key: "developers",
    label: "Developers",
    nav: "The publishing layer for whatever you’re building",
    meta: {
      title: "Profaily for developers | MCP server for video publishing",
      description: "Connect agents and scripts to Profaily’s MCP server: OAuth sign-in, scoped permissions, preview-then-confirm writes and idempotent calls.",
      path: "/made-for/developers",
    },
    hero: {
      title: "Profaily for developers",
      tagline: "The publishing layer for whatever you’re building",
      lede: "Profaily’s MCP server gives your agent, script or tool the same publishing workflow the app uses: drafts, review, scheduling and status.",
      image: shot("mcp-5-queue", "Profaily queue: the Meet Miso video scheduled for Saturday 31 October at 09:00 on four channels"),
    },
    benefits: [
      { title: "The real workflow, not a lookalike", body: "Over 25 tools cover drafts, uploads, review, approval, scheduling, campaigns and status, on the same services the app runs on." },
      { title: "Sign-in you would expect", body: "Users connect with OAuth. Scopes separate reading, writing and publishing, and a producer’s approval rules still apply." },
      { title: "Safe to call twice", body: "Writes take an idempotency key. Scheduling shows a preview first and only commits when you confirm." },
      { title: "Made for agents", body: "Inputs and outputs are schemas, errors say what to do next, and video bytes never travel through a tool call." },
    ],
    rows: [
      { verb: "Connect", title: "OAuth in, scoped tools out", lead: "A client discovers the server through its OAuth metadata, the user signs in to Profaily, and the client receives only the scopes it asked for.", points: ["Read, write and publish scopes", "Role checks happen on the server, not in your prompt", "Works with Claude, ChatGPT and other MCP clients"], image: shot("mcp-2-send", "Profaily send for review dialog: tomorrow 9am, with YouTube, TikTok, Instagram and Facebook ready") },
      { verb: "Preview", title: "Show the plan, then commit it", lead: "Scheduling tools take a confirm flag. Call with confirm: false to get exactly what would go out and when, show it to a person, then call again with confirm: true.", points: ["The preview names the time and every destination", "A stale version returns POST_STALE instead of overwriting", "The same call with the same key does not double-post"], code: `// 1. what would happen?\nschedule_post({\n  post_id: "7d1c…",\n  version: "2026-10-29T21:50:12Z",\n  scheduled_at: "2026-10-30T09:00:00+01:00",\n  confirm: false,\n  idempotency_key: "plan-7d1c-1"\n})\n// → { confirmed: false, scheduled_for: "…09:00", valid: true }\n\n// 2. do it\nschedule_post({ …same, confirm: true,
  idempotency_key: "plan-7d1c-2" })` },
      { verb: "Review", title: "Approval is part of the API", lead: "An editor’s agent sends a video for review. A producer’s agent, or the producer in the app, approves it. The rules your team set do not change because the caller is code.", points: ["send_for_review, approve_review, request_changes", "Approving schedules the video in a second, confirmed call", "Every step lands in the same history as in the app"], image: shot("mcp-4-review", "Profaily as the producer: the Meet Miso video in review with Request changes and Approve and schedule") },
      { verb: "Upload", title: "Bytes go to storage, not through the tool", lead: "Ask for an upload session, send the file to the short-lived signed URL, then register it. Or point Profaily at a link and let it fetch.", points: ["create_video_upload and upload_video", "import_video_from_link for Drive, Dropbox and OneDrive", "Files are checked before they can be scheduled"], image: shot("feat-import", "Profaily CSV import: drop a file and see which columns it reads") },
    ],
    faq: [
      { q: "Is there a public REST API?", a: "Not yet. The MCP server is the integration surface today. If you need a REST endpoint, tell us what you are building." },
      { q: "Which clients work with it?", a: "Any MCP client that supports OAuth, including Claude and ChatGPT." },
      { q: "Are there rate limits?", a: "Yes. Each plan includes a monthly allowance of AI app calls, and tools are limited per minute to protect your channels and ours." },
      { q: "Can my agent publish without a human?", a: "It can on accounts where it holds publish permission. On teams that use approvals, it can only send for review, and a producer approves." },
      { q: "Do I need a paid plan to try it?", a: "Business starts with a 14-day free trial, and every plan includes AI app calls." },
    ],
    close: { heading: "Give your agent a publishing layer", lede: "Connect Claude or ChatGPT in a minute and see the tools for yourself." },
  },

  "ai-first": {
    key: "ai-first",
    label: "AI-first users",
    nav: "Run your video schedule from a conversation",
    meta: {
      title: "Profaily for AI-first users | Schedule video from ChatGPT or Claude",
      description: "Connect ChatGPT or Claude to Profaily and ask for videos to be drafted, reviewed and scheduled, with a preview before anything goes out.",
      path: "/made-for/ai-first",
    },
    hero: {
      title: "Profaily for AI-first users",
      tagline: "Run your video schedule from a conversation",
      lede: "Tell ChatGPT or Claude what you want to post. Profaily drafts it, sends it for approval and puts it on the calendar, with a preview before anything is scheduled.",
      image: shot("mcp-6-calendar", "Profaily week calendar with the Meet Miso video scheduled for Saturday at 09:00"),
    },
    benefits: [
      { title: "Works where you already work", body: "Connect Profaily once to ChatGPT or Claude, or any assistant that speaks MCP." },
      { title: "You see it before it happens", body: "Scheduling shows what would go out and when. Nothing is committed until you say yes." },
      { title: "Your team’s rules still apply", body: "If your team approves videos, your assistant can draft and send for review, and a producer approves." },
      { title: "The same calendar as everyone", body: "Whatever your assistant schedules appears in the calendar your team already works from." },
    ],
    rows: [
      { verb: "Ask", title: "Say it the way you would to a person", lead: "“Schedule the Meet Miso video for tomorrow at 9 on every channel.” Your assistant finds the video, checks every channel and writes the caption.", points: ["Find videos in your library", "Check them against each channel’s rules", "Draft captions for each channel"], demo: "mcp" },
      { verb: "Confirm", title: "A preview, then your yes", lead: "Profaily shows the exact time and every destination first. Your assistant shows it to you, and only a confirmed call schedules the video.", points: ["No surprise posts", "A stale video is caught instead of overwritten", "A repeated request does not double-post"], image: shot("mcp-2-send", "Profaily send for review dialog: tomorrow 9am, with YouTube, TikTok, Instagram and Facebook ready") },
      { verb: "Approve", title: "Handing over to a human, on purpose", lead: "On a team plan, the assistant sends the video to your producer. They approve it in Profaily, or ask their own assistant to.", points: ["Comments and changes stay on the video", "Approval is recorded with the video", "Nothing goes out without it"], image: shot("mcp-4-review", "Profaily as the producer: the Meet Miso video in review with Request changes and Approve and schedule") },
      { verb: "Follow", title: "Ask where everything stands", lead: "“What’s going out this week?” “Did Meet Miso post?” Your assistant reads the calendar and the status of each channel.", points: ["The week and the month at a glance", "Which channel failed, and why", "Retry a single channel by asking"], image: shot("mcp-6-calendar", "Profaily week calendar with the Meet Miso video scheduled for Saturday at 09:00") },
    ],
    faq: [
      { q: "Which assistants work with Profaily?", a: "ChatGPT and Claude, and any other assistant that supports MCP with OAuth sign-in." },
      { q: "How do I connect it?", a: "Add Profaily as a connector in your assistant, sign in to Profaily when asked, and approve the permissions it requests." },
      { q: "Can the assistant post without asking me?", a: "Scheduling shows a preview first and needs a confirmed second step. On teams with approvals it can only send a video for review." },
      { q: "Does it cost extra?", a: "Every plan includes a monthly allowance of AI app calls. The Creator plan includes 500 a month." },
      { q: "Can it upload my videos?", a: "It can use videos already in your library, import from a Drive, Dropbox or OneDrive link, or upload a file through a signed link." },
    ],
    close: { heading: "Ask for your next video to go out", lede: "Connect your assistant and schedule your first video from a conversation." },
  },
};

export const audienceOrder: AudienceKey[] = ["creators", "businesses", "agencies", "developers", "ai-first"];
