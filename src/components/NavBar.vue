<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <nav class="navbar__inner">
      <div class="navbar__left">
        <router-link to="/" class="navbar__brand" title="Istmo Games">
          <img src="@/assets/logo.png" alt="Istmo Games Logo" class="navbar__logo-img" />
        </router-link>

        <div class="navbar__links">
          <a href="/#pillars" class="navbar__link">Categorías</a>
          <router-link to="/pillars/board-games" class="navbar__link" active-class="navbar__link--active">Juegos de Mesa</router-link>
          <router-link to="/pillars/tcg" class="navbar__link" active-class="navbar__link--active">Cartas TCG</router-link>
          <router-link to="/pillars/rpgs" class="navbar__link" active-class="navbar__link--active">Juegos de Rol (RPG)</router-link>
          <a href="/#masterpiece" class="navbar__link">Exclusivos</a>
          <a href="/#location" class="navbar__link">Ubicación</a>
          <router-link to="/catalog" class="navbar__link" active-class="navbar__link--active">Catálogo</router-link>
        </div>
      </div>

      <div class="navbar__right">
        <!-- Search Bar (Desktop only) -->
        <div class="navbar__search">
          <span class="material-symbols-outlined navbar__search-icon" title="Search">search</span>
          <input type="text" class="navbar__search-input" placeholder="Buscar en la Arena..." />
        </div>

        <!-- Cart -->
        <router-link to="/cart" class="navbar__btn-icon" title="Carrito">
          <span class="material-symbols-outlined">shopping_cart</span>
        </router-link>

        <!-- Auth State -->
        <div v-if="user" class="navbar__user">
          <span class="navbar__user-name">{{ userName }}</span>
          <button @click="handleLogout" class="navbar__logout" title="Cerrar Sesión">
            <span class="material-symbols-outlined">logout</span>
          </button>
        </div>
        <router-link v-else to="/login" class="navbar__cta">Iniciar Sesión</router-link>

        <!-- Mobile Toggle -->
        <button class="navbar__hamburger" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
          <span class="material-symbols-outlined">{{ mobileOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition name="mobile-menu">
      <div v-if="mobileOpen" class="navbar__mobile">
        <router-link to="/catalog" class="navbar__mobile-link" @click="mobileOpen = false">Catálogo</router-link>
        <a href="/#pillars" class="navbar__mobile-link" @click="mobileOpen = false">Categorías</a>
        <a href="/#masterpiece" class="navbar__mobile-link" @click="mobileOpen = false">Exclusivos</a>
        <a href="/#location" class="navbar__mobile-link" @click="mobileOpen = false">Ubicación</a>
        <router-link to="/cart" class="navbar__mobile-link" @click="mobileOpen = false">Carrito</router-link>

        <!-- Search bar for mobile -->
        <div class="navbar__search navbar__search--mobile">
          <span class="material-symbols-outlined navbar__search-icon">search</span>
          <input type="text" class="navbar__search-input" placeholder="Buscar..." />
        </div>

        <!-- Auth State Mobile -->
        <div v-if="user" class="navbar__mobile-user">
          <div class="navbar__user-info">
            <span class="navbar__user-name">{{ userName }}</span>
            <span class="navbar__user-email">{{ user.email }}</span>
          </div>
          <button @click="handleLogoutMobile" class="navbar__logout-btn">
            Cerrar Sesión
          </button>
        </div>
        <router-link v-else to="/login" class="navbar__cta navbar__cta--mobile" @click="mobileOpen = false">Iniciar Sesión</router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const { user, logout } = useAuth()
const router = useRouter()

const isScrolled = ref(false)
const mobileOpen = ref(false)

const userName = computed(() => {
  if (!user.value) return ''
  if (user.value.user_metadata?.full_name) {
    return user.value.user_metadata.full_name.split(' ')[0]
  }
  return user.value.email.split('@')[0]
})

const handleLogout = async () => {
  await logout()
  router.push('/login')
}

const handleLogoutMobile = async () => {
  mobileOpen.value = false
  await logout()
  router.push('/login')
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: var(--transition-base);
  border-bottom: 1px solid transparent;
  height: 5rem;
  display: flex;
  align-items: center;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: var(--outline-variant);
  box-shadow: var(--shadow-sm);
}

.navbar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.navbar__left {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.navbar__brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar__logo-img {
  height: 2.5rem;
  width: auto;
  object-fit: contain;
}

.navbar__links {
  display: flex;
  gap: 2rem;
}

.navbar__link {
  color: var(--on-surface-variant);
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: -0.02em;
  transition: all var(--transition-fast);
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
}

.navbar__link:hover {
  color: var(--primary);
}

.navbar__link--active {
  color: var(--primary);
  border-bottom-color: var(--secondary-container);
}

.navbar__right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Search Bar */
.navbar__search {
  position: relative;
  display: flex;
  align-items: center;
}

.navbar__search-icon {
  position: absolute;
  left: 0.75rem;
  color: var(--outline);
  font-size: 1.25rem;
  pointer-events: none;
}

.navbar__search-input {
  background: var(--surface-container-high);
  border: none;
  border-radius: var(--radius-full);
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  font-size: 0.875rem;
  color: var(--on-surface);
  width: 240px;
  transition: all var(--transition-fast);
  outline: none;
}

.navbar__search-input::placeholder {
  color: var(--outline);
}

.navbar__search-input:focus {
  box-shadow: 0 0 0 2px var(--primary);
}

/* Icons and CTA */
.navbar__btn-icon {
  background: none;
  color: var(--primary);
  transition: transform var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.navbar__btn-icon:hover {
  transform: scale(1.1);
}

.navbar__btn-icon:active {
  transform: scale(0.95);
}

.navbar__cta {
  background: var(--primary);
  color: var(--on-primary);
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.875rem;
  transition: all var(--transition-fast);
}

.navbar__cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.navbar__cta:active {
  transform: scale(0.97);
}

.navbar__user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--surface-container);
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  border-radius: var(--radius-full);
}

.navbar__user-name {
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--primary);
  text-transform: capitalize;
}

.navbar__logout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-full);
  background-color: var(--surface-container-highest);
  color: var(--on-surface-variant);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.navbar__logout:hover {
  background-color: var(--error-container);
  color: var(--error);
}

.navbar__hamburger {
  display: none;
  background: none;
  color: var(--primary);
  padding: 0;
}

.navbar__hamburger .material-symbols-outlined {
  font-size: 1.75rem;
}

/* Mobile menu */
.navbar__mobile {
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem 2rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--outline-variant);
  box-shadow: var(--shadow-md);
}

.navbar__mobile-link {
  padding: 0.75rem 0;
  color: var(--on-surface-variant);
  font-weight: 600;
  border-bottom: 1px solid var(--outline-variant);
  transition: color var(--transition-fast);
}

.navbar__mobile-link:hover {
  color: var(--primary);
}

.navbar__search--mobile {
  margin-top: 0.5rem;
  width: 100%;
}

.navbar__search--mobile .navbar__search-input {
  width: 100%;
}

.navbar__cta--mobile {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}

.navbar__mobile-user {
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--surface-container);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.navbar__user-info {
  display: flex;
  flex-direction: column;
}

.navbar__user-email {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  font-weight: 500;
}

.navbar__logout-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--error-container);
  color: var(--error);
  border-radius: var(--radius-md);
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 900px) {
  .navbar__search {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar__inner {
    padding: 0 1.5rem;
  }

  .navbar__links {
    display: none;
  }

  .navbar__cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__mobile {
    display: flex;
  }
}
</style>
