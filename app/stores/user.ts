import { defineStore } from 'pinia';
import { getCookie } from '~/utils/cookies';

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

        await this.ensureCsrfCookie();

        const xsrfToken = getCookie('XSRF-TOKEN');

        const headers: Record<string, string> = {
          'Accept': 'application/json',
        };

        if (xsrfToken) {
          headers['X-XSRF-TOKEN'] = xsrfToken;
        }

        const loggedInUser = await $fetch<{ user: User; token: string }>(`${config.public.baseURL}/api/login`, {
          method: 'POST',
          body: credentials,
          headers: headers,
          credentials: 'include',
        });
        console.log('Login successful:', loggedInUser);

        if (loggedInUser.user && loggedInUser.token) {
          this.setUser(loggedInUser.user as User);
          const token = useCookie('auth_token');
          token.value = loggedInUser.token;
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

    async ensureCsrfCookie() {
      const config = useRuntimeConfig()
      try {
        await $fetch(`${config.public.baseURL}/sanctum/csrf-cookie`, {
          method: 'GET',
          credentials: 'include',
        });
      } catch (error) {
        console.error('Failed to fetch CSRF cookie:', error);
        // Handle this error appropriately, maybe prevent login
        throw new Error('Could not initialize session. Please try again.');
      }
    }
  },
});