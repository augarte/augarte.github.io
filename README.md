# Aimar Ugarte’s portfolio

A personal site for Aimar Ugarte, an iOS engineer. Built with Astro.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the static site in `dist/`. Run `npm run preview` to inspect that build locally.

## Site content and brand

- Edit app contributions, project descriptions, repository links, and experience in `src/data/content.ts`.
- `/links` (`src/pages/links.astro`) is a link-in-bio page. It lists every project with a repository link from `content.ts`, plus the portfolio, GitHub, LinkedIn and email.
- Keep project screenshots in `public/` and provide descriptive alt text.
- `public/favicon.svg` is the cropped logo tile, with an ICO fallback for smaller browser icons and `public/apple-touch-icon.png` for iOS home screens. `public/social-preview.png` is the image shown in link previews.

## Publishing

The production address is [augarte.github.io](https://augarte.github.io/). GitHub Actions builds pull requests targeting `main` and deploys pushes to `main` to GitHub Pages.

On GitHub Free, this repository must be public to serve the portfolio at that address.

## License

The site source code is available under the [MIT License](LICENSE). Portfolio copy, screenshots, and branding are excluded from that license. Third-party assets retain their respective licenses.
