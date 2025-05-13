import { useUserStore } from '@/stores/user';

export default defineNuxtRouteMiddleware(async (to) => {
  
  const userStore = useUserStore();
  const publicRoutes = ['/login', '/'];

  const token = useCookie('auth_token');
  // if(token.value&& to.path === '/login') {
  //   return navigateTo('/user')
  // }

  if (publicRoutes.includes(to.path)) {
    if (userStore.isLoggedIn && to.path === '/login') {
      return navigateTo('/user')
    }
    return
  }

  if (!userStore.isLoggedIn) {
    await userStore.fetchUser()
    
    if (!userStore.isLoggedIn) {
      return navigateTo('/login')
    }
  }
})
