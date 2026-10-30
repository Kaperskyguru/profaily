import { PlatformIcon, type Platform } from "./icons";

export type Integration = Platform | "google" | "claude" | "chatgpt" | "gdrive" | "dropbox" | "onedrive";

export const INTEGRATION_LABEL: Record<Integration, string> = {
  tiktok: "TikTok",
  instagram: "Instagram",
  youtube: "YouTube",
  facebook: "Facebook",
  google: "Google",
  claude: "Claude",
  chatgpt: "ChatGPT",
  gdrive: "Google Drive",
  dropbox: "Dropbox",
  onedrive: "OneDrive",
};

const PLATFORMS: readonly string[] = ["tiktok", "instagram", "youtube", "facebook"];

/** Brand marks for the channels Profaily posts to and the services it connects to. Decorative: the caller labels them. */
export function Glyph({ name, className = "glyph", id }: { name: Integration; className?: string; id?: string }) {
  if (PLATFORMS.includes(name)) {
    return (
      <span className={className} style={{ display: "inline-grid" }}>
        <PlatformIcon platform={name as Platform} gradientId={`ig-${id ?? "g"}`} />
      </span>
    );
  }
  switch (name) {
    case "google":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M22.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.55c2.08-1.92 3.25-4.74 3.25-8.03z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.55-2.7c-.98.66-2.24 1.05-3.73 1.05-2.87 0-5.3-1.94-6.16-4.54H2.18v2.84A11 11 0 0 0 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.15A6.6 6.6 0 0 1 5.5 12c0-.75.13-1.47.34-2.15V7.01H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.99l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.01l3.66 2.84C6.7 7.31 9.13 5.38 12 5.38z" />
        </svg>
      );
    case "claude":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <g stroke="#D97757" strokeWidth="2.4" strokeLinecap="round" fill="none">
            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4M7.5 3.8l9 16.4M3.8 16.5l16.4-9" />
          </g>
        </svg>
      );
    case "chatgpt":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <g fill="none" stroke="#111" strokeWidth="1.7">
            <ellipse cx="12" cy="12" rx="8.5" ry="4.2" />
            <ellipse cx="12" cy="12" rx="8.5" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="8.5" ry="4.2" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "gdrive":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#FFBA00" d="M8.6 3h6.8L22 14.5h-6.8z" />
          <path fill="#0F9D58" d="M8.6 3 2 14.5l3.4 6L12 9z" />
          <path fill="#4285F4" d="M5.4 20.5h13.2l3.4-6H8.8z" />
        </svg>
      );
    case "dropbox":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#0061FF" d="m7 3 5 3.2-5 3.2-5-3.2zM17 3l5 3.2-5 3.2-5-3.2zM2 12.6l5-3.2 5 3.2-5 3.2zM12 12.6l5-3.2 5 3.2-5 3.2zM7 17l5-3.2 5 3.2-5 3.2z" />
        </svg>
      );
    case "onedrive":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#0364B8" d="M7 18.5h11.2a4.2 4.2 0 0 0 .6-8.35A6.3 6.3 0 0 0 7.1 8.4 5.05 5.05 0 0 0 7 18.5z" />
        </svg>
      );
    default:
      return null;
  }
}

const ICONS = {
  upload: "M12 16V4M7 9l5-5 5 5M5 20h14",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
  calendar: "M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16M9 3v4M15 3v4",
  check: "M5 12.5l4.2 4.2L19 7",
  table: "M4 4h16v16H4zM4 10h16M10 10v10",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
  edit: "M4 20h4L19 9l-4-4L4 16z",
  alert: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v6M12 16.5v.5",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  lines: "M4 6h16M4 12h10M4 18h7",
  link: "M10 14l4-4M8 16a3 3 0 0 1 0-4l3-3a3 3 0 0 1 4 4M16 8a3 3 0 0 1 0 4l-3 3a3 3 0 0 1-4-4",
  chat: "M4 5h16v11H8l-4 4z",
  retry: "M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4",
  circleCheck: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12.5l2.5 2.5L16 9.5",
  chevron: "M6 9l6 6 6-6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 21a6 6 0 0 1 12 0M16 3.5a4 4 0 0 1 0 7.5M21 21a6 6 0 0 0-4-5.6",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
  layers: "M12 3 2 8l10 5 10-5zM2 13l10 5 10-5M2 17.5 12 22l10-4.5",
  bell: "M6 16V11a6 6 0 1 1 12 0v5l2 2H4zM10 21h4",
  tag: "M3 12V4h8l9 9-8 8zM7.5 7.5h.01",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  seal: "M12 3l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2zM8.5 12l2.4 2.4L15.5 10",
  queue: "M4 6h16M4 12h16M4 18h10",
  image: "M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5M15.5 8.5h.01",
  text: "M5 6h14M12 6v13",
  megaphone: "M3 10v4h4l6 4V6L7 10zM17 9a4 4 0 0 1 0 6",
  roles: "M4 5h16v14H4zM8 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6.5 16a3.5 3.5 0 0 1 7 0M15 10h3M15 13h3",
  drafts: "M6 3h9l3 3v15H6zM9 9h6M9 13h6M9 17h3",
  plug: "M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0zM12 16v5",
  home: "M4 11 12 4l8 7M6 9.5V20h4v-5h4v5h4V9.5",
  chevronRight: "M9 6l6 6-6 6",
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

export function Arrow() {
  return <span className="ar" aria-hidden="true">→</span>;
}
