<template>
  <main class="boardgames-view pt-16 pb-24">
    <!-- Hero Section -->
    <section class="bg-hero">
      <div class="bg-hero__container">
        <div class="bg-hero__content">
          <div class="bg-hero__badge">
            <span class="material-symbols-outlined">casino</span>
            Excelencia en Mesa
          </div>
          <h1 class="bg-hero__title">Juegos de<br><span class="bg-hero__title-accent">Mesa</span></h1>
          <p class="bg-hero__desc">Desde estrategia geopolítica intensa hasta narración cooperativa, reúne a tus amigos en torno a los mejores títulos.</p>
          <button class="bg-hero__cta">
            Explorar Colección
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <!-- Featured Hero Image -->
        <div class="bg-hero__visual">
          <div class="bg-hero__card">
            <img class="bg-hero__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-pM_l0MhP4eXIf4e9zGDB-Gg6fJv2nUik06F_L7NlS0tU3_d20yA97Lw6c30Z3r7o0U3z1bL1w9aE1B9O3v4i5Y2W9K7V4Z20I6Y6c8B_J9X7Z3y7vI6-9_kI1bF_3yA4jJ8a21-k_sT9B_R8c3pT6P4wF4L2aJ3rV1Y2w1zL40k3V6a_pE9eP55X4yI"/>
            <div class="bg-hero__panel-wrapper">
              <div class="bg-hero__panel">
                <div class="bg-hero__panel-info">
                  <h3 class="bg-hero__panel-name">Twilight Imperium IV</h3>
                  <p class="bg-hero__panel-desc">Estrategia de Ciencia Ficción Épica</p>
                </div>
                <div class="bg-hero__panel-action">
                  <p class="bg-hero__panel-price">$149.99</p>
                  <button @click="addToCart({sku: 'BG-TWILIGHT-4', name: 'Twilight Imperium IV', price: 149.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn-pM_l0MhP4eXIf4e9zGDB-Gg6fJv2nUik06F_L7NlS0tU3_d20yA97Lw6c30Z3r7o0U3z1bL1w9aE1B9O3v4i5Y2W9K7V4Z20I6Y6c8B_J9X7Z3y7vI6-9_kI1bF_3yA4jJ8a21-k_sT9B_R8c3pT6P4wF4L2aJ3rV1Y2w1zL40k3V6a_pE9eP55X4yI'})" class="bg-hero__panel-btn"><span class="material-symbols-outlined">add_shopping_cart</span></button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-hero__glow bg-hero__glow--secondary"></div>
          <div class="bg-hero__glow bg-hero__glow--primary"></div>
        </div>
      </div>
    </section>

    <!-- Strategy & Heavy Euros (Bento Section) -->
    <section class="bg-section">
      <div class="bg-section__header">
        <h2 class="bg-section__title">Estrategia Pesada</h2>
        <a class="bg-section__link" href="#">Ver Catálogo</a>
      </div>
      
      <div class="bg-bento">
        <!-- Main Bento Box -->
        <div class="bg-bento__main">
          <img class="bg-bento__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDxSgZt_S5h-2u7p83y7R8r-B7T1j6d9L2A_1m9X7o_N7w14L8M_r7L1H1D-H_h2a44p-B9X9D8C-y8n-Z11R0V2X11d7o8d9_zX95Z9bQ3uU7k5Y82k9h0rE9_t2B1P822s_pT8h6zT4C9s69mX2G8u1g9X8_wX67nF2Q4y2n9S9D_5V9gQ31oO4n"/>
          <div class="bg-bento__overlay"></div>
          <div class="bg-bento__content">
            <div class="bg-bento__info">
              <span class="bg-bento__badge">Staff Pick</span>
              <h3 class="bg-bento__name">Brass: Birmingham</h3>
              <p class="bg-bento__desc">Obra maestra de la estrategia económica durante la revolución industrial.</p>
            </div>
            <div class="bg-bento__action">
              <span class="bg-bento__price">$89.95</span>
              <button @click="addToCart({sku: 'BG-BRASS-B', name: 'Brass: Birmingham', price: 89.95, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDxSgZt_S5h-2u7p83y7R8r-B7T1j6d9L2A_1m9X7o_N7w14L8M_r7L1H1D-H_h2a44p-B9X9D8C-y8n-Z11R0V2X11d7o8d9_zX95Z9bQ3uU7k5Y82k9h0rE9_t2B1P822s_pT8h6zT4C9s69mX2G8u1g9X8_wX67nF2Q4y2n9S9D_5V9gQ31oO4n'})" class="bg-bento__btn"><span class="material-symbols-outlined">add_shopping_cart</span></button>
            </div>
          </div>
        </div>

        <div class="bg-bento__side">
          <div class="bg-card">
            <div class="bg-card__media">
              <img class="bg-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2v_Q34_W6G6D4aLz_Tz8wI0Jq-d_Z0oXU3wQ1_T6z6e1I9f4wQ3X_58yW5kL2C5Y8tN0q_xQ64pC9F7V2V1A9Z1D4n9tK8cE9m2D3sX1z8c2p8F0n_L0bN91D5Yv7G5tJ-_U6Q6JqV0sR6_n_U_XvU_qVb4xH36D-_2_C-X3sB65e6N4S9m5W5H4q"/>
            </div>
            <h4 class="bg-card__name">Scythe</h4>
            <p class="bg-card__desc">Construcción de motores en una historia alternativa de 1920.</p>
            <div class="bg-card__footer">
              <span class="bg-card__price">$79.00</span>
              <button @click="addToCart({sku: 'BG-SCYTHE-1', name: 'Scythe', price: 79.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2v_Q34_W6G6D4aLz_Tz8wI0Jq-d_Z0oXU3wQ1_T6z6e1I9f4wQ3X_58yW5kL2C5Y8tN0q_xQ64pC9F7V2V1A9Z1D4n9tK8cE9m2D3sX1z8c2p8F0n_L0bN91D5Yv7G5tJ-_U6Q6JqV0sR6_n_U_XvU_qVb4xH36D-_2_C-X3sB65e6N4S9m5W5H4q'})" class="bg-card__btn"><span class="material-symbols-outlined">add</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Party & Light Strategy (Horizontal Scroll) -->
    <section class="bg-section bg-section--alt">
      <div class="bg-section__container">
        <h2 class="bg-section__title">Juegos de Fiesta y Cartas</h2>
        
        <div class="bg-scroll">
          <!-- Item 1 -->
          <div class="bg-scroll-item">
            <div class="bg-scroll-item__media">
              <img class="bg-scroll-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_M9W_Jq9P-L_1fA7L8M9n9Z0Y0I_9E9G8sR_H5N9D9pY7uV_K1F9K1_D91E4k0yQ0l1X9vE_2C3U0Z4G2hL5J5u0O8F8S2R9A_fX3y2C_0G8T3yP7b9u0m8rP_9J3yH7vP5C6u9W8eE5fF3x8_I_Z_4L5N6E8iG_5qZ8u7z8jE6g9zD4M3Z2rT2t"/>
            </div>
            <h4 class="bg-scroll-item__name">Codenames: Duet</h4>
            <div class="bg-scroll-item__meta">
              <span class="material-symbols-outlined">group</span>
              <span class="bg-scroll-item__meta-text">2 jugadores</span>
            </div>
            <div class="bg-scroll-item__footer">
              <span class="bg-scroll-item__price">$19.95</span>
              <button @click="addToCart({sku: 'BG-CODE-DUET', name: 'Codenames: Duet', price: 19.95, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_M9W_Jq9P-L_1fA7L8M9n9Z0Y0I_9E9G8sR_H5N9D9pY7uV_K1F9K1_D91E4k0yQ0l1X9vE_2C3U0Z4G2hL5J5u0O8F8S2R9A_fX3y2C_0G8T3yP7b9u0m8rP_9J3yH7vP5C6u9W8eE5fF3x8_I_Z_4L5N6E8iG_5qZ8u7z8jE6g9zD4M3Z2rT2t'})" class="bg-scroll-item__btn"><span class="material-symbols-outlined">add</span></button>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="bg-scroll-item">
            <div class="bg-scroll-item__media">
              <img class="bg-scroll-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL_3M_N0nU9fA7j_L_2L8E3b_U1A8vL3kQ3gH5N5h_D2oK01hA_3K9M11_82Y4aV4d_D8kP1l3yF8wE82E3M4lH7eE5G2uF48H09S_R6I1Y2Z901yD_G9dO8qR_P6sZ4cQ_N2p6u5v8jR7w_7fN6J_3B9k6X2tZ3qjE3U5eN5hX8_t_L9fQ_K8yU"/>
              <div class="bg-scroll-item__badge">Nuevo</div>
            </div>
            <h4 class="bg-scroll-item__name">Just One</h4>
            <div class="bg-scroll-item__meta">
              <span class="material-symbols-outlined">group</span>
              <span class="bg-scroll-item__meta-text">3-7 jugadores</span>
            </div>
            <div class="bg-scroll-item__footer">
              <span class="bg-scroll-item__price">$24.99</span>
              <button @click="addToCart({sku: 'BG-JUST-ONE', name: 'Just One', price: 24.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_3M_N0nU9fA7j_L_2L8E3b_U1A8vL3kQ3gH5N5h_D2oK01hA_3K9M11_82Y4aV4d_D8kP1l3yF8wE82E3M4lH7eE5G2uF48H09S_R6I1Y2Z901yD_G9dO8qR_P6sZ4cQ_N2p6u5v8jR7w_7fN6J_3B9k6X2tZ3qjE3U5eN5hX8_t_L9fQ_K8yU'})" class="bg-scroll-item__btn"><span class="material-symbols-outlined">add</span></button>
            </div>
          </div>
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
.boardgames-view {
  background-color: var(--surface);
  min-height: 100vh;
}

/* Hero Section */
.bg-hero {
  max-width: 1600px;
  margin: 2rem auto 0;
  padding: 2rem 1.5rem;
}

.bg-hero__container {
  display: grid;
  grid-template-cols: 1fr;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 768px) {
  .bg-hero__container {
    grid-template-cols: repeat(12, 1fr);
  }
}

.bg-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .bg-hero__content {
    grid-column: span 5;
    align-items: flex-start;
    text-align: left;
  }
}

.bg-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  background-color: var(--surface-container);
  border: 1px solid rgba(114, 120, 127, 0.2);
  margin-bottom: 1.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
}

.bg-hero__badge .material-symbols-outlined {
  font-size: 0.875rem;
}

.bg-hero__title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--on-surface);
  line-height: 0.9;
  margin-bottom: 1.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.04em;
}

@media (min-width: 768px) {
  .bg-hero__title {
    font-size: 4.5rem;
  }
}

.bg-hero__title-accent {
  color: var(--primary);
}

.bg-hero__desc {
  color: var(--on-surface-variant);
  font-size: 1rem;
  margin-bottom: 2rem;
  max-width: 24rem;
}

.bg-hero__cta {
  background-color: var(--primary);
  color: var(--on-primary);
  padding: 1rem 2rem;
  border-radius: var(--radius-xl);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all var(--transition-fast);
}

.bg-hero__cta:hover {
  box-shadow: 0 10px 25px rgba(3, 61, 96, 0.3);
}

.bg-hero__cta:active {
  transform: scale(0.95);
}

.bg-hero__cta .material-symbols-outlined {
  font-size: 1.125rem;
}

/* Hero Visual */
.bg-hero__visual {
  position: relative;
}

@media (min-width: 768px) {
  .bg-hero__visual {
    grid-column: span 7;
  }
}

.bg-hero__card {
  aspect-ratio: 4 / 3;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
  position: relative;
  z-index: 10;
  width: 100%;
}

.bg-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease-out;
}

.bg-hero__card:hover .bg-hero__img {
  transform: scale(1.05);
}

.bg-hero__panel-wrapper {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
}

.bg-hero__panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 1rem;
  border-radius: var(--radius-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bg-hero__panel-name {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--primary);
}

.bg-hero__panel-desc {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--on-surface-variant);
}

.bg-hero__panel-action {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bg-hero__panel-price {
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--primary);
}

.bg-hero__panel-btn {
  width: 3rem;
  height: 3rem;
  background-color: var(--primary);
  color: #ffffff;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
  box-shadow: var(--shadow-lg);
}

.bg-hero__panel-btn:hover {
  transform: scale(1.1);
}

.bg-hero__glow {
  position: absolute;
  width: 16rem;
  height: 16rem;
  border-radius: var(--radius-full);
  filter: blur(64px);
  z-index: -1;
}

.bg-hero__glow--secondary {
  top: -2.5rem;
  right: -2.5rem;
  background-color: rgba(251, 109, 0, 0.4);
}

.bg-hero__glow--primary {
  bottom: -2.5rem;
  left: -2.5rem;
  background-color: rgba(3, 61, 96, 0.2);
}

/* Sections */
.bg-section {
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.bg-section--alt {
  background-color: var(--surface-container-lowest);
  border-top: 1px solid rgba(194, 199, 207, 0.1);
}

.bg-section__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
}

.bg-section__title {
  font-size: 1.875rem;
  font-weight: 800;
  color: var(--on-surface);
  letter-spacing: -0.02em;
}

.bg-section__link {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
}

.bg-section__link:hover {
  text-decoration: underline;
}

/* Bento */
.bg-bento {
  display: grid;
  grid-template-cols: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .bg-bento {
    grid-template-cols: repeat(3, 1fr);
  }
}

.bg-bento__main {
  background-color: var(--surface-container-low);
  border-radius: 2rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

@media (min-width: 768px) {
  .bg-bento__main {
    grid-column: span 2;
  }
}

.bg-bento__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  transition: transform 0.7s ease;
}

.bg-bento__main:hover .bg-bento__img {
  transform: scale(1.05);
}

.bg-bento__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
}

.bg-bento__content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

.bg-bento__info {
  max-width: 70%;
  color: #ffffff;
}

.bg-bento__badge {
  background-color: var(--error);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.bg-bento__name {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.bg-bento__desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.bg-bento__action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
}

.bg-bento__price {
  color: #ffffff;
  font-weight: 800;
  font-size: 1.5rem;
}

.bg-bento__btn {
  background-color: #ffffff;
  color: var(--primary);
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
}

.bg-bento__btn:active {
  transform: scale(0.95);
}

.bg-bento__side {
  display: flex;
  flex-direction: column;
}

/* Card */
.bg-card {
  background-color: var(--surface-container-lowest);
  border-radius: 2rem;
  padding: 1rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(114, 120, 127, 0.1);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.bg-card__media {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background-color: var(--surface-container);
  margin-bottom: 1rem;
}

.bg-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-card__name {
  font-weight: 700;
  color: var(--on-surface);
  padding: 0 0.25rem;
}

.bg-card__desc {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  padding: 0 0.25rem;
  margin-top: 0.25rem;
}

.bg-card__footer {
  margin-top: auto;
  padding: 1rem 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bg-card__price {
  font-weight: 800;
  color: var(--primary);
}

.bg-card__btn {
  width: 2rem;
  height: 2rem;
  background-color: var(--secondary-container);
  color: var(--on-secondary-container);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
}

.bg-card__btn:hover {
  transform: scale(1.1);
}

/* Scroll */
.bg-scroll {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 2rem;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.bg-scroll::-webkit-scrollbar {
  display: none;
}

.bg-scroll-item {
  min-width: 280px;
  width: 280px;
  scroll-snap-align: center;
  background-color: var(--surface-container-low);
  border-radius: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.bg-scroll-item__media {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-xl);
  background-color: var(--surface-container);
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
}

.bg-scroll-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.bg-scroll-item:hover .bg-scroll-item__img {
  transform: scale(1.05);
}

.bg-scroll-item__badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: var(--secondary);
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-full);
}

.bg-scroll-item__name {
  font-weight: 700;
  color: var(--on-surface);
  font-size: 1.125rem;
}

.bg-scroll-item__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
}

.bg-scroll-item__meta .material-symbols-outlined {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
}

.bg-scroll-item__meta-text {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
}

.bg-scroll-item__footer {
  margin-top: auto;
  background-color: #ffffff;
  border-radius: var(--radius-full);
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(114, 120, 127, 0.1);
}

.bg-scroll-item__price {
  font-weight: 800;
  color: var(--primary);
}

.bg-scroll-item__btn {
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--primary);
  color: #ffffff;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast);
}

.bg-scroll-item__btn:hover {
  background-color: var(--secondary);
}
</style>
