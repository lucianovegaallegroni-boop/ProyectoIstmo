import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/CatalogView.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/pillars/board-games',
    name: 'BoardGames',
    component: () => import('../views/Pillars/BoardGamesView.vue')
  },
  {
    path: '/pillars/tcg',
    name: 'TCG',
    component: () => import('../views/Pillars/TCGView.vue')
  },
  {
    path: '/pillars/rpgs',
    name: 'RPGs',
    component: () => import('../views/Pillars/RPGsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
