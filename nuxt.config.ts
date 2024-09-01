// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everything about nuxt 3' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig: {
    // attach env variable to this runtime config, available on server
    currencyKey: process.env.CURRENCY_API_KEY
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/products': { cors: true }
  }
})
