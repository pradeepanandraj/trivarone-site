import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.trivarone.com.au',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    mdx(),
    // /thanks/ is the post-form page; it carries noindex and stays out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/thanks/') }),
  ],
});
