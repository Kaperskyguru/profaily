import { TRIAL_DAYS, YEARLY_SAVING } from "@/content/plans";

export const pricingMeta = {
  title: "Pricing | Profaily",
  description: `Compare Profaily Creator and Business for creators, businesses, and agencies distributing short-form video. Try Business free for ${TRIAL_DAYS} days.`,
  path: "/pricing",
};

/**
 * "Compare plans and features", arranged like the app's compare table (frontend/lib/plans.ts
 * compareSections): same sections, rows, one-line explanations and notes. A cell is `true`
 * (included), `false` (not included) or a value. Platform rows draw the channel's own logo.
 */
export type Cell = boolean | string;
export type CompareRow = { label: string; tip: string; icon: string; note?: string; creator: Cell; business: Cell };
export type CompareSection = { title: string; description?: string; rows: CompareRow[] };

const both = (label: string, icon: string, tip: string): CompareRow => ({ label, icon, tip, creator: true, business: true });
const biz = (label: string, icon: string, tip: string, note?: string): CompareRow => ({ label, icon, tip, ...(note ? { note } : {}), creator: false, business: true });

export const compareSections: CompareSection[] = [
  {
    title: "Scheduling",
    rows: [
      both("Calendar", "calendar", "See everything scheduled, by day and week."),
      both("Scheduling", "clock", "Pick a time, or take the next queue slot."),
      both("Queue slots", "queue", "Set a weekly rhythm and videos fill the next free slot."),
      both("Drafts and tags", "drafts", "Keep videos as drafts and label them with tags."),
      both("Import videos from a link or CSV", "table", "Bring in many videos at once from links or a CSV file."),
    ],
  },
  {
    title: "Channels",
    rows: [
      both("TikTok", "tiktok", "Distribute your videos to TikTok."),
      both("Instagram", "instagram", "Distribute your videos to Instagram."),
      both("YouTube", "youtube", "Distribute your videos to YouTube."),
      both("Facebook", "facebook", "Distribute your videos to Facebook."),
    ],
  },
  {
    title: "Videos and captions",
    rows: [
      both("A caption per channel", "chat", "Write one caption, then change it for any channel."),
      both("Titles and variables", "edit", "Add the title YouTube needs, and variables whose value differs per channel."),
      both("Images as well as videos", "image", "Distribute images too, as a carousel or one per file."),
      both("Text-only to Facebook", "text", "Send text with no file to a Facebook Page."),
    ],
  },
  {
    title: "Limits",
    rows: [
      { label: "Brands", icon: "layers", tip: "A brand holds the channels, schedule and history of one business or client.", creator: "1", business: "3" },
      { label: "Connected channels", icon: "plug", tip: "Accounts you can connect across all your brands.", creator: "4", business: "12" },
      { label: "Team members", icon: "users", tip: "Everyone who can work in your team, counting invites.", creator: "1", business: "5" },
      { label: "AI app calls per month", icon: "spark", tip: "Calls Claude or ChatGPT can make for you each month.", creator: "500", business: "10,000" },
    ],
  },
  {
    title: "Collaboration",
    rows: [
      biz("Shared team", "users", "Invite people to work in the same videos."),
      biz("Roles", "roles", "Decide who can view, edit, schedule or manage.", "Viewer, Editor, Producer, Admin"),
      biz("Approvals before distributing", "seal", "An editor sends a video for review before it goes out."),
      biz("Choose which brands each team member sees", "eye", "Give each team member access to only some brands."),
    ],
  },
  {
    title: "AI apps",
    rows: [
      both("AI apps (MCP)", "spark", "Connect Claude or ChatGPT to plan and schedule for you."),
      both("Plan whole campaigns", "megaphone", "Ask an AI app to lay out and schedule a full campaign."),
    ],
  },
  {
    title: "Branding",
    rows: [{ label: "Remove the #profaily tag", icon: "tag", tip: "Turn off the #profaily tag added to the end of your videos.", note: "Stays on during the trial", creator: true, business: true }],
  },
];

/** Plain-string answers: they feed the FAQPage JSON-LD as well as the page. */
export const pricingFaq = [
  {
    q: "How does the free trial work?",
    a: `Business comes with a ${TRIAL_DAYS}-day free trial. A card is required to start it, and you are not charged until the trial ends, so cancel before then if it is not for you. Creator has no trial.`,
  },
  {
    q: "Which currency will I pay in?",
    a: "Customers billed in Nigeria pay in naira (NGN) through Paystack. Everyone else pays in US dollars (USD).",
  },
  {
    q: "How much do I save by paying yearly?",
    a: `Paying yearly saves ${YEARLY_SAVING}% compared with paying monthly for twelve months.`,
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Move between Creator and Business, or between monthly and yearly billing, from Settings → Billing. You can also cancel there at any time.",
  },
  {
    q: "What is a brand?",
    a: "A brand is one business or client with its own channels, schedule and history. Creator includes one brand; Business includes three, so an agency or business can keep separate brands apart.",
  },
  {
    q: "What is an AI call?",
    a: "Profaily works with AI apps such as Claude and ChatGPT through MCP. Each action one of those apps asks Profaily to take, like drafting or scheduling a video, counts as one call against your monthly allowance.",
  },
  {
    q: "What happens if a payment fails?",
    a: "You get 7 days of grace to update your payment method with everything still working. After that your workspace becomes read-only until payment goes through.",
  },
];
