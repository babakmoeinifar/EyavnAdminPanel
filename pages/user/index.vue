<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">User Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- User Stats -->
      <div class="bg-card p-6 rounded-lg border">
        <h3 class="text-lg font-semibold mb-2">Your Activity</h3>
        <p class="text-3xl font-bold">24</p>
        <p class="text-sm text-muted-foreground">Tasks completed this week</p>
      </div>
      <div class="bg-card p-6 rounded-lg border">
        <h3 class="text-lg font-semibold mb-2">Points</h3>
        <p class="text-3xl font-bold">1,234</p>
        <p class="text-sm text-muted-foreground">Total points earned</p>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="mt-8">
      <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
      <div class="bg-card rounded-lg border">
        <div class="p-4 border-b">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium">Task Completed</p>
              <p class="text-sm text-muted-foreground">2 hours ago</p>
            </div>
            <span class="text-green-500">+10 points</span>
          </div>
        </div>
        <div class="p-4 border-b">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium">New Achievement</p>
              <p class="text-sm text-muted-foreground">1 day ago</p>
            </div>
            <span class="text-green-500">+50 points</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'user'
})
</script> 