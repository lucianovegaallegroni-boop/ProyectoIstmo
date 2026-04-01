<template>
  <main class="cart-view">
    <!-- Header Section -->
    <header class="cart-view__header">
      <div class="cart-view__header-summary">
        <h1 class="cart-view__title">Tu Colección</h1>
        <p class="cart-view__subtitle">{{ totalItems }} artículos seleccionados para tu próximo desafío.</p>
      </div>
      <span class="cart-view__header-count hidden-desktop">({{ totalItems }} Items)</span>
    </header>

    <div class="cart-view__grid">
      <!-- Left Column: Product List -->
      <section class="cart-view__list">
        <transition-group name="list">
          <CartItem 
            v-for="(item, index) in cartItems" 
            :key="item.sku" 
            :product="item"
            @increase="item.quantity++"
            @decrease="item.quantity > 1 ? item.quantity-- : null"
            @remove="removeItem(index)"
          />
        </transition-group>
      </section>

      <!-- Right Column: Order Summary -->
      <div class="cart-view__summary">
        <OrderSummary 
          :subtotal="subtotal"
          :shipping="shippingCost"
          :taxes="taxes"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import CartItem from '../components/cart/CartItem.vue'
import OrderSummary from '../components/cart/OrderSummary.vue'

const cartItems = ref([
  {
    name: 'Mythos: The Ancient Gate',
    sku: 'IG-MYTH-01-PRM',
    price: 124.99,
    quantity: 1,
    badge: "Collector's Choice",
    tags: [
      { label: 'Edición Limitada', isAccent: true },
      { label: 'En Stock', isAccent: false }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoOR-kFj8E4rwaC7fQjhy7EN4qfM4SaKdxtiQZt5_Dm6PsOOQtahYeMQvpt7eI12V0q3uDiE1a3TK_7gq5qA7BrbsXkVkA7_Jc227SXa1kKzJhW81j06UpWskevboPfImWu5ZA5YZwr0TXcPXqa7MoRnBKODYt6-8y3xBySGPC9lldgd0hXGPHuLD6-rD_Q8XUqgBjPWBrs37vgbEBiEPe_UA11HRqHH31w_awtnIU-s4RIPRO6qM83RIwtbyQjn7RUSQzBsW5ahSr',
    alt: 'luxury board game box with intricate golden illustrations'
  },
  {
    name: 'Chromium Alloy Dice Set (Metal)',
    sku: 'IG-ACC-DICE-X',
    price: 89.00,
    quantity: 2,
    badge: '',
    tags: [
      { label: 'Accesorio', isAccent: false }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu4868DcuIjtqEBy6veuJaWvd3cdk-N_7kFttObnnYvlngPV6Xwws44QTuAS0BFmMu8FIlebtoTi1Vt57Dkb-NT4UuqgpPJA6FQrEvupkV_5cCEmdOlfb5ABZFO1mYDkZPE_ivLs7huiAfBTmEkH_E2FKzBT12U_NhEoREPRn3epAqhRzp0NSnZu_3WkDwe5M_ZxpVrhBdQzfLT7Mi5xUN2wtc6JW655XSHA0Xv1srWsmPmf859zkjcicKZWz_eQVVtRgvT5dsbgGm',
    alt: 'set of premium heavy metal dice for tabletop games'
  },
  {
    name: 'Archival Grade Sleeves',
    sku: 'IG-SUP-SLV-100',
    price: 15.50,
    quantity: 1,
    badge: '',
    tags: [
      { label: 'Suministros', isAccent: false }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJcmQOaqP3vIB1JnN0Z146IMVX9Ev-nhxYs1wajdCr_swlHOgHL2Lu3AJPf9CHCGbmEcm1eqbLrPlosZpMWR4FmCJnPkgkNRT89BtpDURneQOmcp-7ZOKjpbrK63SlByXaQDdNSTfi0k9I7AB5_PPVWrYex6yBzKUZia7JnniYLgm9tlXPWDmNHWmxI5U1IMt6PhtjUy28KX21vociVGMUZj92SPRTyr8loAkHfV6f3-1WtZmZ8msp5xRR-6RhSR7TjUP5TFZiNS8F',
    alt: 'thick high-quality protective sleeves for trading cards'
  }
])

const totalItems = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
})

const subtotal = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
})

const shippingCost = ref(12.00) // Base flat shipping

const removeItem = (index) => {
  cartItems.value.splice(index, 1)
}

const taxes = computed(() => {
  return subtotal.value * 0.08 // Assume 8% tax
})
</script>

<style scoped>
.cart-view {
  padding-top: 6rem; /* pt-24 */
  padding-bottom: 6rem; /* Mobile padding */
  padding-left: 1.5rem; /* px-6 */
  padding-right: 1.5rem;
  max-width: 1280px; /* 7xl equivalent for nice central focus */
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .cart-view {
    padding-top: 8rem; /* Desktop pt-32 */
    padding-bottom: 6rem; /* Desktop pb-24 */
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Header */
.cart-view__header {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

@media (min-width: 1024px) {
  .cart-view__header {
    margin-bottom: 3rem;
  }
}

.cart-view__title {
  font-size: 1.5rem; /* text-2xl for mobile */
  font-weight: 800; /* extrabold */
  letter-spacing: -0.025em; /* tight */
  color: var(--primary);
  margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {
  .cart-view__title {
    font-size: 3rem; /* text-5xl for desktop */
    font-weight: 900;
  }
}

.cart-view__subtitle {
  color: var(--on-surface-variant);
  font-weight: 500;
  letter-spacing: -0.025em;
  display: none; /* Hide on mobile to match the design */
}

@media (min-width: 1024px) {
  .cart-view__subtitle {
    display: block; /* Show on desktop */
  }
}

.cart-view__header-count {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--outline);
}

/* Grid layout */
.cart-view__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .cart-view__grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 3rem;
  }
}

/* Children alignment */
.cart-view__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .cart-view__list {
    grid-column: span 8 / span 8;
    gap: 2rem;
  }
}

/* Using :deep on OrderSummary wrapper if needed, but it self-manages classes */
.cart-view__summary {
  display: block;
}

@media (min-width: 1024px) {
  .cart-view__summary {
    grid-column: span 4 / span 4;
  }
}

/* Utilities */
.hidden-mobile {
  display: none;
}
.hidden-desktop {
  display: block;
}

/* Animations */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-move {
  transition: transform 0.4s ease;
}

@media (min-width: 1024px) {
  .hidden-mobile {
    display: block;
  }
  .hidden-desktop {
    display: none;
  }
}
</style>
