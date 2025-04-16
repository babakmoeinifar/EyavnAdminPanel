<template>
  <div class="min-h-screen bg-background" dir="rtl">
    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed inset-y-0 right-0 z-50 w-72 bg-card border-l transform transition-transform duration-200 ease-in-out',
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full',
        'md:translate-x-0 md:block', // Always show on desktop unless hidden
        !isSidebarOpen && 'md:hidden' // Hide on desktop when closed
      ]"
    >
      <div class="flex h-16 items-center justify-between border-b px-6">
        <h2 class="text-lg font-semibold">سامانه ایوان</h2>
        <button 
          @click="isSidebarOpen = false"
          class="rounded-md p-2 hover:bg-accent md:hidden"
        >
          <XIcon class="h-5 w-5" />
        </button>
      </div>
      <nav class="p-4">
        <ul class="space-y-2">
          <li>
            <NuxtLink 
              to="/admin" 
              class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
              @click="isSidebarOpen = false"
            >
              <HomeIcon class="h-4 w-4" />
              داشبورد
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/admin/users" 
              class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
              @click="isSidebarOpen = false"
            >
              <UsersIcon class="h-4 w-4" />
              رفقا
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/admin/analytics" 
              class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
              @click="isSidebarOpen = false"
            >
              <BarChartIcon class="h-4 w-4" />
              آمار و گزارشات
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/admin/settings" 
              class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
              @click="isSidebarOpen = false"
            >
              <SettingsIcon class="h-4 w-4" />
              تنظیمات
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div :class="[
      'transition-all duration-200 ease-in-out',
      isSidebarOpen ? 'pr-72' : 'pr-0'
    ]">
      <!-- Navbar -->
      <header class="sticky top-0 z-40 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div class="flex h-full items-center justify-between px-6">
          <div class="flex items-center gap-2">
            <button 
              @click="isSidebarOpen = !isSidebarOpen"
              class="rounded-md p-2 hover:bg-accent"
            >
              <MenuIcon class="h-5 w-5" />
            </button>
            <h1 class="text-lg font-semibold">داشبورد</h1>
          </div>
          <div class="flex items-center gap-4">
            <button 
              @click="toggleTheme"
              class="rounded-full p-2 hover:bg-accent"
              :title="isDark ? 'حالت روشن' : 'حالت تاریک'"
            >
              <SunIcon v-if="isDark" class="h-5 w-5" />
              <MoonIcon v-else class="h-5 w-5" />
            </button>
            <button class="rounded-full p-2 hover:bg-accent">
              <BellIcon class="h-5 w-5" />
            </button>
            <div class="relative">
              <button 
                @click="isUserMenuOpen = !isUserMenuOpen"
                class="flex items-center gap-2 rounded-full p-2 hover:bg-accent"
              >
                <div class="h-8 w-8 rounded-full bg-primary"></div>
                <span class="hidden sm:inline text-sm font-medium">مدیر</span>
                <ChevronDownIcon class="h-4 w-4" />
              </button>
              
              <!-- Dropdown Menu -->
              <div 
                v-if="isUserMenuOpen"
                class="absolute left-0 top-full mt-2 w-48 rounded-lg border bg-card shadow-lg"
              >
                <div class="p-2">
                  <NuxtLink 
                    to="/admin/profile" 
                    class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                    @click="isUserMenuOpen = false"
                  >
                    <UserIcon class="h-4 w-4" />
                    پروفایل
                  </NuxtLink>
                  <NuxtLink 
                    to="/admin/messages" 
                    class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                    @click="isUserMenuOpen = false"
                  >
                    <MessageSquareIcon class="h-4 w-4" />
                    پیام‌ها
                  </NuxtLink>
                  <NuxtLink 
                    to="/admin/settings" 
                    class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                    @click="isUserMenuOpen = false"
                  >
                    <SettingsIcon class="h-4 w-4" />
                    تنظیمات
                  </NuxtLink>
                  <button 
                    class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-accent"
                    @click="isUserMenuOpen = false"
                  >
                    <LogOutIcon class="h-4 w-4" />
                    خروج
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-4 md:p-6">
        <slot />
      </main>

      <!-- Footer -->
      <footer class="border-t p-4">
        <div class="container mx-auto text-center text-sm text-muted-foreground">
          © 2024 پنل مدیریت. تمامی حقوق محفوظ است.
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  HomeIcon, 
  UsersIcon, 
  SettingsIcon, 
  MenuIcon, 
  BellIcon,
  BarChartIcon,
  ChevronDownIcon,
  UserIcon,
  MessageSquareIcon,
  LogOutIcon,
  SunIcon,
  MoonIcon,
  XIcon
} from 'lucide-vue-next'

const isUserMenuOpen = ref(false)
const isSidebarOpen = ref(true) // Start open on desktop
const isDark = ref(false)

// Theme toggle function
const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Check system preference on mount
onMounted(() => {
  // Check if user has a theme preference in localStorage
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    }
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }

  // Save theme preference when changed
  watch(isDark, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  })

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
      isUserMenuOpen.value = false
    }
  })
})
</script> 