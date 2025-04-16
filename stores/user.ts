import { defineStore } from 'pinia'

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
    isAuthenticated: false
  }),

  getters: {
    isAdmin: (state) => state.currentUser?.role === 'admin',
    userName: (state) => state.currentUser?.name || 'Guest'
  },

  actions: {
    login(user: User) {
      this.currentUser = user
      this.isAuthenticated = true
    },

    logout() {
      this.currentUser = null
      this.isAuthenticated = false
    }
  }
}) 