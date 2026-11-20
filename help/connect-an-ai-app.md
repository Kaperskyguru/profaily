---
title: "Connect Claude Code, Cursor or any MCP app to Profaily"
description: "Profaily's MCP server works with any app that supports remote MCP servers and OAuth sign-in. The URL, the config entry, the Claude Code command, limits and how to disconnect."
section: "AI apps"
order: 3
updated: "2026-11-20"
related:
  - "connect-claude"
  - "connect-chatgpt"
faq:
  - q: "How many AI requests can I make?"
    a: "Every plan includes AI app use. Creator includes 500 requests a month, Business 10,000 and Agency 30,000. Every tool call counts, and the count resets on the 1st of each month."
  - q: "Can I give an app read-only access?"
    a: "Yes. On Profaily's approval page, untick Draft videos and upload files, and Schedule, publish and change scheduled videos. Seeing your videos, channels and calendar is always on, because an app that can't read can't do anything. The app can then look but can't change anything."
---

Profaily runs a remote MCP server. Any app that can add a remote MCP server and sign in with OAuth can use it: Claude Code, Cursor and other coding tools, and AI agents you build yourself.

**Server URL:** `https://mcp.useprofaily.com/mcp`

There's no API key. The first time the app connects, Profaily asks you to sign in and approve it.

## Claude Code {#claude-code}

Run this in your terminal:

```bash
claude mcp add --transport http profaily https://mcp.useprofaily.com/mcp
```

Then start Claude Code, type `/mcp`, pick **profaily** and sign in. Your browser opens Profaily's approval page. Click **Allow**.

## Cursor and apps with an MCP config file {#config}

Add Profaily to the app's MCP config (for Cursor, `~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "profaily": { "url": "https://mcp.useprofaily.com/mcp" }
  }
}
```

Restart the app or reload its MCP servers. It opens Profaily in your browser to approve the connection.

## What the app is allowed to do {#scopes}

Profaily's approval page lists three permissions. You can untick the last two before you click **Allow**, and the app never gets more than your role allows in each team:

| Permission | Scope | What it covers |
|---|---|---|
| See your videos, channels and calendar | `profaily:read` | Brands, channels, the media library, drafts, the queue, the calendar and post status |
| Draft videos and upload files | `profaily:write` | Uploads, imports from a link, drafts, review links, sending for review |
| Schedule, publish and change scheduled videos | `profaily:publish` | Scheduling, publishing now, approving, rescheduling, cancelling, retrying a failed channel |

Every tool that schedules, publishes, approves, retries or deletes works in two steps. Called with `confirm: false` it returns a preview and changes nothing. Called again with `confirm: true` and the same version, it does the work. The tools tell the app to show you the preview and get your yes in between.

## Limits {#limits}

- **Each month:** Creator 500 requests, Business 10,000, Agency 30,000. If you're in someone else's team, you get the higher of your plan and theirs. Ask your AI app for your Profaily account details to see how many you've used.
- **Bursts:** up to 120 requests a minute per connection, 600 an hour per person, and 30 changes a minute.

## See and disconnect connected apps {#disconnect}

In Profaily, open **Settings → AI & Integrations**. **Connected** lists every app with the date you connected it, when it was last used and what it can do. **Disconnect** removes its access straight away.

![Profaily's AI & Integrations settings: setup cards for Claude, ChatGPT and any MCP app, and a Connected list with a Disconnect button for each app](/assets/help/connect-an-ai-app/settings.jpg)

For what to ask once you're connected, read [Profaily for ChatGPT and Claude](/mcp).
