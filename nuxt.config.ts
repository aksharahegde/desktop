// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  runtimeConfig: {
    githubToken: '',
  },
  routeRules: {
    '/api/**': { isr: 60 * 60, swr: 60 * 60 },
  },
  nitro: {
    prerender: {
      routes: ['/api/repos']
    }
  }
})
