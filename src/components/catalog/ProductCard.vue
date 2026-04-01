<template>
  <div class="product-card">
    <div class="product-card__image-container">
      <img :src="product.image" :alt="product.alt" class="product-card__image" loading="lazy" />
      
      <div v-if="product.badge" class="product-card__badge-wrapper">
        <span class="product-card__badge">{{ product.badge }}</span>
      </div>
      
      <button class="product-card__add-btn" :aria-label="`Add ${product.name} to cart`">
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>
    
    <div class="product-card__footer">
      <div class="product-card__info">
        <h3 class="product-card__name">{{ product.name }}</h3>
        <p class="product-card__category">{{ product.category }}</p>
      </div>
      <span class="product-card__price">{{ product.price }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* El componente padre se encarga de agrupar el hover states via .product-card */
}

/* Image container */
.product-card__image-container {
  aspect-ratio: 4/5;
  background-color: var(--surface-container-highest);
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-sm);
  transition: all 500ms ease;
}

.product-card:hover .product-card__image-container {
  box-shadow: var(--shadow-2xl);
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms ease;
}

.product-card:hover .product-card__image {
  transform: scale(1.05);
}

/* Badge */
.product-card__badge-wrapper {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.product-card__badge {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--primary);
  font-size: 0.625rem; /* 10px */
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Add Button */
.product-card__add-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--secondary);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  
  /* Initial state: hidden and translated down */
  transform: translateY(3rem);
  opacity: 0;
  transition: all 300ms ease;
}

.product-card:hover .product-card__add-btn {
  transform: translateY(0);
  opacity: 1;
}

.product-card__add-btn:active {
  transform: scale(0.95);
}

/* Footer details */
.product-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-card__info {
  display: flex;
  flex-direction: column;
}

.product-card__name {
  font-weight: 700;
  color: var(--primary);
  font-size: 1.125rem; /* text-lg */
  transition: color var(--transition-fast);
}

.product-card:hover .product-card__name {
  color: var(--secondary);
}

.product-card__category {
  font-size: 0.75rem; /* text-xs */
  color: var(--on-surface-variant);
  font-weight: 500;
  margin-top: 0.25rem;
}

.product-card__price {
  font-size: 1.125rem;
  font-weight: 900;
  color: var(--primary);
}
</style>
