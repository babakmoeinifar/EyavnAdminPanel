<template>
  <div class="min-h-screen flex flex-col" dir="rtl">
    <Header />
    <div class="flex flex-1 relative">
      <Sidebar class="hidden md:block" />
      <main class="flex-1 p-4 md:p-6">
        <slot />
      </main>
    </div>
    <Navbar class="md:hidden" />
  </div>
</template>

<script setup>
import Header from '~/layouts/user/Header.vue';
import Sidebar from '~/layouts/user/SideBar.vue';
import Navbar from '~/layouts/user/NavBar.vue';

const isUserMenuOpen = ref(false)
const isSidebarOpen = ref(false)
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