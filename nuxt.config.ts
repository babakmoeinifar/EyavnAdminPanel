// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dir: {
    app: 'app'
  },
  compatibilityDate: '2024-03-20',
  devtools: { enabled: false },
  devServer: {
    host: 'front.test',
    port: 3000
  },

  future: { compatibilityVersion: 4 },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@nuxt/fonts'],

  plugins: [
   
  ],

  tailwindcss: { exposeConfig: false },
  components: {
    dirs: [
      {
        path: '~/components/ui',
        extensions: ['.vue'],
        prefix: 'Ui'
      }
    ]
  },
  css: ['~/assets/css/main.css', '~/assets/css/styles.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: false,
    head: {
      title: 'ایـوان',
      htmlAttrs: {
        lang: 'fa',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'سامانه ایوان' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

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
      baseURL: process.env.BACKEND_URL || 'http://localhost/api',
      baseURLCSRF: process.env.BACKEND_URL_CSRF || 'http://localhost',
      hcaptchaSiteKey: process.env.HCAPTCHA_SITEKEY || '10000000-ffff-ffff-ffff-000000000001',
      hcaptchaDevSiteKey: '10000000-ffff-ffff-ffff-000000000001',

    },
  }
})
