import { defineStore } from 'pinia';

interface User {
  id: number;
  companyId: number;
  name: string;
  mobile: string;
  userName: string;
  lastPasswordChange: string;
  email: string;
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
  deletedAt: string;
  settlementAt: string;
  tahdigCredits: number;
  defaultSalonId: number;
  params: string[];
  verifyCode: string;
}

interface LoginCredentials {
  mobile: string;
  password: string;
}

export const useUserStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
    modules: [] as string[],
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
    },

    async login(credentials: LoginCredentials) {
      try {
        const response = await $fetch<{ user: User; token: string }>('/api/login', {
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
      } catch (error) {
        console.error('Login failed:', error);
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