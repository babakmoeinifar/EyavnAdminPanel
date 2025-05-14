import { useUserStore } from '@/stores/user';

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()

  
  // if (!userStore.hasPermission('admin')) {
  //   return abortNavigation({
  //     statusCode: 403,
  //     message: 'You do not have permission to access this page.',
  //   })
  // }
})