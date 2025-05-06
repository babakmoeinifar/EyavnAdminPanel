<template>
  <header class="sticky top-0 z-40 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="flex h-full items-center justify-between px-6">
      <div class="flex items-center gap-2">
        <button 
        @click="props.toggleSidebar" 
        class="rounded-md p-2 hover:bg-accent"
        >
        <MenuIcon class="h-5 w-5" />
      </button>
      <h1 class="text-lg font-semibold">داشبورد</h1>
    </div>
    <div class="flex items-center gap-4">
      <button 
      @click="props.toggleTheme"
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
      >
      <UserIcon class="h-4 w-4" />
      پروفایل
    </NuxtLink>
    <NuxtLink 
    to="/admin/messages" 
    class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
    >
    <MessageSquareIcon class="h-4 w-4" />
    پیام‌ها
  </NuxtLink>
  <NuxtLink 
  to="/admin/settings" 
  class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
  >
  <SettingsIcon class="h-4 w-4" />
  تنظیمات
  </NuxtLink>
  <button 
  class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-accent"
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
</template>

<script setup lang="ts">
import { 
  MenuIcon, 
  SunIcon, 
  MoonIcon, 
  BellIcon, 
  ChevronDownIcon, 
  UserIcon, 
  MessageSquareIcon, 
  SettingsIcon, 
  LogOutIcon 
} from 'lucide-vue-next'

const isUserMenuOpen = ref(false)
const isDark = ref(false)

const props = defineProps<{
  toggleSidebar: () => void;
  toggleTheme: () => void;
}>()
</script>