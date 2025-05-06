<template>
  <div class="min-h-screen bg-background" dir="rtl">
    <!-- Sidebar -->

    <AdminSideBar :toggleSidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />

    <!-- Main Content -->
    <div :class="[ 
    'transition-all duration-200 ease-in-out',
    isSidebarOpen ? 'md:pr-72' : 'pr-0'
    ]" style="position: relative; z-index: 0;">

      <!-- Navbar -->
      <AdminHeader :toggleSidebar="toggleSidebar" :toggleTheme="toggleTheme" />

      <!-- Page Content -->
      <main class="p-4 md:p-6">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '~/components/ui/admin/Header.vue'
import AdminSideBar from '~/components/ui/admin/SideBar.vue'


const isUserMenuOpen = ref(false)
const isSidebarOpen = ref(true)

onMounted(() => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    isSidebarOpen.value = false // Close by default on mobile
  }
  
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

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

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
</script>