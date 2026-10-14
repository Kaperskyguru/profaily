/**
 * ToolContent fields (everything else on the tool pages is shared template markup):
 *  name                      breadcrumb label
 *  mainClass                 className of <main> (smart-repost adds its own page class)
 *  meta                      title, description, path (og:url only -> <OgUrl>)
 *  hero.eyebrow/title/lede   hero copy
 *  hero.note                 line under the hero buttons
 *  visual                    JSX for the hero visual element (differs per tool, wrapper included)
 *  values                    {eyebrow, heading, lede, cards[]} - cards are {icon, title, body}
 *  steps                     {eyebrow, heading, lede, items[]} - items are {title, body}
 *                            (numbers derived 01..); then either `note` (platform-note
 *                            paragraph) or `transparency` (JSX block, smart-repost only)
 *  uses                      {eyebrow, heading, lede?, items[]} - items are {label?, title, body}
 *  faq                       {heading, lede, items[]} - items are {q, a}
 *  banner                    {eyebrow, heading, body}
 * `toolsIndexMeta` / `toolCards` feed the /tools index page.
 */
import type { ReactNode } from "react";
import type { FaqItem } from "@/components/sections/shared/Faq";
import { PlatformIcon, type Platform } from "@/components/ui/icons";

type Meta = { title: string; description: string; path: string };

export type ToolContent = {
  name: string;
  mainClass: string;
  meta: Meta;
  hero: { eyebrow: string; title: string; lede: string; note: string };
  visual: ReactNode;
  values: {
    eyebrow: string;
    heading: string;
    lede: string;
    cards: { icon: string; title: string; body: string }[];
  };
  steps: {
    eyebrow: string;
    heading: string;
    lede: string;
    items: { title: string; body: string }[];
    note?: string;
    transparency?: ReactNode;
  };
  uses: {
    eyebrow: string;
    heading: string;
    lede?: string;
    items: { label?: string; title: string; body: string }[];
  };
  faq: { heading: string; lede: string; items: FaqItem[] };
  banner: { eyebrow: string; heading: string; body: string };
};

export const toolsIndexMeta: Meta = {
  title: "Social Media Tools | Profaily",
  description: "Explore Profaily tools for video cross-posting, managing connected profiles, and automatically refreshing and redistributing videos from your library.",
  path: "/tools",
};

export const toolCards = [
  {
    href: "/tools/auto-cross-posting",
    icon: "↗",
    eyebrow: "DISTRIBUTE VIDEOS",
    name: "Auto Cross Post",
    body: "Post your new video on the platform you already use. Profaily shares eligible posts to the connected destinations you choose.",
    platforms: "TikTok · Instagram · Facebook · YouTube",
  },
  {
    href: "/tools/profile-manager",
    icon: "◉",
    eyebrow: "MANAGE PROFILES",
    name: "Profile Manager",
    body: "Make a profile update once, apply it to selected connected platforms, and keep track of where that update went.",
    platforms: "One update across selected profiles",
  },
  {
    href: "/tools/smart-repost",
    icon: "↻",
    eyebrow: "REUSE YOUR LIBRARY",
    name: "Smart Repost",
    body: "Randomly select eligible videos from your Profaily library, refresh the hook, message, and CTA, then redistribute automatically.",
    platforms: "Criteria-based selection from your library",
  },
];

const profilePlatforms: { platform: Platform; label: string }[] = [
  { platform: "tiktok", label: "TikTok" },
  { platform: "instagram", label: "Instagram" },
  { platform: "youtube", label: "YouTube" },
  { platform: "facebook", label: "Facebook" },
];

export const tools = {
  "auto-cross-posting": {
    name: "Auto Cross Post",
    mainClass: "tools-page tool-detail-page",
    meta: {
      title: "Auto Cross Post: Share Videos Across Platforms | Profaily",
      description: "Automatically cross-post eligible new videos from your main social platform to selected connected destinations with Profaily Auto Cross Post.",
      path: "/tools/auto-cross-posting",
    },
    hero: {
      eyebrow: "PROFAILY TOOL · AUTOMATIC VIDEO DISTRIBUTION",
      title: "Post where you create. Let your video travel.",
      lede: "Auto Cross Post sends eligible new videos from your connected main platform to the destinations you select. Set up your channels once, then publish as usual without logging into Profaily for each post.",
      note: "Source-to-destination availability depends on connected accounts, platform permissions, and supported video formats.",
    },
    visual: (
      <figure className="tool-hero-visual crosspost-animation-frame">
        <picture>
          <source media="(max-width: 640px)" srcSet="/assets/auto-cross-post-flow-mobile.svg" />
          <img
            src="/assets/auto-cross-post-flow.svg"
            alt="A TikTok video branches at the same time to selected Facebook, Instagram, YouTube, Pinterest, Twitch, and Snapchat destinations."
            loading="eager"
          />
        </picture>
      </figure>
    ),
    values: {
      eyebrow: "MORE REACH. LESS REPETITION.",
      heading: "Keep your publishing habit. Expand its reach.",
      lede: "Create on the channel that already fits your routine, then let Auto Cross Post handle the repeat distribution.",
      cards: [
        {
          icon: "↗",
          title: "Publish from your usual platform",
          body: "After setup, continue posting from TikTok, Instagram, Facebook, or YouTube. You do not need to open Profaily for each source post.",
        },
        {
          icon: "◎",
          title: "Choose where each video goes",
          body: "Connect your social accounts, select a main platform, and choose the supported destinations that fit your audience.",
        },
        {
          icon: "↻",
          title: "Stop repeating the same upload",
          body: "Give eligible new videos a path to your other selected channels without manually starting the same publishing task again.",
        },
      ],
    },
    steps: {
      eyebrow: "HOW IT WORKS",
      heading: "Configure once. Publish as usual.",
      lede: "Auto Cross Post is designed around the platforms you already use, with destination choices set up ahead of time.",
      items: [
        {
          title: "Connect your accounts",
          body: "Authorize the social profiles you want Profaily to use as sources and destinations.",
        },
        {
          title: "Choose a source and destinations",
          body: "Set the platform where you normally post, then select the connected destinations for eligible videos.",
        },
        {
          title: "Post from your main platform",
          body: "Publish there as usual. Profaily distributes eligible posts through the configured route.",
        },
      ],
      note: "Each network applies its own account permissions, media requirements, and video limits. Available source-to-destination combinations can vary; review the eligible routes before enabling a flow.",
    },
    uses: {
      eyebrow: "BUILT FOR REAL PUBLISHING ROUTINES",
      heading: "When your video is already live somewhere, let’s distribute it.",
      lede: "Automatic cross-posting helps creators and teams build distribution into the way they already publish.",
      items: [
        {
          title: "For creators",
          body: "Share each eligible video beyond the platform where you first posted it, while keeping your creative routine intact.",
        },
        {
          title: "For growing brands",
          body: "Keep a consistent video presence across selected brand channels without asking someone to upload the same asset repeatedly.",
        },
        {
          title: "For lean teams",
          body: "Reduce routine reposting work and spend more time on the platform-specific details that need a person’s attention.",
        },
      ],
    },
    faq: {
      heading: "Auto Cross Post, explained.",
      lede: "Know what happens before you connect a channel.",
      items: [
        {
          q: "Do I need to log into Profaily every time I publish?",
          a: "No. Once your accounts and sharing routes are set up, you can publish new videos on the selected main platform as usual. Profaily handles eligible cross-posting to your configured destinations.",
        },
        {
          q: "Which platforms can I use as the main account?",
          a: "The planned source platforms are TikTok, Instagram, Facebook, and YouTube. The destinations available for each source depend on the connected account and supported platform routes.",
        },
        {
          q: "Will every video be shared to every destination?",
          a: "You choose the destinations for a flow. A video may be ineligible for a particular destination if that platform’s account permissions, media requirements, or format limits are not met.",
        },
        {
          q: "Does Profaily change my video for each platform?",
          a: "Auto Cross Post distributes eligible source videos to selected destinations. The precise media adaptation options depend on Profaily’s supported routes; platform requirements may differ.",
        },
      ],
    },
    banner: {
      eyebrow: "DISTRIBUTE THE VIDEO YOU ALREADY MADE",
      heading: "One post can start a wider publishing run.",
      body: "Set up connected channels in Profaily and keep publishing from your main platform.",
    },
  },

  "profile-manager": {
    name: "Profile Manager",
    mainClass: "tools-page tool-detail-page",
    meta: {
      title: "Profile Manager: Manage Social Profiles | Profaily",
      description: "Update and track supported profile changes across selected connected social accounts with Profaily Profile Manager.",
      path: "/tools/profile-manager",
    },
    hero: {
      eyebrow: "PROFAILY TOOL · CONNECTED PROFILE MANAGEMENT",
      title: "Keep every social profile up to date.",
      lede: "Profile Manager gives you one place to update, manage, and track profile changes across the social accounts you choose to connect.",
      note: "Profile fields and update permissions vary by platform and connected account.",
    },
    visual: (
      <div className="tool-hero-visual" aria-label="Apply one profile update across selected connected profiles">
        <div className="tool-visual-kicker">ONE PROFILE UPDATE</div>
        <div className="profile-change-card">
          <div className="profile-symbol">◉</div>
          <div>
            <span className="tool-flow-label">YOUR SHARED CHANGE</span>
            <strong>Update once</strong>
            <small>Choose the connected profiles to receive it</small>
          </div>
        </div>
        <div className="tool-flow-connector">
          <span></span>
          <b>↓</b>
          <span></span>
        </div>
        <div className="tool-flow-block">
          <span className="tool-flow-label">SELECTED SOCIAL PROFILES</span>
          <div className="tool-platform-row" aria-label="TikTok, Instagram, YouTube, and Facebook">
            {profilePlatforms.map(({ platform, label }) => (
              <span className="tool-platform-item" key={platform}>
                <span className={`tool-platform-icon platform-icon ${platform}-icon`}>
                  <PlatformIcon platform={platform} gradientId="ig-mark-tool" />
                </span>
                <span>{label}</span>
              </span>
            ))}
          </div>
          <div className="profile-status-line">
            <span></span>Track updates across selected accounts
          </div>
        </div>
      </div>
    ),
    values: {
      eyebrow: "LESS PROFILE MAINTENANCE",
      heading: "Make one change. Keep your connected profiles aligned.",
      lede: "When brand details change, updating each network by hand creates unnecessary repetition. Profile Manager brings selected profile updates into one connected workflow.",
      cards: [
        {
          icon: "◉",
          title: "Update from one place",
          body: "Manage profile information and images for connected social accounts in a single workflow.",
        },
        {
          icon: "✓",
          title: "Choose which profiles change",
          body: "Apply an update to the connected platforms you select, rather than treating every account as one-size-fits-all.",
        },
        {
          icon: "↻",
          title: "Track each update",
          body: "Keep visibility into which selected profiles have received an update and where action may still be needed.",
        },
      ],
    },
    steps: {
      eyebrow: "HOW IT WORKS",
      heading: "A clearer way to manage profile changes.",
      lede: "Keep the change, the selected accounts, and the resulting update status together.",
      items: [
        {
          title: "Connect your profiles",
          body: "Choose the social accounts you want to manage through Profaily.",
        },
        {
          title: "Make a profile change",
          body: "Prepare the profile image or other supported information you need to update.",
        },
        {
          title: "Select accounts and track",
          body: "Choose where the update should apply, then follow its status across the selected profiles.",
        },
      ],
      note: "Social networks expose different profile fields and permissions. Profile Manager can only update the details allowed for each connected account, so available fields may differ by platform.",
    },
    uses: {
      eyebrow: "WHEN BRAND DETAILS CHANGE",
      heading: "Useful for every moment a profile needs attention.",
      items: [
        {
          title: "Refresh your visual identity",
          body: "Manage a profile image change across the connected social profiles you select.",
        },
        {
          title: "Keep business details current",
          body: "Update supported profile information without repeating the same manual steps on every network.",
        },
        {
          title: "Coordinate a multi-channel update",
          body: "See the selected accounts in one workflow and track where profile changes have been applied.",
        },
      ],
    },
    faq: {
      heading: "Profile Manager, explained.",
      lede: "Profile settings differ across social networks. Here’s what to expect.",
      items: [
        {
          q: "Which profile details can I update?",
          a: "Profile Manager is designed to update profile images and other supported profile information. Exact fields depend on the connected platform and the permissions it provides.",
        },
        {
          q: "Can I update every connected account at once?",
          a: "You choose which connected profiles to include in an update. The change can only be applied to accounts and fields supported by each platform.",
        },
        {
          q: "Can I track whether an update went through?",
          a: "Yes. Profile Manager is designed to track updates across the selected accounts so you can see where the change was applied and where follow-up may be needed.",
        },
        {
          q: "Does each platform allow the same profile changes?",
          a: "No. Platforms expose different profile fields and update permissions. What you can change may vary by network, account type, and authorization.",
        },
      ],
    },
    banner: {
      eyebrow: "KEEP YOUR PRESENCE CURRENT",
      heading: "Manage connected profiles in one place.",
      body: "Bring profile updates into the same workspace as your video publishing.",
    },
  },

  "smart-repost": {
    name: "Smart Repost",
    mainClass: "tools-page tool-detail-page smart-repost-page",
    meta: {
      title: "Smart Repost: Reuse Videos from Your Library | Profaily",
      description: "Automatically cross-post eligible new videos from your main social platform to selected connected destinations with Profaily Auto Cross Post.",
      path: "/tools/smart-repost",
    },
    hero: {
      eyebrow: "PROFAILY TOOL · VIDEO REUSE",
      title: "Put your video library back to work.",
      lede: "Set your criteria once. Smart Repost randomly selects eligible videos from your Profaily library, refreshes the hook, message, and call to action, then redistributes them automatically.",
      note: "The original video stays in your library. Smart Repost gives its accompanying copy a fresh angle.",
    },
    visual: (
      <>
        {" "}
        <div
          className="tool-hero-visual smart-repost-visual"
          role="img"
          aria-label="Workflow preview: eligible videos from the Profaily library are selected, given a refreshed hook and call to action, then redistributed."
        >
          <div className="smart-repost-preview-head">
            <span className="tool-visual-kicker">WORKFLOW PREVIEW</span>
            <span className="smart-repost-live">
              <i></i> RULES ACTIVE
            </span>
          </div>
          <div className="smart-repost-stage">
            <div className="smart-repost-library">
              <div className="smart-repost-stage-label">
                <span className="smart-repost-library-mark">▤</span>
                <span>
                  <b>Profaily library</b>
                  <small>Eligible videos</small>
                </span>
              </div>
              <div className="smart-repost-stack">
                <div className="smart-repost-video-tile">
                  <span className="smart-repost-play">▶</span>
                  <span>Library video</span>
                  <i></i>
                </div>
                <div className="smart-repost-video-tile is-middle">
                  <span className="smart-repost-play">▶</span>
                  <span>Library video</span>
                  <i></i>
                </div>
                <div className="smart-repost-video-tile is-selected">
                  <span className="smart-repost-play">▶</span>
                  <span>Random pick</span>
                  <i>✓</i>
                </div>
              </div>
              <small className="smart-repost-pick-note">Randomly selected from matching videos</small>
            </div>
            <div className="smart-repost-route" aria-hidden="true">
              <span></span>
              <b>→</b>
              <span></span>
            </div>
            <div className="smart-repost-result">
              <div className="smart-repost-result-top">
                <span>REFRESHED POST</span>
                <span className="smart-repost-spark">✳</span>
              </div>
              <div className="smart-repost-copy-line smart-repost-hook-line">
                <small>HOOK</small>
                <b className="copy-hook">A fresh opening for the same video</b>
                <b className="copy-hook copy-hook-alt">Bring this idea back with a new angle</b>
              </div>
              <div className="smart-repost-copy-line">
                <small>MESSAGE</small>
                <span>New post copy, built around the original clip.</span>
              </div>
              <div className="smart-repost-cta">
                <span>CALL TO ACTION</span>
                <b>Choose your next step&nbsp; →</b>
              </div>
              <div className="smart-repost-distribute">
                <i></i>
                <b>Ready to redistribute</b>
                <span>Selected connected channels</span>
              </div>
            </div>
          </div>
          <div className="smart-repost-preview-foot">
            <span>
              <i></i> Criteria set by you
            </span>
            <span>VIDEO SOURCE&nbsp; · &nbsp;PROFAILY LIBRARY</span>
          </div>
        </div>
      </>
    ),
    values: {
      eyebrow: "A SECOND LIFE FOR YOUR BACK CATALOG",
      heading: "Reuse the video. Rethink the framing.",
      lede: "Not every useful video needs to be filmed again. Smart Repost helps you put eligible library videos back into rotation with refreshed words around the original clip.",
      cards: [
        {
          icon: "↻",
          title: "Give proven videos another turn",
          body: "Keep a video that resonated in circulation with a new hook and a clearer next step for the audience seeing it now.",
        },
        {
          icon: "✳",
          title: "Try a different angle",
          body: "Give an older or underperforming video a fresh message and call to action, without rebuilding the video itself.",
        },
        {
          icon: "✓",
          title: "Set the rules once",
          body: "Choose the criteria that make a video eligible, then let Smart Repost select from the matching Profaily library videos.",
        },
      ],
    },
    steps: {
      eyebrow: "HOW SMART REPOST WORKS",
      heading: "Decide what can return. Let the rotation run.",
      lede: "Your criteria set the pool. Random selection keeps the next video from being an opaque performance ranking.",
      items: [
        {
          title: "Define your criteria",
          body: "Choose which older videos are eligible, whether you want to reuse posts that worked or give underperforming clips another chance with a new angle.",
        },
        {
          title: "Pick from your library",
          body: "Smart Repost randomly selects a video that matches your rules from the Profaily library.",
        },
        {
          title: "Refresh the post copy",
          body: "Give the same video a new hook, message, and call to action. The video file itself remains the original library asset.",
        },
        {
          title: "Redistribute automatically",
          body: "Send the refreshed post through your selected connected channels, subject to each platform’s account permissions and publishing requirements.",
        },
      ],
      transparency: (
        <div className="smart-repost-transparency">
          <span>↳</span>
          <p>
            <b>Clear by design:</b> Smart Repost selects randomly from videos that match your criteria. It does not promise a performance outcome or silently rank one video above another.
          </p>
        </div>
      ),
    },
    uses: {
      eyebrow: "MADE FOR YOUR CONTENT LIBRARY",
      heading: "More mileage for creators. More continuity for teams.",
      lede: "Keep good ideas useful for longer, while choosing what belongs in the rotation.",
      items: [
        {
          label: "FOR CREATORS",
          title: "Make your best ideas last longer",
          body: "Bring a video that performed well back to your audience with a different opening or CTA. Or give an underperforming older clip a fresh framing, without another filming session.",
        },
        {
          label: "FOR BUSINESSES",
          title: "Keep evergreen stories in motion",
          body: "Give eligible explainers, product videos, and brand stories another distribution run. Define what can return so time-sensitive content can stay out of the pool.",
        },
        {
          label: "FOR LEAN TEAMS",
          title: "Reduce repeat publishing chores",
          body: "Set the criteria once and let the tool handle selection, refreshed post copy, and redistribution for eligible videos.",
        },
      ],
    },
    faq: {
      heading: "Smart Repost, explained.",
      lede: "Know what happens to a video before it returns to rotation.",
      items: [
        {
          q: "Where does Smart Repost get the videos?",
          a: "It selects from eligible videos in your Profaily library. The criteria you define determine which videos are considered for a repost.",
        },
        {
          q: "How is the next video selected?",
          a: "Smart Repost randomly selects from the videos that match your criteria. It does not automatically favor the highest-performing video.",
        },
        {
          q: "Does Smart Repost change my original video?",
          a: "No. The original video remains in your Profaily library. Smart Repost refreshes the accompanying hook, message, and call to action.",
        },
        {
          q: "Can I decide which videos are eligible?",
          a: "Yes. Define the criteria for the videos you want included in the rotation. Review and adjust your rules as your content and campaigns change.",
        },
        {
          q: "Where will the refreshed video be distributed?",
          a: "It is redistributed through the connected channels you select. Available actions depend on platform support, account permissions, and the requirements for each post.",
        },
      ],
    },
    banner: {
      eyebrow: "GET MORE FROM WHAT YOU HAVE MADE",
      heading: "Put eligible library videos back in motion.",
      body: "Set your criteria, refresh the message, and let Smart Repost handle the repeat distribution.",
    },
  },
} satisfies Record<string, ToolContent>;
