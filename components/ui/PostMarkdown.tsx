import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Element, ElementContent, Root } from "hast";

/**
 * Renders a post's markdown body as the exact markup the article CSS expects:
 *  - `## Heading {#id}` becomes <h2 id="id">Heading</h2>
 *  - a blockquote becomes <div class="article-callout"> holding its first paragraph's inline content
 *  - a table is wrapped as div.article-table-wrap > table.article-table
 *  - http(s) links open in a new tab (target + rel); internal links stay plain
 *  - top-level blocks are separated by a single " " text node, and no whitespace nodes are emitted
 *    inside lists and tables (the template previously did the same with hand-written JSX)
 */

const isWhitespace = (n: ElementContent) => n.type === "text" && /^\s*$/.test(n.value);
const BLOCK_PARENTS = new Set(["ul", "ol", "table", "thead", "tbody", "tr"]);
const HEADING_ID = /\s*\{#([A-Za-z][\w-]*)\}\s*$/;

function transform(node: Element): Element {
  node.children = node.children.map((child) => {
    if (child.type === "text") return { ...child, value: child.value.replace(/\n/g, " ") };
    return child.type === "element" ? transform(child) : child;
  });
  if (BLOCK_PARENTS.has(node.tagName)) node.children = node.children.filter((c) => !isWhitespace(c));

  if (node.tagName === "h2") {
    const last = node.children[node.children.length - 1];
    const m = last?.type === "text" ? HEADING_ID.exec(last.value) : null;
    if (last?.type === "text" && m) {
      last.value = last.value.slice(0, m.index);
      node.properties = { ...node.properties, id: m[1] };
    }
  }
  if (node.tagName === "a" && /^https?:\/\//.test(String(node.properties?.href))) {
    node.properties = { ...node.properties, target: "_blank", rel: ["noopener", "noreferrer"] };
  }
  if (node.tagName === "blockquote") {
    const para = node.children.find((c): c is Element => c.type === "element" && c.tagName === "p");
    return { type: "element", tagName: "div", properties: { className: ["article-callout"] }, children: para?.children ?? [] };
  }
  if (node.tagName === "table") {
    node.properties = { ...node.properties, className: ["article-table"] };
    return { type: "element", tagName: "div", properties: { className: ["article-table-wrap"] }, children: [node] };
  }
  return node;
}

function rehypeArticle() {
  return (tree: Root) => {
    const blocks = tree.children
      .filter((c): c is Element => c.type === "element")
      .map(transform);
    tree.children = blocks.flatMap((b, i): ElementContent[] => (i ? [{ type: "text", value: " " }, b] : [b]));
  };
}

export function PostMarkdown({ children }: { children: string }) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeArticle]}>
      {children}
    </Markdown>
  );
}
