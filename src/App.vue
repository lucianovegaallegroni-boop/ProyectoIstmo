<template>
  <div class="app-container">
    <MobileTopBar v-if="!isAdminRoute" />
    <NavBar v-if="!isAdminRoute" class="hide-on-mobile" />
    <div class="app-root">
      <router-view />
    </div>
    <FooterSection v-if="!isAdminRoute" class="hide-on-mobile" />
    <MobileBottomNav v-if="!isAdminRoute" />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import MobileTopBar from './components/MobileTopBar.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
import { useAuth } from './composables/useAuth'
import { useCart } from './composables/useCart'

const { initAuth } = useAuth()
const { initCart } = useCart()
const route = useRoute()
const isAdminRoute = computed(() => route.path.startsWith('/admin'))

onMounted(() => {
  initAuth()
  initCart()
})
</script>

<style>
/* Global CSS rules for mobile app-like behavior */
body {
  /* Prevent scrolling behind fixed elements on very long content */
  min-height: 100vh;
}

@media (max-width: 768px) {
  .app-container {
    padding-bottom: 5rem; /* give space for BottomNav on all pages */
  }
  .hide-on-mobile {
    display: none !important;
  }
}

.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
