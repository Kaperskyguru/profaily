#### Pallyy facts (pallyy.com, checked November 25, 2026)
Help articles under /help show "Last updated" dates. Feature and pricing pages show no date. Changelog entries are dated one by one. help.pallyy.com is Pallyy's older help centre.

Networks and publishing
- Publishes to Instagram, Facebook, LinkedIn, TikTok, Pinterest, Google Business Profile, YouTube, X, Threads and Bluesky through each network's official API. X, Pinterest, YouTube, Threads and Bluesky are publishing only. (/ai-info, 2026-09-23)
- TikTok: videos, image posts and carousels are auto-published through the official API, with no notification to finish the post in the app. Needs a TikTok business account. (/help/tiktok-integration, 2026-09-05)
- TikTok posts are checked live before being marked published (2025-09-15). (/changelog)
- Instagram: Reels, carousels and Stories auto-publish; "No reminder notifications, no finishing the post on your phone." Needs a business or creator profile. (/help/instagram-integration, 2026-08-21)
- YouTube: Shorts upload and auto-publish at the scheduled time through the official API. Each Short gets its own title and description, with public, unlisted or private visibility. The page covers Shorts only. (/help/youtube-integration, 2026-09-05; /integrations/youtube)
- Facebook: Pages only. Reels, Stories and carousels auto-publish through the official API. (/help/facebook-integration, 2026-08-21)
- Video, carousels and Reels need Pro or higher; the Free plan publishes images only. (/pricing; /help/faq, 2026-09-05)

Scheduling, calendar, drafts, labels
- Calendar views: Month, Week and List. Drag a post to another day to reschedule. (/help/calendar, 2026-08-20)
- Composer offers Pick date & time, Queue times, Save as draft and Publish now. (/help/post-composer, 2026-08-21)
- Queue: posting times saved for each weekday; posts go to the next open slot. On Pro, Agency and Scale. (/help/queue-scheduling, 2026-09-05)
- Drafts are posts saved without a publish date. Dropping media on the calendar makes a quick draft. (/help/drafts, 2026-08-20)
- Post labels: coloured tags, set in the composer or in bulk, used to filter the list and calendar. On every plan. (/help/post-labels, 2026-08-21; /pricing)
- Media library imports from a computer, a URL, a webcam, Canva, Unsplash, Dropbox, Box and OneDrive. No Google Drive; the page doesn't describe bulk post creation. (/help/media-library, 2026-11-05)
- "The Google Drive option was removed from the media uploader" (2025-04-24). The only CSV feature is exporting posts (2025-07-18). (/changelog)

Captions and media
- Each enabled network gets its own version of the post that you can tailor. (/help/post-composer, 2026-08-21)
- Carousels on TikTok, Instagram and Facebook; reorder in the composer. (/changelog; /help/post-composer)
- Uploaded videos keep their original dimensions (2025-03-10). Uploads up to 350MB (2024-11-18). (/changelog)

Before and after posting
- The composer shows errors in red. A post with errors can be saved as a draft, but has to be fixed before it can be scheduled. (help.pallyy.com/en/articles/11735638, 2025-07-09)
- New post editor (2026-08-03) has a publishing bar that surfaces errors and warnings inline. (/changelog)
- API: scheduling checks every post against its network's rules and returns one entry per problem. (/docs/api/post-sets)
- Each network's post has a publish result; a failure shows FAILED with a reason code and message. (/docs/api/post-sets)
- "Failed posts now show a specific, human-readable reason" across Instagram, Facebook, TikTok, X, LinkedIn, Bluesky and Google (2025-06-10). (/changelog)
- Email notifications when a post fails, for every platform (2022-10-02). Alerts redesigned for the whole team, in-app and by email (2026-05-20). (/changelog). The notifications help page names only in-app alerts. (/help/notifications, 2026-08-20)
- Automatic retries on temporary network glitches (2025-05-23), more attempts over a longer window (2025-09-15). No page documents a manual retry. (/changelog)

Team and approvals
- Roles per social set: Editor, Collaborator (create and edit, not publish, approve or delete) and Viewer. Access and role are always per social set. Roles on Agency and Scale. (/help/teams, 2026-10-28)
- Clients approve or reject each post through a shared calendar link, no account needed; teammates can approve too. (/features/approvals)
- Approval workflows and the shared client calendar are on Pro, Agency and Scale. (/pricing)

AI apps
- MCP server works with Claude, ChatGPT, Cursor or another MCP client (2026-09-07). Included on every plan. (/changelog; /docs/api/mcp/claude, 2026-09-29)
- MCP tools create draft or scheduled post sets for one or more networks and update time, status and approval. No tool publishes immediately or retries a failed post. (/docs/api/mcp/tools, 2026-10-05)
- No page mentions AI campaign planning; AI features are captions and hashtags. (/ai-info; /help/ai-captions, 2026-09-05)

## Prices (pallyy.com/pricing, checked November 25, 2026)
- Prices shown with "$", no currency or region switch; /ai-info says prices are in US dollars. Not read from a Nigerian connection.
- Pricing is per social set (one brand or client), whatever networks it posts to. Each set holds up to 11 accounts.
- Free: no charge, 1 social set, 1 user, 15 posts a month, images only, no approvals.
- Pro: monthly price as on the pricing page (yearly about 20% less), 1 social set (extra sets cost more), 11 accounts, 1 user, unlimited posts, approvals by shared client calendar, 14-day trial (card needed).
- Agency: 10 social sets, 11 accounts per set, 3 users (more cost extra), unlimited posts, approvals and team roles, 14-day trial.
- Scale: 30 social sets, 10 users, unlimited posts, approvals and roles, 14-day trial.
- (Dollar figures live in content/compare/pricing.ts only.)

## Do NOT say
- Pallyy posts long YouTube videos. Only Shorts are documented.
- The trial needs no card. Only the Free plan needs none.
- Pricing is per channel or per user. It is per social set.
- Pallyy imports from Google Drive (removed April 2025) or creates posts from a CSV (export only).
- Pallyy compresses or converts refused files.
- You can retry a failed platform by hand. Only automatic retries are documented.
- Pallyy has caption variables, turns images into a YouTube video, or plans campaigns with AI.
- Collaborator posts are forced through approval. The help page says only that Collaborators can't publish.
- A Day calendar view.

## Row decisions
- calendar: yes — Month, week and list views — /help/calendar
- scheduling: yes — Pick a time, or a queue slot — /help/post-composer
- queue: yes — Posting times for each weekday — /help/queue-scheduling
- drafts: yes — Drafts and coloured post labels — /help/drafts; /help/post-labels
- import: partial — Media from Dropbox, OneDrive or Box — /help/media-library
- tiktok: yes — Auto-published, no phone step — /help/tiktok-integration
- instagram: yes — Reels auto-published — /help/instagram-integration
- youtube: yes — Shorts — /help/youtube-integration
- facebook: yes — Pages: Reels, Stories and carousels — /help/facebook-integration
- captions: yes — Tailor each network's version — /help/post-composer
- ytTitle: yes — Each Short gets its own title — /help/youtube-integration
- variables: none
- images: yes — Carousels — /changelog
- ytImages: none
- ready: partial — Checks each network's rules when you schedule — /docs/api/post-sets ("Scheduling validates every post against its network's rules"); documented checks are caption length, media present and Pinterest board, nothing on file size, duration, frame rate or format
- fix: none
- status: yes — Failed posts show a readable reason — /changelog; /docs/api/post-sets
- email: yes — Email when a post fails — /changelog
- retry: partial — Retries network glitches automatically — /changelog
- team: yes — On Agency and Scale — /pricing
- roles: yes — Editor, Collaborator and Viewer — /help/teams
- approvals: yes — Clients approve from a shared link — /features/approvals
- brandAccess: yes — Per social set — /help/teams
- mcp: yes — Pallyy MCP, on every plan — /docs/api/mcp/tools
- campaigns: none
