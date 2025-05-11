<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#01664d] to-white p-4" dir="rtl">
    <div class="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
      <div class="mb-8">
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/img/Logo.png" class="w-32 mx-auto" alt="Logo">
        </NuxtLink>
      </div>

      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-gray-900">
          {{ error?.statusCode === 404 ? '404' : 'خطا' }}
        </h1>
        
        <p class="text-lg text-gray-600">
          {{ error?.statusCode === 404 
            ? 'متأسفانه صفحه مورد نظر شما یافت نشد'
            : 'متأسفانه خطایی رخ داده است' 
          }}
        </p>

        <div class="flex justify-center gap-4">
          <button
            @click="handleError"
            class="px-6 py-2 text-sm font-medium text-white bg-[#01664d] rounded-lg hover:bg-[#01664d]/90 transition-colors duration-200"
          >
          بازگشت به خانه
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    message?: string
  }
}>()

const handleError = () => {
  clearError()
  navigateTo('/')
}
</script>
