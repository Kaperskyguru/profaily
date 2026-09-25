# Profaily landing

Marketing site for `useprofaily.com`. The app itself is `frontend/` on `app.useprofaily.com`; this repo shares no code with it.

Next.js 15 App Router, server components only. The single client component is `components/live-status.tsx` (the hero's one status transition). No Tailwind: styles are plain CSS tokens in `app/globals.css`, from the brand guide (Mint `#8DD796`, Deep Green `#0D241F`, Inter).

```bash
yarn            # install
yarn dev        # http://localhost:3003
yarn build      # production build
yarn start      # serve the build on :3003
yarn typecheck
```

`NEXT_PUBLIC_APP_URL` (see `.env.sample`) sets where Sign in, Get started and the legal links point. Defaults to `https://app.useprofaily.com`.
# profaily
