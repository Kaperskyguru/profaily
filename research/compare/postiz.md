#### Postiz facts (docs.postiz.com, postiz.com and Postiz's GitHub releases, checked November 26, 2026)
None of the docs pages show an updated date. postiz.com/ metadata shows modified 2026-04-27. GitHub (releases, PRs) could not be re-opened on 26 Nov (blocked from this session); lines sourced only from GitHub are carried over from 21 Nov and marked so.
- Publishes to 34 social platforms (docs intro and platforms overview); the homepage says "30+ channels". (docs.postiz.com/general/introduction; general/platforms/overview; postiz.com/)
- Open source (AGPL-3.0), can be self-hosted; self-hosters "handle updates, backups, and API approvals yourself." (postiz.com/)
- Calendar shows every post; a post to several channels has one card per channel. (general/calendar/moving-posts)
- Statuses: Draft (never publishes), Scheduled, Published, Error. On Error the card gets a red ring with the platform's reason in a tooltip. (general/concepts)
- Posting time slots are set per channel, "a convenience, not a restriction". They drive the Day view, RSS auto-post draft times and the API's find-slot endpoint. No automatic queue in the UI. (general/channels/time-slots)
- Scheduling options: Save as Draft, Add to calendar (date and time), Post Now, Repeat Post Every. (general/composer/scheduling)
- Drafts sit on the calendar and never publish; tags (with colours) in the composer footer. (general/composer/overview; general/composer/scheduling)
- Composer Global tab for all channels; Edit content on a channel tab detaches it. (general/composer/global-vs-per-channel)
- Sets save a channel selection and settings, not text; signatures are fixed reusable text; no variables or placeholders described. (general/settings/reusables)
- Validation before save: empty content, too long, missing setting (e.g. YouTube title), media rules (number or type of attachments). If any channel fails, nothing is saved and the composer jumps to that channel. No auto-fix. (general/composer/links-and-validation)
- Platform media rules cover attachment count and type only, not size, duration or frame rate. (general/platforms/overview)
- Media: images 10 MB, video 1 GB; types JPEG, PNG, GIF, WebP, AVIF, BMP, TIFF, MP4; "Renaming a .mov to .mp4 will not get it accepted." Rejected files: convert/re-encode to MP4 yourself. The page does not say the web app adjusts uploads. (general/composer/media)
- Uploaded videos checked for duration, dimensions and codec; failures show "Failed to load video metadata". (general/troubleshooting/uploads)
- [Carried over, not re-checked 26 Nov: GitHub blocked] Postiz's own PRs say "The web app already adjusts every upload to the platforms' limits" (github.com/gitroomhq/postiz-app/pull/2281; postiz-docs PR #259, merged 20 Oct 2026). No user-facing docs page says this as of 26 Nov.
- Public API upload has an optional `adjust` flag (default false) that adjusts the file after upload; Media Status reports when done; on failure the original is kept. (public-api/uploads/upload-file; public-api/uploads/media-status)
- CLI `postiz upload --adjust` (off by default): videos scaled to 1080p and re-encoded to MP4. (cli/media-upload)
- RSS auto-post drafts take the next time slot. (general/channels/time-slots)
- [Carried over: GitHub blocked] v2.25.2 (23 Oct 2026): "opt-in adjust to platform limits on API, MCP and widget uploads". (github.com/gitroomhq/postiz-app/releases/tag/v2.25.2)
- v2.26.0 exists ("Encrypted channel tokens, connect links, Amazon SES & 40+ fixes"); release date not confirmed from Postiz's own page. Per a mirror (lead only): token encryption, connect links via API/MCP, SES email, channel choice in save/delete dialogs for multi-channel posts, Instagram carousels up to 20 items, provider fixes. Nothing that changes a cell. (github.com/gitroomhq/postiz-app/releases/tag/v2.26.0, not fetchable)
- postiz.com/news/release-notes: newest entry 11 Feb 2026; nothing after 21 Nov 2026.
- TikTok: DIRECT_POST publishes; UPLOAD sends to the TikTok app inbox to publish by hand within 24 hours. (public-api/providers/tiktok)
- Instagram: post_type, trial reel, collaborators, image arrays (carousel). (public-api/providers/instagram)
- YouTube: title required (2-100 chars), visibility, made-for-kids, tags, custom thumbnail; exactly one attachment and it must be a video. (public-api/providers/youtube; general/platforms/overview)
- Facebook Page: post (video can take a title) or story; text, photos or a video. (public-api/providers/facebook; general/platforms/overview)
- Email notifications: separate toggles for success emails, failure emails and streak reminders. (general/settings/overview)
- No automatic retry: "Postiz does not silently retry a rejected post: fix the cause and reschedule." A channel that already published stays published; dragging a card moves only that channel. (general/composer/scheduling; general/channels/manage; general/calendar/moving-posts)
- Approvals page "Sharing a post for approval": "Save as Draft so nothing can publish while it is under review", send preview links, then switch drafts to scheduled. "there is no 'approved' flag that blocks publishing." Marked partial. (general/approvals)
- Homepage FAQ says of agent posts "a human reviews and approves it before it goes out"; this is review in the calendar, not an approval gate. (postiz.com/)
- [Carried over: GitHub blocked] Preview comments added in v2.25.0 (02 Oct 2026). (GitHub releases v2.25.0)
- Team roles in docs: User, Admin, Super Admin, organisation-wide; per-channel permissions not documented. Homepage lists Admin and Member. (general/settings/team; postiz.com/)
- Cloud: team members on Team plan and up, seats not counted; Standard has none. (general/settings/team; cloud/plans)
- Everything lives in an organisation; you can belong to several. Customer groups sort channels by client. (general/concepts; general/channels/customers)
- Homepage: "AI agents plan, generate and schedule posts to 30+ networks" via hosted MCP, CLI or connectors. Calendar AI button turns a subject into draft posts; Agent chat schedules posts. (postiz.com/; general/agents; general/composer/ai-and-imports)
- MCP server: integrationSchedulePostTool "Schedule, draft, or immediately publish posts", list integrations and groups; works with Claude, ChatGPT, Cursor. Also a CLI and public API. (mcp/introduction)
- Video clipping: a long YouTube video into short vertical clips saved as drafts; nothing scheduled. (general/clipping; public-api/clipping/create)
- No bulk or CSV import of posts documented. Plans table lists "Import from channels" (undefined); Jan 2026 batch upload is media only. (cloud/plans; postiz.com/news/so-much-new-stuff-in-postiz)
- AI "Image and text slides" video: composer doc says "images plus narration", but the API documents only a prompt/script and a voice (`images` is "for veo3"). It is AI generation using credits, not your own images to YouTube. (general/composer/ai-and-imports; public-api/video/generate)

## Prices (postiz.com/pricing and docs.postiz.com/cloud/plans, checked November 26, 2026)
- Standard: $29/mo; $23/mo yearly ($278/yr); brands not stated; 5 channels; no team members ("No team support"); unlimited posts; approvals: preview links only; 7-day trial.
- Team: $39/mo; $31/mo yearly ($374/yr); brands not stated; 10 channels; unlimited members; unlimited posts; approvals: preview links only; 7-day trial.
- Pro: $49/mo; $39/mo yearly; 30 channels. Ultimate: $99/mo; $79/mo yearly; 100 channels.
- No price change since 21 Nov (0%). "Every plan starts with a 7-day free trial"; buttons say "Start for $0". No free plan. Prices shown with "$", no local-currency billing stated.

## Do NOT say
- Postiz has no failure email, or can't re-send only the failed channel.
- Postiz has an approval step that blocks publishing.
- Postiz checks file size, duration or frame rate per platform before scheduling.
- Postiz has no re-encoding at all (API, MCP and CLI have an opt-in adjust; Postiz's PRs say the web app adjusts).
- Postiz has no per-channel permissions (not documented either way).
- Postiz's app has a queue that fills the next free slot (only the API's find-slot).
- Postiz imports posts in bulk or from CSV.
- Postiz turns your own images into a YouTube video.
- An exact platform count; prices outside pricing.ts; links; Profaily gaps.
