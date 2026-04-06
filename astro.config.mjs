// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    alpinejs()
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  i18n: {
    defaultLocale: 'en-us',
    locales: ['en-us', 'pt-br'],
    routing: {
      prefixDefaultLocale: true // Garante que /en-us/ e /pt-br/ sejam sempre exibidos na URL
    }
  }
});