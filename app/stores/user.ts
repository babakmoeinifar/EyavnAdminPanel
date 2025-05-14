import { defineStore } from 'pinia';
import { useApiFetch } from '~/composables/useApiFetch';

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

export const useUserStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const modules = ref<string[]>([]);
  const permissions = ref<string[]>([]);

  const isLoggedIn = computed(() => isAuthenticated.value);
  const hasPermission = (action: string): boolean =>
    isAuthenticated.value && user.value?.permissions?.includes(action) || false;
  const allPermissions = computed(() =>
    isAuthenticated.value ? user.value?.permissions || [] : []
  );

  function setUser(userData: User | null) {
    user.value = userData;
    isAuthenticated.value = !!userData;
    modules.value = userData?.modules || [];
    permissions.value = userData?.permissions || [];
  }

  async function login(credentials: LoginCredentials) {
    try {
      const { data } = await useApiFetch('login', {
        method: 'POST',
        body: credentials,
      });
      if (data.value.user && data.value.token) {
        setUser(data.value.user as User);
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
      return false;
    }
  }

  async function fetchUser() {
    const token = useCookie('auth_token');
    if (!token.value) {
      logout();
      return;
    }
    try {
      // Only fetch user data if we don't already have it
      if (!user.value) {
        const { userData }: any = await useApiFetch(`/user`);
        setUser(userData.value as User);
      }
    } catch {
      logout();
    }
  }

  async function logout() {
    const token = useCookie('auth_token');
    const { data, error } = await useApiFetch('logout', {
      method: 'POST',
    });
    if (error.value?.statusCode === 401) {
      token.value = null;
      useCookie('auth_token').value = null;
      setUser(null);
      await navigateTo('/');
    }
    if (!error.value) {
      token.value = null;
      useCookie('auth_token').value = null;
      setUser(null);
      await navigateTo('/');
    } else {
      console.error('Logout failed with status:', error.value?.statusCode, 'Message:', error.value?.message);
    }
  }

  return {
    user,
    isAuthenticated,
    modules,
    permissions,
    isLoggedIn,
    hasPermission,
    allPermissions,
    setUser,
    login,
    fetchUser,
    logout,
  };
}, {
  persist: true
});