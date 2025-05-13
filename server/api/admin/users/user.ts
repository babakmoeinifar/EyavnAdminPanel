export default defineEventHandler(async (event) => {
  const token = useCookie('auth_token');
  const config = useRuntimeConfig();
  const { id } = getRouterParams(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'آی دی کاربر مورد نظر صحیح نیست.'
    });
  }

  const { data }: any = await $fetch(`${config.public.baseURL}/api/v1/admin/user/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  });
  return data;
})
