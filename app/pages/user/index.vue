<template>
  <div class="animate-fade-in">
    <h1 class="text-2xl font-bold mb-6">Welcome to Food App</h1>
    
    <!-- Featured section -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Featured Deals</h2>
      <div class="relative overflow-hidden rounded-lg h-48 md:h-64">
        <img 
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Featured deal" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500/80 to-transparent flex items-center">
          <div class="p-6 text-white">
            <h3 class="text-xl md:text-2xl font-bold mb-2">Fresh vegetables</h3>
            <p class="mb-4">Get 20% off on your first order</p>
            <button class="bg-white text-primary-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Categories section -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Categories</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div v-for="(category, index) in categories" :key="index" class="card hover:shadow-lg transition p-4 text-center">
          <img :src="category.image" :alt="category.name" class="w-16 h-16 mx-auto mb-2 object-cover rounded-full" />
          <h3 class="font-medium text-gray-800">{{ category.name }}</h3>
        </div>
      </div>
    </section>
    
    <!-- Popular restaurants section -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Popular Restaurants</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(restaurant, index) in restaurants" :key="index" class="card hover:shadow-lg transition overflow-hidden">
          <img :src="restaurant.image" :alt="restaurant.name" class="w-full h-40 object-cover" />
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-bold text-lg">{{ restaurant.name }}</h3>
              <div class="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{{ restaurant.rating }}</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm mb-3">{{ restaurant.cuisine }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ restaurant.deliveryTime }}</span>
              <span class="mx-2">•</span>
              <span>{{ restaurant.deliveryFee }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Sample data
const categories = [
  { name: 'Pizza', image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Burgers', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Sushi', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Salad', image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Dessert', image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Drinks', image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=150' },
];

const restaurants = [
  {
    name: 'Pizza Palace',
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'Italian • Pizza • Pasta',
    rating: '4.8',
    deliveryTime: '30-45 min',
    deliveryFee: '$2.99'
  },
  {
    name: 'Burger King',
    image: 'https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'American • Burgers • Fast Food',
    rating: '4.5',
    deliveryTime: '25-40 min',
    deliveryFee: '$1.99'
  },
  {
    name: 'Sushi World',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'Japanese • Sushi • Asian',
    rating: '4.7',
    deliveryTime: '35-50 min',
    deliveryFee: '$3.99'
  }
]

// Define the title for this page
useHead({
  title: 'Home - Food App'
})
definePageMeta({
  layout: 'user',
  middleware: ['sanctum:auth'],

})
</script>