<template>
  <li v-if="showMenuItem" role="none">
    <Collapse>
      <template #header>
        <div class="flex items-center gap-3">
          <component :is="icon" class="h-4 w-4" aria-hidden="true" />
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

<script setup lang="ts">
import { computed } from 'vue'
import Collapse from './Collapse.vue'
import { usePermissions } from '@/composables/usePermissions'
import { withDefaults, defineProps } from 'vue'

interface MenuItem {
  label: string
  link: string
}

interface Props {
  title: string
  icon: any
  items: MenuItem[]
  module?: string
  permission?: string
  userModules: string[]
}

const props = withDefaults(defineProps<Props>(), {
  module: '',
  permission: ''
})

const { can } = usePermissions()

const showMenuItem = computed(() => {
  const hasRequiredPermission = !props.permission || can(props.permission)
  const hasRequiredModule = !props.module || props.userModules.includes(props.module)
  
  return hasRequiredPermission && hasRequiredModule
})
</script>