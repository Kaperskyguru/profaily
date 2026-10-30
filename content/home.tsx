import type { FaqItem } from "@/components/sections/shared/Faq";

export const homeMeta = {
  title: "Profaily | Turn short-form video into a growth engine for your business",
  description:
    "Upload a video once and Profaily posts it to TikTok, Instagram Reels, YouTube and Facebook, each in its own format, on a schedule. Team approvals, bulk import and AI scheduling from Claude or ChatGPT.",
  path: "/",
};

export const homeFaq: FaqItem[] = [
  { q: "Which channels can Profaily post to?", a: "TikTok, Instagram Reels, YouTube (Shorts and longer videos) and Facebook. We go deep on these instead of shallow on twenty." },
  { q: "What happens if one channel fails?", a: "The others still post. You’ll see which one stopped and the reason, edit what it needs, and retry only that one." },
  { q: "Can my team approve videos before they go out?", a: "Yes, on Business. Editors send a video for review, you comment, ask for changes or approve, and only then is it scheduled." },
  { q: "Does Profaily change my video?", a: "No. It posts the file you upload. The previews show how each channel will frame it, and anything a channel won’t accept is flagged before it’s scheduled." },
  { q: "How does the free trial work?", a: "You get the Business plan free for 14 days. A card is needed to start, and you can cancel before you’re charged." },
  { q: "How does scheduling from Claude or ChatGPT work?", a: "You connect Profaily to your assistant once. It can then read your library, check videos against each channel’s rules, and draft or schedule posts for you. Every plan includes a monthly number of assistant actions." },
];
