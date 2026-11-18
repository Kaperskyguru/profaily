"use client";
import { useId, useMemo, useState } from "react";

type Item = { slug: string; title: string; description: string; section: string };

const words = (s: string) => s.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

/** The help center search box: filters every help page by its title, description and section, as you type. */
export function HelpSearch({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const listId = useId();
  const results = useMemo(() => {
    const terms = words(q);
    if (!terms.length) return [];
    return items
      .map((it) => {
        const title = words(it.title);
        const rest = words(`${it.description} ${it.section}`);
        let score = 0;
        for (const t of terms) {
          if (title.some((w) => w.startsWith(t))) score += 3;
          else if (rest.some((w) => w.startsWith(t))) score += 1;
          else return null;
        }
        return { it, score };
      })
      .filter((r): r is { it: Item; score: number } => r !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((r) => r.it);
  }, [q, items]);

  return (
    <form
      className="hp-search"
      role="search"
      action="/help"
      onSubmit={(e) => {
        e.preventDefault();
        if (results[0]) window.location.href = `/help/${results[0].slug}`;
      }}
    >
      <label className="sr-only" htmlFor={`${listId}-q`}>Search the help center</label>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hp-search-icon"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
      <input
        id={`${listId}-q`}
        type="search"
        placeholder="Search the help center"
        autoComplete="off"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Escape") setQ(""); }}
        aria-controls={listId}
      />
      {q.trim() && (
        <ul id={listId} className="hp-search-results" aria-live="polite">
          {results.length ? (
            results.map((r) => (
              <li key={r.slug}>
                <a href={`/help/${r.slug}`}><strong>{r.title}</strong><span>{r.section}</span></a>
              </li>
            ))
          ) : (
            <li className="hp-search-none">Nothing matches yet. Try another word, or email support@useprofaily.com.</li>
          )}
        </ul>
      )}
    </form>
  );
}
