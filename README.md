# Profaily landing

Production Next.js app for `useprofaily.com`. The approved marketing site is preserved as complete HTML documents under `public/`, with the shared stylesheet, interaction script, product media, and article assets alongside them. The App Router catch-all route serves these documents unchanged at clean URLs and prerenders all 28 routes during `yarn build`. Existing `.html` URLs remain available from `public/` and declare the clean route as canonical.

```bash
yarn            # install
yarn dev        # http://localhost:3003
yarn build      # production build
yarn start      # serve the build on :3000
yarn typecheck
```

`NEXT_PUBLIC_APP_URL` controls sign-in, registration, and policy links. It defaults to `https://app.useprofaily.com`.
