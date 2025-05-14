export default defineEventHandler(async (event) => {
  const token = useCookie('auth_token');
  const config = useRuntimeConfig();
  const { data }: any = await $fetch(`${config.public.baseURL}/api/v1/admin/users`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  });
  return data;
})
