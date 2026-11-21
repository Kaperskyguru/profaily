#### Postiz facts (docs.postiz.com, postiz.com and Postiz's GitHub releases, checked November 21, 2026)
None of the docs pages show an updated date.
- Publishes to 34 social platforms (docs intro); the homepage says "30+ channels". (docs.postiz.com/general/introduction; postiz.com/)
- Open source (AGPL-3.0), can be self-hosted with Docker; self-hosting means you handle server, updates and platform API approvals. (postiz.com/)
- Calendar shows every post; a post to several channels has one card per channel. (general/calendar/moving-posts)
- Statuses: Draft (never publishes), Scheduled, Published, Error. On Error the card gets a red ring with the platform's reason in a tooltip. (general/concepts)
- Posting time slots are set per channel, "a convenience, not a restriction". No automatic queue in the UI; the public API's find-slot endpoint returns the next free slot; RSS auto-post uses slots. (general/channels/time-slots)
- Scheduling options: Save as Draft, Add to calendar (date and time), Post Now, Repeat Post Every. (general/composer/scheduling)
- Drafts sit on the calendar and never publish; tags in the composer footer. (general/composer/overview)
- Composer Global tab for all channels; Edit content on a channel tab detaches it. After creation each channel is edited on its own. (general/composer/global-vs-per-channel)
- Signatures are fixed reusable text; no variables or placeholders described. (general/settings/reusables)
- Validation before save: empty text, character limit, required settings (e.g. YouTube title), media rules (attachment count and type). If any channel fails, nothing is saved and the composer jumps to that channel. No auto-fix. (general/composer/links-and-validation)
- Platform media rules cover attachment count and type only, not size, duration or frame rate. (general/platforms/overview)
- Media: images 10 MB, video 1 GB; MP4 among accepted types; "Renaming a .mov to .mp4 will not get it accepted." Web app docs say convert the file yourself. (general/composer/media)
- Uploaded videos checked for duration, dimensions and codec; failures show "Failed to load video metadata". (general/troubleshooting/uploads)
- Public API upload has an optional `adjust` flag (default false) that re-encodes video. (public-api/uploads/upload-file)
- v2.25.2 (23 Oct 2026): "opt-in adjust to platform limits on API, MCP and widget uploads". (github.com/gitroomhq/postiz-app/releases/tag/v2.25.2)
- TikTok: DIRECT_POST publishes; UPLOAD sends to the TikTok inbox to publish by hand within 24 hours. (public-api/providers/tiktok)
- Instagram: feed post (a single video is a Reel), story, trial reel, carousel, collaborators. (public-api/providers/instagram)
- YouTube: title required, visibility, made-for-kids, tags, custom thumbnail. (public-api/providers/youtube)
- Facebook Page: post (videos can take a title) or story. (public-api/providers/facebook)
- Email notifications: separate toggles for success emails, failure emails and streak reminders. (general/settings/overview)
- No automatic retry: "fix the cause and reschedule". A channel that already published stays published; dragging a card moves only that channel. (general/composer/scheduling; general/channels/manage; general/calendar/moving-posts)
- Approvals: "there is no 'approved' flag that blocks publishing"; drafts plus a public preview link people can comment on. (general/approvals)
- Preview comments added in v2.25.0 (02 Oct 2026). (GitHub releases v2.25.0)
- Team roles in docs: User, Admin, Super Admin, organisation-wide; per-channel permissions not documented. Homepage lists Admin and Member. (general/settings/team; postiz.com/)
- Cloud: team members on Team plan and up; Standard is solo. (general/settings/team)
- Everything lives in an organisation; you can belong to several. Customer groups sort channels by client. (general/concepts; general/channels/customers)
- Homepage: AI agents (Claude, ChatGPT, Cursor and others via MCP or CLI) "plan, generate and schedule posts"; you review them in the calendar. Calendar AI button turns a subject into draft posts. (postiz.com/; general/agents; general/composer/ai-and-imports)
- MCP server: schedule, draft or publish posts, list posts and channels; works with any MCP client. Also a CLI and public API. (mcp/introduction)
- No bulk or CSV import of posts documented; Jan 2026 batch upload is media only. (postiz.com/news/so-much-new-stuff-in-postiz)
- AI "image-text-slides" video takes a script and a voice, not your own images. (public-api/video/generate)

## Prices (postiz.com/pricing and docs.postiz.com/cloud/plans, checked November 21, 2026)
- Standard: $29/mo; $23/mo yearly; brands not stated (sized by total channels across brands); 5 channels; no team members; unlimited posts; approvals: preview links only; 7-day trial.
- Team: $39/mo; $31/mo yearly; brands not stated; 10 channels; unlimited members; unlimited posts; approvals: preview links only; 7-day trial.
- Pro: $49/mo; $39/mo yearly; 30 channels. Ultimate: $99/mo; $79/mo yearly; 100 channels.
- Trial needs a payment method. Prices shown with "$", no local-currency billing stated.

## Do NOT say
- Postiz has no failure email, or can't re-send only the failed channel.
- Postiz has an approval step that blocks publishing.
- Postiz checks file size, duration or frame rate per platform before scheduling.
- Postiz has no re-encoding at all (API, MCP and widget have an opt-in adjust).
- Postiz's app has a queue that fills the next free slot (only the API's find-slot).
- Postiz imports posts in bulk or from CSV.
- An exact platform count; prices outside pricing.ts; links; Profaily gaps.
