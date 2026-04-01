<template>
  <main class="rpgs-view pt-16 pb-24">
    <!-- Hero Section -->
    <section class="rpgs-hero">
      <div class="rpgs-hero__bg">
        <img class="rpgs-hero__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkvgR0RIDEQKaG4yKwLCIkllQDFixE7K9cbk2DBjJb7USyG5nF1f5lb07jlR-WUqTsPPlxfITol2erMqVvDhLscPyHrKlLVXxo7J2CXFr62aKhzsrPLgSbFdcKcY4LLtLaabN0S8ALuwV6wzEF-ZM0vhJckWyWWns15OVS0NwcWVY_GcWXMCU2nY-1eDeWaBtasUBEzqPpddp3uvYJ6NVpmadzSD55GO7PQsZpabprI3NONvInrZ846AcRopYX1Sf0teKuZTsxvrvw"/>
        <div class="rpgs-hero__overlay"></div>
      </div>
      <div class="rpgs-hero__content">
        <div class="rpgs-hero__badge">
          <span class="rpgs-hero__badge-dot"></span>
          <span class="rpgs-hero__badge-text">Nuevos Reinos</span>
        </div>
        <h1 class="rpgs-hero__title">RPGs</h1>
        <p class="rpgs-hero__tagline">Forja tu destino en mundos tejidos con imaginación y sombra.</p>
        <button class="rpgs-hero__cta">
          Comienza tu Viaje
        </button>
      </div>
    </section>

    <!-- Essential Core Books (Editorial Layout) -->
    <section class="rpgs-section">
      <div class="rpgs-section__header">
        <div>
          <h2 class="rpgs-section__title">Libros Básicos Esenciales</h2>
          <div class="rpgs-section__accent"></div>
        </div>
      </div>
      <div class="rpgs-grid">
        <!-- Highlight Card -->
        <div class="rpgs-highlight">
          <div class="rpgs-highlight__media">
            <img class="rpgs-highlight__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPoVeKwai_CRwzO077aA8inqmx_Bivzu5BzU4Zt0eWE3hkwXgWDj6DT_4XMcIhhNy4vC5TBaGIR4W9pir0Gygc7rCBBDbrZ1B2ksFfV20kEtEXUTTURisIIZRy1XyE6b3hXkw4g32zKUond9UHMJZ5LkW3gpw2OwuMa8Xw71Y6syxpOG5dN6u39chuVekvESh7gMln6lGRVEeg_f380SDQXBI-hNLqOKsOrJBqK_hKqmVPu9dDjVtwxmt3CqbfAv-5qxdhQ7PSWFQ1"/>
            <div class="rpgs-highlight__badge">Obra Maestra</div>
          </div>
          <div class="rpgs-highlight__footer">
            <div class="rpgs-highlight__info">
              <h3 class="rpgs-highlight__name">The Chronicler's Tome</h3>
              <p class="rpgs-highlight__desc">La guía definitiva para la creación de mundos y lore.</p>
            </div>
            <div class="rpgs-highlight__action">
              <span class="rpgs-highlight__price">$54.99</span>
              <button @click="addToCart({sku: 'RPG-BOOK-CHRONIC', name: 'The Chronicler\'s Tome', price: 54.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPoVeKwai_CRwzO077aA8inqmx_Bivzu5BzU4Zt0eWE3hkwXgWDj6DT_4XMcIhhNy4vC5TBaGIR4W9pir0Gygc7rCBBDbrZ1B2ksFfV20kEtEXUTTURisIIZRy1XyE6b3hXkw4g32zKUond9UHMJZ5LkW3gpw2OwuMa8Xw71Y6syxpOG5dN6u39chuVekvESh7gMln6lGRVEeg_f380SDQXBI-hNLqOKsOrJBqK_hKqmVPu9dDjVtwxmt3CqbfAv-5qxdhQ7PSWFQ1'})" class="rpgs-highlight__btn"><span class="material-symbols-outlined">add_shopping_cart</span></button>
            </div>
          </div>
        </div>
        
        <!-- Secondary Scroll -->
        <div class="rpgs-scroll">
          <div class="rpgs-item">
            <div class="rpgs-item__media">
              <img class="rpgs-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO4OSfot9kZ_d1SZkNMf_BK5a-52vrJV-qVYZaiV3FfHiiJ89Xa4dEkvX5XEYbhJbLv-Ca6mwWmTm73FHLd3qWmxhVzuEk7QY3OweFNMkvrLPmhVdo6fpP8QTEjQ0zyEwbBSXVoCtTLkIrbSm-o-543iuX4ElMwdjLMZhEC8l2qyFTuM3BOmXEMYQ_7KCcbsehRFU4K4R6-QXNOocI_eKjheYGe3zXTJ9WJej96dMgCQkX-h5nyoxEY_SDH2TxYxZDZj9zzMFQaWO4"/>
            </div>
            <h4 class="rpgs-item__name">Path of Shadows</h4>
            <p class="rpgs-item__desc">Mecánicas de Sigilo Avanzadas</p>
            <div class="rpgs-item__footer">
              <span class="rpgs-item__price">$39.00</span>
              <button @click="addToCart({sku: 'RPG-BOOK-SHADOW', name: 'Path of Shadows', price: 39.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO4OSfot9kZ_d1SZkNMf_BK5a-52vrJV-qVYZaiV3FfHiiJ89Xa4dEkvX5XEYbhJbLv-Ca6mwWmTm73FHLd3qWmxhVzuEk7QY3OweFNMkvrLPmhVdo6fpP8QTEjQ0zyEwbBSXVoCtTLkIrbSm-o-543iuX4ElMwdjLMZhEC8l2qyFTuM3BOmXEMYQ_7KCcbsehRFU4K4R6-QXNOocI_eKjheYGe3zXTJ9WJej96dMgCQkX-h5nyoxEY_SDH2TxYxZDZj9zzMFQaWO4'})" class="rpgs-item__btn"><span class="material-symbols-outlined">add</span></button>
            </div>
          </div>
          
          <div class="rpgs-item">
            <div class="rpgs-item__media">
              <img class="rpgs-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5vvpqae4leh2yO-uMMY878sqIkTpUhvrzF8x-Fj2z-T-ibWodkGyMxRkly8hRNPb-ZK0alziCq34xaFaixb-T-Wmq0EjVhAlu7hxOeuA5ytyBPmxOSYpPDsypMnhhTYFzzcN2QhgB3q1Opy-PWpHjDpfxb_4bXkX6BQBjgVoKxcY19sXHEMQjeqkD9V1ZrknkDM_ftgwFm-xBEnZ_9tNBfeBQTtROgX2O0g4jw5-9BcHxLd-B0pIIsWq95HsCbQXu6cNzDPfcuWJ"/>
            </div>
            <h4 class="rpgs-item__name">Arcane Origins</h4>
            <p class="rpgs-item__desc">Fundamentos de Hechicería</p>
            <div class="rpgs-item__footer">
              <span class="rpgs-item__price">$45.00</span>
              <button @click="addToCart({sku: 'RPG-BOOK-ARCANE', name: 'Arcane Origins', price: 45.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5vvpqae4leh2yO-uMMY878sqIkTpUhvrzF8x-Fj2z-T-ibWodkGyMxRkly8hRNPb-ZK0alziCq34xaFaixb-T-Wmq0EjVhAlu7hxOeuA5ytyBPmxOSYpPDsypMnhhTYFzzcN2QhgB3q1Opy-PWpHjDpfxb_4bXkX6BQBjgVoKxcY19sXHEMQjeqkD9V1ZrknkDM_ftgwFm-xBEnZ_9tNBfeBQTtROgX2O0g4jw5-9BcHxLd-B0pIIsWq95HsCbQXu6cNzDPfcuWJ'})" class="rpgs-item__btn"><span class="material-symbols-outlined">add</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Handcrafted Dice (Tonal Layering Section) -->
    <section class="rpgs-section rpgs-section--alt">
      <div class="rpgs-section__header-center">
        <span class="rpgs-section__overline">Ingeniería de Precisión</span>
        <h2 class="rpgs-section__title-large">Dados Artesanales</h2>
      </div>
      <div class="rpgs-dice-grid">
        <div class="rpgs-dice-featured">
          <img class="rpgs-dice-featured__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yMA_RwFWwNkcYCEi19TjK0K63_3_tkihQfaSFOOLng2AF2CJxWEdb2ELSrwRZCvdcXD1zHGU_sGuJzC2J0xbqATVVlm_NkDSjIp5sYKzBegNIBlmKmf3f7V2BaUi3LYPEnxLeco4jacY_gz26vqptZ31yT8aXz1uZn_PdKhqPvMn2dYvoYRIqlAdNQJOYYo1ZHcHOLPn53i0hU4mMzvMhhNuibIiFmLRySCgNsV3ndGGa2BcW8I4vv7RCKtFu0iP3ubAVzVFMewJ"/>
          <div class="rpgs-dice-featured__content">
            <div>
              <h3 class="rpgs-dice-featured__name">Nebula Shard Set</h3>
              <p class="rpgs-dice-featured__desc">Resina premium de bordes afilados</p>
            </div>
            <button @click="addToCart({sku: 'RPG-DICE-NEBULA', name: 'Nebula Shard Set', price: 95.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4yMA_RwFWwNkcYCEi19TjK0K63_3_tkihQfaSFOOLng2AF2CJxWEdb2ELSrwRZCvdcXD1zHGU_sGuJzC2J0xbqATVVlm_NkDSjIp5sYKzBegNIBlmKmf3f7V2BaUi3LYPEnxLeco4jacY_gz26vqptZ31yT8aXz1uZn_PdKhqPvMn2dYvoYRIqlAdNQJOYYo1ZHcHOLPn53i0hU4mMzvMhhNuibIiFmLRySCgNsV3ndGGa2BcW8I4vv7RCKtFu0iP3ubAVzVFMewJ'})" class="rpgs-dice-featured__btn"><span class="material-symbols-outlined">add_shopping_cart</span></button>
          </div>
        </div>
        
        <div class="rpgs-dice-item">
          <div class="rpgs-dice-item__media">
            <img class="rpgs-dice-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNOC7uTcaHK6_Enna7NJQklf2vBLZb6Wm97LPtuj2RlqUHcto5YoFOF1XEKCtRrc2S0HtXqHd_EKlFM-LFql84ZHqBNVoLK28wNB7gwKKuxr9Qn4bjvz9GLJBCrL7ve4ZmAm_iFOthShcBvkuA2jdZS52RX1Ok9K8H8FfKxwg_kSnAmhj7bu3kM74uhHGNeAbgVps4angILRr1yi0EXvru1CFMJhXA_bG46_mpzKeSx5ccT7i1VRfW9l6mILmameO7KwhvsMyabd-p"/>
          </div>
          <p class="rpgs-dice-item__name">Solid Brass D20</p>
          <div class="rpgs-dice-item__footer">
            <p class="rpgs-dice-item__price">$22.00</p>
            <button @click="addToCart({sku: 'RPG-DICE-BRASS', name: 'Solid Brass D20', price: 22.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNOC7uTcaHK6_Enna7NJQklf2vBLZb6Wm97LPtuj2RlqUHcto5YoFOF1XEKCtRrc2S0HtXqHd_EKlFM-LFql84ZHqBNVoLK28wNB7gwKKuxr9Qn4bjvz9GLJBCrL7ve4ZmAm_iFOthShcBvkuA2jdZS52RX1Ok9K8H8FfKxwg_kSnAmhj7bu3kM74uhHGNeAbgVps4angILRr1yi0EXvru1CFMJhXA_bG46_mpzKeSx5ccT7i1VRfW9l6mILmameO7KwhvsMyabd-p'})" class="rpgs-dice-item__btn"><span class="material-symbols-outlined">add_circle</span></button>
          </div>
        </div>
        
        <div class="rpgs-dice-item">
          <div class="rpgs-dice-item__media">
            <img class="rpgs-dice-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ef0daBmXvBmBn-nHu1bWAauPjRTS11H816OW8uoD2Pka7TOSkAqoJzJQaJsSaoavF-5KfsOTeLVeGeCuHizrF7oSwXnUJFEfrUxk7ydhe4QImOgTbTrGAcbMPYRviBah6ZrQvoaU6AsWdFa07PX6xiUMIeo8DI9pvjq-V53aYQitfl85y-xxPnpr-C3R5-NST3AWpM3miAQQiW6S35xt8iJP5Au3OBsWIz1py-zxSsf_HG5ziQRAlffoxxOq--HLeJUmLBtkMRQz"/>
          </div>
          <p class="rpgs-dice-item__name">Ebony Wood Set</p>
          <div class="rpgs-dice-item__footer">
            <p class="rpgs-dice-item__price">$48.00</p>
            <button @click="addToCart({sku: 'RPG-DICE-EBONY', name: 'Ebony Wood Set', price: 48.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ef0daBmXvBmBn-nHu1bWAauPjRTS11H816OW8uoD2Pka7TOSkAqoJzJQaJsSaoavF-5KfsOTeLVeGeCuHizrF7oSwXnUJFEfrUxk7ydhe4QImOgTbTrGAcbMPYRviBah6ZrQvoaU6AsWdFa07PX6xiUMIeo8DI9pvjq-V53aYQitfl85y-xxPnpr-C3R5-NST3AWpM3miAQQiW6S35xt8iJP5Au3OBsWIz1py-zxSsf_HG5ziQRAlffoxxOq--HLeJUmLBtkMRQz'})" class="rpgs-dice-item__btn"><span class="material-symbols-outlined">add_circle</span></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Campaign Modules (Asymmetric Bento Grid) -->
    <section class="rpgs-section">
      <h2 class="rpgs-section__title-medium">Módulos de Campaña</h2>
      <div class="rpgs-bento">
        <div class="rpgs-bento__main">
          <img class="rpgs-bento__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Yfz3sSBHQfmZPd_hZLLm53QcBK6AfJDRn90P0tCaqDDfDtbc5id_OifGrnr77fQvg6ORUIB3MAZWPDEMG0THr1w24G1ROuTe-t0azQQKKRLyGUhh05732Q2k0KUCUcSrGttCS0IQhFIt3tqVpptJQYNqLDZwL6QcPeDWZGn2F0Puxl9p5-nDFY5Q3b7aXFm2bzgul-sjP8u-pDcgjo6dX3oA_dLM2luXSsm78zzTu1DU4kzmnVIj6yMc7cmT8Hk2I1dtxRtERCs8"/>
          <div class="rpgs-bento__overlay">
            <div class="rpgs-bento__footer">
              <div>
                <h4 class="rpgs-bento__name">Siege of the Crimson Hold</h4>
                <p class="rpgs-bento__meta">Nivel 5-10</p>
              </div>
              <button @click="addToCart({sku: 'RPG-MOD-CRIMSON', name: 'Siege of the Crimson Hold', price: 29.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Yfz3sSBHQfmZPd_hZLLm53QcBK6AfJDRn90P0tCaqDDfDtbc5id_OifGrnr77fQvg6ORUIB3MAZWPDEMG0THr1w24G1ROuTe-t0azQQKKRLyGUhh05732Q2k0KUCUcSrGttCS0IQhFIt3tqVpptJQYNqLDZwL6QcPeDWZGn2F0Puxl9p5-nDFY5Q3b7aXFm2bzgul-sjP8u-pDcgjo6dX3oA_dLM2luXSsm78zzTu1DU4kzmnVIj6yMc7cmT8Hk2I1dtxRtERCs8'})" class="rpgs-bento__btn"><span class="material-symbols-outlined">add</span></button>
            </div>
          </div>
        </div>
        <div class="rpgs-bento__side">
          <div class="rpgs-bento__item">
            <img class="rpgs-bento__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHpB_4LgUIa04qeoArqxBp4S5dHctuQZAfS4rmnMjbKcSjx-L6evLsfWCVqhonBvJLRAWv3vq9GSZ0QMH-YAYlujf8vFWU7cQIec0jW2HsPj383dIe0h1IAvh4EWNwyUSbT7rpBBomA67CLb41ydsXUKpSWpYqZr7U30VRgI3mhHaTZ69LauajeLNiWyJq1_Uk7PDcsdgaw_thi9QEhDZ8B0dYFnS63paPHSNsUNxbmFESqblLbxRG-vK5oYq2o-CdMeW-JGQ9ylbY"/>
            <div class="rpgs-bento__badge">Frio</div>
            <button @click="addToCart({sku: 'RPG-MOD-ICE', name: 'Frozen Depths Module', price: 19.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHpB_4LgUIa04qeoArqxBp4S5dHctuQZAfS4rmnMjbKcSjx-L6evLsfWCVqhonBvJLRAWv3vq9GSZ0QMH-YAYlujf8vFWU7cQIec0jW2HsPj383dIe0h1IAvh4EWNwyUSbT7rpBBomA67CLb41ydsXUKpSWpYqZr7U30VRgI3mhHaTZ69LauajeLNiWyJq1_Uk7PDcsdgaw_thi9QEhDZ8B0dYFnS63paPHSNsUNxbmFESqblLbxRG-vK5oYq2o-CdMeW-JGQ9ylbY'})" class="rpgs-bento__btn rpgs-bento__btn--small"><span class="material-symbols-outlined">add</span></button>
          </div>
          <div class="rpgs-bento__promo">
            <p class="rpgs-bento__promo-title">Aventura Semanal</p>
            <p class="rpgs-bento__promo-text">Únete a nuestro Discord para sesiones de GM en vivo cada viernes.</p>
            <span class="material-symbols-outlined rpgs-bento__promo-icon">campaign</span>
          </div>
        </div>
        <div class="rpgs-bento__full">
          <div>
            <h4 class="rpgs-bento__full-title">Acceso a Biblioteca Digital</h4>
            <p class="rpgs-bento__full-text">Más de 200 módulos a tu alcance.</p>
          </div>
          <button @click="addToCart({sku: 'RPG-SUB-DIGITAL', name: 'Digital Library 1mo', price: 9.99, image: ''})" class="rpgs-bento__full-btn">
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Footer -->
    <section class="rpgs-cta">
      <h3 class="rpgs-cta__title">¿Listo para Lanzar?</h3>
      <p class="rpgs-cta__text">Únete a miles de jugadores en el colectivo de narración más inmersivo del mundo.</p>
      <div class="rpgs-cta__actions">
        <button class="rpgs-cta__btn rpgs-cta__btn--primary">Hazte Miembro</button>
        <button class="rpgs-cta__btn rpgs-cta__btn--secondary">Ver Todo el Equipo</button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useCart } from '../composables/useCart'

const { addToCart } = useCart()
</script>

<style scoped>
.rpgs-view {
  background-color: var(--surface);
  min-height: 100vh;
}

/* Hero Section */
.rpgs-hero {
  position: relative;
  height: 530px;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  overflow: hidden;
}

.rpgs-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.rpgs-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4) contrast(1.25);
}

.rpgs-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--background), transparent, rgba(3, 61, 96, 0.2));
}

.rpgs-hero__content {
  position: relative;
  z-index: 10;
  width: 100%;
}

.rpgs-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  background-color: rgba(251, 109, 0, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(251, 109, 0, 0.3);
  margin-bottom: 1rem;
}

.rpgs-hero__badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--secondary-container);
}

.rpgs-hero__badge-text {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--secondary-container);
}

.rpgs-hero__title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--on-background);
  letter-spacing: -0.05em;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.rpgs-hero__tagline {
  color: var(--on-surface-variant);
  max-width: 280px;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.rpgs-hero__cta {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%);
  color: var(--on-primary);
  padding: 0.75rem 2rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: var(--shadow-xl);
  transition: transform var(--transition-fast);
}

/* Sections */
.rpgs-section {
  padding: 2.5rem 1.5rem;
}

.rpgs-section--alt {
  background-color: var(--surface-container-low);
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.rpgs-section__header {
  margin-bottom: 2rem;
}

.rpgs-section__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.rpgs-section__accent {
  height: 0.25rem;
  width: 3rem;
  background-color: var(--secondary-container);
  margin-top: 0.25rem;
}

.rpgs-section__header-center {
  text-align: center;
  margin-bottom: 2rem;
}

.rpgs-section__overline {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--on-surface-variant);
}

.rpgs-section__title-large {
  font-size: 2rem;
  font-weight: 800;
  color: var(--on-surface);
  margin-top: 0.5rem;
  letter-spacing: -0.02em;
}

.rpgs-section__title-medium {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--on-surface);
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

/* Grid & Items */
.rpgs-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.rpgs-highlight {
  position: relative;
}

.rpgs-highlight__media {
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background-color: var(--surface-container-highest);
  position: relative;
}

.rpgs-highlight__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.rpgs-highlight:hover .rpgs-highlight__img {
  transform: scale(1.05);
}

.rpgs-highlight__badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
}

.rpgs-highlight__footer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.rpgs-highlight__name {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--on-surface);
}

.rpgs-highlight__desc {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
}

.rpgs-highlight__action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.rpgs-highlight__price {
  color: var(--secondary);
  font-weight: 700;
}

.rpgs-highlight__btn {
  background-color: var(--secondary-container);
  color: var(--on-secondary-container);
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
}

/* Scroll */
.rpgs-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scrollbar-width: none;
}

.rpgs-scroll::-webkit-scrollbar {
  display: none;
}

.rpgs-item {
  min-width: 200px;
  background-color: var(--surface-container-lowest);
  padding: 1rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  position: relative;
}

.rpgs-item__media {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-lg);
  background-color: var(--surface-container);
  margin-bottom: 0.75rem;
  overflow: hidden;
}

.rpgs-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.rpgs-item:hover .rpgs-item__img {
  transform: scale(1.05);
}

.rpgs-item__name {
  font-weight: 700;
  font-size: 0.875rem;
}

.rpgs-item__desc {
  font-size: 0.6875rem;
  color: var(--on-surface-variant);
  margin-bottom: 0.5rem;
}

.rpgs-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rpgs-item__price {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
}

.rpgs-item__btn {
  background-color: var(--surface-container-high);
  color: var(--secondary-container);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
}

/* Dice Grid */
.rpgs-dice-grid {
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 1rem;
}

.rpgs-dice-featured {
  grid-column: span 2;
  position: relative;
  height: 12rem;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  background-color: var(--primary-container);
  display: flex;
  align-items: flex-end;
}

.rpgs-dice-featured__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.rpgs-dice-featured__content {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rpgs-dice-featured__name {
  color: var(--on-primary);
  font-weight: 700;
  font-size: 1.25rem;
}

.rpgs-dice-featured__desc {
  color: var(--on-primary-container);
  font-size: 0.75rem;
}

.rpgs-dice-featured__btn {
  background-color: var(--primary);
  color: #ffffff;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);
}

.rpgs-dice-item {
  background-color: var(--surface-container-lowest);
  padding: 1rem;
  border-radius: var(--radius-2xl);
  position: relative;
}

.rpgs-dice-item__media {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-xl);
  background-color: var(--surface-container);
  margin-bottom: 0.75rem;
  overflow: hidden;
}

.rpgs-dice-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rpgs-dice-item__name {
  font-weight: 700;
  font-size: 0.75rem;
}

.rpgs-dice-item__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.25rem;
}

.rpgs-dice-item__price {
  color: var(--secondary);
  font-size: 0.625rem;
  font-weight: 700;
}

.rpgs-dice-item__btn {
  color: var(--secondary-container);
}

.rpgs-dice-item__btn .material-symbols-outlined {
  font-size: 1rem;
}

/* Bento */
.rpgs-bento {
  display: grid;
  grid-template-cols: repeat(12, 1fr);
  gap: 1rem;
  height: 500px;
}

.rpgs-bento__main {
  grid-column: span 7;
  background-color: var(--surface-container-highest);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  position: relative;
}

.rpgs-bento__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease;
}

.rpgs-bento__main:hover .rpgs-bento__img,
.rpgs-bento__item:hover .rpgs-bento__img {
  transform: scale(1.05);
}

.rpgs-bento__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.rpgs-bento__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.rpgs-bento__name {
  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
}

.rpgs-bento__meta {
  font-size: 0.5625rem;
  color: rgba(255, 255, 255, 0.7);
}

.rpgs-bento__btn {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast);
}

.rpgs-bento__btn:hover {
  background: rgba(255, 255, 255, 0.4);
}

.rpgs-bento__side {
  grid-column: span 5;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}

.rpgs-bento__item {
  background-color: var(--surface-container-high);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  position: relative;
}

.rpgs-bento__badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 0.625rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  background-color: var(--error);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-sm);
}

.rpgs-bento__btn--small {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
}

.rpgs-bento__promo {
  background-color: var(--primary);
  border-radius: var(--radius-2xl);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.rpgs-bento__promo-title {
  color: var(--on-primary);
  font-weight: 700;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
}

.rpgs-bento__promo-text {
  color: var(--on-primary-container);
  font-size: 0.625rem;
  line-height: 1.4;
  flex-grow: 1;
}

.rpgs-bento__promo-icon {
  color: var(--secondary-container);
  margin-top: 0.5rem;
  font-size: 1.25rem;
}

.rpgs-bento__full {
  grid-column: span 12;
  height: 8rem;
  background-color: var(--surface-container-low);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.rpgs-bento__full:hover {
  background-color: var(--surface-container);
}

.rpgs-bento__full-title {
  font-weight: 700;
  color: var(--on-surface);
}

.rpgs-bento__full-text {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
}

.rpgs-bento__full-btn {
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-full);
  background-color: var(--primary);
  color: var(--on-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-fast);
}

.rpgs-bento__full:hover .rpgs-bento__full-btn {
  transform: scale(1.05);
}

/* CTA */
.rpgs-cta {
  padding: 3rem 1.5rem;
  text-align: center;
}

.rpgs-cta__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--on-surface);
  margin-bottom: 0.5rem;
}

.rpgs-cta__text {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  margin-bottom: 2rem;
  padding: 0 2rem;
}

.rpgs-cta__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.rpgs-cta__btn {
  padding: 1rem;
  border-radius: var(--radius-xl);
  font-weight: 700;
  font-size: 0.875rem;
}

.rpgs-cta__btn--primary {
  background-color: var(--secondary-container);
  color: var(--on-secondary-container);
  box-shadow: 0 10px 20px rgba(251, 109, 0, 0.2);
}

.rpgs-cta__btn--secondary {
  background-color: var(--surface-container-lowest);
  color: var(--primary);
  border: 1px solid rgba(194, 199, 207, 0.3);
}
</style>
