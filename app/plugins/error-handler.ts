export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
      console.error('Vue Error:', error)
    }
  
    // Also possible
    nuxtApp.hook('vue:error', (error, instance, info) => {
      console.error('Vue Error:', error)
    })

    nuxtApp.hook('app:error', (error) => {
      console.error('App Error:', error)
    })
  })
  