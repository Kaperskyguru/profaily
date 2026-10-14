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
  sections/          page sections (home, features, pricing, shared)
  templates/         data-driven pages: Article, Compare, Feature, Platform, Tool
  ui/                JsonLd, OgUrl, icons
content/             copy and data (pages, posts, comparisons, tools, platforms)
lib/                 links, metadata, JSON-LD helpers
scripts/             verification oracles
```

Legacy `*.html` URLs redirect (308) to the clean routes via `next.config`.

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
