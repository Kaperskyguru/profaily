import type { Platform } from "@/components/ui/icons";

export type Testimonial = {
  name: string;
  handle: string;
  /** Where the quote was posted. */
  platform: Platform;
  /** Plain text. Blank lines are kept; @profaily is highlighted. */
  text: string;
  /** Link to the original post, when there is one. */
  href?: string;
};

/** Real customer quotes, with permission. Add them here and the "Creators love Profaily" section appears; while this list is empty the section is not rendered. */
export const testimonials: Testimonial[] = [];

/** Layout stand-ins so the section can be reviewed before real quotes exist. Only shown when the build sets NEXT_PUBLIC_SAMPLE_TESTIMONIALS=1; never ship these. */
export const sampleTestimonials: Testimonial[] = [
  { name: "Sample customer", handle: "@handle", platform: "instagram", text: "One upload, multiple channels.\n\nI used to export the same video three times. Now @profaily does it and I check the previews." },
  { name: "Sample customer", handle: "@handle", platform: "tiktok", text: "Bulk import changed my Mondays.\n\n- Upload a CSV\n- Fix the two rows it flags\n- Done for the month" },
  { name: "Sample customer", handle: "@handle", platform: "youtube", text: "My producer sends a video for review, I comment, she fixes it, I approve. All inside @profaily." },
  { name: "Sample customer", handle: "@handle", platform: "facebook", text: "The Publishing Center is the page I open first. I can see what posted and where it did not." },
  { name: "Sample customer", handle: "@handle", platform: "instagram", text: "Scheduling in plain words is great. I type tomorrow 9am and it just works." },
  { name: "Sample customer", handle: "@handle", platform: "tiktok", text: "We run five client brands from one login with @profaily. Each has its own channels." },
  { name: "Sample customer", handle: "@handle", platform: "youtube", text: "The calendar shows the whole month at a glance.\n\nNo more spreadsheet." },
  { name: "Sample customer", handle: "@handle", platform: "facebook", text: "Previews per channel saved me from a cropped caption on Reels." },
  { name: "Sample customer", handle: "@handle", platform: "instagram", text: "Phone alerts when a video posts. Small thing, but I stopped checking manually." },
];
