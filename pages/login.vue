<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="w-full max-w-md space-y-8 p-8 bg-card rounded-lg border">
      <div class="text-center">
        <h1 class="text-2xl font-bold">خوش آمدید</h1>
        <p class="text-muted-foreground">وارد حساب کاربری خود شوید</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="space-y-2">
          <label for="mobile" class="text-sm font-medium">موبایل</label>
          <input
            id="mobile"
            v-model="form.mobile"
            type="tel"
            required
            class="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="شماره موبایل خود را وارد کنید"
            aria-label="شماره موبایل"
          />
        </div>

        <div class="space-y-2">
          <label for="password" class="text-sm font-medium">رمز عبور</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            class="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="رمز عبور خود را وارد کنید"
            aria-label="رمز عبور"
          />
        </div>

        <p v-if="error" class="text-sm text-destructive" role="alert">{{ error }}</p>

        <Button
          type="submit"
          :disabled="loading"
          class="w-full"
        >
          <Loader2Icon v-if="loading" class="h-4 w-4 animate-spin" aria-hidden="true" />
          <span>{{ loading ? 'در حال ورود...' : 'ورود' }}</span>
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2Icon } from 'lucide-vue-next'
import Button from '~/components/ui/Button.vue'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const router = useRouter()

const form = reactive({
  mobile: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

async function handleLogin() {
  try {
    loading.value = true
    error.value = ''
    
    const success = await userStore.login({
      mobile: form.mobile,
      password: form.password
    })

    if (success) {
      const hasAdminPermission = userStore.hasPermission('admin')
      router.push(hasAdminPermission ? '/admin' : '/user')
    } else {
      error.value = 'ورود ناموفق بود. لطفا دوباره تلاش کنید.'
    }
  } catch (e) {
    error.value = 'خطایی رخ داد. لطفا دوباره تلاش کنید.'
  } finally {
    loading.value = false
  }
}
</script>