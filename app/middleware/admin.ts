import { useUserStore } from '@/stores/user';

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  
  if (!userStore.isLoggedIn || !userStore.hasPermission('admin')) {
    return navigateTo('/login')
  }
})