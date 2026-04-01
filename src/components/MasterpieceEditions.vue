<template>
  <section class="masterpiece" id="masterpiece">
    <div class="masterpiece__header">
      <span class="masterpiece__label">Exclusive</span>
      <h2 class="masterpiece__title">Masterpiece Editions</h2>
      <p class="masterpiece__desc">
        The Vault contains our most precious acquisitions. High-demand collectibles for the true connoisseur.
      </p>
    </div>
    <div class="masterpiece__carousel scrollbar-hide">
      <div
        v-for="product in products"
        :key="product.name"
        class="product-card"
      >
        <div class="product-card__image-wrap">
          <img :src="product.image" :alt="product.alt" class="product-card__image" loading="lazy" />
          <span class="product-card__badge">{{ product.badge }}</span>
        </div>
        <div class="product-card__info">
          <div class="product-card__meta">
            <div>
              <h3 class="product-card__name">{{ product.name }}</h3>
              <p class="product-card__material">{{ product.material }}</p>
            </div>
            <span class="product-card__price">{{ product.price }}</span>
          </div>
          <button class="product-card__btn" :id="`add-vault-${product.slug}`">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">lock</span>
            Add to Vault
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: 'The Emerald Drake Replica',
    material: 'Hand-cast bronze & synthetic emerald',
    price: '$849.00',
    badge: 'Limited Stock',
    slug: 'emerald-drake',
    image: '/pillars/tcg_card.png',
    alt: 'Detailed pewter dragon statue with emerald glass eyes resting on a pile of decorative coins'
  },
  {
    name: 'Noctis Strategy Set',
    material: 'Polished Obsidian & White Marble',
    price: '$1,200.00',
    badge: '1 of 50',
    slug: 'noctis-set',
    image: '/pillars/tcg_card.png',
    alt: 'Luxury obsidian chess set on a backlit glass board with minimalist geometric pieces'
  },
  {
    name: 'Aether Origin #01',
    material: 'Original Canvas Artwork',
    price: '$2,450.00',
    badge: 'Artist Proof',
    slug: 'aether-origin',
    image: '/pillars/tcg_card.png',
    alt: 'Original ink illustration for a fantasy trading card featuring a celestial being'
  }
]
</script>

<style scoped>
.masterpiece {
  padding: 6rem 0;
  background: var(--surface-container-low);
}

.masterpiece__header {
  padding: 0 3rem 4rem;
}

.masterpiece__label {
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.masterpiece__title {
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary);
  margin-top: 0.5rem;
  letter-spacing: -0.02em;
}

.masterpiece__desc {
  color: var(--on-surface-variant);
  max-width: 560px;
  margin-top: 1rem;
  line-height: 1.7;
}

.masterpiece__carousel {
  display: flex;
  gap: 2rem;
  padding: 0 3rem 3rem;
  overflow-x: auto;
}

.product-card {
  flex: 0 0 450px;
  background: var(--surface-container-lowest);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.product-card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.product-card__image-wrap {
  position: relative;
  height: 260px;
  background: var(--surface-container-highest);
  border-radius: var(--radius-lg);
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slower);
}

.product-card:hover .product-card__image {
  transform: scale(1.05);
}

.product-card__badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(12px);
  color: white;
  font-size: 0.7rem;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.product-card__info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-card__name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
}

.product-card__material {
  color: var(--on-surface-variant);
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.product-card__price {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--secondary);
  white-space: nowrap;
}

.product-card__btn {
  width: 100%;
  background: var(--primary);
  color: var(--on-primary);
  padding: 1rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background var(--transition-fast);
}

.product-card:hover .product-card__btn {
  background: var(--primary-container);
}

.product-card__btn:active {
  transform: scale(0.98);
}

.product-card__btn .material-symbols-outlined {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .masterpiece__header {
    padding: 0 1.5rem 3rem;
  }

  .masterpiece__title {
    font-size: 2.2rem;
  }

  .masterpiece__carousel {
    padding: 0 1.5rem 2rem;
  }

  .product-card {
    flex: 0 0 320px;
  }
}
</style>
