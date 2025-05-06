<template>
  <li v-if="hasPermission">
    <Collapse>
      <template #header>
        <div class="flex items-center gap-3">
          <component :is="icon" class="h-4 w-4" />
          {{ title }}
        </div>
      </template>
      <template #body>
        <ul class="space-y-5">
          <li v-for="(item, index) in items" :key="index">
            <NuxtLink 
              :to="item.link" 
              class="block text-sm font-medium hover:text-primary hover:scale-105 transition-all duration-100 ease-in-out"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </template>
    </Collapse>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import Collapse from './Collapse.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: [String, Object],
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  permission: {
    type: String,
    required: true
  },
  userModules: {
    type: Array,
    required: true
  }
})

const hasPermission = computed(() => props.userModules.includes(props.permission) || props.permission === '')
</script>