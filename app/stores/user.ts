import { defineStore } from 'pinia';
import { getCookie } from '~/utils/cookies';
import { useApiFetch } from '~/composables/useApiFetch'

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
    isAuthenticated: ref(false),
    modules: [] as string[],
    permissions: [] as string[],
  }),

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,

    hasPermission: (state) => (action: string): boolean => 
      state.isAuthenticated && 
      state.user?.permissions?.includes(action) || false,

    allPermissions: (state): string[] => 
      state.isAuthenticated ? state.user?.permissions || [] : [],
  },

  actions: {
    setUser(userData: User | null) {
      this.user = userData;
      this.isAuthenticated = true;

      if (userData?.modules) {
        this.modules = userData.modules;
      }
      if (userData?.permissions) {
        this.permissions = userData.permissions;
      }
    },

    async login(credentials: LoginCredentials) {
      try {
        await this.ensureCsrfCookie();

        const xsrfToken = getCookie('XSRF-TOKEN');

        const headers: Record<string, string> = {
          'Accept': 'application/json',
        };

        if (xsrfToken) {
          headers['X-XSRF-TOKEN'] = xsrfToken;
        }

        const {data} = await useApiFetch('login', {
          method: 'POST',
          body: credentials,
        });

        if (data.value.user && data.value.token) {
          this.setUser(data.value.user as User);
          const token = useCookie('auth_token');
          token.value = data.value.token;
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
        const {userData} : any = await useApiFetch(`/user`);
        this.setUser(userData.value as User);
      } catch {
        this.logout();
      }
    },

    async logout() {
      const token = useCookie('auth_token');

      const { data, error } = await useApiFetch('logout', {
        method: 'POST'
      });
    
      if(error.value?.statusCode === 401) {
        token.value = null;
        useCookie('auth_token').value = null;
        this.setUser(null);
        window.location.reload();
      }
      
      if (!error.value) {
        token.value = null;
        useCookie('auth_token').value = null;
        this.setUser(null);
        window.location.reload();
      } else {
        console.error('Logout failed with status:', error.value?.statusCode, 'Message:', error.value?.message);
      }
    },

    async ensureCsrfCookie() {
      const config = useRuntimeConfig()
      try {
        await $fetch(`${config.public.baseURLCSRF}/sanctum/csrf-cookie`, {
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