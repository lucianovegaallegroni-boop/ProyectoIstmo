<template>
  <main class="tcg-view pt-16 pb-24">
    <!-- Hero Section -->
    <section class="tcg-hero">
      <div class="tcg-hero__content">
        <div class="tcg-hero__badge">
          Pilar: Istmo Games
        </div>
        <h2 class="tcg-hero__title">Trading Cards</h2>
        <p class="tcg-hero__description">Experimenta el pulso de la arena con hallazgos raros y ventaja competitiva.</p>
        <button class="tcg-hero__cta">
          Explorar la Bóveda
        </button>
      </div>
      <!-- Asymmetric Hero Visual -->
      <div class="tcg-hero__visual">
        <div class="tcg-hero__card">
          <img alt="Rare Card" class="tcg-hero__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKf9LH1lhpXGRvPMMjrZ8wH4D1UJAuUKUlQE3l_eriPsLLzR06EJDNoZHM1hB_7nr8s0H7lykJPnv9ldH4IFwqR5BaDKdlDpfve0a-hWdB7f2oBQzccUEhb2ept05xdGb2amUIjLaqwGURUeLgNhe53aqmgreQawoNbYxHKHOrLRa_mbpEy0vHIBogjeYnu_Aq4XrhUloDlYa3fKzV11vThhRWzJWTE0XKYKu8p1rG3je305k_D33Jo7MAM6cy8F8h8H_ug33bc_PS" />
          <div class="tcg-hero__shimmer"></div>
        </div>
      </div>
    </section>

    <!-- Elite Rarity Bento Section -->
    <section class="tcg-section">
      <div class="tcg-section__header">
        <div class="tcg-section__title-group">
          <h3 class="tcg-section__title">Rareza Élite</h3>
          <p class="tcg-section__subtitle">Singles curados de alto valor</p>
        </div>
        <span class="material-symbols-outlined tcg-section__icon">stars</span>
      </div>
      
      <div class="tcg-grid">
        <!-- Main Featured Card -->
        <div class="tcg-card tcg-card--featured">
          <div class="tcg-card__badge">
            <div class="tcg-card__badge-content">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
              LIMITADO
            </div>
          </div>
          <div class="tcg-card__media">
            <img alt="Elite Card" class="tcg-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogzDdDTm8uCpAzvGD80X0RxcOM0kZcNSCFgo6fTw5S92uCMwZxE6Wd9L9RVCjy5q4tfO5ttlZ5qvFQAvIR4Dk8BAKxuJAEt1p5yJyoUSsPtXPD-RsiavVLBu2DGfGE7s31p7Q0DTEiH-ENrG3yhlroUk1o3ybWE_W6vtvuMjdtBf-eZwVPeVc6IUuyM6uQWnouHSgevLWFya1ra0fgZWPyYDtyMhfZzKggmZ_pXrEky3Ilgw2PkfLkn4l6V0V1_EGYc28RFSQUqnR" />
          </div>
          <div class="tcg-card__footer">
            <div class="tcg-card__info">
              <h4 class="tcg-card__name">Astral Leviathan</h4>
              <p class="tcg-card__grade">Grado 10 Prístino</p>
            </div>
            <div class="tcg-card__action-group">
              <p class="tcg-card__price">$1,240</p>
              <button @click="addToCart({sku: 'TCG-ASTRAL-01', name: 'Astral Leviathan', price: 1240, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDogzDdDTm8uCpAzvGD80X0RxcOM0kZcNSCFgo6fTw5S92uCMwZxE6Wd9L9RVCjy5q4tfO5ttlZ5qvFQAvIR4Dk8BAKxuJAEt1p5yJyoUSsPtXPD-RsiavVLBu2DGfGE7s31p7Q0DTEiH-ENrG3yhlroUk1o3ybWE_W6vtvuMjdtBf-eZwVPeVc6IUuyM6uQWnouHSgevLWFya1ra0fgZWPyYDtyMhfZzKggmZ_pXrEky3Ilgw2PkfLkn4l6V0V1_EGYc28RFSQUqnR', badge: 'Grade 10'})" class="tcg-card__btn"><span class="material-symbols-outlined">add_shopping_cart</span></button>
            </div>
          </div>
        </div>
        
        <!-- Secondary Rarity Items -->
        <div class="tcg-card tcg-card--compact">
          <div class="tcg-card__media aspect-square">
            <img alt="Rarity 2" class="tcg-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD04g1ttuoCOJgYMojF6Yh8E-GLD4cl9ny9FzrbhVfEnKiLMtSleQAG2rIMoLzKecgsLaaR0VTA5khSWbhFAjVINDC77E86JdwUDL_Jd7dxWO5ODcBFzGRje5aXlRnJArCBAELiBX5hVWnxOHiB44NDk4unsIeGLMVatTegplRWyCgiHrKevJ_XU6e1LWXHaOl8l-gKmVz9XwumzuGxYP5bGKNwjLKsDclxqt-XBWjuMraCvpHRToUdmsSlOzwJ3HCdDvp-Wy6-lZQG"/>
          </div>
          <h4 class="tcg-card__name tcg-card__name--small">Shadow Stalker</h4>
          <p class="tcg-card__price tcg-card__price--small">$340.00</p>
          <button @click="addToCart({sku: 'TCG-SHADOW-01', name: 'Shadow Stalker', price: 340, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD04g1ttuoCOJgYMojF6Yh8E-GLD4cl9ny9FzrbhVfEnKiLMtSleQAG2rIMoLzKecgsLaaR0VTA5khSWbhFAjVINDC77E86JdwUDL_Jd7dxWO5ODcBFzGRje5aXlRnJArCBAELiBX5hVWnxOHiB44NDk4unsIeGLMVatTegplRWyCgiHrKevJ_XU6e1LWXHaOl8l-gKmVz9XwumzuGxYP5bGKNwjLKsDclxqt-XBWjuMraCvpHRToUdmsSlOzwJ3HCdDvp-Wy6-lZQG'})" class="tcg-card__btn-add"><span class="material-symbols-outlined">add</span></button>
        </div>
        
        <div class="tcg-card tcg-card--compact">
          <div class="tcg-card__media aspect-square">
            <img alt="Rarity 3" class="tcg-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7kufr5VM2E4eIBnLy3qVKaZ2YTXr1h8rGMZ-3GdR0AlIb2OBoZq0bOJ4lEnDzrhxVyMDbpJSr7XikcA0roBKzZUodgcLQ1I8HcFyGpd0x3yfVuGNSb483L80lZVnhOFI5zqTM8HFoVFgLwq6B97B-AadhN8ktJvUS3s8QNgC7m8hl0iwgOmtmwRdsTUFIt6bOOXgqmYDRUVWz5Ia3geu4Sg9qhT-GILCejPdbeN8iDWDsu8EUl1m2V-CxBS-HGPR7zR44o5yFFSnh"/>
          </div>
          <h4 class="tcg-card__name tcg-card__name--small">Golden Aegis</h4>
          <p class="tcg-card__price tcg-card__price--small">$215.50</p>
          <button @click="addToCart({sku: 'TCG-GOLDEN-01', name: 'Golden Aegis', price: 215.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7kufr5VM2E4eIBnLy3qVKaZ2YTXr1h8rGMZ-3GdR0AlIb2OBoZq0bOJ4lEnDzrhxVyMDbpJSr7XikcA0roBKzZUodgcLQ1I8HcFyGpd0x3yfVuGNSb483L80lZVnhOFI5zqTM8HFoVFgLwq6B97B-AadhN8ktJvUS3s8QNgC7m8hl0iwgOmtmwRdsTUFIt6bOOXgqmYDRUVWz5Ia3geu4Sg9qhT-GILCejPdbeN8iDWDsu8EUl1m2V-CxBS-HGPR7zR44o5yFFSnh'})" class="tcg-card__btn-add"><span class="material-symbols-outlined">add</span></button>
        </div>
      </div>
    </section>

    <!-- New Booster Packs - Tonal Shift Section -->
    <section class="tcg-section tcg-section--alt">
      <div class="tcg-section__header">
        <h3 class="tcg-section__title">Nuevos Sobres</h3>
        <button class="tcg-section__link">
          VER TODO
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <div class="tcg-scroll">
        <!-- Pack 1 -->
        <div class="tcg-pack">
          <div class="tcg-pack__media">
            <img alt="Pack 1" class="tcg-pack__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Yx21J3THL3aznZx_nwQYckuS0_c8Y8nTNtvMPmLKhDHgmR-4EDd5OegHa-tJZixSw4wCkm0LgSJ5_FcDpd_VkXIl53OJYauyV94hMdZ28I8hwsuMnHkXYzYeIPaX9NG1LPOL78GY_2l-vjBrz-TnixAOMhC_jYxGg_xe5hHbl8cDaoki5fJgxR8BJyf5RAjTVftMWrIl2ACY2Gh2q97XKPzQ7MpIcSWLXRxK8pfXesV75sUgWKHPrn5oJPw9RzuP3475Yf_ckpDY"/>
            <div class="tcg-pack__label">
              <span class="tcg-pack__label-text">SCARLET VOID</span>
            </div>
          </div>
          <p class="tcg-pack__name">Caja de Display (36)</p>
          <p class="tcg-pack__price">$119.99</p>
          <button @click="addToCart({sku: 'TCG-BOX-SCARLET', name: 'Scarlet Void Display Box', price: 119.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Yx21J3THL3aznZx_nwQYckuS0_c8Y8nTNtvMPmLKhDHgmR-4EDd5OegHa-tJZixSw4wCkm0LgSJ5_FcDpd_VkXIl53OJYauyV94hMdZ28I8hwsuMnHkXYzYeIPaX9NG1LPOL78GY_2l-vjBrz-TnixAOMhC_jYxGg_xe5hHbl8cDaoki5fJgxR8BJyf5RAjTVftMWrIl2ACY2Gh2q97XKPzQ7MpIcSWLXRxK8pfXesV75sUgWKHPrn5oJPw9RzuP3475Yf_ckpDY'})" class="tcg-pack__btn-add"><span class="material-symbols-outlined">add</span></button>
        </div>
        <!-- Pack 2 -->
        <div class="tcg-pack">
          <div class="tcg-pack__media">
            <img alt="Pack 2" class="tcg-pack__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwfuiYDH2N2zRAeQUcboXdNEVf-EsOxYWvBcjxUNA7qJ0wbUkLfVjwzuRlRUNpw3pxym_CbZHjJAS82-v_Y2dme5IElQq5fcehMJawm6HiQgL2tabKlaS_rG2QIf_GnG6P52Yeh2XUTi0WiZab5s85LsDOISaeA3D0VZ4pHPCgPihKMCAcR_Sekq09WzLmXPfkPzGEq-hZ_zciILQw4DAFkTzxY250E_NFP82WL1OLva1wcJ8oJV7jklw0PS8LcT-O2gW_XZhx-pIi"/>
            <div class="tcg-pack__label">
              <span class="tcg-pack__label-text">TITAN REIGN</span>
            </div>
          </div>
          <p class="tcg-pack__name">Sobre Individual</p>
          <p class="tcg-pack__price">$4.50</p>
          <button @click="addToCart({sku: 'TCG-PCK-TITAN', name: 'Titan Reign Pack', price: 4.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwfuiYDH2N2zRAeQUcboXdNEVf-EsOxYWvBcjxUNA7qJ0wbUkLfVjwzuRlRUNpw3pxym_CbZHjJAS82-v_Y2dme5IElQq5fcehMJawm6HiQgL2tabKlaS_rG2QIf_GnG6P52Yeh2XUTi0WiZab5s85LsDOISaeA3D0VZ4pHPCgPihKMCAcR_Sekq09WzLmXPfkPzGEq-hZ_zciILQw4DAFkTzxY250E_NFP82WL1OLva1wcJ8oJV7jklw0PS8LcT-O2gW_XZhx-pIi'})" class="tcg-pack__btn-add"><span class="material-symbols-outlined">add</span></button>
        </div>
        <!-- Pack 3 -->
        <div class="tcg-pack">
          <div class="tcg-pack__media">
            <img alt="Pack 3" class="tcg-pack__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4jMhJekeDkrCwSFXDS4xMN01ATAuayCxVPeA_JbnAeylw0BcV7UAr1-de6j5DBYkFjnIqlEoPKFnFggHxFrfikKQhrgSk0UTAyfjWy0R2ViAzqLshTanDkseGHag_-512E7S5OSbyssfViPU5o3ep5jWVVl6UnIg-KohZxm9nBk_eoQIkHQeUlifmMmwZwg4u55gwZl1kMdeVmUU92exkeTHjmVrtMpX4JwXE6t9r9NlkKCwrXbf67hp9F89lJHhmr15kVE3_NMa"/>
            <div class="tcg-pack__label">
              <span class="tcg-pack__label-text">CYBER CORE</span>
            </div>
          </div>
          <p class="tcg-pack__name">Paquete Élite</p>
          <p class="tcg-pack__price">$65.00</p>
          <button @click="addToCart({sku: 'TCG-BND-CYBER', name: 'Cyber Core Bundle', price: 65.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4jMhJekeDkrCwSFXDS4xMN01ATAuayCxVPeA_JbnAeylw0BcV7UAr1-de6j5DBYkFjnIqlEoPKFnFggHxFrfikKQhrgSk0UTAyfjWy0R2ViAzqLshTanDkseGHag_-512E7S5OSbyssfViPU5o3ep5jWVVl6UnIg-KohZxm9nBk_eoQIkHQeUlifmMmwZwg4u55gwZl1kMdeVmUU92exkeTHjmVrtMpX4JwXE6t9r9NlkKCwrXbf67hp9F89lJHhmr15kVE3_NMa'})" class="tcg-pack__btn-add"><span class="material-symbols-outlined">add</span></button>
        </div>
      </div>
    </section>

    <!-- Competitive Accessories -->
    <section class="tcg-section">
      <h3 class="tcg-section__title tcg-section__title--large">Accesorios Competitivos</h3>
      <div class="tcg-accessories">
        <!-- Accessory 1 -->
        <div class="tcg-accessory">
          <div class="tcg-accessory__media">
            <img alt="Accessory 1" class="tcg-accessory__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByUd9Ayb6pZf-UxBNiHOTY4IVdADgCV9fS9Gra2rUo9EL5ow2jcYoRwNd7p_eMGtcP9njkCZjpboQP1lqh6b0G31sDguJ0SHa6bapYdqpXICcZx-dX8FgwlEM0q0NA4ih1O83Gfwt3atPIGGY8BdQkKRAhssh60CI6YpBg6bhPmo-Jf-lbINGSwJjPthbEhhUQMyXVJO20VqpuAIP5rtQIG1mkW_7Fzdn6asCwvNFe98G-aVdMlA0X8sHSdOi49IDLrVgfHLbfJAwf"/>
          </div>
          <div class="tcg-accessory__content">
            <h4 class="tcg-accessory__name">Fundas Master Grade</h4>
            <p class="tcg-accessory__desc">Acabado mate no reflectante</p>
            <div class="tcg-accessory__footer">
              <span class="tcg-accessory__price">$12.99</span>
              <button @click="addToCart({sku: 'TCG-ACC-SLV-MG', name: 'Master Grade Sleeves', price: 12.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByUd9Ayb6pZf-UxBNiHOTY4IVdADgCV9fS9Gra2rUo9EL5ow2jcYoRwNd7p_eMGtcP9njkCZjpboQP1lqh6b0G31sDguJ0SHa6bapYdqpXICcZx-dX8FgwlEM0q0NA4ih1O83Gfwt3atPIGGY8BdQkKRAhssh60CI6YpBg6bhPmo-Jf-lbINGSwJjPthbEhhUQMyXVJO20VqpuAIP5rtQIG1mkW_7Fzdn6asCwvNFe98G-aVdMlA0X8sHSdOi49IDLrVgfHLbfJAwf'})" class="tcg-accessory__btn">
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </div>
        <!-- Accessory 2 -->
        <div class="tcg-accessory">
          <div class="tcg-accessory__media">
            <img alt="Accessory 2" class="tcg-accessory__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADNSVbbz7_74JvVeIVwx-Umbxa0TEUJjOjZUUlI-6Mh6D5ljhQkBIGtNoj3WnoMKoguvtD4V4dHHImBc0adZCpDEU9d8XwoE1q-gYNzW9oqA4ZPUsMX1_2DGeRqRg91_tweNj8iZG26jJLYxL_hGYaiotOZDNi4I2QeTUSIURQRGNIYJwqgSmpl4sv4HkyHmOLm7fGDNYCAqImRZYBjbwnC8NUKGUeRlvLq5-ufbs2mf-nKKgYi0tqiSvE6OnuSwGWf4UIODvQ_00E"/>
          </div>
          <div class="tcg-accessory__content">
            <h4 class="tcg-accessory__name">Tapete de Juego Arena</h4>
            <p class="tcg-accessory__desc">Base de goma de alta densidad</p>
            <div class="tcg-accessory__footer">
              <span class="tcg-accessory__price">$24.50</span>
              <button @click="addToCart({sku: 'TCG-ACC-PLY-ARN', name: 'Arena Playmat', price: 24.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADNSVbbz7_74JvVeIVwx-Umbxa0TEUJjOjZUUlI-6Mh6D5ljhQkBIGtNoj3WnoMKoguvtD4V4dHHImBc0adZCpDEU9d8XwoE1q-gYNzW9oqA4ZPUsMX1_2DGeRqRg91_tweNj8iZG26jJLYxL_hGYaiotOZDNi4I2QeTUSIURQRGNIYJwqgSmpl4sv4HkyHmOLm7fGDNYCAqImRZYBjbwnC8NUKGUeRlvLq5-ufbs2mf-nKKgYi0tqiSvE6OnuSwGWf4UIODvQ_00E'})" class="tcg-accessory__btn">
                <span class="material-symbols-outlined">add</span>
              </button>
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
.tcg-view {
  background-color: var(--surface);
  min-height: 100vh;
}

/* Hero Section */
.tcg-hero {
  position: relative;
  overflow: hidden;
  padding: 2rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
}

.tcg-hero__content {
  position: relative;
  z-index: 10;
}

.tcg-hero__badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  background-color: var(--secondary-container);
  color: var(--on-secondary-container);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.tcg-hero__title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1.1;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.04em;
  margin-bottom: 1rem;
}

.tcg-hero__description {
  color: var(--on-surface-variant);
  font-size: 1rem;
  max-width: 280px;
  margin-bottom: 2rem;
}

.tcg-hero__cta {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%);
  color: var(--on-primary);
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: var(--shadow-xl);
  transition: transform var(--transition-fast);
}

.tcg-hero__cta:active {
  transform: scale(0.95);
}

.tcg-hero__visual {
  position: absolute;
  right: -3rem;
  top: 2.5rem;
  width: 16rem;
  height: 20rem;
  transform: rotate(12deg);
  z-index: 0;
}

.tcg-hero__card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
  border: 4px solid rgba(255, 255, 255, 0.2);
}

.tcg-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tcg-hero__shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
  background-size: 200% 200%;
  opacity: 0.5;
  pointer-events: none;
}

/* Sections */
.tcg-section {
  padding: 2rem 1.5rem;
}

.tcg-section--alt {
  background-color: var(--surface-container-low);
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.tcg-section__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.tcg-section__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.tcg-section__title--large {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.tcg-section__subtitle {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  font-weight: 500;
}

.tcg-section__icon {
  color: var(--primary);
}

.tcg-section__link {
  background: none;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* Grid */
.tcg-grid {
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 1rem;
}

/* Cards */
.tcg-card {
  background-color: var(--surface-container-low);
  border-radius: var(--radius-xl);
  padding: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.tcg-card--featured {
  grid-column: span 2;
  background-color: var(--surface-container-lowest);
  padding: 1rem;
  box-shadow: var(--shadow-sm);
}

.tcg-card__badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
}

.tcg-card__badge-content {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-lg);
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.tcg-card__media {
  border-radius: var(--radius-lg);
  background-color: var(--surface-container-highest);
  margin-bottom: 1rem;
  overflow: hidden;
}

.tcg-card--featured .tcg-card__media {
  aspect-ratio: 16 / 9;
}

.tcg-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tcg-card:hover .tcg-card__img {
  transform: scale(1.05);
}

.tcg-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tcg-card__name {
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--on-surface);
}

.tcg-card__name--small {
  font-size: 0.6875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1.5rem;
}

.tcg-card__grade {
  font-size: 0.75rem;
  color: var(--secondary);
  font-weight: 700;
}

.tcg-card__action-group {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.tcg-card__price {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary);
}

.tcg-card__price--small {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
  font-weight: 700;
}

.tcg-card__btn {
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

.tcg-card__btn-add {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  background-color: #ffffff;
  color: var(--secondary-container);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.tcg-card__btn:active,
.tcg-card__btn-add:active {
  transform: scale(0.9);
}

.tcg-card__btn .material-symbols-outlined {
  font-size: 1.125rem;
}

.tcg-card__btn-add .material-symbols-outlined {
  font-size: 0.875rem;
}

/* Scroll Section */
.tcg-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  scrollbar-width: none;
}

.tcg-scroll::-webkit-scrollbar {
  display: none;
}

.tcg-pack {
  min-width: 140px;
  flex-shrink: 0;
  position: relative;
}

.tcg-pack__media {
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: 0.75rem;
  box-shadow: var(--shadow-lg);
}

.tcg-pack__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tcg-pack__label {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 0.25rem 0;
  text-align: center;
  border-radius: var(--radius-lg);
}

.tcg-pack__label-text {
  font-size: 0.5625rem;
  font-weight: 900;
  color: var(--primary);
}

.tcg-pack__name {
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--on-surface);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 2rem;
}

.tcg-pack__price {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
}

.tcg-pack__btn-add {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--primary);
  color: #ffffff;
  border-top-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
  padding: 0.25rem;
  transition: transform var(--transition-fast);
}

.tcg-pack__btn-add .material-symbols-outlined {
  font-size: 1rem;
}

/* Accessories */
.tcg-accessories {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tcg-accessory {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--surface-container-lowest);
  padding: 0.75rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.tcg-accessory__media {
  width: 5rem;
  height: 5rem;
  border-radius: var(--radius-lg);
  background-color: var(--surface-container-highest);
  overflow: hidden;
  flex-shrink: 0;
}

.tcg-accessory__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tcg-accessory__content {
  flex-grow: 1;
}

.tcg-accessory__name {
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--on-surface);
}

.tcg-accessory__desc {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  margin-bottom: 0.5rem;
}

.tcg-accessory__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tcg-accessory__price {
  color: var(--primary);
  font-weight: 800;
  font-size: 0.875rem;
}

.tcg-accessory__btn {
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

.tcg-accessory__btn .material-symbols-outlined {
  font-size: 1.125rem;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
