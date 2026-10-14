import type { PostContent } from "./types";

export const post: PostContent = {
  slug: "short-form-video-approval-workflow",
  category: "Teams & agencies",
  title: "How agencies can approve short-form videos without slowing production",
  description: "A practical approval system for agencies and social teams: define one brief, separate source-video approval from destination review, assign clear owners, and close the loop after publishing.",
  readTime: "7 min read",
  datePublished: "2026-09-29",
  dateLabel: "September 29, 2026",
  toc: [
    { id: "brief", label: "Start with one brief and one owner" },
    { id: "gates", label: "Put review gates where risk changes" },
    { id: "roles", label: "Make ownership visible" },
    { id: "loop", label: "Close the loop after the video goes live" },
  ],
  cta: { href: "/pricing", label: "See Pro and Teams" },
  sources: [
    { href: "https://developers.tiktok.com/docs/en/content-posting-api-reference-query-creator-info", label: "TikTok for Developers: Query Creator Info" },
    { href: "https://developers.tiktok.com/docs/en/content-posting-api-reference-direct-post", label: "TikTok for Developers: Direct Post" },
  ],
  related: ["one-video-four-platforms", "short-form-video-publishing-workflow", "turn-video-comments-into-leads"],
  blocks: [
    <p>
      When a video waits three days for “final approval,” the problem is often not that people
      reviewed it too carefully. The team is unsure which file is final, which caption is being
      approved, or who can clear the last open question.
    </p>,
    <p>
      A useful approval workflow makes those decisions explicit. It protects the work without
      turning each video into a committee meeting.
    </p>,
    <h2 id="brief">Start with one brief and one owner</h2>,
    <p>
      Before production or editing starts, record the job the video must do. Keep the brief short
      enough for the person filming and the client approver to use:
    </p>,
    <ul>
      <li>Audience and business goal</li>
      <li>One main message and the proof the video can show</li>
      <li>Offer or call to action, if any</li>
      <li>Destination accounts and planned publishing window</li>
      <li>Required claims, brand rules, rights, or legal review</li>
      <li>Brief owner and final approver</li>
    </ul>,
    <p>
      One person should own the brief and collect feedback. Other stakeholders can comment, but
      someone needs authority to resolve conflicting edits. Without that owner, “feedback” becomes a
      collection of unranked preferences.
    </p>,
    <h2 id="gates">Put review gates where risk changes</h2>,
    <p>
      Do not ask the client to approve every punctuation change. Separate the decisions that carry
      real risk:
    </p>,
    <ol>
      <li>
        <strong>Concept:</strong> Does the video solve the agreed brief? Is the offer and claim
        allowed?
      </li>
      <li>
        <strong>Final source video:</strong> Is the edit, audio, branding, rights, and on-screen
        information approved?
      </li>
      <li>
        <strong>Destination details:</strong> Are the caption, title, account, privacy, cover, and
        call to action right for each selected platform?
      </li>
      <li>
        <strong>Publish readiness:</strong> Is the account connected, the final file attached, and
        the schedule correct?
      </li>
    </ol>,
    <p>
      {"Approval of the source video should not silently approve every destination’s metadata. Review the changes made for each channel while keeping them attached to the same approved source. TikTok’s API, for example, asks an app to query the creator’s current privacy options before presenting the publish flow. That is a concrete reminder that destination choices can depend on the account, not only on the creative brief. "}
      <a
        href="https://developers.tiktok.com/docs/en/content-posting-api-reference-query-creator-info"
        target="_blank"
        rel="noopener noreferrer"
      >
        See TikTok’s creator-info requirements
      </a>.
    </p>,
    <h2 id="roles">Make ownership visible</h2>,
    <div className="article-table-wrap">
      <table className="article-table">
        <thead>
          <tr><th>Role</th><th>Owns</th><th>Can decide</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Strategist or account lead</td><td>Brief, goal, client alignment</td><td>Scope and message direction</td>
          </tr>
          <tr>
            <td>Creator or editor</td><td>Final source video and version record</td><td>Production choices within the brief</td>
          </tr>
          <tr>
            <td>Reviewer</td><td>Claims, brand, rights, destination details</td><td>Approve or return with a specific change</td>
          </tr>
          <tr>
            <td>Publisher</td><td>Account, schedule, and destination status</td><td>Publish when required gates are complete</td>
          </tr>
          <tr>
            <td>Community owner</td><td>Replies and lead handoff</td><td>Route eligible responses to the right person</td>
          </tr>
        </tbody>
      </table>
    </div>,
    <p>
      One teammate may hold multiple roles in a small business. The important thing is that every
      open decision has a named owner and next action. For client work, keep brand or account
      permissions separate; “can review” should not automatically mean “can publish.”
    </p>,
    <h2 id="loop">Close the loop after the video goes live</h2>,
    <p>
      Once scheduled, the video still needs a publishing status and a response owner. Confirm each
      destination independently. Then capture the useful outcome: did the video reach the right
      audience, prompt a question that needs follow-up, or give the team a topic worth revisiting?
    </p>,
    <p>
      A weekly client review can be simple: show what shipped, what needs attention, which
      conversations were routed, and what the next video will test. That is more actionable than a
      long report full of unassigned observations.
    </p>,
    <p>
      Profaily Teams is designed for shared workspaces, review, roles, and connected publishing and
      follow-up. <a href="/pricing">Compare Profaily plans</a>{" or "}
      <a
        href="/feature-content-operations"
      >
        review the video publishing workflow
      </a>.
    </p>,
  ],
};
