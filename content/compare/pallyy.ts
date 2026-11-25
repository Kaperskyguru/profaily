import type { ChecklistComparison } from "./types";

/**
 * Profaily vs Pallyy, checklist layout. Pallyy cells come from Pallyy's own help center, feature pages, docs,
 * changelog and pricing page (research notes in research/compare/pallyy.md, checked 25 Nov 2026). A feature
 * its docs don't show is left out and renders as a cross.
 */
export const pallyy: ChecklistComparison = {
  kind: "checklist",
  slug: "pallyy-alternative",
  rival: "Pallyy",
  meta: {
    title: "Pallyy Alternative for TikTok, Reels and Shorts | Profaily",
    description:
      "Profaily vs Pallyy: every Profaily feature side by side with Pallyy, from scheduling and captions to pre-post checks, retries, approvals and AI apps.",
  },
  checked: "November 25, 2026",
  hero: {
    lede:
      "Pallyy is a scheduler for brands and agencies. Each client gets its own social set, and clients can approve posts from a shared calendar link. Profaily is built for short video: one upload goes to TikTok, Reels and Shorts, checked against each platform before you schedule.",
  },
  verdict:
    "If most of your week is short video, Profaily pulls the batch in from Drive, Dropbox, OneDrive or a CSV file and tells you which platforms are Ready before anything is booked. When TikTok or Instagram would refuse a file, one tap fixes it. If one platform fails, you retry that one and leave the rest alone.",
  workflow: {
    title: "One short video, to TikTok, Reels and Shorts",
    lede: "Here's what sending one video to all three looks like in each tool, going by Pallyy's own help pages and changelog.",
    them: [
      "Create a post, pick your TikTok, Instagram and YouTube accounts, and add the video.",
      "Tailor each network's version of the caption, and give the Short its own title.",
      "Fix any errors the editor flags. It won't schedule until you do.",
      "Pick a date and time, or the next queue slot.",
      "If a post fails, Pallyy shows the reason, and it retries short network glitches by itself.",
    ],
    us: [
      "Upload the video once, on your phone or computer.",
      "Each platform gets its own tab, or keep the text in sync.",
      "Every platform is checked and marked Ready, or told what to fix.",
      "Too big for Instagram or the wrong frame rate for TikTok? One tap fixes it.",
      "If one platform fails, retry that one. The rest stay posted.",
    ],
  },
  cells: {
    calendar: { mark: "yes", text: "Month, week and list views" },
    scheduling: { mark: "yes", text: "Pick a time, or a queue slot" },
    queue: { mark: "yes", text: "Posting times for each weekday" },
    drafts: { mark: "yes", text: "Drafts and coloured post labels" },
    import: { mark: "partial", text: "Media from Dropbox, OneDrive or Box" },
    // TikTok: pallyy.com/help/tiktok-integration (checked 2026-11-25)
    tiktok: { mark: "yes", text: "Auto-published, no phone step" },
    // Instagram: pallyy.com/help/instagram-integration (checked 2026-11-25)
    instagram: { mark: "yes", text: "Reels auto-published" },
    // YouTube: pallyy.com/help/youtube-integration (checked 2026-11-25)
    youtube: { mark: "yes", text: "Shorts" },
    // Facebook: pallyy.com/help/facebook-integration (checked 2026-11-25)
    facebook: { mark: "yes", text: "Pages: Reels, Stories and carousels" },
    captions: { mark: "yes", text: "Tailor each network's version" },
    ytTitle: { mark: "yes", text: "Each Short gets its own title" },
    images: { mark: "yes", text: "Carousels" },
    ready: { mark: "partial", text: "Checks each network's rules when you schedule" },
    status: { mark: "yes", text: "Failed posts show a readable reason" },
    email: { mark: "yes", text: "Email when a post fails" },
    retry: { mark: "partial", text: "Retries network glitches automatically" },
    team: { mark: "yes", text: "On Agency and Scale" },
    roles: { mark: "yes", text: "Editor, Collaborator and Viewer" },
    approvals: { mark: "yes", text: "Clients approve from a shared link" },
    brandAccess: { mark: "yes", text: "Per social set" },
    mcp: { mark: "yes", text: "Pallyy MCP, on every plan" },
  },
};
