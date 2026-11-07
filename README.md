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

Blog posts are markdown files in `posts/<slug>.md` (the loader code is in `content/posts/`): YAML frontmatter, then the article body. Every
`.md` file in that folder is a post and the file name is its URL (`/blog/<slug>`). Nothing is registered.
Files in `posts/_parked/` are ignored.

1. Create `posts/<slug>.md`, then run `yarn cover <slug> "Words on the cover [highlighted phrase]"`. It draws
   `public/assets/blog-featured-<slug>.jpg` (1200x630: forest field, the phrase on a mint block, a real app
   capture from `public/assets/app`) and writes `cover` and `coverImage` into the post's frontmatter, so the
   article, the blog cards and og:image use it. Rerun `yarn cover <slug>` after changing the cover words. The build
   fails, naming the command, if a post has no cover. Options are at the top of `scripts/cover.ts`.
2. Frontmatter you write: `title`, `description`, `category` (one of the topics in `content/posts/categories.ts`), `datePublished` (`2026-09-29`). Optional:
   `cta` (`href` + `label`), `sources` (`href` + `label` list), `related` (slugs of other posts),
   `cover` (the words on the cover), `coverShot` (which app capture), `featured: true` (pin to the top of the index), `draft: true` (hidden in the production build, shown in
   `yarn dev`). Newest posts come first. The "In this guide" list, read time and date label are computed.
   A wrong or missing field fails the build with the file and field named. Notes are at the top of
   `content/posts/load.ts`.
3. Body is markdown with no raw HTML:
   - `## Heading` gets an id from its text. `## Heading {#my-id}` pins the id.
   - `> **Working rule:** text` renders as the callout box.
   - A GFM pipe table renders as the article table.
   - `https://` links open in a new tab; `/internal` links are plain.
   - Screenshots are real captures from the live app on the demo brand, never mock-ups. Put one on the brand frame
     (white field, dark green device frame cut flat at the bottom, like the team's reference shot)
     with `yarn shot <capture.png> <slug> <name> [x,y,w,h]`, which writes `public/assets/blog/<slug>/<name>.jpg`
     and prints the `![alt](...)` line to paste. The build fails on an image without alt text or outside that folder.
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


## Regional pricing

The pricing page and the plan cards show naira or dollars the way the app's plans dialog does. `lib/region.ts` asks the API once
(`GET /api/v1/public/billing/region`, which resolves the visitor's country from the edge header, then the browser's hint, then US)
and picks the currency; the amounts themselves live in `content/plans.ts` and must match `backend/src/modules/billing/catalog.ts`.
Set `NEXT_PUBLIC_API_URL` (default `https://api.useprofaily.com`). The API's `CORS_ORIGINS` must include the site's origin when it
is not `https://useprofaily.com`. If the API cannot be reached the page falls back to dollars.
