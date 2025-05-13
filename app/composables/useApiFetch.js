export function useApiFetch(endpoint, options = {}) {
  const config = useRuntimeConfig()
  
  // Build the full URL if endpoint doesn't start with http
  const url = endpoint.startsWith('http')
    ? endpoint
    : endpoint.startsWith('/')
      ? `${config.public.baseURL}${endpoint}`
      : `${config.public.baseURL}/${endpoint}`
  
  // Get the token from cookie on client side
  const token = process.client ? useCookie('auth_token').value : null
  
  // Create headers with auth token if available
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers
  }
  
  return useFetch(url, {
    ...options,
    headers,
    credentials: 'include', // Required for CSRF cookie
  })
}