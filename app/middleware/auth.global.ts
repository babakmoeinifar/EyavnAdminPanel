import { useUserStore } from '@/stores/user';

export default defineNuxtRouteMiddleware(async (to) => {
  
  const userStore = useUserStore();
  const publicRoutes = ['/login', '/'];



  // if (publicRoutes.includes(to.path)) {
  //   if (userStore.isLoggedIn && to.path === '/login') {
  //     return navigateTo('/user')
  //   }
  //   return
  // }
  // userStore.fetchUser();

  // if (!userStore.isLoggedIn) {
  //   return navigateTo('/login')
    
  // }
})
