---
title: "How to connect ChatGPT to Profaily"
description: "Add Profaily to ChatGPT as a custom MCP server with one URL and approve it in Profaily. Which ChatGPT plans can do it, every step, and what to do if the option is missing."
section: "AI apps"
order: 2
updated: "2026-11-20"
related:
  - "connect-claude"
  - "connect-an-ai-app"
faq:
  - q: "Which ChatGPT plans can connect Profaily?"
    a: "OpenAI offers custom MCP servers through Developer mode on ChatGPT Plus, Pro, Business, Enterprise and Education, on the web. On Business, Enterprise and Education, a workspace admin may need to turn it on first."
  - q: "Do I need an API key?"
    a: "No. Leave Authentication on OAuth. ChatGPT sends you to Profaily's own page to approve it, and you can disconnect it any time in Profaily's settings."
---

ChatGPT connects to Profaily through the Model Context Protocol (MCP). You add Profaily once as a custom MCP server, approve it in Profaily, and then ask ChatGPT for what you want in plain words.

You need a Profaily account and a ChatGPT plan that allows custom MCP servers: Plus, Pro, Business, Enterprise or Education, on the web. ChatGPT works with the role you have in each Profaily team, so it can do what you can do there and nothing more.

## Add Profaily in ChatGPT {#add}

1. Copy the Profaily server URL: `https://mcp.useprofaily.com/mcp`
2. In ChatGPT on the web, open **Plugins**. The address is `chatgpt.com/plugins`.
3. Click **Add**, then **Add custom MCP server**.

![ChatGPT's Plugins page with the Add menu open: Create plugin, Upload plugin archive, Add custom MCP server](/assets/help/connect-chatgpt/add-menu.jpg)

4. In **Name**, type `Profaily`. The description is optional.
5. Under **Connection**, keep **Server URL** selected and paste the URL.
6. Leave **Authentication** on **OAuth**. ChatGPT finds Profaily's sign-in settings on its own.
7. Read the warning, tick **I understand and want to continue**, then click **Create as a plugin**.

![ChatGPT's Add custom MCP server form, filled in with Profaily, a short description, the Profaily server URL and OAuth authentication](/assets/help/connect-chatgpt/add-form.jpg)

## Approve ChatGPT in Profaily {#approve}

ChatGPT sends you to Profaily's sign-in page. Sign in if you aren't already, check the three permissions (see your videos, channels and calendar; draft videos and upload files; schedule, publish and change scheduled videos) and click **Allow**. You go back to ChatGPT, with Profaily ready to use.

The approval page looks the same for every app. There's a picture of it in [How to connect Claude to Profaily](/help/connect-claude#approve).

## Check it works {#verify}

Start a new chat, make sure Profaily is turned on for it, and ask:

> Which channels are connected to my Profaily brand?

ChatGPT may ask you to confirm before it uses a Profaily tool. Profaily's scheduling and publishing tools always preview first and tell ChatGPT to get your yes before the confirmed step.

## If you don't see Add custom MCP server {#missing}

- **Check your plan.** ChatGPT Free doesn't offer custom MCP servers.
- **On Business, Enterprise or Education,** an admin turns on Developer mode in the workspace settings first. OpenAI lists the toggle under Workspace Settings, Permissions & Roles.
- **Some accounts show it under Developer mode.** OpenAI's guide puts the switch in **Settings → Security and login → Developer mode**. Turn it on, then try **Plugins → Add** again.

## Disconnect ChatGPT {#disconnect}

In Profaily, open **Settings → AI & Integrations**. Under **Connected**, click **Disconnect** next to ChatGPT. It loses access straight away.

To see what you can ask once it's connected, read [Profaily for ChatGPT and Claude](/mcp).
