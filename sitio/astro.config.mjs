// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lucianoflores1.github.io',
  base: '/hospital-onativia',
  trailingSlash: 'ignore',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
