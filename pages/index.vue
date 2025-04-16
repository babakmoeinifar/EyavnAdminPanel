<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to Dashboard</h1>
      <NuxtLink to="/admin" class="mt-4 px-4 py-2 border border-gray-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out focus:outline-none">admin panel</NuxtLink>
      <NuxtLink to="/user" class="mt-4 px-4 py-2 border border-gray-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out focus:outline-none">user panel</NuxtLink>
      <NuxtLink to="/login" class="mt-4 px-4 py-2 border border-gray-400 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out focus:outline-none">login</NuxtLink>
    </div>
  </div>
</template> 