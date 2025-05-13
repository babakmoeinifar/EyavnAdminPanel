import { useApiFetch } from '~/composables/useApiFetch'

export const profileApi = {
  getProfile: () => useApiFetch('/v1/profile'),
  
  updateProfile: (data) => useApiFetch('/v1/profile/update', {
    method: 'POST',
    body: data
  }),
  
  updateAvatar: (formData) => useApiFetch('/v1/profile/avatar-update', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}