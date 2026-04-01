<template>
  <header class="mobile-top-bar">
    <div class="mobile-top-bar__inner">
      <div class="mobile-top-bar__left">
        <!-- Optional Back Button -->
        <button 
          v-if="showBack" 
          @click="goBack" 
          class="mobile-top-bar__btn" 
          aria-label="Go back"
        >
          <span class="material-symbols-outlined mobile-top-bar__icon">arrow_back</span>
        </button>
        <!-- Route Title -->
        <h1 class="mobile-top-bar__title">{{ title }}</h1>
      </div>
      
      <div class="mobile-top-bar__right">
        <!-- More options -->
        <button class="mobile-top-bar__btn" aria-label="More options">
          <span class="material-symbols-outlined mobile-top-bar__icon-muted">more_vert</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Determine if we should show back button based on route
const showBack = computed(() => {
  return route.path !== '/' 
})

// Determine title
const title = computed(() => {
  if (route.name) {
    if (route.name === 'Home') return 'Arena Hobbyist'
    if (route.name === 'Catalog') return 'Explore'
    if (route.name === 'Cart') return 'Shopping Cart'
    return route.name
  }
  return 'Istmo Games'
})

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.mobile-top-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; /* Same as navbar */
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  /* border-bottom: 1px solid var(--surface-container-highest); */
}

@media (min-width: 768px) {
  .mobile-top-bar {
    display: none !important;
  }
}

.mobile-top-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  width: 100%;
}

.mobile-top-bar__left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-top-bar__title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--primary);
  font-size: 1.25rem;
}

.mobile-top-bar__right {
  display: flex;
  align-items: center;
}

.mobile-top-bar__btn {
  background: transparent;
  border: none;
  border-radius: var(--radius-full);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.mobile-top-bar__btn:hover {
  background-color: var(--surface-container-high);
}

.mobile-top-bar__btn:active {
  transform: scale(0.95);
}

.mobile-top-bar__icon {
  color: var(--primary);
  font-size: 1.5rem;
}

.mobile-top-bar__icon-muted {
  color: var(--outline);
  font-size: 1.5rem;
}
</style>
