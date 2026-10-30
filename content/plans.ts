/**
 * The plans offered to new customers, as the app shows them (frontend/lib/plans.ts NEW_USER_PLANS /
 * NEW_USER_AUDIENCE) with prices from backend/src/modules/billing/catalog.ts (MONTHLY / ANNUAL, minor
 * units) and AI limits from backend/src/helpers/environment.ts (mcpMonthlyCalls defaults).
 * Agency exists in the catalog but is not offered on the site. Change these here when the catalog changes.
 */
export type Currency = "usd" | "ngn";
export type Period = "m" | "y";
/** One line on a plan card, as the app draws it (frontend/lib/plans.ts essentialHighlights). */
export type Highlight = { icon: "platforms" | "plus" | "calendar" | "spark" | "tag" | "users" | "seal" | "eye"; text: string };

export type SitePlan = {
  key: "creator" | "business";
  name: string;
  audience: string;
  /** Shown big, per month. `y` is the yearly price split into twelve, as the app's cards show it. */
  price: Record<Currency, Record<Period, string>>;
  /** The line under the price. */
  bill: Record<Currency, Record<Period, string>>;
  /** Shown big; Creator yearly shows the year total, as the app does. */
  unit: Record<Period, string>;
  highlights: Highlight[];
  /** The plan's limits in words (compare pages). */
  limits: string[];
  trial: boolean;
  cta: string;
};

export const TRIAL_DAYS = 14;
export const YEARLY_SAVING = 20;

export const plans: SitePlan[] = [
  {
    key: "creator",
    name: "Creator",
    audience: "For creators that are serious about distributing videos.",
    price: { usd: { m: "$15", y: "$144" }, ngn: { m: "₦7,500", y: "₦72,000" } },
    unit: { m: "/ month", y: "/ year" },
    bill: {
      usd: { m: "Billed monthly", y: "Billed yearly, $12 a month" },
      ngn: { m: "Billed monthly", y: "Billed yearly, ₦6,000 a month" },
    },
    highlights: [
      { icon: "platforms", text: "Distribute to" },
      { icon: "calendar", text: "Calendar & scheduling" },
      { icon: "spark", text: "AI apps (MCP)" },
      { icon: "tag", text: "Remove the #profaily tag" },
    ],
    limits: ["1 brand", "4 connected channels", "Just you", "500 AI app calls a month"],
    trial: false,
    cta: "Choose Creator",
  },
  {
    key: "business",
    name: "Business",
    audience: "For modern businesses and agencies that review before distributing.",
    price: { usd: { m: "$39", y: "$31.17" }, ngn: { m: "₦19,900", y: "₦15,920" } },
    unit: { m: "/ month", y: "/ month" },
    bill: {
      usd: { m: "Billed monthly", y: "$374 billed yearly" },
      ngn: { m: "Billed monthly", y: "₦191,040 billed yearly" },
    },
    highlights: [
      { icon: "plus", text: "Everything in Creator +" },
      { icon: "users", text: "Teams and roles" },
      { icon: "seal", text: "Approvals before distributing" },
      { icon: "eye", text: "Choose which brands each team member sees" },
    ],
    limits: ["3 brands", "12 connected channels", "5 team members", "Approvals before distributing"],
    trial: true,
    cta: `Try free for ${TRIAL_DAYS} days`,
  },
];
