<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo and back button -->
      <div class="flex items-center">
        <button v-if="showBack" class="p-2 ml-2" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <NuxtLink to="/" class="flex items-center">
          <img src="/" alt="Logo" class="h-10 w-auto" />
          <span class="ml-2 text-xl font-bold text-primary-500">FoodApp</span>
        </NuxtLink>
      </div>

      <!-- Search bar -->
      <div class="flex-1 max-w-md mx-4 relative hidden md:block">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search for dishes, restaurants..."
            class="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- User profile -->
      <div class="flex items-center">
        <button class="p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div class="ml-3 relative">
          <button class="flex items-center">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="User profile" 
              class="h-8 w-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const showBack = ref(false);

// Check if current route needs back button
const route = useRoute();
const router = useRouter();

onMounted(() => {
  showBack.value = router.options.history.state.back !== undefined;
});

const goBack = () => {
  router.back();
};
</script>