#### Postiz facts (docs.postiz.com and Postiz's GitHub README, checked November 19, 2026)
Carried over from the pre-agent research notes. Re-verify each line on the next audit of this page.
- Composer has a Global tab for all channels; open a channel tab and Edit content to detach it. (docs.postiz.com general/composer/global-vs-per-channel)
- After creation, each channel's post is edited on its own; the Global tab only applies while creating.
- The composer blocks posts that break media rules (attachment count and type) before they reach the platform. TikTok: one video or pictures; Instagram reel: one video; YouTube: exactly one video. (general/platforms/overview)
- Docs don't describe per-platform size or frame-rate checks; uploads get a general duration, dimensions and codec check. The composer also checks text length and required settings.
- Media: images 10MB, videos 1GB. JPEG, PNG, GIF, WebP, AVIF, BMP, TIFF, MP4. Real type detected; renaming .mov to .mp4 won't work. Web app docs say convert yourself; API/CLI have an optional `adjust` re-encode. (general/composer/media)
- Postiz inspects videos for duration, dimensions and codec; outside range fails ("Failed to load video metadata"). (troubleshooting/uploads)
- TikTok: direct post, or upload to the TikTok inbox to publish manually within 24 hours.
- YouTube settings: title, privacy, made-for-kids, tags; custom thumbnail supported.
- Errors: post status Error, red ring on the calendar card, tooltip shows the platform's reason. (general/concepts, troubleshooting)
- Approvals: no "approved" flag that blocks publishing; preview link with comments; drafts as a safeguard. (general/approvals)
- Team roles: User, Admin, Super Admin, org-wide; no per-channel permissions. Cloud: team members on Team plan and up. (general/settings/team)
- MCP server, CLI, public API. Open source; self-hosted needs your own developer apps per platform. (GitHub README)
- Calendar with posting time slots per channel.
## Do NOT say
- Postiz lacks retry, failure email or bulk import (unverified either way).
- Prices; links to Postiz; Profaily gaps.
