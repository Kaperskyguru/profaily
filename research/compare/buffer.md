#### Buffer facts (buffer.com, checked November 20, 2026)

Bulk import
- Bulk upload is a CSV file only. "Bulk upload currently supports text and single-image posts only." (support.buffer.com/articles/how-to-upload-posts-in-bulk-to-buffer-cTIhl4mv6H, updated July 25, 2026)
- "Video posts, including Reels, cannot be bulk uploaded." Carousels aren't supported either. (same page)
- "Bulk upload is not currently supported for YouTube." (same page)
- Limits: 10 posts per channel per upload on Free, 100 on paid plans. Extra rows are skipped with no error. (same page)
- Google Drive, Dropbox and OneDrive are only places to host the image URLs. There is no bulk import from them. (same page)
- Media from Dropbox, Google Drive, Google Photos and OneDrive attach to one post: "You can only upload one file at a time to Buffer." (support.buffer.com/articles/attaching-media-from-dropbox-google-drive-google-photos-and-onedrive-b2C4N6wtqa, no date shown)
- Changelog has no bulk upload, CSV, Drive or Dropbox entry in 2026. (buffer.com/whats-new)

Composer and scheduling
- "A separate box will appear for each type of social network that you've selected." (support.buffer.com/articles/scheduling-posts-4Qdld7giAZ, no date shown)
- Next Available (queue) or Set Date and Time; queue needs posting times per channel. Tags are set at the top of the composer; drafts need a channel. (same page)
- "After you've scheduled the posts, they become separate from each other." Edits are made "for each post in each channel queue." (support.buffer.com/articles/how-do-i-schedule-posts-for-multiple-social-channels-at-the-same-time-XNPoSegb1W, no date shown)
- Post Groups link posts made in one composer session, but "group-level editing is coming in a future update." Each post is still edited on its own. (support.buffer.com/articles/using-post-groups-in-buffer-bUZAamv7kk, no date shown)
- Templates exist (Custom Post Templates, July 22, 2026). The help page mentions highlighted "placeholders" but no values that change per channel. (support.buffer.com/articles/using-templates-in-buffer-Gbn93vR56i; buffer.com/changelog/custom-post-templates-2)

Video handling
- Buffer transcodes some videos: HEVC, video bitrate over 25 Mbps, audio over 128 kbps, over 1080p, and all mobile uploads. "There is no setting to turn transcoding off." Over 1080p is downscaled. X videos over 60fps are converted to 60fps. (support.buffer.com/article/935-troubleshooting-video-uploads-in-buffer, no date shown)
- Length and aspect-ratio problems are not fixed. The page tells users to re-encode to H.264 (HandBrake, QuickTime) and crop or resize. (same page)
- Composer: "If a linked video or image can't be used, Buffer shows an explanation right in the composer so you know what to fix." Mastodon issues are caught before scheduling. (same page)
- Instagram help lists specs Buffer doesn't change; out-of-range media falls back to notification publishing. (support.buffer.com/articles/using-instagram-with-buffer-YSjg2dXFV8, updated November 12, 2026)

Channels
- TikTok: "Automatic publishing" or "Notification publishing"; video 3 seconds to 10 minutes, up to 10 images per post. (support.buffer.com/articles/using-tiktok-with-buffer-oGEroY9Of2, no date shown)
- Instagram: automatic for Business/Creator accounts, otherwise "Notify Me"; carousels up to 20 images and videos, mixed media allowed. (support.buffer.com/articles/using-instagram-with-buffer-YSjg2dXFV8, updated November 12, 2026)
- YouTube: "Buffer currently supports YouTube Shorts only. We do not support long-form YouTube videos at this time." (support.buffer.com/articles/using-youtube-shorts-with-buffer-Jl8iR6jIck, no date shown)
- YouTube title: "automatically filled in with the first line of your caption," editable, 100 characters. (same page)
- "YouTube posts cannot be created without a video attached." (same page)
- Facebook: Pages and Groups (Groups by notification); "scheduling reels is only available on Facebook Pages." (support.buffer.com/articles/using-facebook-with-buffer-jY1AM9fz2G, no date shown)
- Mixed images and video in one post shipped September 28, 2026. (buffer.com/whats-new)

After it posts
- Post Failures alert by email, push or both. On Team plans, "your Admins, Creators, and Collaborators will receive email and push notifications related to the social channels they have access to." Viewers don't. (support.buffer.com/articles/enabling-email-notifications-in-buffer-kuKhKBU7c3, no date shown)
- Error libraries per network list each failure message and say to "retry this failed post." (support.buffer.com/articles/facebook-error-library-x7IMglwe8J; support.buffer.com/articles/instagram-error-library-P7TDLmDSKm)
- Red tag, "Retry now" and "Retry in Buffer" (end of queue) and the email "to the account owner" come only from a March 1, 2017 blog post. No current help page found that names them. (buffer.com/resources/aws-outage-buffer)

Team
- Roles: Admin, Creator, Collaborator, Viewer. Shipped to Team plan November 17, 2026, replacing the old system. (buffer.com/changelog/flexible-roles-permissions-for-teams)
- Collaborator drafts "go to an Admin or Creator for approval." Creators can approve. (support.buffer.com/articles/understanding-roles-in-your-buffer-organization-7hfOl6J4fz, no date shown)
- "Everyone else starts with no channels until you choose them." Admins can also restrict a person on one channel. (same page; changelog above)
- Pricing: Free, Essentials, Team. Team has "Approval workflows", "Unlimited team members", "Custom access and permissions", "Access levels". (buffer.com/pricing)

AI
- MCP shipped June 10, 2026 ("Talk to your agent via MCP"). On every plan, Free included. (buffer.com/whats-new; buffer.com/mcp)
- MCP tools: create_post (one channel per call), edit_post, list_posts, ideas, post templates, metrics. No campaign or planning tool. A weekly review prompt exists. (developers.buffer.com/guides/integrations/mcp)
- Posts from an AI app "land in your Buffer queue as drafts or scheduled posts." create_post "can publish immediately"; approval depends on the AI client. (buffer.com/mcp; developers.buffer.com/guides/integrations/mcp)
- AI Assistant writes and repurposes posts. "all our core features (posting, scheduling, planning, and more) aren't AI-powered." (buffer.com/ai)

## Row decisions
- calendar: yes — Queue and calendar — buffer.com/whats-new (Drafts from the Calendar, July 13, 2026)
- scheduling: yes — Pick a time, or the queue — support.buffer.com/articles/scheduling-posts-4Qdld7giAZ
- queue: yes — A posting schedule per channel — support.buffer.com/articles/scheduling-posts-4Qdld7giAZ
- drafts: yes — Drafts and tags — support.buffer.com/articles/scheduling-posts-4Qdld7giAZ
- import: no — CSV takes text and single images, not video — support.buffer.com/articles/how-to-upload-posts-in-bulk-to-buffer-cTIhl4mv6H
- tiktok: yes — Automatic or notification publishing — support.buffer.com/articles/using-tiktok-with-buffer-oGEroY9Of2
- instagram: yes — Automatic or Notify Me — support.buffer.com/articles/using-instagram-with-buffer-YSjg2dXFV8
- youtube: yes — Shorts — support.buffer.com/articles/using-youtube-shorts-with-buffer-Jl8iR6jIck
- facebook: yes — Pages, Reels included — support.buffer.com/articles/using-facebook-with-buffer-jY1AM9fz2G
- captions: yes — Customize for each network — support.buffer.com/articles/scheduling-posts-4Qdld7giAZ
- ytTitle: yes — Filled from the caption's first line — support.buffer.com/articles/using-youtube-shorts-with-buffer-Jl8iR6jIck
- variables: none — (no Buffer page shows per-channel values) — support.buffer.com/articles/using-templates-in-buffer-Gbn93vR56i
- images: yes — Carousels — support.buffer.com/articles/using-instagram-with-buffer-YSjg2dXFV8
- ytImages: no — YouTube posts need a video — support.buffer.com/articles/using-youtube-shorts-with-buffer-Jl8iR6jIck
- ready: yes — Flags some files in the composer — support.buffer.com/article/935-troubleshooting-video-uploads-in-buffer
- fix: partial — Transcodes some videos on upload — support.buffer.com/article/935-troubleshooting-video-uploads-in-buffer
- status: yes — Failed posts show the network's error — support.buffer.com/articles/facebook-error-library-x7IMglwe8J
- email: yes — Email or push to the team — support.buffer.com/articles/enabling-email-notifications-in-buffer-kuKhKBU7c3
- retry: yes — Retry a failed post — support.buffer.com/articles/facebook-error-library-x7IMglwe8J
- team: yes — On the Team plan — buffer.com/pricing
- roles: yes — Admin, Creator, Collaborator and Viewer — support.buffer.com/articles/understanding-roles-in-your-buffer-organization-7hfOl6J4fz
- approvals: yes — On the Team plan — buffer.com/pricing
- brandAccess: yes — Per channel — support.buffer.com/articles/understanding-roles-in-your-buffer-organization-7hfOl6J4fz
- mcp: yes — Buffer MCP server — buffer.com/mcp
- campaigns: partial — AI apps create posts one at a time — developers.buffer.com/guides/integrations/mcp (alternative: none, since no Buffer page describes campaign planning)

## Do NOT say
- That Buffer can't import video because "it has no bulk upload". It has CSV bulk upload, just not for video, carousels or YouTube.
- That Buffer imports from Google Drive, Dropbox or OneDrive in bulk, or that it can't use them at all. It attaches one file at a time from them.
- That Buffer never changes your video. It transcodes HEVC, high bitrate and over-1080p files, and every mobile upload.
- That Buffer gives no warning before scheduling. The composer explains some unusable media.
- That failure emails go only to the account owner. On Team plans Admins, Creators and Collaborators get them (Viewers don't).
- "Retry now" / "Retry in Buffer" / "red tag" as current wording. Only a 2017 blog post uses them.
- That Buffer's MCP is paid-only, or that Buffer has no AI scheduling. MCP is on every plan and create_post schedules or publishes.
- That Buffer's AI asks before it posts. Confirmation depends on the AI client; create_post can publish right away.
- That Buffer supports long YouTube videos, or any YouTube post without a video.
- That Buffer can't edit posts together because of no grouping. Post Groups exist; group editing is "coming in a future update".
- Old role names. Roles changed November 17, 2026 (Admin, Creator, Collaborator, Viewer).
- Any price.
