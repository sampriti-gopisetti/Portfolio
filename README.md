# Sampriti Gopisetti — Portfolio

A personal portfolio built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and Lucide icons.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion (animations)
- Lucide (icons)

## Getting Started
Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

## Build and Static Export
This project is configured for static export suitable for GitHub Pages.

```bash
npm run build
```

- Static files are generated into the `out/` folder.
- Images are unoptimized (`images.unoptimized: true`) to work on GitHub Pages.
- `basePath` and `assetPrefix` are set to `/Portfolio` for project pages (repo: `sampriti-gopisetti/Portfolio`).

If deploying to a user/organization page (`<username>.github.io`), set `basePath` and `assetPrefix` to empty strings in `next.config.mjs`.

## Deploy to GitHub Pages (Option A: gh-pages)
Add a deploy script and publish `out/` to `gh-pages`:

```bash
npm i -D gh-pages
```

Add to `package.json`:

```json
{
  "scripts": {
    "deploy": "gh-pages -d out"
  }
}
```

Then:

```bash
npm run build
npm run deploy
```

Enable GitHub Pages to serve from the `gh-pages` branch.

## Deploy to GitHub Pages (Option B: GitHub Actions)
Create `.github/workflows/deploy.yml` to build and deploy on push to `main`. This will publish the `out/` directory to `gh-pages`.

## Notes
- Background: `#4B352A`
- Headings: `#B2CD9C`
- Subtext under headings: `#F0F2BD`
- Buttons: bg `#B2CD9C`, text `#4B352A`
- Nav brand: `#B2CD9C`; nav links: `#F0F2BD`

## License
All rights reserved.
