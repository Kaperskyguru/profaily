export const valueCards = [
  {
    icon: "▦",
    title: "Creators running a business",
    body: "You handle the day-to-day and make content when you can. Keep your videos and posting plan together so the next video doesn’t depend on remembering later.",
  },
  {
    icon: "◷",
    title: "Businesses working across teams",
    body: "When more than one person is involved, it’s easy to lose track of drafts and approvals. Share one calendar and see what needs a look.",
  },
  {
    icon: "↗",
    title: "Agencies working with clients",
    body: "Plan videos for your own brand or a client’s, get feedback before publishing, and make it clear who’s handling the next step.",
  },
];

export const workflowCards = [
  {
    step: "01",
    title: "Add your videos",
    body: "Upload a single video or a batch, or bring in a supported Google Drive file link.",
  },
  {
    step: "02",
    title: "Prepare each post",
    body: "Set the caption and platform-specific details for the channels you choose.",
  },
  {
    step: "03",
    title: "Plan the calendar",
    body: "Organize drafts and scheduled posts in a shared publishing calendar and queue.",
  },
  {
    step: "04",
    title: "Schedule publishing",
    body: "Set posts to publish automatically where the connected account and platform allow it.",
  },
  {
    step: "05",
    title: "Follow the status",
    body: "See which videos are drafted, scheduled, or published, and where attention is needed.",
  },
];

export const suiteCards = [
  {
    kicker: "01 · ADD THE VIDEO",
    title: "Start with the videos you already have.",
    body: "Add one video or a batch and keep the caption, destinations, and schedule close by. You can also import supported Google Drive links.",
    items: [
      "Upload one video or a batch",
      "Import supported Google Drive links",
      "Keep drafts and video details together",
    ],
    image: "/assets/profaily-product-composer.png",
    imageAlt:
      "Profaily's full publishing workspace, with the draft sidebar, connected channels, and post composer visible.",
    width: 2560,
    height: 1600,
  },
  {
    kicker: "02 · MAKE A PLAN",
    title: "Put the next videos on the calendar.",
    body: "See what’s coming up, share drafts with your team, and get approvals before a video is scheduled.",
    items: [
      "Plan dates on a shared calendar",
      "Get feedback and approvals",
      "See what’s waiting for review",
    ],
    image: "/assets/profaily-publish-flow.gif",
    imageAlt:
      "An animated view of the full Profaily workspace as a video moves through publishing, with the draft sidebar and connected channels in view.",
    width: 840,
    height: 475,
  },
  {
    kicker: "03 · GET IT OUT THERE",
    title: "Know what went out and what’s next.",
    body: "Set each video up for its platform, schedule it, and check its status when it goes live.",
    items: [
      "Add each platform’s details",
      "Schedule across TikTok, Instagram Reels, YouTube Shorts, and Facebook",
      "Track scheduled and published posts",
    ],
    image: "/assets/profaily-publish-flow-poster.png",
    imageAlt:
      "Profaily's full publishing workspace showing a video published successfully to four channels, with the sidebar and channel-by-channel results visible.",
    width: 840,
    height: 474,
  },
];

const TIKTOK_D =
  "M12.53 2h3.17c.18 1.63.95 3.13 2.2 4.2 1.07.9 2.4 1.45 3.79 1.57v3.32a10.48 10.48 0 0 1-5.98-1.88v6.9a6.27 6.27 0 1 1-6.26-6.27c.39 0 .77.04 1.14.1v3.49a2.82 2.82 0 1 0 1.94 2.68V2z";

export const platformCards = [
  {
    href: "/tiktok",
    cls: "tiktok-icon",
    name: "TikTok",
    body: "Add TikTok videos to your wider publishing plan.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#25F4EE" transform="translate(-.65 .2)" d={TIKTOK_D} />
        <path fill="#FE2C55" transform="translate(.65 -.2)" d={TIKTOK_D} />
        <path fill="#111" d={TIKTOK_D} />
      </svg>
    ),
  },
  {
    href: "/instagram",
    cls: "instagram-icon",
    name: "Instagram",
    body: "Prepare Reels with the rest of your short-form videos.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient
            id="ig-mark-3-instagram"
            x1="2"
            y1="22"
            x2="22"
            y2="2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB13D" />
            <stop offset=".48" stopColor="#E1306C" />
            <stop offset="1" stopColor="#833AB4" />
          </linearGradient>
        </defs>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="url(#ig-mark-3-instagram)"
          strokeWidth="2.5"
        />
        <circle
          cx="12"
          cy="12"
          r="4.1"
          fill="none"
          stroke="url(#ig-mark-3-instagram)"
          strokeWidth="2.2"
        />
        <circle cx="17.6" cy="6.7" r="1.25" fill="#E1306C" />
      </svg>
    ),
  },
  {
    href: "/youtube",
    cls: "youtube-icon",
    name: "YouTube",
    body: "Plan Shorts alongside your other video posts.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="4.5" width="20" height="15" rx="4.4" fill="#FF0033" />
        <path d="m10 8 6 4-6 4V8Z" fill="#fff" />
      </svg>
    ),
  },
  {
    href: "/facebook",
    cls: "facebook-icon",
    name: "Facebook",
    body: "Keep Facebook videos on the same calendar.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#0866FF" />
        <path
          fill="#fff"
          d="M14.15 21v-7h2.38l.36-2.8h-2.74V9.41c0-.81.23-1.36 1.39-1.36h1.47V5.54c-.71-.1-1.43-.16-2.15-.16-2.13 0-3.59 1.3-3.59 3.7v2.12H8.86V14h2.41v7h2.88Z"
        />
      </svg>
    ),
  },
];
