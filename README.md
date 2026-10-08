# Saurabh Bhatia — Senior Technical Program Manager Portfolio

Dark-only, single-page portfolio built with **Next.js 15 (App Router) + Tailwind v4** and exported as a **fully static site** for Cloudflare Pages.

## Stack

- Next.js 15.5 (App Router, `output: 'export'`)
- Tailwind CSS v4 (`@custom-variant dark` — dark-only theme, `html` always carries `class="dark"`)
- lucide-react icons · Inter + JetBrains Mono fonts
- 8 section components in `components/` composed by a slim `app/page.tsx`
- `app/opengraph-image.tsx` generates the OG share image at build time

## Run locally

Requires [bun](https://bun.sh) (or npm — scripts are bun-run compatible).

```bash
bun install
bun run dev        # dev server on :3000
bun run lint       # eslint
bun run build      # static export -> ./out
bun run preview:export  # serve ./out on :3111 (bunx serve)
```

> Note: `bun run start` (next start) does **not** work with `output: 'export'`.
> Use `bun run preview:export` to preview the production build.

## Deploy to Cloudflare Pages

The build output is fully static (`./out`), so Pages serves it with zero runtime.

### Option A — Git integration (automatic deploys on push)

1. Push this repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → **Create → Pages → Connect to Git**.
3. Select the repo; framework preset: **Next.js**; build command `bun run build` (or `npm run build`); build output directory `out`.
4. Save → Pages builds and serves `https://<project>.pages.dev`.

### Option B — CLI (no GitHub needed)

```bash
bunx wrangler login                 # or set CLOUDFLARE_API_TOKEN
bunx wrangler pages project create saurabh-bhatia-portfolio
bun run deploy:cf                   # build + wrangler pages deploy out
```

`wrangler.toml` already declares `pages_build_output_dir = "out"`.

### After first deploy

- **Custom domain:** Pages → your project → Custom domains.
- **`metadataBase`:** once you have a domain, set it in `app/layout.tsx`
  (currently unset → build prints a benign warning and OG links resolve to localhost in dev).

## Project structure

```
app/
  layout.tsx            # fonts, metadata, <html class="dark">
  page.tsx              # 92L composition: state + scroll-spy + 7 sections
  globals.css           # Tailwind v4 + hero keyframes
  icon.svg              # favicon
  opengraph-image.tsx   # OG share image (ImageResponse)
components/
  SiteHeader.tsx  Hero.tsx  Timeline.tsx  Competencies.tsx
  TechDepth.tsx   Certifications.tsx  Education.tsx  Contact.tsx
wrangler.toml           # Cloudflare Pages config
```

## Content notes

- Contact: email (mailto) · Download CV (`/cv-saurabh-bhatia.pdf` — drop the PDF into `public/`) · LinkedIn.
- Timeline ends Sep 2023 (Adecco @ Google Sydney) by design; the resume PDF carries the 2023–2026 story.
- Metadata keyword set targets Sydney recruiter search for Senior/Staff TPM roles.