import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'keywords', content: 'adydetra, Adityawarman, Dewa, Putra, SMKN 1 Jakarta, Frontend Developer, Aptrocode' },
        { name: 'author', content: 'Adityawarman Dewa Putra' },
      ],
    },
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  routeRules: {
    '/': {
      prerender: true,
    },
  },

  modules: ['@nuxt/image', '@nuxtjs/sitemap'],

  site: {
    url: 'https://ose.vercel.app',
  },

  devtools: {
    enabled: false,
  },

  sitemap: {
    xsl: false,
  },

  compatibilityDate: '2025-11-19',
});
