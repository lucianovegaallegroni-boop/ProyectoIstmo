<template>
  <nav class="mobile-bottom-nav">
    <div class="mobile-bottom-nav__inner">

      <!-- Arena / Home Tab -->
      <router-link to="/" class="mobile-bottom-nav__tab" active-class="mobile-bottom-nav__tab--active"
        exact-active-class="mobile-bottom-nav__tab--active">
        <span class="material-symbols-outlined mobile-bottom-nav__icon">sports_esports</span>
        <span class="mobile-bottom-nav__label">Inicio</span>
      </router-link>

      <!-- Explore / Catalog Tab -->
      <router-link to="/catalog" class="mobile-bottom-nav__tab" active-class="mobile-bottom-nav__tab--active">
        <span class="material-symbols-outlined mobile-bottom-nav__icon">search</span>
        <span class="mobile-bottom-nav__label">Catálogo</span>
      </router-link>

      <!-- Cart Tab -->
      <router-link to="/cart" class="mobile-bottom-nav__tab" active-class="mobile-bottom-nav__tab--active">
        <span class="material-symbols-outlined mobile-bottom-nav__icon"
          style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
        <span class="mobile-bottom-nav__label">Carrito</span>
      </router-link>

    </div>
  </nav>
</template>

<style scoped>
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 100;
  border-top-left-radius: var(--radius-2xl);
  border-top-right-radius: var(--radius-2xl);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
}

@media (min-width: 768px) {
  .mobile-bottom-nav {
    display: none !important;
  }
}

.mobile-bottom-nav__inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 1rem 1.5rem;
  /* pt-3 pb-6 px-4 */
}

/* Tabs */
.mobile-bottom-nav__tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  padding: 0.5rem 1.25rem;
  color: var(--outline);
  text-decoration: none;
  border-radius: var(--radius-xl);
  transition: all var(--transition-fast) cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.mobile-bottom-nav__tab:hover {
  color: var(--primary);
}

.mobile-bottom-nav__tab:active {
  transform: scale(0.9);
}

/* Active Tab Styles */
.mobile-bottom-nav__tab--active {
  background-color: var(--primary-fixed);
  /* equivalent to sky-100 */
  color: var(--on-primary-fixed-variant);
  /* equivalent to sky-900 */
}

.mobile-bottom-nav__tab--active .mobile-bottom-nav__icon {
  font-variation-settings: 'FILL' 1;
}

/* Tab contents */
.mobile-bottom-nav__icon {
  font-size: 1.5rem;
  transition: all var(--transition-fast);
}

.mobile-bottom-nav__label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.75rem;
  /* text-xs */
  font-weight: 600;
  line-height: 1;
  margin-top: 0.125rem;
}
</style>
