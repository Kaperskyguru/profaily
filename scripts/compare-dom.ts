import { readFileSync } from "node:fs";
import { join } from "node:path";
import * as cheerio from "cheerio";
import type { AnyNode, Element } from "domhandler";
import { createTwoFilesPatch } from "diff";
import { ROUTES } from "./routes";

const BASE = process.env.BASE_URL ?? "http://localhost:3003";
const APP_DEFAULT = "https://app.useprofaily.com";
const APP_ENV = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
const DROP = "script,style,link,title,meta,template,noscript,next-route-announcer,nextjs-portal";
const URL_ATTRS = new Set(["src", "href", "srcset", "poster", "data-src", "content"]);
const REGIONS: Record<string, string> = {
  header: "header.site-header",
  main: "main",
  footer: "footer.site-footer",
};

function normUrl(v: string): string {
  let out = v.replaceAll(APP_DEFAULT, "@app");
  if (APP_ENV) out = out.replaceAll(APP_ENV, "@app");
  if (/^https?:\/\/[^/?#]+\/?$/.test(out)) out = out.replace(/\/$/, ""); // origin-only: slash-insensitive
  return out
    .replace(/(?:\.\.\/)+assets\//g, "/assets/")
    .replace(/(^|[\s,])assets\//g, "$1/assets/");
}

function normStyle(v: string): string {
  return v
    .split(";")
    .map((d) => d.trim().replace(/\s*:\s*/, ":"))
    .filter(Boolean)
    .sort()
    .join(";");
}

function stable(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => [k, stable(v)]),
    );
  return value;
}

function walk($: cheerio.CheerioAPI, node: AnyNode, depth: number, out: string[]) {
  const pad = "  ".repeat(depth);
  let text = "";
  let commentSeen = false; // a comment sits inside the current text run
  let split = false; // ...and the run around it has visible text
  const flush = () => {
    const t = text.replace(/\s+/g, " ");
    // The source HTML has no comment nodes, so this marker can only appear on the rendered side and fails the diff.
    if (split) out.push(pad + "<!-- text-node split -->");
    if (t) out.push(pad + JSON.stringify(t));
    text = "";
    commentSeen = split = false;
  };
  for (const child of (node as Element).children ?? []) {
    if (child.type === "comment") commentSeen = true;
    else if (child.type === "text") {
      text += (child as unknown as { data: string }).data;
      // React splits adjacent text nodes with <!-- -->; whitespace-only runs (table rows etc.) are harmless.
      if (commentSeen && text.trim() !== "") split = true;
    }
    else if (child.type === "tag") {
      flush();
      const el = child as Element;
      const attrs = Object.entries(el.attribs)
        .map(([k, v]) => {
          const val = k === "style" ? normStyle(v) : URL_ATTRS.has(k) ? normUrl(v) : v.replace(/\s+/g, " ").trim();
          return `${k}=${JSON.stringify(val)}`;
        })
        .sort()
        .join(" ");
      out.push(`${pad}<${el.name}${attrs ? " " + attrs : ""}>`);
      walk($, el, depth + 1, out);
    }
  }
  flush();
}

function normalize(html: string, regions: string[]): string {
  const $ = cheerio.load(html);
  const out: string[] = [];
  out.push(`html lang=${JSON.stringify($("html").attr("lang") ?? "")}`);
  out.push(`title ${JSON.stringify($("title").first().text().trim())}`);
  const meta = (sel: string, attr: string) => $(sel).map((_, e) => `${sel} ${JSON.stringify(normUrl($(e).attr(attr) ?? ""))}`).get();
  out.push(...meta('meta[name="description"]', "content"));
  out.push(...meta('link[rel="canonical"]', "href"));
  out.push(
    ...$('meta[property^="og:"]')
      .map((_, e) => `${$(e).attr("property")} ${JSON.stringify(normUrl($(e).attr("content") ?? ""))}`)
      .get()
      .sort(),
  );
  out.push(
    ...$('meta[name^="twitter:"]')
      .map((_, e) => `${$(e).attr("name")} ${JSON.stringify($(e).attr("content") ?? "")}`)
      .get()
      .sort(),
  );
  $('script[type="application/ld+json"]').each((_, e) => {
    out.push("ld+json " + JSON.stringify(stable(JSON.parse($(e).text()))));
  });
  $(DROP).remove();
  // Next streams metadata into an empty <div hidden> at the top of <body>; it has no content or layout.
  $("body > div[hidden]").filter((_, e) => $(e).text().trim() === "" && $(e).find("*").length === 0).remove();
  out.push(`body class=${JSON.stringify($("body").attr("class") ?? "")}`);
  if (regions.length === 0) walk($, $("body")[0], 0, out);
  else for (const r of regions) $(REGIONS[r]).each((_, e) => walk($, e, 0, out));
  return out.join("\n") + "\n";
}

async function main() {
  const args = process.argv.slice(2);
  const flag = (n: string) => {
    const i = args.indexOf(n);
    return i === -1 ? undefined : args.splice(i, 2)[1];
  };
  const regions = flag("--region")?.split(",") ?? [];
  const sourceOverride = flag("--source");
  const all = args.includes("--all");
  const routes = all ? ROUTES.map((r) => r.route) : args.filter((a) => a.startsWith("/"));
  if (routes.length === 0) throw new Error("usage: yarn compare [--all | /route ...] [--region header,main,footer] [--source file.html]");
  let failed = 0;
  for (const route of routes) {
    const file = sourceOverride ?? ROUTES.find((r) => r.route === route)?.file;
    if (!file) throw new Error(`no source file for ${route}`);
    const source = normalize(readFileSync(join("tests/baseline/html", file), "utf8"), regions);
    const res = await fetch(BASE + route);
    if (!res.ok) { console.log(`FAIL ${route}: HTTP ${res.status}`); failed++; continue; }
    const rendered = normalize(await res.text(), regions);
    if (source === rendered) console.log(`PASS ${route}`);
    else {
      failed++;
      console.log(`FAIL ${route}`);
      console.log(createTwoFilesPatch("source", "rendered", source, rendered, "", "", { context: 2 }));
    }
  }
  process.exit(failed ? 1 : 0);
}
main();
