<template>
  <div class="cart-item">
    <div class="cart-item__image-container">
      <img 
        :src="product.image" 
        :alt="product.alt" 
        class="cart-item__image" 
        loading="lazy" 
      />
      <!-- Mobile Only Badge (absolute top left) -->
      <div class="cart-item__mobile-badge" v-if="product.badge">
        <span class="cart-item__badge-text">{{ product.badge }}</span>
      </div>
    </div>

    <div class="cart-item__content">
      
      <div class="cart-item__top">
        <div class="cart-item__header">
          <h3 class="cart-item__title">{{ product.name }}</h3>
          <button class="cart-item__delete-btn" aria-label="Remove item">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
        <p class="cart-item__sku">SKU: {{ product.sku }}</p>

        <!-- Desktop Only Badges -->
        <div class="cart-item__desktop-badges" v-if="product.tags && product.tags.length">
          <span 
            v-for="(tag, index) in product.tags" 
            :key="index"
            class="cart-item__tag"
            :class="{ 'cart-item__tag--accent': tag.isAccent }"
          >
            {{ tag.label }}
          </span>
        </div>
      </div>

      <div class="cart-item__bottom">
        <div class="cart-item__controls">
          <button class="cart-item__qty-btn" @click="$emit('decrease')">
            <span class="material-symbols-outlined text-sm">remove</span>
          </button>
          <span class="cart-item__qty">{{ product.quantity }}</span>
          <button class="cart-item__qty-btn" @click="$emit('increase')">
            <span class="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        <div class="cart-item__price-wrapper">
          <p class="cart-item__price">{{ formattedPrice }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['increase', 'decrease'])

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.product.price)
})
</script>

<style scoped>
.cart-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  background-color: var(--surface-container-lowest);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.cart-item:hover {
  box-shadow: 0 24px 40px rgba(28, 27, 27, 0.04);
}

@media (min-width: 768px) {
  .cart-item {
    flex-direction: row;
    padding: 1.5rem;
  }
}

/* Image */
.cart-item__image-container {
  width: 100%;
  height: 10rem; /* 40 Tailwind = 160px */
  flex-shrink: 0;
  background-color: var(--surface-container-highest);
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
}

@media (min-width: 768px) {
  .cart-item__image-container {
    width: 12rem; /* 48 Tailwind = 192px */
    height: 12rem;
  }
}

.cart-item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;
}

.cart-item:hover .cart-item__image {
  transform: scale(1.05);
}

/* Mobile Badge overlays image */
.cart-item__mobile-badge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: rgba(var(--primary-rgb, 3, 61, 96), 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 0.25rem 0.5rem;
}

@media (min-width: 768px) {
  .cart-item__mobile-badge {
    display: none;
  }
}

.cart-item__badge-text {
  font-size: 0.625rem; /* text-[10px] */
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Content Container */
.cart-item__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 0.25rem 0;
}

/* Top Section (Title, SKU, Tags) */
.cart-item__top {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cart-item__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cart-item__title {
  font-size: 1.125rem; /* text-lg */
  font-weight: 700;
  color: var(--on-surface);
  line-height: 1.25;
}

@media (min-width: 768px) {
  .cart-item__title {
    font-size: 1.25rem; /* text-xl */
    color: var(--primary);
  }
}

.cart-item__delete-btn {
  color: var(--outline);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  transition: color var(--transition-fast);
}

.cart-item__delete-btn:hover {
  color: var(--error);
}

.cart-item__sku {
  font-size: 0.75rem; /* text-xs */
  font-weight: 600;
  color: var(--outline);
  letter-spacing: 0.05em;
  margin-bottom: 0px;
}

@media (min-width: 768px) {
  .cart-item__sku {
    color: var(--secondary);
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
  }
}

/* Desktop Tags */
.cart-item__desktop-badges {
  display: none;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .cart-item__desktop-badges {
    display: flex;
  }
}

.cart-item__tag {
  padding: 0.25rem 0.75rem;
  background-color: var(--surface-container);
  color: var(--on-surface-variant);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-full);
}

.cart-item__tag--accent {
  background-color: var(--primary-fixed);
  color: var(--on-primary-fixed-variant);
}

/* Bottom Section (Controls, Price) */
.cart-item__bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .cart-item__bottom {
    margin-top: 0;
  }
}

/* Controls */
.cart-item__controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--surface-container-low);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
}

@media (min-width: 768px) {
  .cart-item__controls {
    background-color: var(--surface-container);
    padding: 0.5rem 1rem;
    gap: 1.5rem;
  }
}

.cart-item__qty-btn {
  background: none;
  border: none;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.cart-item__qty-btn:hover {
  background-color: var(--surface-container-high);
}

.cart-item__qty {
  font-weight: 700;
  font-size: 0.875rem;
  width: 1rem;
  text-align: center;
}

/* Price */
.cart-item__price-wrapper {
  text-align: right;
}

.cart-item__price {
  font-size: 1.25rem; /* text-xl */
  font-weight: 900;
  color: var(--primary);
}

@media (min-width: 768px) {
  .cart-item__price {
    font-size: 1.5rem; /* text-2xl */
    letter-spacing: -0.05em;
  }
}
</style>
