<template>
  <div class="min-h-screen flex flex-col">
    <ClientOnly>
      <Header />
    </ClientOnly>
    <div class="flex flex-1 relative">
      <main class="flex-1 p-4 md:p-6">
        <slot />
      </main>
    </div>
    <ClientOnly>
      <Navbar class="md:hidden" />
    </ClientOnly>
  </div>
</template>

<script setup>
import Header from '~/layouts/user/Header.vue';
import Navbar from '~/layouts/user/NavBar.vue';

const isUserMenuOpen = ref(false)
const isSidebarOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

// Move dir setting to client-side only
onMounted(() => {
  useHead({
    htmlAttrs: {
      dir: 'rtl'
    }
  })

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    isSidebarOpen.value = false
  }
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>