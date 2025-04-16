<template>
  <div class="min-h-screen bg-background">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r">
      <div class="flex h-16 items-center border-b px-4">
        <h2 class="text-lg font-semibold">User Dashboard</h2>
      </div>
      <nav class="p-4">
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/user" class="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent">
              <HomeIcon class="h-4 w-4" />
              Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/user/profile" class="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent">
              <UserIcon class="h-4 w-4" />
              Profile
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/user/settings" class="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent">
              <SettingsIcon class="h-4 w-4" />
              Settings
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Navbar -->
      <header class="sticky top-0 z-40 h-16 border-b bg-background">
        <div class="flex h-full items-center justify-between px-4">
          <div class="flex items-center gap-2">
            <button class="rounded-md p-2 hover:bg-accent">
              <MenuIcon class="h-5 w-5" />
            </button>
          </div>
          <div class="flex items-center gap-4">
            <button class="rounded-full p-2 hover:bg-accent">
              <BellIcon class="h-5 w-5" />
            </button>
            <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-full bg-primary"></div>
              <span>User</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <slot />
      </main>

      <!-- Footer -->
      <footer class="border-t p-4">
        <div class="container mx-auto text-center text-sm text-muted-foreground">
          © 2024 Dashboard. All rights reserved.
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, UserIcon, SettingsIcon, MenuIcon, BellIcon } from 'lucide-vue-next'
</script> 