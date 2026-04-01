<template>
  <aside class="sidebar">
    <div class="sidebar__inner">
      <!-- Filters: Category -->
      <div class="sidebar__section">
        <h3 class="sidebar__heading">Category</h3>
        <div class="sidebar__checkbox-list">
          <label class="sidebar__checkbox-label">
            <input type="checkbox" checked class="sidebar__checkbox" />
            <span class="sidebar__checkbox-text">Board Games</span>
          </label>
          <label class="sidebar__checkbox-label">
            <input type="checkbox" class="sidebar__checkbox" />
            <span class="sidebar__checkbox-text">RPGs</span>
          </label>
          <label class="sidebar__checkbox-label">
            <input type="checkbox" class="sidebar__checkbox" />
            <span class="sidebar__checkbox-text">TCGs</span>
          </label>
          <label class="sidebar__checkbox-label">
            <input type="checkbox" class="sidebar__checkbox" />
            <span class="sidebar__checkbox-text">Miniatures</span>
          </label>
        </div>
      </div>

      <!-- Filters: Price -->
      <div class="sidebar__section">
        <div class="sidebar__price-header">
          <h3 class="sidebar__heading">Price Range</h3>
          <span class="sidebar__price-val">$10 - $250+</span>
        </div>
        <input type="range" class="sidebar__range" />
      </div>

      <!-- Filters: Availability -->
      <div class="sidebar__section">
        <h3 class="sidebar__heading">Availability</h3>
        <div class="sidebar__tags">
          <button class="sidebar__tag sidebar__tag--active">In Stock</button>
          <button class="sidebar__tag">Pre-Order</button>
          <button class="sidebar__tag">Vault</button>
        </div>
      </div>

      <!-- Filters: Publisher -->
      <div class="sidebar__section">
        <h3 class="sidebar__heading">Publisher</h3>
        <select class="sidebar__select">
          <option>All Publishers</option>
          <option>Renegade Studios</option>
          <option>Fantasy Flight</option>
          <option>CMON Games</option>
          <option>Wizards of the Coast</option>
        </select>
      </div>

      <!-- Promotional Card -->
      <div class="sidebar__promo">
        <div class="sidebar__promo-content">
          <p class="sidebar__promo-label">Loyalty Program</p>
          <h4 class="sidebar__promo-title">Join the Inner Circle for Early Access</h4>
          <button class="sidebar__promo-btn">Learn More</button>
        </div>
        <div class="sidebar__promo-glow"></div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 100%;
}

.sidebar__inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 8rem; /* header height + some spacing */
}

.sidebar__section {
  display: flex;
  flex-direction: column;
}

.sidebar__heading {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
  margin-bottom: 1.25rem;
}

/* Checkboxes */
.sidebar__checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sidebar__checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.sidebar__checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--outline-variant);
  accent-color: var(--primary);
  cursor: pointer;
}

.sidebar__checkbox-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--on-surface-variant);
  transition: color var(--transition-fast);
}

.sidebar__checkbox-label:hover .sidebar__checkbox-text {
  color: var(--on-surface);
}

/* Range */
.sidebar__price-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.sidebar__price-header .sidebar__heading {
  margin-bottom: 0;
}

.sidebar__price-val {
  font-size: 0.75rem;
  font-family: monospace;
  font-weight: 700;
  color: var(--secondary);
}

.sidebar__range {
  width: 100%;
  height: 4px;
  background: var(--surface-container-highest);
  border-radius: var(--radius-lg);
  appearance: none;
  cursor: pointer;
  accent-color: var(--secondary);
}

/* Tags */
.sidebar__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.sidebar__tag {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  transition: all var(--transition-fast);
  background: var(--surface-container-high);
  color: var(--on-surface-variant);
}

.sidebar__tag:hover {
  background: var(--surface-container-highest);
}

.sidebar__tag--active {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.sidebar__tag--active:hover {
  background: var(--primary);
}

/* Select */
.sidebar__select {
  width: 100%;
  background: var(--surface-container-high);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  padding: 0.75rem;
  color: var(--on-surface);
  outline: none;
  transition: box-shadow var(--transition-fast);
  cursor: pointer;
}

.sidebar__select:focus {
  box-shadow: 0 0 0 2px var(--primary);
}

/* Promo */
.sidebar__promo {
  background: var(--primary-container);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  color: white;
  position: relative;
  overflow: hidden;
  margin-top: 1.5rem;
}

.sidebar__promo-content {
  position: relative;
  z-index: 10;
}

.sidebar__promo-label {
  font-size: 0.625rem; /* 10px */
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 900;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

.sidebar__promo-title {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.sidebar__promo-btn {
  background: var(--secondary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-lg);
  font-size: 0.75rem;
  font-weight: 700;
  transition: opacity var(--transition-fast);
}

.sidebar__promo-btn:hover {
  opacity: 0.9;
}

.sidebar__promo-btn:active {
  transform: scale(0.95);
}

.sidebar__promo-glow {
  position: absolute;
  right: -2.5rem;
  bottom: -2.5rem;
  width: 8rem;
  height: 8rem;
  background: var(--primary);
  opacity: 0.2;
  border-radius: var(--radius-full);
  filter: blur(24px);
}
</style>
