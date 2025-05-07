import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware(async (to) => {
  const userStore = useUserStore();
  const publicRoutes = ['/login', '/'];

  if (publicRoutes.includes(to.path)) {
    // If logged in and trying to access login page, redirect to appropriate dashboard
    if (userStore.isLoggedIn && to.path === '/login') {
      return navigateTo(userStore.hasPermission('admin') ? '/admin' : '/user')
    }
    return
  }

  // if (!userStore.isLoggedIn) {
  //   await userStore.fetchUser()
    
  //   if (!userStore.isLoggedIn) {
  //     return navigateTo('/login')
  //   }
  // }
})