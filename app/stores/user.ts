import { defineStore } from 'pinia';
import type { permission } from 'process';

interface User {
  id: number;
  companyId: number;
  name: string;
  mobile: string;
  email: string;
  userName: string;
  lastPasswordChange: string;
  gender: string;
  permissions: string[];
  modules: string[];
  employeeId: string;
  contractType: number;
  kudosPoint: number;
  kudosPointActive: number;
  avatar: string;
  linkedInUrl: string;
  basalamUrl: string;
  startedAt: string;
  deactivatedAt: string;
  createdAt: string;
  settlementAt: string;
  tahdigCredits: number;
  defaultSalonId: number;
  params: string[];
  verifyCode: string;
}

interface LoginCredentials {
  mobile: string;
  password: string;
  'h-captcha-response': string;
}

export const useUserStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
    modules: [] as string[],
    permissions: [] as string[],
  }),

  getters: {
    isLoggedIn: (state): boolean => state.isAuthenticated && !!state.user,
    hasPermission: (state) => (action: string): boolean => 
      state.isAuthenticated && 
      state.user?.permissions?.includes(action) || false,
    allPermissions: (state): string[] => 
      state.isAuthenticated ? state.user?.permissions || [] : [],
  },

  actions: {
    setUser(userData: User | null) {
      this.user = userData;
      this.isAuthenticated = !!userData;
      if (userData?.modules) {
        this.modules = userData.modules;
      }
      if (userData?.permissions) {
        this.permissions = userData.permissions;
      }
    },

    async login(credentials: LoginCredentials) {
      try {
        const config = useRuntimeConfig()
       
        // Get CSRF cookie first
        // First get CSRF cookie and token
        await $fetch('/sanctum/csrf-cookie', {
          method: 'GET',
          baseURL: config.public.baseURL,
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        const xsrfToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('XSRF-TOKEN='))
          ?.split('=')[1];

        // Common request options
        const requestOptions = {
          baseURL: config.public.baseURL,
          credentials: 'include' as const,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': xsrfToken ? decodeURIComponent(xsrfToken) : '',
            'X-Requested-With': 'XMLHttpRequest'
          }
        };

        const response = await $fetch<{ user: User; token: string }>('/api/login', {
          ...requestOptions,
          method: 'POST', 
          body: credentials,
        });
        if (response.user && response.token) {
          this.setUser(response.user as User);
          const token = useCookie('auth_token');
          token.value = response.token;
          return true;
        }
        
        return false;
      } catch (error: any) {
        console.error('Login failed:', error);
        if (error.response?.data) {
          console.error('Server error details:', error.response.data);
        }
        this.logout();
        return false;
      }
    },

    async fetchUser() {
      const token = useCookie('auth_token');
      if (!token.value) {
        this.logout();
        return;
      }

      try {
        const userData = await $fetch('/api/v1/profile', {
          headers: {
            'Authorization': `Bearer ${token.value}`
          }
        });
        this.setUser(userData as User);
      } catch {
        this.logout();
      }
    },

    logout() {
      const token = useCookie('auth_token');
      token.value = null;
      this.setUser(null);
      navigateTo('/login');
    },
  },
});