# Aimar Ugarte’s portfolio

A personal site for Aimar Ugarte, an iOS engineer. Built with Astro and Tailwind CSS.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the static site in `dist/`. Run `npm run preview` to inspect that build locally.

## Site content and brand

- Edit app contributions, project descriptions, repository links, and experience in `src/data/content.ts`.
- Keep project screenshots in `public/` and provide descriptive alt text.
- `public/wordmark.svg` is the full stacked logo. `public/favicon.svg` is the cropped tile, with an ICO fallback for smaller browser icons. `public/social-preview.png` uses the wordmark for link previews.

## Publishing

The production address is [augarte.github.io](https://augarte.github.io/). GitHub Actions builds pull requests targeting `main` and deploys pushes to `main` to GitHub Pages.

On GitHub Free, this repository must be public to serve the portfolio at that address.
