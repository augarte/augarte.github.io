// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://augarte.github.io',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
