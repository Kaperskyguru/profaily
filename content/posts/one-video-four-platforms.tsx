import type { PostContent } from "./types";

export const post: PostContent = {
  slug: "one-video-four-platforms",
  category: "Publishing",
  title: "One video, four platforms: what should change before you publish?",
  description: "A practical cross-platform video workflow: keep the finished source file, tailor each destination’s details, check account requirements, and track outcomes separately.",
  readTime: "7 min read",
  datePublished: "2026-09-29",
  dateLabel: "September 29, 2026",
  toc: [
    { id: "same-file", label: "One source file is not one identical publish" },
    { id: "prepare", label: "Prepare the destination versions" },
    { id: "workflow", label: "A repeatable cross-platform checklist" },
    { id: "measure", label: "Learn from each destination" },
  ],
  cta: { href: "/feature-content-operations", label: "See video planning and publishing" },
  sources: [
    { href: "https://developers.tiktok.com/docs/en/content-posting-api-reference-query-creator-info", label: "TikTok for Developers: Query Creator Info" },
    { href: "https://developers.tiktok.com/docs/en/content-posting-api-reference-direct-post", label: "TikTok for Developers: Direct Post" },
    { href: "https://support.google.com/youtube/answer/10059070?hl=en-GB", label: "YouTube Help: Get started creating YouTube Shorts" },
  ],
  related: ["short-form-video-publishing-workflow", "turn-video-comments-into-leads", "short-form-video-measurement"],
  blocks: [
    <p>
      A finished video can travel to TikTok, Instagram, YouTube, and Facebook. The work around that
      file still belongs to four different destinations.
    </p>,
    <p>
      That distinction saves teams from two common mistakes: treating “cross-post” as a single
      publish button, and assuming a video that is valid on one platform is ready everywhere. Keep
      one approved source file. Make the destination details visible and reviewable.
    </p>,
    <h2 id="same-file">One source file is not one identical publish</h2>,
    <p>
      Start with the master video you intend to use. Profaily’s workflow keeps that finished file
      intact; it does not crop, trim, resize, or add audio. You can then prepare separate versions
      of the surrounding information—such as the caption, title, schedule, and settings available
      for that platform.
    </p>,
    <p>
      {"Why check each destination? TikTok’s Direct Post flow requires the app to request current creator information so the publishing screen can show that account’s available privacy and interaction options. The selected options must match what TikTok returns for that creator. A saved default may be stale or unavailable for a different account. "}
      <a
        href="https://developers.tiktok.com/docs/en/content-posting-api-reference-query-creator-info"
        target="_blank"
        rel="noopener noreferrer"
      >
        TikTok documents the creator-info check here
      </a>.
    </p>,
    <p>
      {"The video itself also has to fit the destination’s current requirements. Duration, aspect ratio, audio rights, account type, and available publishing surfaces can differ and change. For example, YouTube’s current Shorts guidance describes Shorts up to three minutes, while TikTok’s publishing API returns a maximum video duration for the specific creator. Check the platform and account before you build your schedule; don’t promise that one export fits every destination. "}
      <a
        href="https://support.google.com/youtube/answer/10059070?hl=en-GB"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube’s Shorts guidance
      </a>{" and "}
      <a
        href="https://developers.tiktok.com/docs/en/content-posting-api-reference-query-creator-info"
        target="_blank"
        rel="noopener noreferrer"
      >
        TikTok’s creator-info reference
      </a> show
      why those checks matter.
    </p>,
    <div className="article-callout">
      <strong>Working rule:</strong> reuse the finished video file when it fits. Tailor destination
      details independently. If the footage itself needs a different cut or frame, make and approve
      that edit before it enters the publishing queue.
    </div>,
    <h2 id="prepare">Prepare the destination versions</h2>,
    <p>Before scheduling, answer four questions for every selected platform:</p>,
    <ul>
      <li>
        <strong>Is this the right account?</strong> Confirm the profile or Page, its connection
        state, and the role that can publish.
      </li>
      <li>
        <strong>Does the source video fit?</strong> Check current format, duration, size, and
        destination rules. If it needs an edit, create a new approved file instead of expecting the
        scheduler to repair it.
      </li>
      <li>
        <strong>Does the message fit here?</strong> Write the caption or title for the audience and
        surface. Preserve the core idea, but remove references that only make sense on another
        platform.
      </li>
      <li>
        <strong>Are the destination settings right?</strong> Check privacy, audience, cover, and
        other controls that are available for that account. TikTok’s API, for instance, returns
        creator-specific options rather than one universal set.
      </li>
    </ul>,
    <p>
      This is not a demand to write four unrelated scripts. Keep the claim, offer, and call to
      action consistent. Change only what improves clarity or meets the destination’s requirements.
    </p>,
    <h2 id="workflow">A repeatable cross-platform checklist</h2>,
    <div className="article-table-wrap">
      <table className="article-table">
        <thead>
          <tr><th>Stage</th><th>Keep consistent</th><th>Review per destination</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Video file</td><td>Approved source and version</td><td>Eligibility, duration, format, cover options</td>
          </tr>
          <tr>
            <td>Message</td><td>Claim, offer, brand voice</td><td>Caption, title, mentions, links, platform controls</td>
          </tr>
          <tr>
            <td>Timing</td><td>Campaign window</td><td>Account schedule and local audience timing</td>
          </tr>
          <tr>
            <td>After publishing</td><td>Campaign and source-video record</td><td>Attempt, status, live URL, audience response</td>
          </tr>
        </tbody>
      </table>
    </div>,
    <p>
      In a shared workspace, treat these as four destination records attached to one video—not one
      record with four unchecked boxes. A reviewer can approve the source and message once, then
      inspect the destination-specific changes. A publisher can see which account is scheduled and
      what still needs attention.
    </p>,
    <h2 id="measure">Learn from each destination</h2>,
    <p>
      When results come in, compare each platform with its own prior videos and audience behavior.
      Don’t average four different “views” numbers and call the result a universal score. A video
      can be widely served in one feed and earn deeper watch time or more qualified questions in
      another.
    </p>,
    <p>
      Write down the question the video was meant to answer: Did viewers understand the product? Did
      the demonstration earn saves? Did it create qualified inquiries? That gives the next edit or
      topic a reason to exist.
    </p>,
    <p>
      {"Profaily helps keep this chain visible: one finished video, independent destination details, publishing status, and the audience signals that can inform the next video. "}
      <a
        href="/feature-content-operations"
      >
        Explore the publishing workflow
      </a>{" or "}
      <a
        href="/feature-content-intelligence"
      >
        see how video insights fit into it
      </a>.
    </p>,
  ],
};
