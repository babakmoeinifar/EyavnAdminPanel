<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="w-full max-w-md space-y-8 p-8 bg-card rounded-lg border">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Welcome Back</h1>
        <p class="text-muted-foreground">Sign in to your account</p>
      </div>

      <div class="space-y-4">
        <button
          @click="login('admin')"
          class="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          <UserIcon class="h-4 w-4" />
          Login as Admin
        </button>

        <button
          @click="login('user')"
          class="w-full flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/90"
        >
          <UserIcon class="h-4 w-4" />
          Login as User
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from 'lucide-vue-next'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

const login = (role: 'admin' | 'user') => {
  userStore.login({
    id: '1',
    name: role === 'admin' ? 'Admin User' : 'Regular User',
    email: `${role}@example.com`,
    role
  });
  if (role === 'admin') {
    navigateTo('/admin')
  } else {
    navigateTo('/user')
  }
}
</script> 