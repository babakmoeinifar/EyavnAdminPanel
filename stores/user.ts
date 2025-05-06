import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
    isAuthenticated: true, // موقتاً وضعیت احراز هویت به true تنظیم شده است
    modules: [] as string[], // Ensure modules is always defined
  }),

  actions: {
    async checkAuth() {
      try {
        const response = await axios.get(`${useRuntimeConfig().public.BACKEND_URL}/api/user`, { withCredentials: true })
        this.currentUser = response.data
        this.isAuthenticated = true
        this.modules = response.data.modules || [] // Fetch user permissions
      } catch (error) {
        this.currentUser = null
        this.isAuthenticated = false
        this.modules = []
      }
    },

    async login(credentials) {
      console.log('Login is temporarily disabled.')
    },

    async logout() {
      console.log('Logout is temporarily disabled.')
    }
  }
})