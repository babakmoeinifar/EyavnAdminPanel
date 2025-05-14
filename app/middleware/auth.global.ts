export default defineNuxtRouteMiddleware(async (to) => {
  const userStore = useUserStore();
  const publicRoutes = ['/login', '/'];

  // If user is logged in and trying to access login page, redirect to user dashboard
  if (userStore.isLoggedIn && to.path === '/login') {
    return navigateTo('/user')
  }

  // Allow access to public routes without authentication
  if (publicRoutes.includes(to.path)) {
    return
  }

  // If not logged in, redirect to login page
  if (!userStore.isLoggedIn) {
    return navigateTo('/login')
  }

  // Only fetch user data if we don't have it yet and user is logged in
  if (userStore.isLoggedIn && !userStore.user) {
    try {
      await userStore.fetchUser()
    } catch (error) {
      // Only redirect to login if we're not already on the login page
      if (to.path !== '/login') {
        return navigateTo('/login')
      }
    }
  }
})