<template>
  <div class="animate-fade-in">
    <h1 class="text-2xl font-bold mb-6">Contacts</h1>

    <NuxtLink to="/admin" class="text-blue-500 hover:underline mb-4">
      Go to Admin
    </NuxtLink>
  </div>
</template>
<script setup>  
import { isValidEmail, isValidPassword, isRequired, isEqual } from '~/utils/validators'

const userStore = useUserStore()
const loading = ref(false)
const successMessage = ref('')

const form = ref({
  name: '',
  email: '',
  gender: '',
  avatar: '',
  linkedInUrl: '',
  basalamUrl: '',
  defaultSalonId: '',
})

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  avatar: '',
  linkedInUrl: '',
  basalamUrl: '',
  defaultSalonId: '',
})

const passwordForm = reactive({
  current_password: '',
  password: '',
  password_confirmation: ''
})

const passwordErrors = reactive({
  current_password: '',
  password: '',
  password_confirmation: ''
})

const passwordLoading = ref(false)

onMounted(async () => {
  if (!userStore.user) {
    await userStore.fetchUser()
  }
  
  if (userStore.user) {
    form.name = userStore.user.name
    form.email = userStore.user.email
    form.gender = userStore.user.gender
    form.avatar = userStore.user.avatar
    form.linkedInUrl = userStore.user.linkedInUrl
    form.basalamUrl = userStore.user.basalamUrl
    form.defaultSalonId = userStore.user.defaultSalonId
  }
})

// Validate profile form
const validateProfileForm = () => {
  let isValid = true
  
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.gender = ''
  errors.avatar = ''
  errors.linkedInUrl = ''
  errors.basalamUrl = ''
  errors.defaultSalonId = ''
  
  // Validate name
  if (!isRequired(form.name)) {
    errors.name = 'Name is required'
    isValid = false
  }
  
  // Validate email
  if (!isRequired(form.email)) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Validate gender
  if (!isRequired(form.gender)) {
    errors.gender = 'Gender is required'
    isValid = false
  }

  // Validate avatar
  if (!isRequired(form.avatar)) {
    errors.avatar = 'Avatar is required'
    isValid = false
  }
  
  // Validate defaultSalonId
  if (!isRequired(form.defaultSalonId)) {
    errors.defaultSalonId = 'Default Salon ID is required'
    isValid = false
  }
  
  return isValid
}

// Validate password form
const validatePasswordForm = () => {
  let isValid = true
  
  // Reset errors
  passwordErrors.current_password = ''
  passwordErrors.password = ''
  passwordErrors.password_confirmation = ''
  
  // Validate current password
  if (!isRequired(passwordForm.current_password)) {
    passwordErrors.current_password = 'Current password is required'
    isValid = false
  }
  
  // Validate new password
  if (!isRequired(passwordForm.password)) {
    passwordErrors.password = 'New password is required'
    isValid = false
  } else if (!isValidPassword(passwordForm.password)) {
    passwordErrors.password = 'Password must be at least 8 characters with letters and numbers'
    isValid = false
  }
  
  // Validate password confirmation
  if (!isRequired(passwordForm.password_confirmation)) {
    passwordErrors.password_confirmation = 'Please confirm your new password'
    isValid = false
  } else if (!isEqual(passwordForm.password, passwordForm.password_confirmation)) {
    passwordErrors.password_confirmation = 'Passwords do not match'
    isValid = false
  }
  
  return isValid
}

// Update profile
const updateProfile = async () => {
  if (!validateProfileForm()) return
  
  loading.value = true
  
  try {
    const { data } = await useApiFetch('/user/profile', {
      method: 'PUT',
      body: {
        name: form.name,
        email: form.email,
        gender: form.gender,
        avatar: form.avatar,
        linkedInUrl: form.linkedInUrl,
        basalamUrl: form.basalamUrl,
        defaultSalonId: form.defaultSalonId
      }
    })
    
    // Update the user in the auth store
    authStore.setUser({
      ...authStore.user,
      name: form.name
    })
    
    successMessage.value = 'Profile updated successfully'
  } catch (err) {
    // Handle API errors
    if (err.response?.data?.errors) {
      const apiErrors = err.response.data.errors
      
      // Map backend validation errors to form fields
      if (apiErrors.name) errors.name = apiErrors.name[0]
      if (apiErrors.email) errors.email = apiErrors.email[0]
      if (apiErrors.gender) errors.gender = apiErrors.gender[0]
      if (apiErrors.avatar) errors.avatar = apiErrors.avatar[0]
      if (apiErrors.linkedInUrl) errors.linkedInUrl = apiErrors.linkedInUrl[0]
      if (apiErrors.basalamUrl) errors.basalamUrl = apiErrors.basalamUrl[0]
      if (apiErrors.defaultSalonId) errors.defaultSalonId = apiErrors.defaultSalonId[0]
    }
  } finally {
    loading.value = false
  }
}

// Update password
const updatePassword = async () => {
  if (!validatePasswordForm()) return
  
  passwordLoading.value = true
  
  try {
    await useApiFetch('/user/password', {
      method: 'PUT',
      body: {
        current_password: passwordForm.current_password,
        password: passwordForm.password,
        password_confirmation: passwordForm.password_confirmation
      }
    })
    
    // Reset form
    passwordForm.current_password = ''
    passwordForm.password = ''
    passwordForm.password_confirmation = ''
    
    successMessage.value = 'Password updated successfully'
  } catch (err) {
    // Handle API errors
    if (err.response?.data?.errors) {
      const apiErrors = err.response.data.errors
      
      // Map backend validation errors to form fields
      if (apiErrors.current_password) passwordErrors.current_password = apiErrors.current_password[0]
      if (apiErrors.password) passwordErrors.password = apiErrors.password[0]
      if (apiErrors.password_confirmation) passwordErrors.password_confirmation = apiErrors.password_confirmation[0]
    }
  } finally {
    passwordLoading.value = false
  }
}




</script>
