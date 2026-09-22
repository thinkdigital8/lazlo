// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lazloindia.com',
  trailingSlash: 'always',
  redirects: {
    '/liquid-metal/patina/': '/patina/',
    '/liquid-metal/chrome/': '/chrome/',
  },
  integrations: [sitemap()],
  image: {
    domains: [],
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
