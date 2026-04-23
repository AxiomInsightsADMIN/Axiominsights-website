import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://axiominsights.org',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
