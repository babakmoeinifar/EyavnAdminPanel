export default defineNuxtPlugin(() => {
  // Only set RTL on client-side
  if (process.client) {
    useHead({
      htmlAttrs: {
        dir: 'rtl'
      }
    })
  }
})