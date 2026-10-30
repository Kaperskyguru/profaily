import { links } from "@/lib/links";
import type { IconName } from "@/components/ui/Glyph";

export const contactMeta = {
  title: "Contact Us | Profaily",
  description: "Contact Profaily for product support, plan questions, and privacy requests.",
  path: "/contact",
};

/** The real inboxes (the app's Help menu and the privacy/terms pages use these). */
export const SUPPORT_EMAIL = "support@useprofaily.com";
export const PRIVACY_EMAIL = "privacy@useprofaily.com";

export const contactHero = {
  title: "How can we help?",
  lede: "Choose the right route for product support, plan questions, or privacy requests.",
};

export type ContactCard = {
  icon: IconName;
  heading: string;
  body: string;
  email: string;
  subject: string;
  links: { href: string; label: string }[];
};

export const contactCards: ContactCard[] = [
  {
    icon: "chat",
    heading: "Product support",
    body: "For account access, video distribution, scheduling, or connected channels. If you are signed in, Help in your workspace opens the same inbox.",
    email: SUPPORT_EMAIL,
    subject: "Profaily support",
    links: [{ href: links.app, label: "Open Profaily" }],
  },
  {
    icon: "layers",
    heading: "Plans and billing",
    body: "Questions about Creator or Business, the free trial, currencies, or an invoice. You can change or cancel your plan any time from Settings → Billing.",
    email: SUPPORT_EMAIL,
    subject: "Profaily billing",
    links: [{ href: "/pricing", label: "View pricing" }],
  },
  {
    icon: "shield",
    heading: "Privacy and data",
    body: "Requests about your personal data, or questions about how Profaily handles it. Read the privacy policy and terms first; they cover most questions.",
    email: PRIVACY_EMAIL,
    subject: "Privacy request",
    links: [
      { href: links.privacy, label: "Privacy policy" },
      { href: links.terms, label: "Terms" },
      { href: links.deletion, label: "Data deletion" },
    ],
  },
];
