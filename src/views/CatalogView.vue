<template>
  <main class="catalog">
    <div class="catalog__inner">
      
      <!-- Sidebar Column (25%) -->
      <aside class="catalog__sidebar-wrapper">
        <SidebarFilters />
      </aside>

      <!-- Main Content Column (75%) -->
      <div class="catalog__content-wrapper">
        
        <!-- Page Header -->
        <header class="catalog__header">
          <div class="catalog__header-text">
            <span class="catalog__overline">The Gallery</span>
            <h1 class="catalog__title">Discovery</h1>
            <p class="catalog__subtitle">Curated selections for the modern strategist.</p>
          </div>
          
          <div class="catalog__sort">
            <span class="catalog__sort-label">Sort by:</span>
            <select class="catalog__sort-select">
              <option>Featured</option>
              <option>Newest Arrival</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </header>

        <!-- Product Grid -->
        <div class="catalog__grid">
          <ProductCard 
            v-for="(product, index) in products" 
            :key="index" 
            :product="product" 
          />
        </div>

        <!-- Vault Exclusives Section -->
        <VaultExclusives />
        
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import SidebarFilters from '../components/catalog/SidebarFilters.vue'
import ProductCard from '../components/catalog/ProductCard.vue'
import VaultExclusives from '../components/catalog/VaultExclusives.vue'

const products = ref([
  {
    name: 'Azure Citadel',
    category: 'Strategic Engine Building',
    price: '$89.00',
    badge: 'Artisan Edition',
    image: '/pillars/tcg_card.png',
    alt: 'Close-up of a high-end complex board game'
  },
  {
    name: 'The Gilded Deck',
    category: 'Tactical Card Game',
    price: '$34.99',
    badge: 'Strategy Master',
    image: '/pillars/tcg_card.png',
    alt: 'Premium textured playing cards'
  },
  {
    name: 'Dune Stalker',
    category: 'Collectible Miniatures',
    price: '$45.00',
    badge: 'Strategy Master',
    image: '/pillars/tcg_card.png',
    alt: 'Finely painted fantasy miniature figure'
  },
  {
    name: 'Obsidian Reach',
    category: 'Cooperative Adventure',
    price: '$110.00',
    badge: '',
    image: '/pillars/tcg_card.png',
    alt: 'Isometric view of a complex dungeon crawler'
  },
  {
    name: 'Eldritch Lore',
    category: 'Roleplaying Supplement',
    price: '$59.95',
    badge: 'Artisan Edition',
    image: '/pillars/tcg_card.png',
    alt: 'Colorful polyhedral dice scattered across parchment'
  },
  {
    name: 'Vector Prime',
    category: 'Abstract Strategy',
    price: '$42.00',
    badge: '',
    image: '/pillars/tcg_card.png',
    alt: 'Sleek modern minimalist board game box'
  }
])
</script>

<style scoped>
.catalog {
  padding-top: 8rem; /* Matches pt-32 */
  padding-bottom: 5rem; /* Matches pb-20 */
  padding-left: 2rem; /* px-8 */
  padding-right: 2rem;
  max-width: 1600px;
  margin: 0 auto;
}

.catalog__inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 768px) {
  .catalog__inner {
    flex-direction: row;
  }
}

/* Sidebar Wrapper (100% or 25%) */
.catalog__sidebar-wrapper {
  width: 100%;
}

@media (min-width: 768px) {
  .catalog__sidebar-wrapper {
    width: 25%;
  }
}

/* Content Wrapper (100% or 75%) */
.catalog__content-wrapper {
  width: 100%;
}

@media (min-width: 768px) {
  .catalog__content-wrapper {
    width: 75%;
  }
}

/* Page Header */
.catalog__header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .catalog__header {
    flex-direction: row;
    align-items: flex-end;
  }
}

.catalog__overline {
  display: block;
  color: var(--secondary);
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
}

.catalog__title {
  font-size: 3rem; /* 5xl equivalent */
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.05em;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.catalog__subtitle {
  color: var(--on-surface-variant);
  font-size: 1.125rem; /* lg */
}

/* Sort Select Box */
.catalog__sort {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--surface-container-low);
  padding: 0.25rem;
  border-radius: var(--radius-xl);
}

.catalog__sort-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--outline);
  margin-left: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.catalog__sort-select {
  background: transparent;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
  padding: 0.5rem 2.5rem 0.5rem 0;
  cursor: pointer;
  outline: none;
}

/* Grid */
.catalog__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem 2rem;
  margin-bottom: 6rem;
}

@media (min-width: 640px) {
  .catalog__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .catalog__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Global utility */
::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: var(--secondary);
  border-radius: 50%;
  cursor: pointer;
}
</style>
