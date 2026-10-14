import type { PostContent } from "./types";

export const post: PostContent = {
  slug: "turn-video-comments-into-leads",
  category: "Audience & leads",
  title: "How to turn short-form video comments into a lead follow-up system",
  description: "Build a practical handoff from audience questions to qualified leads: classify intent, respond in context, assign an owner, and connect the conversation to the video.",
  readTime: "8 min read",
  datePublished: "2026-09-29",
  dateLabel: "September 29, 2026",
  toc: [
    { id: "signal", label: "A comment is a signal, not a lead record" },
    { id: "triage", label: "Triage before you automate" },
    { id: "handoff", label: "Give every qualified conversation an owner" },
    { id: "measure", label: "Measure the handoff, not just replies" },
  ],
  cta: { href: "/feature-conversation-automation", label: "Explore the unified inbox" },
  sources: [
    { href: "https://www.postman.com/meta/instagram/folder/uxudqu0/send-api", label: "Meta Instagram API: Send API" },
    { href: "https://developers.google.com/youtube/v3/docs/commentThreads", label: "Google for Developers: YouTube CommentThreads resource" },
    { href: "https://developers.google.com/youtube/v3/docs/commentThreads/list", label: "Google for Developers: List YouTube comment threads" },
  ],
  related: ["one-video-four-platforms", "short-form-video-publishing-workflow", "short-form-video-measurement"],
  blocks: [
    <p>
      A viewer asks whether a service is available in their city. The comment is public, the answer
      depends on the viewer’s needs, and the person replying is also monitoring two other channels.
    </p>,
    <p>
      That is the moment a social team needs a workflow—not another notification. The goal is to
      move a useful conversation from the video that prompted it to a clear next step, while keeping
      the reply accurate and human.
    </p>,
    <h2 id="signal">A comment is a signal, not a lead record</h2>,
    <p>
      Comments and direct messages can show curiosity, buying intent, confusion, or a service
      problem. They do not all deserve the same response. A like is not a qualified opportunity. A
      question about price may be a buying signal, but only after someone understands what the
      person actually needs.
    </p>,
    <p>
      Start by connecting conversations to the source video and destination account. That context
      tells a responder whether the person is asking about a product demonstration, a specific
      offer, or a general topic. Profaily’s unified inbox is intended to bring eligible
      conversations from connected TikTok, Instagram, YouTube, and Facebook accounts into one
      working view; the platform’s account type, permissions, and API support determine which
      conversation actions are available.
    </p>,
    <h2 id="triage">Triage before you automate</h2>,
    <p>Use a small, understandable set of intent labels. For example:</p>,
    <div className="article-table-wrap">
      <table className="article-table">
        <thead>
          <tr><th>Signal</th><th>First response</th><th>Next step</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Product or service question</td><td>Answer the specific question with approved information</td><td>Ask one relevant follow-up if fit is unclear</td>
          </tr>
          <tr>
            <td>Clear buying interest</td><td>Acknowledge the request and state what happens next</td><td>Assign an owner; offer the approved booking or contact route</td>
          </tr>
          <tr>
            <td>Support issue</td><td
            >
              Recognize the problem without asking for private details publicly
            </td><td>Move to the appropriate private support channel</td>
          </tr>
          <tr>
            <td>General reaction or spam</td><td
            >
              Use a normal response policy, or no response where appropriate
            </td><td>Do not create a sales task automatically</td>
          </tr>
        </tbody>
      </table>
    </div>,
    <p>
      Automate the sorting and the reminder; keep judgment in the reply when the question needs
      context. A useful rule might create a lead task for explicit requests about availability or
      pricing, but route ambiguous comments to a person for review first.
    </p>,
    <p>
      Never use a public reply to collect sensitive information. Ask only for what is needed,
      explain the next step, and use a channel the person has agreed to continue in.
    </p>,
    <h2 id="handoff">Give every qualified conversation an owner</h2>,
    <p>
      A handoff is complete only when someone knows they own it. Record the source channel, the
      video or campaign, the intent label, the last reply, the next action, and the teammate
      responsible. For teams, set an ownership rule: by account, region, product line, or an
      explicit rotation. Add a due time that matches your actual service promise—there is no
      universally correct response-time target for every business.
    </p>,
    <p>
      {"Platform rules matter. Meta’s Instagram Send API documentation says a conversation begins when the Instagram user messages the professional account, and lists the messaging permission required for API access. Don’t design a flow that sends unsolicited DMs just because a person commented. "}
      <a
        href="https://www.postman.com/meta/instagram/folder/uxudqu0/send-api"
        target="_blank"
        rel="noopener noreferrer"
      >
        Review Meta’s Instagram Send API requirements
      </a>.
    </p>,
    <p>
      {"YouTube’s Data API can return comment threads, but the replies included with a thread may be only a subset; retrieving the rest can require a separate request. Comments can also be disabled or unavailable to an account without sufficient authorization. These are operational limits worth reflecting in inbox status, rather than hiding them from the team. "}
      <a
        href="https://developers.google.com/youtube/v3/docs/commentThreads"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google documents the comment-thread resource and its limits
      </a>.
    </p>,
    <h2 id="measure">Measure the handoff, not just replies</h2>,
    <p>
      Track a short funnel: conversations received, qualified, assigned, answered, and moved to the
      agreed outcome—such as a booked call, quote request, or support resolution. Keep the
      denominator visible. “Five leads” means little without knowing whether they came from five
      conversations or five hundred.
    </p>,
    <p>
      Review the video that created the conversation. Did it attract the right question? Did the
      answer in the video leave an important detail out? Did the CTA invite the right next step?
      Feed that learning into the next video brief.
    </p>,
    <p>
      {"Profaily connects the inbox to lead qualification, ownership, routing, and follow-up workflows. "}
      <a
        href="/feature-conversation-automation"
      >
        Explore the unified inbox
      </a> and <a href="/feature-revenue-workflows">see lead workflows</a>.
    </p>,
  ],
};
