import { useUserStore } from '~/stores/user';

export const usePermissions = () => {
  const authStore = useUserStore();

  /**
   * Checks if the authenticated user has a specific permission.
   * @param action The permission slug to check.
   * @returns True if the user has the permission, false otherwise.
   */
  const can = (action: string): boolean => {
    return authStore.hasPermission(action);
  };

  return {
    can,
    // You can also expose user or isAuthenticated if needed
    // user: computed(() => authStore.user),
    // isLoggedIn: computed(() => authStore.isLoggedIn),
  };
};