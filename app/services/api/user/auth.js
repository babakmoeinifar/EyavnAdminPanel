import { useApiFetch } from '~/composables/useApiFetch'

export const authApi = {
  login: (credentials) => useApiFetch('/login', {
    method: 'POST',
    body: credentials
  }),
  
  logout: () => useApiFetch('/logout', {
    method: 'POST'
  }),
  
  getUser: () => useApiFetch('/user'),
  
  forgotPassword: (email) => useApiFetch('/forgot-password', {
    method: 'POST',
    body: { email }
  }),
  
  resetPassword: (data) => useApiFetch('/reset-password', {
    method: 'POST',
    body: data
  }),
  
  googleCallback: () => useApiFetch('/google/callback')
}