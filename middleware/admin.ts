// import { useUserStore } from '~/stores/user'

// export default defineNuxtRouteMiddleware((to) => {
//   const userStore = useUserStore()
  
//   if (!userStore.isAuthenticated) {
//     return navigateTo('/login')
//   }
  
//   if (!userStore.isAdmin) {
//     return navigateTo('/user')
//   }
// }) 