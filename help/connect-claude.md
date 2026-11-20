---
title: "How to connect Claude to Profaily"
description: "Add Profaily to Claude as a custom connector with one URL, approve it in Profaily, then ask Claude to draft, check and plan your videos. Here's every step."
section: "AI apps"
order: 1
updated: "2026-11-20"
related:
  - "connect-chatgpt"
  - "connect-an-ai-app"
faq:
  - q: "Which Claude plans can connect Profaily?"
    a: "Custom connectors work on Claude's Free, Pro, Max, Team and Enterprise plans, on the web, in the desktop app and in Cowork. Free accounts can have one custom connector. On Team and Enterprise, an Owner adds the connector for the organization first."
  - q: "Do I need an API key?"
    a: "No. Profaily signs you in with OAuth. You approve Claude once on Profaily's own page, and you can disconnect it any time in Profaily's settings."
  - q: "Can Claude post a video without asking me?"
    a: "Profaily's scheduling and publishing tools work in two steps: a preview first, then a confirmed call, and they tell Claude to show you the preview and get your yes in between. In Claude's Manual permission mode, Claude also asks you before every Profaily tool it uses."
---

Profaily works inside Claude through the Model Context Protocol (MCP), the open standard Claude uses to connect to other apps. You add Profaily once, approve it, and then ask Claude for what you want in plain words.

You need a Profaily account and a Claude account. Claude connects with the role you have in each Profaily team, so it can do what you can do there and nothing more.

## Add Profaily in Claude {#add}

1. Copy the Profaily server URL: `https://mcp.useprofaily.com/mcp`
2. In Claude on the web or the desktop app, open **Plugins** in the sidebar. The address `claude.ai/settings/connectors` takes you to the same page.
3. Click **Add**, then **Add custom connector**.

![Claude's Your plugins page with the Add menu open, showing Add custom connector](/assets/help/connect-claude/add-menu.jpg)

4. In **Name**, type `Profaily`. In **MCP server URL**, paste the URL.
5. Click **Continue**.

![The Add custom connector dialog in Claude, with Profaily as the name and https://mcp.useprofaily.com/mcp as the server URL](/assets/help/connect-claude/add-dialog.jpg)

On a Team or Enterprise plan, an Owner adds Profaily first in **Organization settings → Connectors → Add → Custom → Web**. Each person then connects it with their own Profaily account.

## Approve Claude in Profaily {#approve}

Claude opens Profaily's sign-in page. Sign in if you aren't already, and Profaily shows what Claude is asking for:

- **See your videos, channels and calendar**
- **Draft videos and upload files**
- **Schedule, publish and change scheduled videos**

To let Claude only look, untick the last two before you click **Allow**. You go straight back to Claude, and Profaily shows in your connectors list.

![Profaily's approval page listing the three permissions, with Allow and Cancel buttons](/assets/help/connect-claude/approve.jpg)

Claude can only do what your role allows. An Editor can draft and send videos for review, but can't schedule them. A Producer or Admin can schedule, approve and retry.

## Check it works {#verify}

Start a new chat and ask:

> What's scheduled on my Profaily calendar this week?

If Claude's permissions are set to **Manual**, it asks you before each Profaily tool. **Allow once** lets that one call through. **Always allow** stops it asking for that tool. In Claude's **Auto** mode, it checks risky actions for you and may go ahead without asking, but Profaily's scheduling tools still preview first and tell Claude to get your yes before the confirmed step.

![Claude asking for permission to use List Media Library files from Profaily, with Decline, Always allow and Allow once buttons](/assets/help/connect-claude/permission.jpg)

You'll find the same steps in Profaily under **Settings → AI & Integrations → Claude**, with a button to copy the URL.

## If it doesn't connect {#troubleshoot}

- **Claude says the server can't be reached.** Check the URL ends in `/mcp` and starts with `https://`.
- **You don't see Add custom connector.** On Team and Enterprise, only an Owner can add it. On Free, remove your other custom connector first: Free allows one.
- **The approval page says the link has expired.** Start again from Claude. The sign-in link is short-lived on purpose.
- **Claude can't schedule.** Your role in that Profaily team is probably Editor. Ask Claude to send the video for review instead, or ask an Admin to change your role.

## Disconnect Claude {#disconnect}

In Profaily, open **Settings → AI & Integrations**. Under **Connected**, click **Disconnect** next to Claude. It loses access straight away. You can also remove the connector in Claude's Plugins page.

To see what you can ask once it's connected, read [Profaily for ChatGPT and Claude](/mcp).
