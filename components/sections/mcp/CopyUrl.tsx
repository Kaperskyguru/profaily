"use client";
import { useState } from "react";

/** The MCP server URL with a copy button. Clipboard access can be refused, so a failed copy just selects the text. */
export function CopyUrl({ url, label = "Server URL" }: { url: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const code = e.currentTarget.parentElement?.querySelector("code");
      if (code) window.getSelection()?.selectAllChildren(code);
    }
  };
  return (
    <div className="mcp-url">
      <span className="mcp-url-label">{label}</span>
      <code>{url}</code>
      <button type="button" onClick={copy} aria-label={copied ? "Copied" : `Copy ${label.toLowerCase()}`}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
