# Profaily landing

Next.js (App Router) app for `useprofaily.com`: 28 statically prerendered marketing routes built from React components and typed content, with one global stylesheet (`app/globals.css`).

```bash
yarn            # install (Node 22)
yarn dev        # http://localhost:3003
yarn build      # production build (all routes + sitemap/robots prerendered)
yarn start      # serve the build on :3000
yarn typecheck
```

`NEXT_PUBLIC_APP_URL` controls sign-in, registration and policy links. It defaults to `https://app.useprofaily.com`.

## Structure

```
app/
  (home)/            home route (own layout)
  (site)/            every other route: features, pricing, platforms, blog, compare, tools, contact
  globals.css        the single global stylesheet
  sitemap.ts robots.ts
components/
  layout/            RootDocument, PageShell, SiteHeader, MegaMenu, SiteFooter
  behavior/          small client islands (nav, video modal, lazy video, reveal, blog filter)
  sections/          page sections (home, pricing, shared)
  templates/         data-driven pages: Article, Compare, Feature, Platform, Tool
  ui/                JsonLd, OgUrl, icons
content/             copy and data (pages, posts, comparisons, tools, platforms)
lib/                 links, metadata (the `JsonLd` component is in components/ui; `faqJsonLd` lives in content/comparisons.tsx)
scripts/             verification oracles
```

Legacy `*.html` URLs redirect (308) to the clean routes via `next.config`.

## Writing a post

Blog posts are markdown files in `content/posts/<slug>.md`: YAML frontmatter, then the article body.

1. Create `content/posts/<slug>.md` and add the slug to the list in `content/posts/index.ts` (the first
   slug is the featured post on the blog index). Add the cover image `public/assets/blog-featured-<slug>.svg`.
2. Frontmatter (all required, strings quoted): `slug` (same as the file name), `category`, `title`,
   `description`, `readTime`, `datePublished` (ISO date), `dateLabel`, `toc` (`id` + `label` list),
   `cta` (`href` + `label`), `sources` (`href` + `label` list), `related` (three slugs). The full field
   notes are at the top of `content/posts/load.ts`.
3. Body is markdown with no raw HTML:
   - `## Heading {#same-file}` gives the h2 the id `same-file` (ids are never derived from the text;
     every `toc` id must match one).
   - `> **Working rule:** text` renders as the callout box.
   - A GFM pipe table renders as the article table.
   - `https://` links open in a new tab; `/internal` links are plain.
4. Run `yarn typecheck && yarn build`, then check the page at `/blog/<slug>`.

## Oracles

All oracles take the target from `BASE_URL` (default `http://localhost:3003`).

```bash
yarn compare --all                      # DOM compare, all 28 routes, against tests/baseline
yarn compare /pricing                   # one route
yarn smoke                              # interactions, blog filter, redirects, 404, reduced motion
yarn visual shot <label> <baseUrl>      # screenshots, 28 routes x 390/1280, into tests/visual/<label>
yarn visual diff <labelA> <labelB>      # pixelmatch, threshold 0
VISUAL_AA=1 yarn visual diff a b        # same, but anti-aliased pixels count too
```

Run against a production build for pixel work (the dev badge adds false diffs):

```bash
rm -rf .next && yarn build && npx next start -p 3004 &
BASE_URL=http://localhost:3004 yarn compare --all
BASE_URL=http://localhost:3004 yarn smoke
yarn visual shot final http://localhost:3004 && yarn visual diff baseline final
```

`tests/baseline` (gitignored) holds the pre-rebuild static HTML used as the DOM reference. Recover any file with `git show 172f0ba:public/<file>` (e.g. `git show 172f0ba:public/pricing.html`). `tests/visual/baseline` holds the pixel references taken from that old app.

Regenerate the DOM baseline (gitignored):

```bash
mkdir -p tests/baseline/html && git archive 172f0ba public | tar -x -C tests/baseline && cp -R tests/baseline/public/. tests/baseline/html/ && rm -rf tests/baseline/public
```

App URL override check: set `NEXT_PUBLIC_APP_URL=https://app.example.test` for both `yarn build` (or `yarn dev`) and `yarn smoke`; without it smoke prints a `SKIP app url override` line.

Gotchas:

- `next.config.js` redirects `/:path*.html` to `/:path*` before `public/` files are served, so a static `.html` dropped into `public/` (e.g. a Google Search Console `googleXXXX.html`) is redirected and 404s. Add an explicit redirects exception or serve it from a route if ever needed.
- React splits adjacent text nodes with `<!-- -->` in SSR, which changes glyph shaping. Dynamic text next to literal text is therefore written as one template-literal string (`{`${name} `}`). `yarn compare` flags any such split in the rendered page.
