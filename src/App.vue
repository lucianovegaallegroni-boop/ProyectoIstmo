<template>
  <div class="app-container">
    <MobileTopBar />
    <NavBar class="hide-on-mobile" />
    <div class="app-root">
      <router-view />
    </div>
    <FooterSection class="hide-on-mobile" />
    <MobileBottomNav />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import MobileTopBar from './components/MobileTopBar.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
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
