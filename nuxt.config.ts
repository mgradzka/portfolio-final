// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  modules: ['@nuxt/fonts', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'theme-color', content: '#ebebeb' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/og-image.png' },
      ],
    },
  },

  fonts: {
    families: [{ name: 'Montserrat', provider: 'google', weights: [400, 500, 600, 700] }],
  },

  icon: {
    // Icons are bundled at build time, so the static site makes no runtime API calls
    serverBundle: { collections: ['simple-icons', 'ph'] },
    clientBundle: { scan: true },
  },

  // Keep the URLs of the previous (Vue CLI) version working
  routeRules: {
    '/home': { redirect: { to: '/', statusCode: 301 } },
    '/case': { redirect: { to: '/case-studies', statusCode: 301 } },
    '/case/case1': { redirect: { to: '/case-studies/plant-app', statusCode: 301 } },
    '/case/case2': { redirect: { to: '/case-studies', statusCode: 301 } },
    '/case/case3': { redirect: { to: '/case-studies/task-portal', statusCode: 301 } },
    '/case/case4': { redirect: { to: '/case-studies/eridonna-webshop', statusCode: 301 } },
  },

  nitro: {
    prerender: { crawlLinks: true, routes: ['/'] },
  },
})
