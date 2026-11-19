import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Set SITE/BASE_PATH in the deploy workflow; defaults are for the real domain.
  site: process.env.SITE || 'https://deltafacilitiessolutions.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
