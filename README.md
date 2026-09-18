# Peter Asuelinmhen — Portfolio

A redesigned, optimized Next.js portfolio for **Peter Asuelinmhen** — *STEMR Educator || Electronic Engineer || Teen Handler* — (`peter.nibot.africa`).

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- `next/font` (Space Grotesk + Inter), `next/image`, Metadata API
- Fully static output — deploys to Vercel with zero configuration

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, stats, about, services, featured projects, skills, experience, publications, portfolio preview |
| `/about` | Full bio, skills, experience timeline, publications, videos |
| `/services` | Six services + working process |
| `/portfolio` | Filterable gallery with accessible lightbox |
| `/renewable-energy` | Installations, procurement, training, process and gallery |
| `/workshops` | STEM workshop programmes + workshop video + gallery |
| `/mentorship` | Mentorship offerings + contact form |
| `/contact` | Contact form and channels |
| `/privacy-policy` | Privacy notice |

`/sitemap.xml`, `/robots.txt` and `/manifest.webmanifest` are generated automatically.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Checks

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build       # production build
```

## Content

All copy and data live in `src/data/`:

- `site.ts` — name, role, contact details, socials, navigation, stats
- `content.ts` — services, featured projects, skills, experience, publications, bio
- `portfolio.ts` — gallery images and categories
- `programmes.ts` — renewable energy, workshops and mentorship content

Images are pre-optimized WebP files in `public/images/` (generated from the WordPress uploads) and a compressed workshop video in `public/videos/`.

## Contact form

The form builds a pre-filled `mailto:` link to `peter@nibot.africa` using the visitor's own email client, so no API keys or third-party services are required. To switch to a server-side provider later, replace the handler in `src/components/contact-form.tsx` with a `fetch("/api/contact")` call.

## Deploy to Vercel

### Option A — Git (recommended)

```bash
git add .
git commit -m "Rebuild portfolio with Next.js"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then import the repository at <https://vercel.com/new>. Vercel detects Next.js automatically — no environment variables or settings required.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### After deploying

1. Add the custom domain `peter.nibot.africa` in **Vercel → Project → Settings → Domains**.
2. Update the DNS records to the values Vercel provides.
3. If the site keeps its old URLs, add redirects in `next.config.ts` (`redirects()`) for any legacy WordPress paths.

## Project structure

```
src/
  app/            # routes (App Router)
  components/     # header, footer, cards, gallery, forms, icons, UI primitives
  data/           # all site content
  lib/            # small utilities
public/
  images/         # optimized WebP assets
  videos/         # compressed workshop video
```
