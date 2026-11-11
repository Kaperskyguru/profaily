---
slug: "tiktok-reels-shorts-facebook-video-limits"
category: "Platform rules"
title: "TikTok, Reels, Shorts and Facebook Video Limits for 2026"
description: "Length, size, format and caption limits for TikTok, Instagram Reels, YouTube Shorts and Facebook, each from the platform's own page, plus one export that fits all four."
readTime: "10 min read"
datePublished: "2026-11-09"
dateLabel: "November 9, 2026"
author: "Solomon Eseme"
draft: true
sourcesChecked: "November 7, 2026"
toc:
  - id: "short-answer"
    label: "The short answer"
  - id: "one-export"
    label: "One export that fits all four"
  - id: "tiktok"
    label: "TikTok"
  - id: "instagram"
    label: "Instagram Reels"
  - id: "youtube"
    label: "YouTube Shorts"
  - id: "facebook"
    label: "Facebook Reels"
  - id: "check-yourself"
    label: "How to check a limit yourself"
  - id: "profaily"
    label: "Where Profaily fits"
  - id: "faq"
    label: "Frequently asked questions"
cta:
  href: "/feature-publishing-guardian"
  label: "See the checks before publishing"
sources:
  - href: "https://developers.tiktok.com/docs/en/content-posting-api-media-transfer-guide"
    label: "TikTok for Developers: Media transfer guide (updated August 2026)"
  - href: "https://developers.tiktok.com/docs/en/content-posting-api-reference-query-creator-info"
    label: "TikTok for Developers: Query creator info (updated August 2026)"
  - href: "https://developers.tiktok.com/docs/en/content-posting-api-reference-direct-post"
    label: "TikTok for Developers: Direct Post reference (updated August 2026)"
  - href: "https://developers.tiktok.com/docs/en/content-sharing-guidelines"
    label: "TikTok for Developers: Content sharing guidelines (updated August 2026)"
  - href: "https://newsroom.tiktok.com/en-us/longer-videos"
    label: "TikTok Newsroom: Longer videos (July 2021)"
  - href: "https://about.instagram.com/features/reels"
    label: "Instagram: Reels features and FAQ"
  - href: "https://creators.instagram.com/faq?locale=en_US"
    label: "Instagram for Creators: FAQ"
  - href: "https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media/"
    label: "Meta for Developers: IG User Media reference"
  - href: "https://developers.facebook.com/docs/instagram-platform/content-publishing/"
    label: "Meta for Developers: Instagram content publishing"
  - href: "https://developers.facebook.com/documentation/instagram-platform/instagram-graph-api/reference/ig-user/media_publish"
    label: "Meta for Developers: IG User Media Publish reference"
  - href: "https://support.google.com/youtube/answer/15424877"
    label: "YouTube Help: Understand three-minute YouTube Shorts"
  - href: "https://blog.youtube/news-and-events/tall-updates-coming-to-shorts/"
    label: "YouTube Official Blog: Tall updates coming to Shorts (October 2024)"
  - href: "https://support.google.com/youtube/answer/57404"
    label: "YouTube Help: Edit video settings"
  - href: "https://support.google.com/youtube/answer/71673"
    label: "YouTube Help: Upload videos longer than 15 minutes"
  - href: "https://support.google.com/youtube/answer/10383400"
    label: "YouTube Help: Common uploading errors (daily upload limits)"
  - href: "https://support.google.com/youtube/answer/1722171"
    label: "YouTube Help: Recommended upload encoding settings"
  - href: "https://developers.google.com/youtube/v3/docs/videos"
    label: "YouTube Data API: Videos reference"
  - href: "https://about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/"
    label: "Meta Newsroom: Making it easier to create videos on Facebook (June 2025)"
  - href: "https://developers.facebook.com/documentation/video-api/guides/reels-publishing"
    label: "Meta for Developers: Reels publishing (updated July 2026)"
related:
  - "post-to-tiktok-reels-shorts-at-the-same-time"
cover: "Video limits for TikTok, Reels and Shorts, [checked at the source]"
faq:
  - q: "What is the best video size for TikTok, Reels and Shorts?"
    a: "1080 by 1920 pixels, 9:16 vertical. All four platforms accept it, Instagram and Facebook recommend 9:16, and Facebook's developer docs name 1080 by 1920 as the recommended resolution."
  - q: "How long can a YouTube Short be?"
    a: "Up to three minutes, as long as the video is square or vertical. For most channels, that has applied to videos uploaded since 15 October 2024. A Short over one minute with an active Content ID claim is blocked worldwide until the claim is resolved."
  - q: "How long can an Instagram Reel be?"
    a: "Instagram says you can record and edit reels up to 20 minutes, and its developer docs accept up to 15 minutes through scheduling tools. But Instagram only recommends reels of three minutes or less to people who don't follow you."
  - q: "How long can a TikTok video be?"
    a: "It depends on the account. TikTok's developer docs say every creator can post three-minute videos and some can post five or ten minutes. TikTok doesn't publish one in-app limit on a page we could read, so check the length your own app offers."
  - q: "What is the caption limit on TikTok and Instagram?"
    a: "Both allow 2,200, according to their developer docs. On TikTok an emoji can count as two. Instagram also allows at most 30 hashtags and 20 mentions in a caption."
---

You finish a video, export it, and upload it to four apps. Three take it. The fourth stops you with a message about length, or file size, or a format it doesn't like. Or worse, it takes the video and quietly treats it as something else: a long video instead of a Short, or a reel it won't show to anyone new.

So you search for the limits, and you find a dozen cheat sheets. Most of them disagree with each other. Almost none of them say where their numbers came from or when they were checked.

I wanted one page I could trust, so I went to the platforms themselves. I read TikTok's, Instagram's, YouTube's and Facebook's own help pages, newsrooms and developer documentation, and wrote down only what they actually say. Every number below comes from a platform's own page, the sources are listed at the end, and I checked them all on 7 November 2026.

Two things surprised me. Some of the numbers everyone quotes aren't published anywhere official that I could read. And in one case, the platform's own documents contradict each other. I'll show you both.

## The short answer {#short-answer}

If you only need one rule, it's this. Export 9:16 vertical at 1080 by 1920, keep it under three minutes, and keep the file under 300 MB. That works on all four platforms when you upload by hand.

If a scheduling tool posts for you, the rule gets tighter. Facebook's publishing API only takes reels between 3 and 90 seconds, so 90 seconds is the safe ceiling for anything going out everywhere at once.

And if your video uses music or clips you don't own, keep it under a minute. YouTube blocks a Short longer than a minute worldwide while it has an active Content ID claim.

Everything else in this article explains where those numbers come from, and what to do when your video doesn't fit.

## One export that fits all four {#one-export}

I built this list only from numbers the platforms publish. Each line is there because at least one platform needs it.

- **Frame:** 9:16 vertical, 1080 by 1920.
- **File:** MP4, with H.264 video and AAC audio at 48 kHz.
- **Frame rate:** a steady 30 fps. Facebook's API asks for at least 24, TikTok's and Instagram's at least 23, and those three stop at 60.
- **Bitrate:** about 8 to 12 Mbps. YouTube suggests 8 Mbps for 1080p at 30 fps, and Instagram's ceiling is 25 Mbps.
- **Length:** under 90 seconds if a tool posts for you, under three minutes if you post by hand, under a minute if the audio isn't yours.
- **Size:** under 300 MB. That's Instagram's limit for scheduling tools, and the smallest one I could find published.

The size limit catches more people than you'd expect. A three-minute video at a high bitrate can easily pass 300 MB. At around 10 Mbps, a 90-second video comes out near 113 MB. A three-minute video stays under 300 MB only if the total bitrate is about 13 Mbps or less.

## TikTok {#tiktok}

TikTok's most reliable numbers are in its developer documentation, because that's what scheduling tools have to follow. The [media transfer guide](https://developers.tiktok.com/docs/en/content-posting-api-media-transfer-guide), last updated in August 2026, says videos can be MP4, WebM or MOV, with H.264 recommended. Frame rate has to be between 23 and 60 fps, each side of the picture between 360 and 4,096 pixels, and the file no bigger than 4 GB.

Length depends on the account. The same guide says "all TikTok creators can post 3-minute videos, while some have access to post 5-minute or 10-minute videos." Tools are told to ask TikTok for each account's own maximum, through a field called [max_video_post_duration_sec](https://developers.tiktok.com/docs/en/content-posting-api-reference-query-creator-info), and to stop anything longer.

What about the app itself? TikTok [announced three-minute videos in 2021](https://newsroom.tiktok.com/en-us/longer-videos), and its developer docs say some creators can now post longer ones. But I couldn't find a current TikTok page with a single in-app limit on it. The help pages I could open explain how to upload without giving the numbers, and others wouldn't load for me. So treat any article that gives you one firm in-app number with some suspicion, and check what your own app offers.

The caption limit in the [developer docs](https://developers.tiktok.com/docs/en/content-posting-api-reference-direct-post) is 2,200 units. Most letters count as one, but an emoji can count as two. You'll see 4,000 quoted for the app, but I couldn't confirm that on an official page.

Two more rules matter if you schedule. TikTok typically allows [around 15 posts a day](https://developers.tiktok.com/docs/en/content-sharing-guidelines) per account through outside tools, shared across all of them. And until TikTok has reviewed a tool, everything that tool posts comes out private.

## Instagram Reels {#instagram}

Instagram has the gap I'd most want you to know about: what you can post is not the same as what Instagram will push.

On its [Reels page](https://about.instagram.com/features/reels), Instagram says you can record and edit reels up to 20 minutes. The same page says reels over three minutes won't be recommended to new audiences, and the [creator FAQ](https://creators.instagram.com/faq?locale=en_US) says the same thing. A long reel isn't refused. It just won't be recommended to people who don't follow you.

For tools, Meta's [developer reference](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media/) is specific. Reels can run from 3 seconds to 15 minutes, and the file can be up to 300 MB. It takes MOV or MP4 with H.264 or HEVC video, AAC audio up to 48 kHz, 23 to 60 fps, and at most 1,920 pixels across. Almost any shape is accepted, but Meta recommends 9:16.

Captions can be up to 2,200 characters, with at most 30 hashtags and 20 mentions. A cover image can be a JPEG up to 8 MB, and Instagram crops it to the middle 9:16.

Now the contradiction. How many posts can a tool publish to one Instagram account a day? The [content publishing guide](https://developers.facebook.com/docs/instagram-platform/content-publishing/) says 100 in any 24 hours. Further down, the same guide says 50, and so does Meta's [media publish reference](https://developers.facebook.com/documentation/instagram-platform/instagram-graph-api/reference/ig-user/media_publish). Neither page is dated. If you schedule a lot, the honest answer is that a good tool should ask Instagram for your account's real number before it posts.

## YouTube Shorts {#youtube}

YouTube is the clearest of the four. Since [15 October 2024](https://blog.youtube/news-and-events/tall-updates-coming-to-shorts/), a video up to three minutes long that is square or vertical counts as a Short. A 16:9 video stays a regular video, however short it is.

The rule that catches people is about copyright. YouTube's [three-minute Shorts page](https://support.google.com/youtube/answer/15424877) says a Short longer than one minute with an active Content ID claim is blocked globally. It can't be watched, recommended or earn money. Your channel isn't penalised, and the Short comes back if you remove the claimed part or win a dispute. But if you use a trending sound or a clip you don't own, staying under a minute avoids the problem.

Titles can be up to 100 characters and descriptions up to 5,000, according to YouTube's [help page](https://support.google.com/youtube/answer/57404). One small catch for tool builders: YouTube's [developer reference](https://developers.google.com/youtube/v3/docs/videos) measures the description in bytes, not characters, so accented letters and emoji use up the limit faster there.

The overall upload limits are generous. By default you can [upload videos up to 15 minutes](https://support.google.com/youtube/answer/71673), verified accounts can go longer, and no file can be bigger than 256 GB or longer than 12 hours. YouTube also has a [daily upload limit](https://support.google.com/youtube/answer/10383400), but it doesn't publish the number. It says the limit can vary by country and by a channel's history.

For settings, YouTube's [recommended encoding page](https://support.google.com/youtube/answer/1722171) suggests MP4, H.264, AAC audio at 48 kHz, the frame rate you filmed at, and 8 Mbps for 1080p at 30 fps.

## Facebook Reels {#facebook}

Facebook changed course in 2025. In June, Meta [announced](https://about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/) that every new video on Facebook would be shared as a reel, with no length or format restrictions. It said the change would roll out gradually.

That's the app. Tools play by different rules. Meta's [Reels publishing guide](https://developers.facebook.com/documentation/video-api/guides/reels-publishing), updated in July 2026, says reels posted through the API must be 3 to 90 seconds long. It recommends MP4 at 9:16 and 1080 by 1920, with 540 by 960 as the minimum. The frame rate should be fixed, between 24 and 60 fps, with H.264 or H.265 video and AAC audio at 48 kHz.

It also limits each Page to 30 reels published through the API in 24 hours.

So Facebook is the one place where a scheduling tool is stricter than the app. If a two-minute video posts fine when you upload it by hand but fails from a scheduler, this is almost certainly why.

I couldn't confirm Facebook's caption limit or a file size limit for reels on an official page. Facebook's help centre wouldn't load for me, and the developer pages don't state either.

## How to check a limit yourself {#check-yourself}

These numbers will change. YouTube moved Shorts to three minutes in 2024, and Facebook said in 2025 that it would drop its reel limits. So here's how I'd check, rather than trust any list, this one included.

Start with the developer documentation. It's written for engineers who will be blamed if a post fails, so it tends to be precise. TikTok's pages and Meta's Reels guide show a "Last updated" date. Meta's Instagram pages don't.

Then read the platform's own help or creator page for what the app allows. If the two disagree, the developer page tells you what tools can do, and the help page tells you what you can do by hand.

Finally, be wary of any number without a source. If a cheat sheet doesn't link to the platform, you can't tell whether it was true last month or two years ago.

## Where Profaily fits {#profaily}

We built Profaily to post one video to TikTok, Reels, Shorts and Facebook, so we had to write these limits into the product. Before anything goes out, Profaily checks your video against each platform you picked: its length, its file size, and its caption. If something doesn't fit, it tells you which platform and by how much, in plain words, before you publish. For TikTok it uses your own account's maximum length, and for YouTube it shows whether the video will be a Short or a regular video.

That doesn't replace knowing the rules. But it does mean you find out about a problem when you can still fix it, not after the post has failed.

## Frequently asked questions {#faq}

### What is the best video size for TikTok, Reels and Shorts?

1080 by 1920 pixels, 9:16 vertical. All four platforms accept it, Instagram and Facebook recommend 9:16, and Facebook's developer docs name 1080 by 1920 as the recommended resolution.

### How long can a YouTube Short be?

Up to three minutes, as long as the video is square or vertical. For most channels, that has applied to videos uploaded since 15 October 2024. A Short over one minute with an active Content ID claim is blocked worldwide until the claim is resolved.

### How long can an Instagram Reel be?

Instagram says you can record and edit reels up to 20 minutes, and its developer docs accept up to 15 minutes through scheduling tools. But Instagram only recommends reels of three minutes or less to people who don't follow you.

### How long can a TikTok video be?

It depends on the account. TikTok's developer docs say every creator can post three-minute videos and some can post five or ten minutes. TikTok doesn't publish one in-app limit on a page we could read, so check the length your own app offers.

### What is the caption limit on TikTok and Instagram?

Both allow 2,200, according to their developer docs. On TikTok an emoji can count as two. Instagram also allows at most 30 hashtags and 20 mentions in a caption.
