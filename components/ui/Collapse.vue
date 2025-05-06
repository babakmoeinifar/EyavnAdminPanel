<template>
  <div>
    <button
      @click="toggleCollapse"
      :class="buttonClasses"
    >
      <slot name="header" />
      <span :class="{ 'rotate-180': isOpen }" class="transition-transform">
        <ChevronDownIcon class="h-4 w-4" />
      </span>
    </button>
    <div
      v-show="isOpen"
      class="my-4 pr-12 border-l border-gray-200"
    >
      <slot name="body" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronDownIcon } from 'lucide-vue-next'

const isOpen = ref(false)

const toggleCollapse = () => {
  isOpen.value = !isOpen.value
}

const isDarkMode = ref(false)

const buttonClasses = computed(() => {
  return [
    'flex w-full items-center justify-between px-4 py-2 text-sm font-medium rounded-md',
    isDarkMode.value ? 'hover:bg-gray-800' : 'hover:bg-green-900 hover:text-white',
  ]
})
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>