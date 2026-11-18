// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: a user site (<user>.github.io) is served from "/",
// a project site from "/<repo>/". Set BASE_PATH in CI for the latter.
const site = process.env.SITE_URL ?? 'https://urszulasologub.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
