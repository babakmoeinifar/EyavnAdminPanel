import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  
  // Temporarily disabled authentication check
  if (!userStore.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
  
  // If authenticated and trying to access login page
  if (userStore.isAuthenticated && to.path === '/login') {
    return navigateTo(userStore.isAdmin ? '/admin' : '/user')
  }
  
  // If authenticated and on root path
  if (userStore.isAuthenticated && to.path === '/') {
    return navigateTo(userStore.isAdmin ? '/admin' : '/user')
  }
}) 