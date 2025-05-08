<template>
  <header class="sticky top-0 z-40 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="flex h-full items-center justify-between px-6">
      <div class="flex items-center gap-2">
        <Button 
          @click="props.toggleSidebar" 
          variant="ghost"
          size="icon"
          aria-label="Toggle sidebar menu"
        >
          <MenuIcon class="h-5 w-5" />
        </Button>
        <h1 class="text-lg font-semibold">داشبورد</h1>
      </div>
      <div class="flex items-center gap-4">
        <Button 
          @click="toggleDarkMode"
          variant="ghost"
          size="icon"
          :aria-label="props.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <SunIcon v-if="!props.isDark" class="h-5 w-5" />
          <MoonIcon v-else class="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost"
          size="icon"
          aria-label="View notifications"
        >
          <BellIcon class="h-5 w-5" />
        </Button>
        <div class="relative">
          <Button 
            @click="isUserMenuOpen = !isUserMenuOpen"
            variant="ghost"
            class="flex items-center gap-2"
            :aria-expanded="isUserMenuOpen"
            aria-haspopup="true"
          >
            <div class="h-8 w-8 rounded-full bg-primary"></div>
            <span class="hidden sm:inline text-sm font-medium">مدیر</span>
            <ChevronDownIcon class="h-4 w-4" />
          </Button>
          
          <!-- Dropdown Menu -->
          <div 
            v-if="isUserMenuOpen"
            class="absolute left-0 top-full mt-2 w-48 rounded-lg border bg-card shadow-lg"
            role="menu"
          >
            <div class="p-2">
              <NuxtLink 
                to="/admin/profile" 
                class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                role="menuitem"
                @click="isUserMenuOpen = false"
              >
                <UserIcon class="h-4 w-4" />
                پروفایل
              </NuxtLink>
              <NuxtLink 
                to="/admin/messages" 
                class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                role="menuitem"
                @click="isUserMenuOpen = false"
              >
                <MessageSquareIcon class="h-4 w-4" />
                پیام‌ها
              </NuxtLink>
              <NuxtLink 
                to="/admin/settings" 
                class="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                role="menuitem"
                @click="isUserMenuOpen = false"
              >
                <SettingsIcon class="h-4 w-4" />
                تنظیمات
              </NuxtLink>
              <Button 
                variant="ghost"
                class="flex w-full items-center gap-2 text-sm text-destructive hover:bg-accent justify-start"
                role="menuitem"
                @click="isUserMenuOpen = false"
              >
                <LogOutIcon class="h-4 w-4" />
                خروج
              </Button>
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
import { Button } from '@/components/ui/button'

const props = defineProps<{
  toggleSidebar: () => void;
  toggleTheme: () => void;
  isDark: boolean;
}>()

const isUserMenuOpen = ref(false)

function toggleDarkMode() {
  props.toggleTheme()
}

onMounted(() => {
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
      isUserMenuOpen.value = false
    }
  })
})
</script>