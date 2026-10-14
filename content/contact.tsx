import { links } from "@/lib/links";

export const contactMeta = {
  title: "Contact Us | Profaily",
  description: "Contact Profaily for product support, plan questions, and privacy requests.",
  path: "/contact",
};

export const contactCards = [
  {
    eyebrow: "PRODUCT SUPPORT",
    heading: "Get help with your workspace.",
    body: "For account access, video publishing, scheduling, or connected social channels, sign in and use Help from your Profaily workspace.",
    links: [{ href: links.app, label: "Open Profaily" }],
  },
  {
    eyebrow: "PLANS & BILLING",
    heading: "Find the right plan.",
    body: "Review what Pro and Teams include, then sign in to manage your subscription or account questions.",
    links: [{ href: "/pricing", label: "View pricing" }],
  },
  {
    eyebrow: "PRIVACY & TERMS",
    heading: "Questions about your data?",
    body: "Read Profaily’s privacy policy and terms. For account-specific requests, contact support through your workspace.",
    links: [
      { href: links.privacy, label: "Privacy" },
      { href: links.terms, label: "Terms" },
    ],
  },
];
