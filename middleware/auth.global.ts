import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware(async (to, from) => {
  // موقتاً چک کردن وضعیت احراز هویت غیرفعال شده است
  console.log('Auth middleware is temporarily disabled.')
})