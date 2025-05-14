export default defineNuxtRouteMiddleware(async (to) => {
  
  const userStore = useUserStore();
  const publicRoutes = ['/login', '/'];

  if (!userStore.isLoggedIn) {
    return navigateTo('/login')
  }

  if (publicRoutes.includes(to.path)) {
    if (userStore.isLoggedIn && to.path === '/login') {
      return navigateTo('/user')
    }
    return
  }
  if (!userStore.user) {
    try {
      await userStore.fetchUser()
    } catch (error) {
      // If fetching user fails, redirect to login
      return navigateTo('/login')
    }
  }
})
