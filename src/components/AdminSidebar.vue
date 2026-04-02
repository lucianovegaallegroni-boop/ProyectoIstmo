<template>
  <aside class="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-50">
    <div class="flex flex-col h-full p-4">
      <div class="flex items-center gap-3 px-4 py-6 mb-6">
        <img src="@/assets/logo.png" alt="Istmo Games Logo" class="w-10 h-10 object-contain"/>
        <div>
          <h2 class="text-lg font-extrabold text-sky-900 dark:text-sky-100 tracking-tight leading-tight">Istmo Games</h2>
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Admin</p>
        </div>
      </div>

      <nav class="flex-1 space-y-1">
        <router-link v-for="link in links" :key="link.path" :to="link.path" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out font-semibold text-sm"
          :class="[ $route.path === link.path ? 'bg-white dark:bg-sky-900/30 text-sky-900 dark:text-sky-100 shadow-sm border-r-4 border-sky-600 dark:border-sky-400' : 'text-slate-600 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-800 dark:hover:text-sky-200' ]">
          <span class="material-symbols-outlined">{{ link.icon }}</span>
          {{ link.label }}
        </router-link>
      </nav>

      <div class="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
        <router-link to="/admin/inventory/upload" class="w-full bg-gradient-to-r from-primary to-primary-container text-white rounded-lg py-3 px-4 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mb-6 hover:scale-[1.02] active:scale-95 transition-transform duration-200">
          <span class="material-symbols-outlined text-sm">add</span>
          Nuevo Producto
        </router-link>
        <a href="#" class="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 transition-all duration-300 ease-in-out font-semibold text-sm">
          <span class="material-symbols-outlined">logout</span>
          Cerrar Sesión
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup>
const links = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/admin/inventory', label: 'Inventario', icon: 'inventory_2' },
  { path: '/admin/inventory/upload', label: 'Product Upload', icon: 'upload_file' },
  { path: '/admin/orders', label: 'Orders', icon: 'shopping_cart' },
]
</script>
