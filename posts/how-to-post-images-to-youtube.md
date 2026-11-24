---
category: "Publishing"
title: "How to Post Images to YouTube: Posts, Shorts and the API"
description: "YouTube's API for image posts is still a pilot. Post images to YouTube today as a post in YouTube, through a partner tool, or as a video made from them."
datePublished: "2026-11-24"
author: "Solomon Eseme"
sourcesChecked: "November 24, 2026"
cta:
  href: "/pricing"
  label: "Start the 14-day trial"
sources:
  - href: "https://developers.google.com/youtube/v3/revision_history"
    label: "YouTube Data API: revision history (November 16, 2026)"
  - href: "https://developers.google.com/youtube/data/reference/rest/v3/posts/insert"
    label: "YouTube Data API: posts.insert"
  - href: "https://support.google.com/youtube/answer/7124474"
    label: "YouTube Help: Create a post"
  - href: "https://support.google.com/youtube/answer/9409631"
    label: "YouTube Help: Learn about posts"
  - href: "https://support.google.com/youtube/answer/10059070"
    label: "YouTube Help: Get started creating YouTube Shorts"
  - href: "https://support.google.com/youtube/answer/15424877"
    label: "YouTube Help: Understand three-minute YouTube Shorts"
  - href: "https://www.hootsuite.com/whats-new/plan-and-publish-youtube-posts-from-hootsuites-perch"
    label: "Hootsuite: Plan and publish YouTube Posts from Perch (November 16, 2026)"
  - href: "https://www.sprinklr.com/help/articles/know-more/youtube-posts/6ae1cd0d1aacc89e4ffa1f3e"
    label: "Sprinklr Help: YouTube Posts"
  - href: "https://support.buffer.com/article/562-using-youtube-shorts-with-buffer"
    label: "Buffer Help: Using YouTube Shorts with Buffer"
  - href: "https://suggestions.buffer.com/p/youtube-posts-to-community-tab"
    label: "Buffer Suggestions: YouTube Posts to Community Tab"
  - href: "https://help.metricool.com/api-limitations-per-social-network-n7zlr"
    label: "Metricool Help: API limitations per social network"
  - href: "https://feedback.publer.com/550"
    label: "Publer Feedback: YouTube Community Post support"
  - href: "https://github.com/gitroomhq/postiz-app/issues/537"
    label: "Postiz on GitHub: YouTube Community Tab Posts (issue 537)"
  - href: "https://community.zapier.com/how-do-i-3/how-to-automate-youtube-community-post-15727"
    label: "Zapier Community: How to automate YouTube Community Post"
  - href: "https://community.make.com/t/youtube-community-posts/83412"
    label: "Make Community: YouTube Community Posts"
  - href: "https://www.digitalmusicnews.com/2026/07/02/youtube-shorts-adds-15-second-music-clips-to-image-posts/"
    label: "Digital Music News: YouTube Shorts adds 15-second music clips to image posts (July 2, 2026)"
related:
  - "post-to-tiktok-reels-shorts-at-the-same-time"
  - "is-profaily-safe-to-connect-social-media-accounts"
  - "tiktok-reels-shorts-facebook-video-limits"
faq:
  - q: "Can you post pictures on YouTube?"
    a: "Yes. A channel with advanced features turned on can publish an image post of up to 10 images in YouTube. Since April 2026, image posts can also appear in the Shorts feed."
  - q: "Is there a YouTube Community post API?"
    a: "Only for a few. On November 16, 2026, YouTube added a posts resource to the Data API, but during the pilot only select launch partners can use it. YouTube plans general availability in 2027."
  - q: "Can I schedule YouTube Community posts with Buffer or Metricool?"
    a: "No. As of November 24, 2026, Buffer says Community posting isn't available, and Metricool lists Community posts as a YouTube API limitation. You can schedule a post inside YouTube itself."
  - q: "Can I post a carousel to YouTube Shorts?"
    a: "In the YouTube app, yes: an image post of up to 10 images can appear in the Shorts feed. From another tool, the dependable route is a video made from the images, which YouTube treats as a Short when it's vertical or square and up to three minutes long."
  - q: "Does a slideshow video get the same reach as an image post?"
    a: "Profaily hasn't measured it, so I can't say. They are different formats: an image post is swiped, and a video plays. Try both on your channel and compare."
  - q: "How long is a video made from images in Profaily?"
    a: "Each image holds for three seconds and slides into the next over half a second, so five images make a 13-second video and ten make 25.5 seconds. A single image makes a five-second still video."
cover: "How to post images to [YouTube]"
coverImage: "/assets/blog-featured-how-to-post-images-to-youtube.jpg?v=6a97e4ab"
coverShot: "yt-images-to-video.jpg"
---

A product photo set goes out to Instagram as a carousel, to TikTok as a photo post and to Facebook as a multi-photo post. Then you try to post images to YouTube, and Buffer, Metricool and Publer won't send them.

Buffer's help page says it straight out: [YouTube posts can't be created without a video attached](https://support.buffer.com/article/562-using-youtube-shorts-with-buffer). Metricool files Community posts under its YouTube limitations. Publer's request for them has been on hold for years, even though users there said YouTube was the reason they added it to their plan.

I'm Solomon Eseme, founder of Profaily, a scheduler for TikTok, Instagram, Facebook and YouTube. At MasteringBackend we [publish a short every day](/blog/post-to-tiktok-reels-shorts-at-the-same-time) through it.

Profaily can't post images to YouTube either, because nobody outside the pilot can. So an image post skips YouTube unless you turn the images into a video, and that's what our Convert to video button does.

It publishes a video, not a swipeable carousel, so I'll cover YouTube's own options first. Everything below was checked on November 24, 2026.

## Can you post images to YouTube? The short answer {#short-answer}

Yes. YouTube calls it an image post: up to 10 images, made in YouTube or through a partner tool such as Hootsuite, Sprinklr or Sprout Social. Buffer, Metricool and Publer can't post one, because YouTube's API for posts is still a pilot. Their route is a video made from the images.

That video counts as a Short if it's vertical or square and up to three minutes long. In Profaily, Convert to video builds it from the same images you post everywhere else.

The API side changed on November 16, 2026, when YouTube added a `posts` resource for select launch partners only. You can still schedule an image post inside YouTube yourself.

## The rules for pictures on YouTube {#post-pictures}

The format is the image post, and it lives on your channel's Posts tab. Buffer, Metricool and Publer still call these Community posts, which is why you'll see both names in this article.

These are the rules from [YouTube Help](https://support.google.com/youtube/answer/7124474):

| Rule | What YouTube says |
| --- | --- |
| Images per post | Up to 10 |
| File types | JPG, PNG, GIF or WEBP |
| File size | Up to 16 MB each |
| Shape | 1:1 is suggested |
| Scheduling | In YouTube: the arrow next to Post, then Schedule post |
| Who can post | Channels with advanced features turned on; channels set as made for kids can't |
| Daily limit | YouTube limits how many posts a channel can create each day |

Advanced features need channel history, or an ID or video check. YouTube's [feature eligibility page](https://support.google.com/youtube/answer/9409631) has the details.

Since April 2026, image posts can show up in the Shorts feed, and views from there count towards your channel's total. You just can't see how many views a single image post got in that feed, according to YouTube's [Shorts help page](https://support.google.com/youtube/answer/10059070).

YouTube added music in July 2026. An image post can now carry up to 15 seconds of it, added in the YouTube mobile app.

So if your channel is eligible, posting a carousel inside YouTube works fine. The trouble starts when you want to post it from your scheduler.

## Is there a YouTube Community post API? {#community-post-api}

Yes, since November 16, 2026. Unless YouTube picked your tool as a launch partner, you can't use it.

The Data API is how other apps post to YouTube for you. Until that date it could upload videos and had no way to create a post at all.

YouTube's [API revision history](https://developers.google.com/youtube/v3/revision_history) now lists a `posts` resource. During the pilot it's open only to select launch partners, meaning Google Cloud projects YouTube has approved, and broader access is planned for general availability in 2027.

| Question | Answer from YouTube's docs |
| --- | --- |
| Who can use it? | Select launch partners only, during the pilot |
| What can it post? | A text post, or an image post of 1 to 10 images |
| Can it schedule? | No. [posts.insert](https://developers.google.com/youtube/data/reference/rest/v3/posts/insert) says scheduled posts aren't supported, so a post goes live when it's created |
| When for everyone? | General availability is planned for 2027 |

One catch: the API publishes a post the moment it's created. Hootsuite still offers scheduling in Perch, so the waiting happens on Hootsuite's side, not YouTube's.

## Which tools can publish YouTube image posts? {#which-tools}

Not many. YouTube Help says posts can be published through select third-party platforms, "including Hootsuite, Sprinklr, and Sprout Social".

I went through each tool's own pages on November 24, 2026:

| Tool | YouTube image posts | What their own page says, paraphrased |
| --- | --- | --- |
| Hootsuite | Yes, since November 16, 2026 | 1 to 10 images in its Perch composer; post now, schedule or save a draft |
| Sprinklr | Yes | Generally available; 1 to 10 images |
| Sprout Social | Yes, per YouTube Help | Named by YouTube as a partner; I didn't check Sprout's own page |
| Buffer | No | Community posting isn't available through Buffer |
| Metricool | No | Lists Community posts as a YouTube API limitation |
| Publer | No | Request on hold; staff said YouTube's API doesn't support Community posts |
| Postiz | No | Request closed as not planned |
| Zapier | No | Publishing Community posts isn't currently possible |
| Make | No | A user asking how to automate it found no module for it |

Hootsuite is new to this list. Its own announcement says it didn't support YouTube Posts until November 16. As of November 24, Buffer, Metricool, Publer and Postiz still can't.

## What creators and businesses keep asking for {#what-people-ask}

People have wanted to post to YouTube's Community tab from the tool where they post everything else for years. They've said so on Buffer's and Publer's feedback boards, on GitHub, and in the Zapier and Make forums.

On Buffer, the suggestion "YouTube: Posts to Community Tab" has 65 votes. It was posted over three years ago and is still In Review. The person who posted it said connecting YouTube wasn't worth much without it, and that Shorts didn't do what they needed.

Publer's request #550 has the most frustrated users. Users said YouTube was why they added it to their plan, and one who posts only on YouTube said they'd have to switch tools if Publer couldn't handle posts. Staff replied that there wasn't much they could do, and the newest comment is about two months old.

Postiz closed issue #537 as not planned. A contributor dug in and found only an internal YouTube endpoint that needs your browser's login cookies, and I agree with them: handing a tool your login cookies is not a safe way to connect an account.

On Make, someone wanted every new video announced on Telegram, Facebook, Instagram, X and the YouTube Community tab. There was no module for the YouTube part. Zapier's answer to the same kind of question was that it isn't currently possible.

People even sell workarounds. There are paid n8n templates for Community posts that write the post and leave the publishing to you, and paid scraper APIs whose pitch is reading posts because the official API had no endpoint for it. I couldn't read Reddit for this article, so none of this comes from there.

## Three ways to post images to YouTube today {#three-ways}

Pick based on two questions: does the swipe matter, and where does the rest of your posting happen?

### 1. Post it in YouTube yourself

Create a post in YouTube, add up to 10 images, and post or schedule it. You get the real swipeable format, with music if you add it in the mobile app.

The cost is time: every image set gets posted twice: once in your scheduler for the other platforms, and again in YouTube.

### 2. Use a partner tool

If your team already pays for Hootsuite, Sprinklr or Sprout Social, look for its YouTube Posts feature. Hootsuite and Sprinklr both take 1 to 10 images.

### 3. Turn the images into a video

Any scheduler that supports YouTube can post a video. Uploading videos is the generally available part of YouTube's API, and it's the route every scheduler uses.

If the video is vertical or square and up to three minutes long, [YouTube categorises it as a Short](https://support.google.com/youtube/answer/15424877), its short vertical format that shows in the Shorts feed. Viewers watch the images play instead of swiping through them.

You can make that video in any editor. If the images are already in a Profaily post, it's one button.

## Image post or Short? {#post-or-short}

My rule: if the swipe is the point and you don't mind opening YouTube, make an image post. If you want YouTube on the same schedule as Instagram and TikTok, use a video.

| | YouTube image post | Video made from images |
| --- | --- | --- |
| How viewers see it | Swipe through the images | The images play in order |
| Where it can show | Posts tab and the Shorts feed | The Shorts feed, if YouTube categorises it as a Short |
| Music | Up to 15 seconds, added in the YouTube mobile app | Whatever the video has |
| Who can publish it | You in YouTube, or a partner tool | Any tool that uploads videos to YouTube |
| Schedule with your other platforms | Only in a partner tool | Yes, in any scheduler that posts to YouTube |

I can't tell you which one gets more reach, because I haven't measured it. Post one set both ways and look at the numbers yourself.

## How Profaily turns images into a YouTube video {#convert-to-video}

You build the post once, with your images, the way you would for Instagram or TikTok. Then you open YouTube's tab and tap Convert to video.

1. Add your images to a post, turn YouTube on and save the draft. Until you convert, YouTube's tab says "YouTube takes video, not images." and YouTube is skipped for that post, while the other platforms still post.
2. Tap Convert to video. The tab says "Making a video from your images…" while it works. Nothing converts on its own; this button is the only way in.
3. Check the preview. The tab changes to "YouTube gets a video made from these images." and plays the finished video, which is the exact file YouTube receives.
4. Schedule or publish. YouTube gets the video and the other platforms get your images.

![YouTube's tab in the Profaily composer on a five-image post: "YouTube takes video, not images." next to the Convert to video button](/assets/blog/how-to-post-images-to-youtube/convert-to-video.jpg)

![Five images added to a post, a caption typed, then Convert to video on YouTube's tab, and the finished video playing in the preview](/assets/blog/how-to-post-images-to-youtube/convert-flow.mp4)

A single image becomes a still video that holds for five seconds. With several, each image holds for three seconds and then slides left into the next over half a second, in the order of your post.

Nothing gets cropped. Each image is fitted inside the frame on a dark background, so a product shot stays whole, with dark space around it if it doesn't fill the frame.

The shape follows your images. If more of them are wider than tall, you get a 1920×1080 horizontal video; otherwise, including a tie or square images, it's 1080×1920 vertical.

That matters for Shorts. A horizontal video isn't a Short, so if you want the Shorts feed, use tall or square images. YouTube's tab takes up to 10 images, the same number as an image post.

There's no sound, just a silent audio track. This version doesn't add music, text, captions or zoom, so if sound matters for a particular set, a video editor is the better route for that one.

For the length, take three seconds per image and subtract half a second for each slide. Five images come to 13 seconds and ten to 25.5.

Whether it lands as a Short is YouTube's call, not Profaily's. A vertical video from your images falls inside YouTube's rule for vertical and square videos up to three minutes.

![After converting: "YouTube gets a video made from these images." and the video playing in a Shorts preview, with "The first sentence is used as the YouTube title." under the caption](/assets/blog/how-to-post-images-to-youtube/youtube-video-preview.jpg)

If you add, remove or reorder images after converting, the tab says "Your images changed since the video was made. Convert again to publish the new ones."

Profaily won't publish the old video in that case. YouTube waits until you convert again.

![One image removed after converting: YouTube's tab says "Your images changed since the video was made. Convert again to publish the new ones."](/assets/blog/how-to-post-images-to-youtube/images-changed.jpg)

The upload goes through YouTube's official Data API, the same way all of Profaily's [YouTube publishing](/youtube) works, and Profaily has [passed Google's OAuth verification](/blog/is-profaily-safe-to-connect-social-media-accounts) for YouTube.

## What happens on Instagram, TikTok and Facebook? {#other-platforms}

Nothing changes there. The video is for YouTube only.

| Platform | What it receives |
| --- | --- |
| Instagram | A carousel of your images |
| Facebook | A multi-photo post |
| TikTok | A photo post (photo mode) |
| YouTube | One video made from all the images |

If you split a set with "One per image" or "Add to calendar", the other platforms get one post per image. YouTube still gets a single video of all of them, posted once, with the main caption.

YouTube's title comes from the first sentence of your caption unless you type one, and the composer reminds you under the caption. Write that first sentence so it can stand on its own as a title.

## Try it with images you've already posted {#try-it}

Profaily has a [14-day free trial](/pricing). You need a card to start, and you're not charged until the trial ends. You don't have to move everything over to try it: one image set is enough to see what YouTube would get.

Upload an image set you've already posted to Instagram into a new post. Turn YouTube on, save the draft, tap Convert to video and watch the preview before you schedule it.

## Tips for an image video on YouTube {#tips}

These apply whatever tool you make the video in.

Go vertical, because a vertical video up to three minutes long is treated as a Short. Fit your images rather than cropping them, so nothing important gets cut off.

About three seconds per image is what Profaily uses. Put your strongest image first.

In a video the images play in the order you set, so order them on purpose. Before-and-after and step-by-step sets work well.

If the first sentence of your caption reads like a title, Profaily will use it for YouTube. And when the swipe really matters for a particular set, post that one in YouTube yourself.

*I checked the YouTube rules and tool pages linked in this article on November 24, 2026. YouTube is changing posts quickly, so check those pages for anything newer.*

## Frequently asked questions {#faq}

### Can you post pictures on YouTube?

Yes. A channel with advanced features turned on can publish an image post of up to 10 images in YouTube. Since April 2026, image posts can also appear in the Shorts feed.

### Is there a YouTube Community post API?

Only for a few. On November 16, 2026, YouTube added a posts resource to the Data API, but during the pilot only select launch partners can use it. YouTube plans general availability in 2027.

### Can I schedule YouTube Community posts with Buffer or Metricool?

No. As of November 24, 2026, Buffer says Community posting isn't available, and Metricool lists Community posts as a YouTube API limitation. You can schedule a post inside YouTube itself.

### Can I post a carousel to YouTube Shorts?

In the YouTube app, yes: an image post of up to 10 images can appear in the Shorts feed. From another tool, the dependable route is a video made from the images, which YouTube treats as a Short when it's vertical or square and up to three minutes long.

### Does a slideshow video get the same reach as an image post?

Profaily hasn't measured it, so I can't say. They are different formats: an image post is swiped, and a video plays. Try both on your channel and compare.

### How long is a video made from images in Profaily?

Each image holds for three seconds and slides into the next over half a second, so five images make a 13-second video and ten make 25.5 seconds. A single image makes a five-second still video.
