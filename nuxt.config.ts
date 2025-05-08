// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dir: {
    app: 'app'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@nuxt/fonts'],
  components: {
    dirs: [
      {
        path: '~/components/ui',
        extensions: ['.vue'],
        prefix: 'Ui'
      }
    ]
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
      ],
      script: [
        {
          innerHTML: `
            (function() {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.BACKEND_URL || 'http://localhost' // Ensure default value is correct
    }
  }
  })