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
      <AdminHeader :toggleSidebar="toggleSidebar" :toggleTheme="toggleTheme" :isDark="isDark" />

      <!-- Page Content -->
      <main class="p-4 md:p-6">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '~/layouts/admin/Header.vue'
import AdminSideBar from '~/layouts/admin/SideBar.vue'

const isUserMenuOpen = ref(false)
const isSidebarOpen = ref(true)
const { isDark, toggleTheme } = useTheme()

onMounted(() => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    isSidebarOpen.value = false
  }
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>