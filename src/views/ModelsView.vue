<template>
  <main class="models-view pt-16 pb-24">
    <!-- Intro Section -->
    <section class="models-intro">
      <div class="models-intro__icon-wrapper">
        <span class="material-symbols-outlined models-intro__icon">precision_manufacturing</span>
        <div class="models-intro__icon-bg"></div>
      </div>
      <h1 class="models-intro__title">Modelismo</h1>
      <p class="models-intro__desc">Paciencia, precisión y el acabado perfecto. Equipamiento para el constructor dedicado.</p>
    </section>

    <!-- Professional Equipment (Featured Item) -->
    <section class="models-featured">
      <div class="models-featured__card">
        <div class="models-featured__bg-circle"></div>
        <div class="models-featured__content">
          <div class="models-featured__media">
            <img class="models-featured__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3RDBYxXo2q8WdM-tWj5rF31N39f7-rX6sVof4_u0pSXY2Wc2oY5-N-B9ZgL-qI6N5B2m1Yx8qO9QYnNkV5r73I5T_qA3aD2o2vP5G5a9xI_Xz-p154h4XvV0Z4tU584R8s4M8tY3t7G9n8a2GkVx8y2O8mK2B70rEx6S2Y_T7w_P4X8nJ_WcWqK5gKx6hHn3F12q8T9WwN7w"/>
          </div>
          <div class="models-featured__info">
            <span class="models-featured__label">Equipamiento Destacado</span>
            <h2 class="models-featured__name">Kit de Aerógrafo Pro-Grade</h2>
            <p class="models-featured__desc">Gatillo de doble acción para detalles de micro-precisión.</p>
            <div class="models-featured__footer">
              <span class="models-featured__price">$189.00</span>
              <button @click="addToCart({sku: 'MOD-AIRBRUSH-PRO', name: 'Pro-Grade Airbrush Kit', price: 189.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3RDBYxXo2q8WdM-tWj5rF31N39f7-rX6sVof4_u0pSXY2Wc2oY5-N-B9ZgL-qI6N5B2m1Yx8qO9QYnNkV5r73I5T_qA3aD2o2vP5G5a9xI_Xz-p154h4XvV0Z4tU584R8s4M8tY3t7G9n8a2GkVx8y2O8mK2B70rEx6S2Y_T7w_P4X8nJ_WcWqK5gKx6hHn3F12q8T9WwN7w'})" class="models-featured__cta">
                <span>Añadir al Carrito</span>
                <span class="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools & Supplies Scroll -->
    <section class="models-section">
      <div class="models-section__header">
        <h3 class="models-section__title">Esenciales</h3>
        <span class="models-section__link">Ver Todo</span>
      </div>
      <div class="models-scroll">
        <!-- Item 1 -->
        <div class="models-item">
          <div class="models-item__media">
            <img class="models-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL3P80S97JgZ_d2R4p7_hC_uR33k8Y4H_83bE7rSxgP4U9V4kHhG4Q96Fj_O9F31hM-_5zT_x0D3QoT0mZf5bT98hGz2n7WpGZQ7WqA14M7sA2w8oE4_wO2KjQ8b51W8q2w3oA1w5nE8I4vI7I9zJ1H1H0O1R8w4_5n4x1u3k58_8cQK0Xw80Q9i19Hj0QzI091Q7D9tU1I90J_q0uJjH4Q8vS_L3A8tN5m4R6v1k"/>
            <button @click="addToCart({sku: 'MOD-TOOL-NIPPER', name: 'Precision Nippers', price: 29.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL3P80S97JgZ_d2R4p7_hC_uR33k8Y4H_83bE7rSxgP4U9V4kHhG4Q96Fj_O9F31hM-_5zT_x0D3QoT0mZf5bT98hGz2n7WpGZQ7WqA14M7sA2w8oE4_wO2KjQ8b51W8q2w3oA1w5nE8I4vI7I9zJ1H1H0O1R8w4_5n4x1u3k58_8cQK0Xw80Q9i19Hj0QzI091Q7D9tU1I90J_q0uJjH4Q8vS_L3A8tN5m4R6v1k'})" class="models-item__btn-add"><span class="material-symbols-outlined">add</span></button>
          </div>
          <h4 class="models-item__name">Alicates de Precisión</h4>
          <p class="models-item__desc">Filo único</p>
          <p class="models-item__price">$29.50</p>
        </div>
        <!-- Item 2 -->
        <div class="models-item">
          <div class="models-item__media">
            <img class="models-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJh8Lw-3P65k0p49K6V_N_A7b-2GzT_A3o7pA7m4uX8q9dRKv-b1T1I7H_q9aV2I_N19x31c1qN6oR7kF1B2K7gU4v9Cg7nF8qO8M2bK66uD7pP0wA-_M_F2B8zS555_Lh81sA_w87c4pP4hM64J3Kj_D6z9o89p8aDk3fH5U2aH_L_Q7Z3V0o8I6c9_H85T5O_E5s_V8Y_1C_Gj-I7f5D_nK4B5iA_N3k0"/>
            <button @click="addToCart({sku: 'MOD-PAINT-SET', name: 'Acrylic Primer Set', price: 18.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJh8Lw-3P65k0p49K6V_N_A7b-2GzT_A3o7pA7m4uX8q9dRKv-b1T1I7H_q9aV2I_N19x31c1qN6oR7kF1B2K7gU4v9Cg7nF8qO8M2bK66uD7pP0wA-_M_F2B8zS555_Lh81sA_w87c4pP4hM64J3Kj_D6z9o89p8aDk3fH5U2aH_L_Q7Z3V0o8I6c9_H85T5O_E5s_V8Y_1C_Gj-I7f5D_nK4B5iA_N3k0'})" class="models-item__btn-add"><span class="material-symbols-outlined">add</span></button>
          </div>
          <h4 class="models-item__name">Set de Imprimación Acrílica</h4>
          <p class="models-item__desc">3x botellas de 30ml</p>
          <p class="models-item__price">$18.00</p>
        </div>
        <!-- Item 3 -->
        <div class="models-item">
          <div class="models-item__media">
            <img class="models-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2e2d9lM_lT-3A1O1uC-c_kR5X14b_J33tP5J9j10N8Jt5D_i8C7EaN6Y6P8B7c0ZJ53-oF2V9U54B2Y1Q5R-m15kZ8152jV-E4H93C8qJ0T8u6G49nF56tA7jM1QpM2vE2O7T9H3oH5QY_x0F5M11-O-_eH1-1rL0M1hZ_E6oX_U9B81Q7n_eP-1wJ0Q_V7jF34y0B8-FzE1o7W_89tW53y"/>
            <button @click="addToCart({sku: 'MOD-TOOL-FILE', name: 'Nano Glass File', price: 12.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2e2d9lM_lT-3A1O1uC-c_kR5X14b_J33tP5J9j10N8Jt5D_i8C7EaN6Y6P8B7c0ZJ53-oF2V9U54B2Y1Q5R-m15kZ8152jV-E4H93C8qJ0T8u6G49nF56tA7jM1QpM2vE2O7T9H3oH5QY_x0F5M11-O-_eH1-1rL0M1hZ_E6oX_U9B81Q7n_eP-1wJ0Q_V7jF34y0B8-FzE1o7W_89tW53y'})" class="models-item__btn-add"><span class="material-symbols-outlined">add</span></button>
          </div>
          <h4 class="models-item__name">Lima de Vidrio Nano</h4>
          <p class="models-item__desc">Acabado espejo</p>
          <p class="models-item__price">$12.00</p>
        </div>
      </div>
    </section>

    <!-- Vault Miniatures Grid -->
    <section class="models-vault">
      <div class="models-vault__header">
        <span class="material-symbols-outlined models-vault__icon">account_balance</span>
        <h3 class="models-vault__title">Originales de la Bóveda</h3>
      </div>
      
      <div class="models-grid">
        <div class="models-card">
          <div class="models-card__media">
            <img class="models-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwPqA8HqZqH_c6pE8YqR51Tq3jRxL1xJzZ9uVvP0nE_1mK4zBqU0tXvR9y_oP7m_0cKw2tK0r8bQz_-x9VjV1P_1tK6q9n9q14y_oZ-6_9uXQh4xRzJv7b9xLxQjM5qA_20n9wV2wTqH9QbP82510_E_0bN91D5Yv7G5tJ-_U6Q6JqV0sR6_n_U_XvU_qVb4xH36D-_2_C-X3sB65e6N4S9m5W5H4q"/>
          </div>
          <div class="models-card__content">
            <div>
              <p class="models-card__label">Sin Pintar</p>
              <h4 class="models-card__name">Cyber Ronin 1/24</h4>
            </div>
            <div class="models-card__footer">
              <span class="models-card__price">$45.00</span>
            </div>
          </div>
          <button @click="addToCart({sku: 'MOD-FIG-RONIN', name: 'Cyber Ronin 1/24', price: 45.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwPqA8HqZqH_c6pE8YqR51Tq3jRxL1xJzZ9uVvP0nE_1mK4zBqU0tXvR9y_oP7m_0cKw2tK0r8bQz_-x9VjV1P_1tK6q9n9q14y_oZ-6_9uXQh4xRzJv7b9xLxQjM5qA_20n9wV2wTqH9QbP82510_E_0bN91D5Yv7G5tJ-_U6Q6JqV0sR6_n_U_XvU_qVb4xH36D-_2_C-X3sB65e6N4S9m5W5H4q'})" class="models-card__btn"><span class="material-symbols-outlined">add</span></button>
        </div>

        <div class="models-card">
          <div class="models-card__media">
            <img class="models-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE9b_O_H5wJ0J4E-sU6qY_0_46jT3o1D1k9tX_xU_4wFq8zY0vM0P4vP3_vQ3jE05vA-Z44pQxW3qI1j-g_qK4h11E8T7Qp_257Y7wL0h94ZqE21uL3zN8H0H_9bX0kM9jC_21_uB_x1x1C_8_c51e06nZ6N_rF9kC2vYvI_M-4D7G1X-_D-lH-2P-vF7_8S4gC8lR2pS2M0yN-S_1k0_Z9T6h9W6d_a0F"/>
          </div>
          <div class="models-card__content">
            <div>
              <p class="models-card__label">Pre-Pintado</p>
              <h4 class="models-card__name">Forja Enana</h4>
            </div>
            <div class="models-card__footer">
              <span class="models-card__price">$85.00</span>
            </div>
          </div>
          <button @click="addToCart({sku: 'MOD-FIG-DWARF', name: 'Dwarven Forge', price: 85.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE9b_O_H5wJ0J4E-sU6qY_0_46jT3o1D1k9tX_xU_4wFq8zY0vM0P4vP3_vQ3jE05vA-Z44pQxW3qI1j-g_qK4h11E8T7Qp_257Y7wL0h94ZqE21uL3zN8H0H_9bX0kM9jC_21_uB_x1x1C_8_c51e06nZ6N_rF9kC2vYvI_M-4D7G1X-_D-lH-2P-vF7_8S4gC8lR2pS2M0yN-S_1k0_Z9T6h9W6d_a0F'})" class="models-card__btn"><span class="material-symbols-outlined">add</span></button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useCart } from '../composables/useCart'

const { addToCart } = useCart()
</script>

<style scoped>
.models-view {
  background-color: var(--surface-container-lowest);
  min-height: 100vh;
}

/* Intro Section */
.models-intro {
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 40rem;
  margin: 0 auto;
}

.models-intro__icon-wrapper {
  width: 4rem;
  height: 4rem;
  background-color: var(--surface-container);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
}

.models-intro__icon {
  color: var(--primary);
  font-size: 1.875rem;
  position: relative;
  z-index: 10;
  transition: transform var(--transition-base);
}

.models-intro__icon-wrapper:hover .models-intro__icon {
  transform: scale(1.1);
}

.models-intro__icon-bg {
  position: absolute;
  inset: 0;
  background-color: var(--primary);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.models-intro__icon-wrapper:hover .models-intro__icon-bg {
  opacity: 0.1;
}

.models-intro__title {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: var(--on-surface);
  margin-bottom: 0.75rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.models-intro__desc {
  color: var(--on-surface-variant);
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

/* Featured Section */
.models-featured {
  padding: 0 1.5rem;
  margin-bottom: 3rem;
}

.models-featured__card {
  background-color: var(--surface-container-low);
  border-radius: 2rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.models-featured__bg-circle {
  position: absolute;
  top: -3rem;
  right: -3rem;
  width: 12rem;
  height: 12rem;
  background-color: var(--primary);
  opacity: 0.05;
  border-radius: var(--radius-full);
  filter: blur(48px);
  transition: opacity var(--transition-base);
}

.models-featured__card:hover .models-featured__bg-circle {
  opacity: 0.1;
}

.models-featured__content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.models-featured__media {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  margin-bottom: 1.5rem;
  background-color: var(--surface-container-highest);
}

.models-featured__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  transition: transform 0.7s ease;
}

.models-featured__card:hover .models-featured__img {
  transform: scale(1.05);
}

.models-featured__info {
  width: 100%;
}

.models-featured__label {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
  margin-bottom: 0.5rem;
  display: block;
}

.models-featured__name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 0.5rem;
}

.models-featured__desc {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  margin-bottom: 1.5rem;
}

.models-featured__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.models-featured__price {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--on-surface);
}

.models-featured__cta {
  background-color: var(--primary);
  color: var(--on-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(3, 61, 96, 0.2);
  transition: all var(--transition-fast);
}

.models-featured__cta:hover {
  box-shadow: 0 6px 16px rgba(3, 61, 96, 0.3);
}

.models-featured__cta:active {
  transform: scale(0.95);
}

.models-featured__cta .material-symbols-outlined {
  font-size: 1rem;
}

/* Scroll Section */
.models-section {
  margin-bottom: 3rem;
}

.models-section__header {
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.models-section__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--on-surface);
}

.models-section__link {
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
}

.models-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0 1.5rem 1.5rem;
  scrollbar-width: none;
}

.models-scroll::-webkit-scrollbar {
  display: none;
}

.models-item {
  min-width: 150px;
  background-color: var(--surface-container-lowest);
  padding: 0.75rem;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(194, 199, 207, 0.3);
  transition: border-color var(--transition-fast);
}

.models-item:hover {
  border-color: rgba(194, 199, 207, 0.6);
}

.models-item__media {
  aspect-ratio: 1 / 1;
  background-color: var(--surface-container);
  border-radius: var(--radius-lg);
  margin-bottom: 0.75rem;
  overflow: hidden;
  position: relative;
}

.models-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.models-item__btn-add {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: #ffffff;
  color: var(--primary);
  width: 1.75rem;
  height: 1.75rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-fast);
}

.models-item__btn-add:active {
  transform: scale(0.9);
}

.models-item__name {
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--on-surface);
}

.models-item__desc {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
  margin-bottom: 0.25rem;
}

.models-item__price {
  font-weight: 800;
  font-size: 0.875rem;
  color: var(--secondary);
}

/* Vault Grid */
.models-vault {
  padding: 2rem 1.5rem;
  background-color: var(--surface-container-low);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}

.models-vault__header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.models-vault__icon {
  color: var(--primary);
}

.models-vault__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--on-surface);
}

.models-grid {
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 1rem;
}

.models-card {
  background-color: var(--surface-container-lowest);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  position: relative;
}

.models-card__media {
  aspect-ratio: 4 / 5;
  background-color: var(--surface-container-highest);
  overflow: hidden;
}

.models-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.models-card:hover .models-card__img {
  transform: scale(1.05);
}

.models-card__content {
  padding: 0.75rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.models-card__label {
  font-size: 0.5625rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.models-card__name {
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--on-surface);
  line-height: 1.2;
  margin-bottom: 0.5rem;
  padding-right: 1.5rem;
}

.models-card__price {
  font-weight: 700;
  font-size: 0.875rem;
}

.models-card__btn {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background-color: var(--secondary-container);
  color: var(--on-secondary-container);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
}

.models-card__btn:active {
  transform: scale(1.1);
}
</style>
