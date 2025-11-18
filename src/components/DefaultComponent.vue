<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">Hello, World!</h1>
      <p class="text-gray-600">
        Welcome to your Vue 3 + Tailwind setup 🎉  
        This is your <span class="font-semibold">DefaultComponent</span>
      </p>
      <RouterLink to="/home">Home</RouterLink>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
