/**
 * /mcp: Profaily for ChatGPT, Claude and any MCP app. Every claim here is checked against the backend
 * (src/mcp/**), the frontend (lib/ai-agents.ts, components/oauth/consent.tsx) and a real run in Claude on the
 * Masteringbackend brand on 20 November 2026. Screenshots are those real runs, framed with `yarn shot` under
 * public/assets/help/connect-*. No prices: the monthly allowance is a request count, not money.
 */

export const MCP_URL = "https://mcp.useprofaily.com/mcp";

const shot = (folder: string, name: string) => `/assets/help/${folder}/${name}.jpg`;

export const mcpPage = {
  meta: {
    title: "Profaily MCP server: schedule short videos from ChatGPT and Claude",
    description:
      "Connect Claude, ChatGPT or any MCP app to Profaily. Ask what went out, draft a video for every channel, check next week's plan. Nothing goes out without your yes.",
    path: "/mcp",
  },
  hero: {
    pill: "MCP server",
    title: "Run your video schedule from ChatGPT or Claude",
    lede: "Connect Profaily to Claude, ChatGPT or any app that speaks MCP, then ask for what you want in plain words. What went out this week. A draft for every channel. A check of next week's plan. Profaily shows a preview before anything is scheduled, and waits for your yes.",
    image: { src: shot("connect-claude", "add-dialog"), alt: "Claude's Add custom connector dialog with Profaily as the name and https://mcp.useprofaily.com/mcp as the server URL", w: 1600, h: 1322 },
  },
  /** Real prompts, run in Claude on the Masteringbackend brand on 20 Nov 2026. */
  examples: [
    {
      verb: "Check",
      ask: "What went out on my Masteringbackend brand in Profaily this week, and did anything fail? Keep it short and leave out who posted each one.",
      title: "Know what went out without opening four apps",
      body: "Claude read the calendar and every channel's result. Eight videos went out and none failed. It still pointed out the posts that only went out on a retry or late, with the channel and the number of attempts.",
      image: { src: shot("connect-an-ai-app", "week"), alt: "Claude's answer: eight videos went out on Masteringbackend from Monday to Friday, none failed, and three posts went out on a retry", w: 1600, h: 1468 },
    },
    {
      verb: "Draft",
      ask: "Take the newest video in my Masteringbackend media library and make it a draft for all four channels, with a caption written in each platform's style. Don't schedule it yet.",
      title: "One video, drafted for every channel",
      body: "Claude found the video in the library, checked the brand's channels and saved a draft for Instagram, YouTube, Facebook and TikTok. It came back with a review link you can send to a client, who can watch it and comment without signing in. Nothing was scheduled.",
      image: { src: shot("connect-an-ai-app", "draft"), alt: "Claude saying it saved the draft for all four channels, that nothing is scheduled, with the Profaily review link", w: 1600, h: 474 },
    },
    {
      verb: "Plan",
      ask: "Check a plan for me, but don't schedule anything: my Round Robin vs Least Connections draft on Tuesday at 5pm and the next open queue slot after that for anything else ready. Tell me if any channel would refuse it.",
      title: "Check next week before you commit to it",
      body: "Profaily checked every video against every channel's rules and gave each one an exact time from the brand's queue. It caught two posts YouTube would refuse because they were images, and one file already used on another post. Nothing changed until you say go.",
      image: { src: shot("connect-an-ai-app", "plan"), alt: "Claude's plan check: the Round Robin short on Tuesday at 17:00 accepted on all four channels, and three more drafts in the next queue slots, two of which YouTube won't take because they are images", w: 1600, h: 1560 },
    },
    {
      verb: "Preview",
      ask: "Preview what would happen if that draft went out Monday at 4pm Lagos time. Only show me the preview, do not schedule it.",
      title: "A preview first, every time",
      body: "Scheduling in Profaily is two steps: a preview, then a confirmed call. Here the preview showed the time, the four channels, and one problem: the same file had already gone out on Wednesday. Profaily blocks a repost unless you say otherwise. Nothing was scheduled.",
      image: { src: shot("connect-an-ai-app", "preview"), alt: "Claude reporting Profaily's preview: Monday 16:00 Lagos time on Instagram, YouTube, Facebook and TikTok, blocked only because the file was already posted on Wednesday", w: 1600, h: 1158 },
    },
  ],
  /** More things to ask, each backed by a tool in src/mcp/tools. */
  moreAsks: [
    "Import this Google Drive link and draft it for TikTok and Shorts.",
    "Give the YouTube version its own title and description.",
    "Send this draft to my producer for review.",
    "Approve the video waiting for review and schedule it for Friday at 9.",
    "Move tomorrow's video to Thursday at 6pm.",
    "TikTok failed on last night's video. Why, and can you retry just TikTok?",
    "Take this week's videos out of the queue. Don't delete anything.",
    "Plan next week: one short a day from my drafts, in my queue slots.",
    "Which of my channels need reconnecting?",
    "How many AI requests do I have left this month?",
  ],
  /** Every tool, grouped. `changes` is false for read-only tools. */
  tools: [
    {
      group: "Your account and brands",
      rows: [
        { name: "get_account", what: "Who you are, your teams and your role in each, and this month's AI requests.", changes: false },
        { name: "list_workspaces", what: "Every team and the brands you can open, with each brand's time zone.", changes: false },
        { name: "list_channels", what: "A brand's connected channels, which need reconnecting, and what each can publish.", changes: false },
      ],
    },
    {
      group: "Videos and files",
      rows: [
        { name: "import_video_from_link", what: "Brings a video or image in from a Google Drive, Dropbox or OneDrive link, or any direct https link.", changes: true },
        { name: "upload_file_from_chat", what: "Adds a file from the conversation: one you attached, or one the AI app made.", changes: true },
        { name: "create_video_upload / upload_video", what: "Uploads a file through a signed link that lasts up to 10 minutes, then checks it.", changes: true },
        { name: "list_media / get_media", what: "The media library, and whether a file is ready to use.", changes: false },
      ],
    },
    {
      group: "Drafts and review",
      rows: [
        { name: "create_draft / update_draft", what: "A draft with its caption, title, files and channels, and each channel's own caption or title if you want one. Returns a review link.", changes: true },
        { name: "send_for_review", what: "Asks a producer to approve a draft. How an Editor gets a video out.", changes: true },
        { name: "approve_review / request_changes", what: "Approves and schedules a video, or sends it back with a note. Producer or Admin only.", changes: true },
        { name: "get_review_link", what: "A public link to watch and comment on a video, with no sign-in.", changes: true },
        { name: "delete_draft", what: "Deletes a draft, after a preview of what goes.", changes: true },
      ],
    },
    {
      group: "Scheduling",
      rows: [
        { name: "schedule_post", what: "Schedules a video for a time or the brand's next queue slot. Preview first, then confirm.", changes: true },
        { name: "reschedule_post / cancel_job", what: "Moves a scheduled video, or takes it back to a draft. Nothing is deleted.", changes: true },
        { name: "publish_now", what: "Publishes straight away, after a preview and your explicit go-ahead.", changes: true },
        { name: "validate_distribution_plan / schedule_campaign", what: "Checks a plan of many videos and their times, then commits the ones you approve.", changes: true },
        { name: "list_campaigns / get_campaign_status / cancel_campaign", what: "Follows a plan you committed, or unschedules what hasn't gone out.", changes: true },
      ],
    },
    {
      group: "Calendar and results",
      rows: [
        { name: "get_calendar", what: "Scheduled and published videos for one or more brands, up to 62 days at a time.", changes: false },
        { name: "list_posts / get_post", what: "Drafts, the queue and what's posted, with every channel's status and the reason anything failed.", changes: false },
        { name: "get_job_status", what: "Where each channel of a video is, attempts so far, and the platform's own link once it's live.", changes: false },
        { name: "retry_destination", what: "Sends one failed channel again, now or later, once the cause is fixed.", changes: true },
      ],
    },
  ],
  safety: [
    { title: "A preview before anything goes out", body: "Scheduling, publishing, approving, retrying and deleting all run twice: first as a preview that changes nothing, then as a confirmed call. The tools tell your AI app to show you the preview and get your yes in between." },
    { title: "Your role still applies", body: "The AI app works as you, with your role in each team. An Editor's app can draft and send for review, but can't schedule. A producer still approves." },
    { title: "You choose what it can do", body: "Profaily's approval page lists three permissions. Untick drafting or scheduling and the app can only look." },
    { title: "No double posts, no lost edits", body: "Every change carries the version the app last read. If someone changed the video since, the change is refused and the app gets the latest. A repeated request doesn't post twice." },
    { title: "Disconnect in one click", body: "Settings, AI & Integrations lists every connected app, when it was last used and what it can do. Disconnect and it loses access straight away." },
  ],
  setup: [
    {
      app: "Claude",
      icon: "claude" as const,
      steps: ["Open Plugins in Claude, then Add, then Add custom connector.", "Name it Profaily, paste the server URL and click Continue.", "Approve Profaily when it opens."],
      plans: "Free (one custom connector), Pro, Max, Team and Enterprise.",
      guide: "/help/connect-claude",
    },
    {
      app: "ChatGPT",
      icon: "chatgpt" as const,
      steps: ["Open Plugins in ChatGPT on the web, then Add, then Add custom MCP server.", "Name it Profaily, paste the server URL, keep OAuth and create it.", "Approve Profaily when it opens."],
      plans: "Plus, Pro, Business, Enterprise and Education, on the web.",
      guide: "/help/connect-chatgpt",
    },
    {
      app: "Claude Code, Cursor and other MCP apps",
      icon: "braces" as const,
      steps: ["Add a remote MCP server with the server URL.", "In Claude Code: claude mcp add --transport http profaily " + MCP_URL, "Approve Profaily in your browser."],
      plans: "Any app that supports remote MCP servers with OAuth sign-in.",
      guide: "/help/connect-an-ai-app",
    },
  ],
  limits: [
    { plan: "Creator", requests: "500" },
    { plan: "Business", requests: "10,000" },
    { plan: "Agency", requests: "30,000" },
  ],
  faq: [
    { q: "What is the Profaily MCP server?", a: "It's how AI apps talk to Profaily. MCP, the Model Context Protocol, is an open standard for connecting AI apps to other software. Add Profaily's server URL to Claude, ChatGPT or another MCP app, approve it once, and that app can read and manage your Profaily videos for you." },
    { q: "Which AI apps work with Profaily?", a: "Claude, ChatGPT, Claude Code, Cursor and any other app that can add a remote MCP server with OAuth sign-in. Claude allows custom connectors on Free, Pro, Max, Team and Enterprise. ChatGPT allows custom MCP servers on Plus, Pro, Business, Enterprise and Education, on the web." },
    { q: "Do I need an API key?", a: "No. Profaily signs you in with OAuth. You approve the app once on Profaily's own page and can disconnect it any time in Settings, AI & Integrations." },
    { q: "Can my AI app post without asking me?", a: "Every tool that schedules, publishes, approves, retries or deletes runs as a preview first and needs a second, confirmed call. The tools tell the app to show you the preview and get your yes in between. On a team, an Editor's app can only send videos for review." },
    { q: "Can it write a different caption for each channel?", a: "Yes. Ask for each platform's style, and the app can give single channels their own caption or title while the others follow the main one, the same as editing one channel's tab in Profaily." },
    { q: "Is it included in my plan?", a: "Yes, on every plan. Each month includes AI requests: Creator 500, Business 10,000 and Agency 30,000. Every tool call counts, and the count resets on the 1st." },
    { q: "Where do my videos go when the AI app uploads them?", a: "Into the brand's media library in Profaily, the same as an upload in the app. The AI app can import from a Google Drive, Dropbox or OneDrive link, or add a file you attached in the chat." },
  ],
} as const;
