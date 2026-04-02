<template>
  <nav class="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-t-2xl shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] z-50">
    <router-link v-for="link in links" :key="link.path" :to="link.path" 
      class="flex flex-col items-center justify-center cursor-pointer tap-highlight-transparent px-2 w-full text-center"
      :class="[ $route.path === link.path ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-xl py-1 active:scale-90 transition-transform' : 'text-slate-400 dark:text-slate-500 hover:text-sky-600 transition-colors' ]">
      <span class="material-symbols-outlined" :style="$route.path === link.path ? 'font-variation-settings: \'FILL\' 1;' : ''">{{ link.icon }}</span>
      <span class="font-['Plus_Jakarta_Sans'] text-[10px] mt-1 tracking-tight" :class="[ $route.path === link.path ? 'font-bold' : 'font-medium' ]">{{ link.label }}</span>
    </router-link>
  </nav>
</template>

<script setup>
const links = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/admin/inventory', label: 'Stock', icon: 'inventory_2' },
  { path: '/admin/inventory/upload', label: 'Upload', icon: 'upload_file' },
  { path: '/admin/orders', label: 'Orders', icon: 'shopping_cart' },
]
</script>

<style scoped>
.tap-highlight-transparent {
  -webkit-tap-highlight-color: transparent;
}
</style>
