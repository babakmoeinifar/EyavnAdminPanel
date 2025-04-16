// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', 'shadcn-nuxt', '@nuxt/fonts'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Eyvan new Panel',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  }
})