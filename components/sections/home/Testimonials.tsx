"use client";
import { useState } from "react";
import { Icon } from "@/components/ui/Glyph";
import { sampleTestimonials, testimonials, type Testimonial } from "@/content/testimonials";

const PAGE = 9;

const items: Testimonial[] = testimonials.length ? testimonials : process.env.NEXT_PUBLIC_SAMPLE_TESTIMONIALS === "1" ? sampleTestimonials : [];

function Body({ text }: { text: string }) {
  return (
    <>
      {text.split(/(@profaily)/gi).map((part, i) => (/^@profaily$/i.test(part) ? <b className="mention" key={i}>{part}</b> : part))}
    </>
  );
}

/** "Creators love Profaily": real customer quotes in three columns, paged with arrows. Renders nothing until content/testimonials.ts has entries. */
export function Testimonials() {
  const [page, setPage] = useState(0);
  if (!items.length) return null;
  const pages = Math.ceil(items.length / PAGE);
  const shown = items.slice(page * PAGE, page * PAGE + PAGE);
  const cols = [0, 1, 2].map((c) => shown.filter((_, i) => i % 3 === c));

  return (
    <section className="love" aria-labelledby="love-h">
      <div className="wrap">
        <h2 id="love-h">Creators love Profaily</h2>
        <p className="lead">What teams and creators say once their videos go out from one place.</p>
        {pages > 1 && (
          <div className="pager">
            <button type="button" aria-label="Previous quotes" onClick={() => setPage((page + pages - 1) % pages)}><Icon name="chevron" className="prev" /></button>
            <button type="button" aria-label="Next quotes" onClick={() => setPage((page + 1) % pages)}><Icon name="chevron" className="next" /></button>
          </div>
        )}
        <div className="love-cols" key={page}>
          {cols.map((col, c) => (
            <div className="love-col" key={c}>
              {col.map((t, i) => (
                <figure className="quote" key={`${c}-${i}`} style={{ animationDelay: `${(c * 3 + i) * 60}ms` }}>
                  <span className="av" aria-hidden="true">{t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                  <figcaption>
                    <b>{t.name}</b>
                    <span>{t.handle}</span>
                  </figcaption>
                  <blockquote><Body text={t.text} /></blockquote>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
