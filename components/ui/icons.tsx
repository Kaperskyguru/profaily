export type Platform = "tiktok" | "instagram" | "youtube" | "facebook";

const TIKTOK = "M12.53 2h3.17c.18 1.63.95 3.13 2.2 4.2 1.07.9 2.4 1.45 3.79 1.57v3.32a10.48 10.48 0 0 1-5.98-1.88v6.9a6.27 6.27 0 1 1-6.26-6.27c.39 0 .77.04 1.14.1v3.49a2.82 2.82 0 1 0 1.94 2.68V2z";

export function PlatformIcon({ platform, gradientId = "ig-mark-2-instagram" }: { platform: Platform; gradientId?: string }) {
  switch (platform) {
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#25F4EE" transform="translate(-.65 .2)" d={TIKTOK} />
          <path fill="#FE2C55" transform="translate(.65 -.2)" d={TIKTOK} />
          <path fill="#111" d={TIKTOK} />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFB13D" />
              <stop offset=".48" stopColor="#E1306C" />
              <stop offset="1" stopColor="#833AB4" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4.1" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.2" />
          <circle cx="17.6" cy="6.7" r="1.25" fill="#E1306C" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="4.5" width="20" height="15" rx="4.4" fill="#FF0033" />
          <path d="m10 8 6 4-6 4V8Z" fill="#fff" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#0866FF" />
          <path fill="#fff" d="M14.15 21v-7h2.38l.36-2.8h-2.74V9.41c0-.81.23-1.36 1.39-1.36h1.47V5.54c-.71-.1-1.43-.16-2.15-.16-2.13 0-3.59 1.3-3.59 3.7v2.12H8.86V14h2.41v7h2.88Z" />
        </svg>
      );
  }
}

export function Chevron() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m3 6 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
