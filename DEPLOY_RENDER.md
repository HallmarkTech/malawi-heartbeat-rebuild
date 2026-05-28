# Deploy Hallmark Limited to Render

This is a TanStack Start (Vite + Nitro) app. It builds a Node server output at `.output/server/index.mjs`.

## One-time setup

1. Push the repo to GitHub / GitLab / Bitbucket.
2. In Render: **New +** → **Blueprint** → point at this repo. Render reads `render.yaml` and provisions the service.
   - Or manually: **New + → Web Service**, then use the settings below.

## Manual settings (if not using the Blueprint)

| Field              | Value                                                    |
| ------------------ | -------------------------------------------------------- |
| Runtime            | Node                                                     |
| Build command      | `npm install && npm run build`                           |
| Start command      | `npm run start` (runs `node .output/server/index.mjs`)   |
| Node version       | `20.18.0` (set `NODE_VERSION` env var)                   |
| Health check path  | `/`                                                      |
| Auto-deploy        | On                                                       |

## Environment variables

Add anything from `.env` here (e.g. API keys, Supabase keys). Render injects
them at runtime. Do **not** commit secrets.

## Custom domain (hallmark.mw)

1. Render service → **Settings → Custom Domains → Add** `hallmark.mw` and `www.hallmark.mw`.
2. At your DNS provider:
   - `A` record `@` → Render's IP (shown in the dashboard).
   - `CNAME` `www` → `<service-name>.onrender.com`.
3. SSL is issued automatically once DNS propagates.

## Notes

- Render's free plan sleeps after inactivity — use **Starter** ($7/mo) for a production marketing site.
- `render.yaml` ships in this repo so the entire service config is version-controlled.
- The Nitro server output is fully self-contained; no Docker needed.
