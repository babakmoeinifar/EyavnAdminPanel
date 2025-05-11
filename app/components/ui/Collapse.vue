<template>
  <div>
    <button
      @click="toggleCollapse"
      class="flex w-full items-center justify-between px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
    >
      <slot name="header" />
      <span :class="{ 'rotate-180': isOpen }" class="transition-transform">
        <ChevronDownIcon class="h-4 w-4" />
      </span>
    </button>
    <div
      v-show="isOpen"
      class="my-4 pr-12 border-l border-border"
    >
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from 'lucide-vue-next'

const isOpen = ref(false)

const toggleCollapse = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>