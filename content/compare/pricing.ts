/**
 * Price and limits on each compare page: the plan a solo creator would pick and the plan a team would pick,
 * Profaily next to the rival. Rival figures come from the rival's own pricing page, read from Nigeria on
 * CHECKED (Buffer, Publer and Hootsuite show the same US-dollar prices to every region). Profaily's come from
 * content/plans.ts, which follows the backend catalog.
 *
 * The price row is what posting to TikTok, Instagram and YouTube costs a month on monthly billing, so a
 * per-channel or per-account price (Buffer, Publer) is shown for three channels. Hootsuite publishes only its
 * yearly price, so its row says so.
 *
 * Regional prices: a visitor billed in naira sees Profaily's naira price, and each rival's dollar price in
 * naira at NGN_PER_USD (the CBN's official NFEM rate on RATE_DATE), marked "about" with the dollar price under
 * it, since every rival here bills Nigeria in US dollars. Update the rate, its date and CHECKED together.
 */
import { plans } from "@/content/plans";

export const CHECKED = "20 November 2026";
/** CBN NFEM volume-weighted rate, ₦ per $1. */
export const NGN_PER_USD = 1358.09;
export const RATE_DATE = "17 November 2026";

/** One plan's column. `usd` is the monthly price for TikTok, Instagram and YouTube; `basis` says how it adds up. */
export type PlanColumn = {
  name: string;
  usd: number;
  basis?: string;
  brands: string;
  channels: string;
  people: string;
  posts: string;
};

export type TeamColumn = PlanColumn & { approvals: string; trial: string };

export type RivalPricing = { solo: PlanColumn; team: TeamColumn };

/** The rows of each block, in order. */
export const soloRows = [
  { key: "brands", label: "Brands" },
  { key: "channels", label: "Channels" },
  { key: "people", label: "People" },
  { key: "posts", label: "Posts" },
] as const;

export const teamRows = [...soloRows, { key: "approvals", label: "Approvals before posting" }, { key: "trial", label: "Free trial" }] as const;

const [creator, business] = plans;

/** Profaily's two columns. Prices are taken from content/plans.ts in the visitor's currency at render time. */
export const profaily = {
  solo: { name: creator.name, brands: "1", channels: "4", people: "Just you", posts: "Unlimited" },
  team: { name: business.name, brands: "3", channels: "12", people: "5", posts: "Unlimited", approvals: "Yes", trial: "14 days" },
} as const;

export const rivalPricing: Record<string, RivalPricing> = {
  "buffer-alternative": {
    solo: { name: "Essentials", usd: 18, basis: "$6 per channel", brands: "No brand limit", channels: "Paid per channel", people: "Just you", posts: "Unlimited" },
    team: { name: "Team", usd: 36, basis: "$12 per channel", brands: "No brand limit", channels: "Paid per channel", people: "Unlimited", posts: "Unlimited", approvals: "Yes", trial: "14 days" },
  },
  "later-alternative": {
    solo: { name: "Starter", usd: 25, brands: "1 social set", channels: "1 of each network", people: "Just you", posts: "Up to 30 per profile" },
    team: { name: "Growth", usd: 50, brands: "2 social sets", channels: "2 of each network", people: "2", posts: "Up to 180 per profile", approvals: "Yes", trial: "14 days" },
  },
  "metricool-alternative": {
    solo: { name: "Starter", usd: 25, basis: "up to 5 brands", brands: "Up to 5", channels: "1 of each network per brand", people: "Just you", posts: "Unlimited, fair use" },
    team: { name: "Advanced", usd: 67, basis: "up to 15 brands", brands: "Up to 15", channels: "1 of each network per brand", people: "Unlimited", posts: "Unlimited, fair use", approvals: "Yes", trial: "Free plan instead" },
  },
  "postiz-alternative": {
    solo: { name: "Standard", usd: 29, brands: "Not stated", channels: "5", people: "Just you", posts: "Unlimited" },
    team: { name: "Team", usd: 39, brands: "Not stated", channels: "10", people: "Unlimited", posts: "Unlimited", approvals: "Preview links only", trial: "7 days" },
  },
  "repurpose-io-alternative": {
    solo: { name: "Starter", usd: 35, brands: "Not stated", channels: "3 per network", people: "Not stated", posts: "5,000 videos" },
    team: { name: "Pro", usd: 79, brands: "Not stated", channels: "10 per network", people: "Not stated", posts: "Unlimited", approvals: "Not stated", trial: "14 days" },
  },
  "hootsuite-alternative": {
    solo: { name: "Standard", usd: 99, basis: "per user, billed yearly", brands: "No brand limit", channels: "10", people: "Paid per seat", posts: "Unlimited" },
    team: { name: "Advanced", usd: 399, basis: "per user, billed yearly", brands: "No brand limit", channels: "Unlimited", people: "Paid per seat", posts: "Unlimited", approvals: "Yes", trial: "14 days" },
  },
  "publer-alternative": {
    solo: { name: "Professional", usd: 12, basis: "for 3 accounts", brands: "Unlimited workspaces", channels: "Paid per account", people: "Just you", posts: "Unlimited" },
    team: { name: "Business", usd: 21, basis: "for 3 accounts", brands: "Unlimited workspaces", channels: "Paid per account", people: "Extra members cost more", posts: "Unlimited", approvals: "With extra members", trial: "Free plan instead" },
  },
};

/** "$18" or "$18.50". */
export const usd = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

/** A dollar price in naira at NGN_PER_USD, to the nearest ₦100: "₦24,400". */
export const ngn = (n: number) => `₦${(Math.round((n * NGN_PER_USD) / 100) * 100).toLocaleString("en-NG")}`;
