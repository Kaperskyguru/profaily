/**
 * ToolContent fields (everything else on the tool pages is shared template markup in
 * components/templates/ToolPage.tsx):
 *  name                      breadcrumb label and card title
 *  meta                      title, description, path (og:url only -> <OgUrl>)
 *  hero.pill/title/lede      hero copy (pill = the mint label above the h1)
 *  hero.note                 line under the hero button
 *  visual                    hero visual: an app fragment, rendered inside `.green-frame`
 *  card                      the tool's card on /tools and in "Other tools": {icon, body, art}
 *  values                    {heading, lede, cards[]} - cards are {icon, title, body}
 *  steps                     {heading, lede, items[], note, noteTitle?} - items are {title, body};
 *                            numbering comes from the `.steps` list
 *  uses                      {heading, lede?, items[]} - items are {icon, label?, title, body}
 *  faq                       {heading, lede, items[]} - plain-text answers; the FAQPage JSON-LD is
 *                            derived from them (faqJsonLd)
 *  banner                    closing CtaBand {heading, body}
 * `toolsIndexMeta` / `toolOrder` feed the /tools index page.
 */
import type { ReactNode } from "react";
import { Glyph, Icon, type IconName } from "@/components/ui/Glyph";
import { Phone } from "@/components/sections/shared/Phone";

type Meta = { title: string; description: string; path: string };

export type ToolContent = {
  name: string;
  meta: Meta;
  hero: { pill: string; title: string; lede: string; note: string };
  visual: ReactNode;
  /** Render the visual as-is, without the green frame (the original auto-cross-post graphic). */
  bareVisual?: boolean;
  card: { icon: IconName; body: string; art: ReactNode };
  values: {
    heading: string;
    lede: string;
    cards: { icon: IconName; title: string; body: string }[];
  };
  steps: {
    heading: string;
    lede: string;
    items: { title: string; body: string }[];
    note: string;
    noteTitle?: string;
  };
  uses: {
    heading: string;
    lede?: string;
    items: { icon: IconName; label?: string; title: string; body: string }[];
  };
  faq: { heading: string; lede: string; items: { q: string; a: string }[] };
  banner: { heading: string; body: string };
};

export const toolsIndexMeta: Meta = {
  title: "Social Media Tools | Profaily",
  description: "Explore Profaily tools for video cross-posting, managing connected profiles, and automatically refreshing and redistributing videos from your library.",
  path: "/tools",
};

const thumb = (
  <span className="tv-th">
    <img src="/assets/app/welcome-frame.jpg" alt="" width="540" height="960" loading="lazy" decoding="async" />
  </span>
);

/* ------------------------------------------------------------------ hero visuals (app fragments) */


const profileVisual = (
  <div className="tv-pm" role="img" aria-label="Profile Manager: one profile update applied to selected connected profiles, with the status of each">
    <div className="card" data-ui>
      <div className="tv-hd"><b>Profile update</b><span className="st">3 selected</span></div>
      <div className="tv-who">
        <span className="tv-av"><img src="/assets/profaily-mark-white-trim.svg" alt="" width="22" height="22" /></span>
        <div><b>New profile image</b><span>Update once, choose where it goes</span></div>
      </div>
      <div className="tv-rows">
        <div className="row"><Glyph name="tiktok" id="pm-tt" /><span className="nm">TikTok</span><span className="st ok">Updated</span></div>
        <div className="row"><Glyph name="instagram" id="pm-ig" /><span className="nm">Instagram</span><span className="st ok">Updated</span></div>
        <div className="row"><Glyph name="youtube" id="pm-yt" /><span className="nm">YouTube</span><span className="st go">Updating</span></div>
        <div className="row"><Glyph name="facebook" id="pm-fb" /><span className="nm">Facebook</span><span className="st">Not selected</span></div>
      </div>
    </div>
  </div>
);

const repostVisual = (
  <div className="tv-sr" role="img" aria-label="Smart Repost: an eligible video is picked at random from the Profaily library and given a refreshed hook, message and call to action">
    <div className="card tv-lib" data-ui>
      <div className="tv-hd"><b>Profaily library</b><span className="st ok">Rules on</span></div>
      <p className="meta">Eligible videos</p>
      <div className="tv-rows">
        <div className="row">{thumb}<span className="nm">Library video</span></div>
        <div className="row">{thumb}<span className="nm">Library video</span></div>
        <div className="row on">{thumb}<span className="nm">Random pick</span><span className="st ok">Picked</span></div>
      </div>
    </div>
    <div className="card tv-copy" data-ui>
      <div className="tv-hd"><b>Refreshed post</b><Icon name="spark" className="tv-spark" /></div>
      <dl>
        <div><dt>Hook</dt><dd><b>A fresh opening for the same video</b></dd></div>
        <div><dt>Message</dt><dd>New post copy, built around the original clip.</dd></div>
        <div><dt>Call to action</dt><dd>Choose your next step</dd></div>
      </dl>
      <div className="tv-ready">
        <span className="st go">Ready to redistribute</span>
        <span className="tv-gl">
          <Glyph name="tiktok" id="sr-tt" /><Glyph name="instagram" id="sr-ig" /><Glyph name="youtube" id="sr-yt" />
        </span>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ small card art for /tools */

const crossPostArt = (
  <div className="tv-art-xp" aria-hidden="true">
    <Glyph name="tiktok" id="ca-tt" />
    <span className="tv-arrow"><Icon name="chevron" /></span>
    <span className="tv-fan">
      <Glyph name="instagram" id="ca-ig" /><Glyph name="youtube" id="ca-yt" /><Glyph name="facebook" id="ca-fb" />
    </span>
  </div>
);

const profileArt = (
  <div className="mini" aria-hidden="true" data-ui>
    <div className="r"><b>Profile update</b><span>3 selected</span></div>
    <div className="r"><span className="tv-mr"><Glyph name="tiktok" id="cp-tt" />TikTok</span><span className="st ok">Updated</span></div>
    <div className="r"><span className="tv-mr"><Glyph name="instagram" id="cp-ig" />Instagram</span><span className="st ok">Updated</span></div>
  </div>
);

const repostArt = (
  <div className="mini" aria-hidden="true" data-ui>
    <div className="r"><b>Profaily library</b><span>Rules on</span></div>
    <div className="r"><span className="tv-mr">{thumb}Library video</span></div>
    <div className="r"><span className="tv-mr">{thumb}Random pick</span><span className="st ok">Picked</span></div>
  </div>
);

export const tools = {
  "auto-cross-posting": {
    name: "Auto Cross Post",
    meta: {
      title: "Auto Cross Post: Share Videos Across Platforms | Profaily",
      description: "Automatically cross-post eligible new videos from your main social platform to selected connected destinations with Profaily Auto Cross Post.",
      path: "/tools/auto-cross-posting",
    },
    hero: {
      pill: "Automatic video distribution",
      title: "Post where you create. Let your video travel.",
      lede: "Auto Cross Post sends eligible new videos from your connected main channel to the destinations you select. Set up your channels once, then publish as usual without logging into Profaily for each post.",
      note: "Source-to-destination availability depends on connected accounts, channel permissions, and supported video formats.",
    },
    bareVisual: true,
    visual: (
      <figure className="crosspost-graphic">
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
    card: {
      icon: "upload",
      body: "Post your new video on the channel you already use. Profaily shares eligible posts to the connected destinations you choose.",
      art: crossPostArt,
    },
    values: {
      heading: "Keep your publishing habit. Expand its reach.",
      lede: "Create on the channel that already fits your routine, then let Auto Cross Post handle the repeat distribution.",
      cards: [
        {
          icon: "phone",
          title: "Publish from your usual channel",
          body: "After setup, continue posting from TikTok, Instagram, Facebook, or YouTube. You do not need to open Profaily for each source post.",
        },
        {
          icon: "layers",
          title: "Choose where each video goes",
          body: "Connect your social accounts, select a main channel, and choose the supported destinations that fit your audience.",
        },
        {
          icon: "retry",
          title: "Stop repeating the same upload",
          body: "Give eligible new videos a path to your other selected channels without manually starting the same publishing task again.",
        },
      ],
    },
    steps: {
      heading: "Configure once. Publish as usual.",
      lede: "Auto Cross Post is designed around the channels you already use, with destination choices set up ahead of time.",
      items: [
        { title: "Connect your accounts", body: "Authorize the social profiles you want Profaily to use as sources and destinations." },
        { title: "Choose a source and destinations", body: "Set the channel where you normally post, then select the connected destinations for eligible videos." },
        { title: "Post from your main channel", body: "Publish there as usual. Profaily distributes eligible posts through the configured route." },
      ],
      note: "Each network applies its own account permissions, media requirements, and video limits. Available source-to-destination combinations can vary; review the eligible routes before enabling a flow.",
    },
    uses: {
      heading: "When your video is already live somewhere, let’s distribute it.",
      lede: "Automatic cross-posting helps creators and teams build distribution into the way they already publish.",
      items: [
        { icon: "phone", title: "For creators", body: "Share each eligible video beyond the channel where you first posted it, while keeping your creative routine intact." },
        { icon: "layers", title: "For growing brands", body: "Keep a consistent video presence across selected brand channels without asking someone to upload the same asset repeatedly." },
        { icon: "users", title: "For lean teams", body: "Reduce routine reposting work and spend more time on the channel-specific details that need a person’s attention." },
      ],
    },
    faq: {
      heading: "Auto Cross Post, explained",
      lede: "Know what happens before you connect a channel.",
      items: [
        {
          q: "Do I need to log into Profaily every time I publish?",
          a: "No. Once your accounts and sharing routes are set up, you can publish new videos on the selected main channel as usual. Profaily handles eligible cross-posting to your configured destinations.",
        },
        {
          q: "Which channels can I use as the main account?",
          a: "The planned source channels are TikTok, Instagram, Facebook, and YouTube. The destinations available for each source depend on the connected account and supported routes.",
        },
        {
          q: "Will every video be shared to every destination?",
          a: "You choose the destinations for a flow. A video may be ineligible for a particular destination if that channel’s account permissions, media requirements, or format limits are not met.",
        },
        {
          q: "Does Profaily change my video for each channel?",
          a: "Auto Cross Post distributes eligible source videos to selected destinations. The precise media adaptation options depend on Profaily’s supported routes; channel requirements may differ.",
        },
      ],
    },
    banner: {
      heading: "One post can start a wider publishing run",
      body: "Set up connected channels in Profaily and keep publishing from your main channel.",
    },
  },

  "profile-manager": {
    name: "Profile Manager",
    meta: {
      title: "Profile Manager: Manage Social Profiles | Profaily",
      description: "Update and track supported profile changes across selected connected social accounts with Profaily Profile Manager.",
      path: "/tools/profile-manager",
    },
    hero: {
      pill: "Connected profile management",
      title: "Keep every social profile up to date.",
      lede: "Profile Manager gives you one place to update, manage, and track profile changes across the social accounts you choose to connect.",
      note: "Profile fields and update permissions vary by channel and connected account.",
    },
    visual: profileVisual,
    card: {
      icon: "users",
      body: "Make a profile update once, apply it to selected connected channels, and keep track of where that update went.",
      art: profileArt,
    },
    values: {
      heading: "Make one change. Keep your connected profiles aligned.",
      lede: "When brand details change, updating each network by hand creates unnecessary repetition. Profile Manager brings selected profile updates into one connected workflow.",
      cards: [
        { icon: "edit", title: "Update from one place", body: "Manage profile information and images for connected social accounts in a single workflow." },
        { icon: "check", title: "Choose which profiles change", body: "Apply an update to the connected channels you select, rather than treating every account as one-size-fits-all." },
        { icon: "circleCheck", title: "Track each update", body: "Keep visibility into which selected profiles have received an update and where action may still be needed." },
      ],
    },
    steps: {
      heading: "A clearer way to manage profile changes",
      lede: "Keep the change, the selected accounts, and the resulting update status together.",
      items: [
        { title: "Connect your profiles", body: "Choose the social accounts you want to manage through Profaily." },
        { title: "Make a profile change", body: "Prepare the profile image or other supported information you need to update." },
        { title: "Select accounts and track", body: "Choose where the update should apply, then follow its status across the selected profiles." },
      ],
      note: "Social networks expose different profile fields and permissions. Profile Manager can only update the details allowed for each connected account, so available fields may differ by channel.",
    },
    uses: {
      heading: "Useful for every moment a profile needs attention",
      items: [
        { icon: "edit", title: "Refresh your visual identity", body: "Manage a profile image change across the connected social profiles you select." },
        { icon: "lines", title: "Keep business details current", body: "Update supported profile information without repeating the same manual steps on every network." },
        { icon: "layers", title: "Coordinate a multi-channel update", body: "See the selected accounts in one workflow and track where profile changes have been applied." },
      ],
    },
    faq: {
      heading: "Profile Manager, explained",
      lede: "Profile settings differ across social networks. Here’s what to expect.",
      items: [
        {
          q: "Which profile details can I update?",
          a: "Profile Manager is designed to update profile images and other supported profile information. Exact fields depend on the connected channel and the permissions it provides.",
        },
        {
          q: "Can I update every connected account at once?",
          a: "You choose which connected profiles to include in an update. The change can only be applied to accounts and fields supported by each channel.",
        },
        {
          q: "Can I track whether an update went through?",
          a: "Yes. Profile Manager is designed to track updates across the selected accounts so you can see where the change was applied and where follow-up may be needed.",
        },
        {
          q: "Does each channel allow the same profile changes?",
          a: "No. Channels expose different profile fields and update permissions. What you can change may vary by network, account type, and authorization.",
        },
      ],
    },
    banner: {
      heading: "Manage connected profiles in one place",
      body: "Bring profile updates into the same workspace as your video publishing.",
    },
  },

  "smart-repost": {
    name: "Smart Repost",
    meta: {
      title: "Smart Repost: Reuse Videos from Your Library | Profaily",
      description: "Put eligible videos from your Profaily library back to work: Smart Repost picks from the videos that match your criteria, refreshes the hook, message, and call to action, and redistributes them.",
      path: "/tools/smart-repost",
    },
    hero: {
      pill: "Video reuse",
      title: "Put your video library back to work.",
      lede: "Set your criteria once. Smart Repost randomly selects eligible videos from your Profaily library, refreshes the hook, message, and call to action, then redistributes them automatically.",
      note: "The original video stays in your library. Smart Repost gives its accompanying copy a fresh angle.",
    },
    visual: repostVisual,
    card: {
      icon: "retry",
      body: "Randomly select eligible videos from your Profaily library, refresh the hook, message, and call to action, then redistribute automatically.",
      art: repostArt,
    },
    values: {
      heading: "Reuse the video. Rethink the framing.",
      lede: "Not every useful video needs to be filmed again. Smart Repost helps you put eligible library videos back into rotation with refreshed words around the original clip.",
      cards: [
        { icon: "retry", title: "Give proven videos another turn", body: "Keep a video that resonated in circulation with a new hook and a clearer next step for the audience seeing it now." },
        { icon: "spark", title: "Try a different angle", body: "Give an older or underperforming video a fresh message and call to action, without rebuilding the video itself." },
        { icon: "check", title: "Set the rules once", body: "Choose the criteria that make a video eligible, then let Smart Repost select from the matching Profaily library videos." },
      ],
    },
    steps: {
      heading: "Decide what can return. Let the rotation run.",
      lede: "Your criteria set the pool. Random selection keeps the next video from being an opaque performance ranking.",
      items: [
        { title: "Define your criteria", body: "Choose which older videos are eligible, whether you want to reuse posts that worked or give underperforming clips another chance with a new angle." },
        { title: "Pick from your library", body: "Smart Repost randomly selects a video that matches your rules from the Profaily library." },
        { title: "Refresh the post copy", body: "Give the same video a new hook, message, and call to action. The video file itself remains the original library asset." },
        { title: "Redistribute automatically", body: "Send the refreshed post through your selected connected channels, subject to each channel’s account permissions and publishing requirements." },
      ],
      noteTitle: "Clear by design:",
      note: "Smart Repost selects randomly from videos that match your criteria. It does not promise a performance outcome or silently rank one video above another.",
    },
    uses: {
      heading: "More mileage for creators. More continuity for teams.",
      lede: "Keep good ideas useful for longer, while choosing what belongs in the rotation.",
      items: [
        {
          icon: "spark",
          label: "For creators",
          title: "Make your best ideas last longer",
          body: "Bring a video that performed well back to your audience with a different opening or CTA. Or give an underperforming older clip a fresh framing, without another filming session.",
        },
        {
          icon: "layers",
          label: "For businesses",
          title: "Keep evergreen stories in motion",
          body: "Give eligible explainers, product videos, and brand stories another distribution run. Define what can return so time-sensitive content can stay out of the pool.",
        },
        {
          icon: "users",
          label: "For lean teams",
          title: "Reduce repeat publishing chores",
          body: "Set the criteria once and let the tool handle selection, refreshed post copy, and redistribution for eligible videos.",
        },
      ],
    },
    faq: {
      heading: "Smart Repost, explained",
      lede: "Know what happens to a video before it returns to rotation.",
      items: [
        { q: "Where does Smart Repost get the videos?", a: "It selects from eligible videos in your Profaily library. The criteria you define determine which videos are considered for a repost." },
        { q: "How is the next video selected?", a: "Smart Repost randomly selects from the videos that match your criteria. It does not automatically favor the highest-performing video." },
        { q: "Does Smart Repost change my original video?", a: "No. The original video remains in your Profaily library. Smart Repost refreshes the accompanying hook, message, and call to action." },
        { q: "Can I decide which videos are eligible?", a: "Yes. Define the criteria for the videos you want included in the rotation. Review and adjust your rules as your content and campaigns change." },
        { q: "Where will the refreshed video be distributed?", a: "It is redistributed through the connected channels you select. Available actions depend on channel support, account permissions, and the requirements for each post." },
      ],
    },
    banner: {
      heading: "Put eligible library videos back in motion",
      body: "Set your criteria, refresh the message, and let Smart Repost handle the repeat distribution.",
    },
  },
} satisfies Record<string, ToolContent>;

export type ToolSlug = keyof typeof tools;
export const toolOrder: ToolSlug[] = ["auto-cross-posting", "profile-manager", "smart-repost"];
