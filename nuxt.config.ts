export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@nuxt/image', '@nuxtjs/sitemap', '@vueuse/nuxt', 'nuxt-og-image'],

  srcDir: 'src/',

  site: {
    url: 'https://blog.adydetra.my.id',
  },

  ogImage: {
    fonts: [
      'Outfit:400',
    ],
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  devtools: {
    enabled: false,
  },

  sitemap: {
    xsl: false,
  },
});
