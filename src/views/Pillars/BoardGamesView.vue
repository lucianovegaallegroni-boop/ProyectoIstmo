<template>
  <div class="board-games-view">
    <!-- Desktop Layout -->
    <main class="desktop-layout">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero__bg">
          <img class="hero__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3mz-LhZxN-eysfrUwi-XUvxmQcBZspJ_FoZO05YuyJiO7AXt9NX4HrjjI87p-a3vMMl07FfJsrfy1jwr-IkZUJQESTEAOkcsGfm6j8_R66_nNhfMXz7OMp6Bo84VB5S8YEu1zPNhJf3PjdndsPIFFOgIySzw5K_xRBQJLMuF4LfKvfwZmA3vEO2IKiRDdN2IyD77MoR9rkSmZSS3zb6L3htV5rb4LnDsdSEIRJGqwlgUoWb-KhUHy64d2Lu7tU5uOwgjM3q7iq28y"/>
          <div class="hero__overlay"></div>
        </div>
        <div class="hero__content-wrapper">
          <div class="hero__content">
            <h1 class="hero__title">Juegos de Mesa</h1>
            <p class="hero__desc">Domina el arte de la mesa. Descubre nuestra colección curada de obras maestras estratégicas, desde grandes épicas hasta duelos íntimos.</p>
            <button class="hero__cta">
              Explorar Colección
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <!-- New Arrivals -->
      <section class="section">
        <div class="section__container">
          <div class="section__header">
            <div>
              <span class="section__overline">La Vanguardia</span>
              <h2 class="section__title">Novedades</h2>
            </div>
            <a class="section__link" href="#">Ver Todas las Novedades <span class="material-symbols-outlined">east</span></a>
          </div>
          <div class="arrivals-grid">
            <!-- Cosmic Dominion -->
            <div class="arrival-card arrival-card--featured">
              <div class="arrival-card__media">
                <img class="arrival-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqiXr6IzKuZm1sAmxFdB75JJoBicG54Ut-gR0O-qHL_jkmG52LGkk4Fis6swBMnVAYo_Y-PIsrOpX3CvyXi0e00KWKoVAHMGNXQCT9pEAkGpLpUN6gqaw5FINXhp5fKbn8YCEoWogIsbkcucAFokrflbs1s8QOXDa18X50P2etXf3SEZm61S-PfDXeUnpFvU7m7aoSlpv2_W5KK1k4rgQSBHi0DlUJnyerF0V_PmbDKQlgrJZZbTUcIetHEsooXM0c3_Fcjh8Hmcip"/>
              </div>
              <div class="arrival-card__content">
                <div class="arrival-card__meta">
                  <span class="arrival-card__badge">Próximamente</span>
                  <span class="arrival-card__dot">•</span>
                  <span class="arrival-card__category">Estrategia / Sci-Fi</span>
                </div>
                <h3 class="arrival-card__title">Cosmic Dominion</h3>
                <p class="arrival-card__desc">Un juego de guerra asimétrico de alto riesgo donde las civilizaciones chocan a través de las estrellas. Domina árboles tecnológicos únicos y forja alianzas frágiles.</p>
                <button class="arrival-card__link">Pre-ordenar Ahora <span class="material-symbols-outlined">bolt</span></button>
              </div>
            </div>
            <div class="arrivals-side-grid">
              <!-- Harvest Moon -->
              <div class="arrival-card">
                <div class="arrival-card__media aspect-square">
                  <img class="arrival-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZgpwlgYmsA7O3evXBRgnms17DIl5_o3zsswDnVQFqbmGSLvZ6toYFC1Gd44RgpYXXqLG3PL9nmN1L_5FFGogX6KUimgAnNklr09SFTkxfdookUwU0CMrfd1_IMMvqohH-IpitrQRk0Jl33UY9dBfflokJsJLJbpASFHFPtCKonr3C2Yl7Yn3wfgkpe8VMw5xHXZUYX2w8lC9mgbyef5cM5cnzErEp3cCMx3FxcEoQzRn6OD7ZCb729hdFWwO9Cxp-u8iqjonGGQo-"/>
                  <span class="arrival-card__overlay-badge">Próximamente</span>
                </div>
                <div class="arrival-card__content">
                  <h3 class="arrival-card__name">Harvest Moon</h3>
                  <p class="arrival-card__info">Gestión de recursos Zen en una estación cambiante.</p>
                  <span class="arrival-card__price">$45.00</span>
                </div>
              </div>
              <!-- Grid Master -->
              <div class="arrival-card">
                <div class="arrival-card__media aspect-square">
                  <img class="arrival-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Srmhwk31PidoB772_jxGDNsZYIQ3L8-Of93tMLpTfA3fo9DkOzWl4zQcxJVBSP50KeM58Rr7pMALZsu7HdT1qmXeT36n-BbDmKmX7IX53cwCBe_-PLUIbRtAc62xstBKq9uN6FsOZ-3E4Hx9yNBDa0WXgT4sztERul3cYNsORjamfs-7X9Wuzx1R6DgWjB4tb5BXa1C43SI3uf0Bu6DwMSTqTbvzuorBl8As7G2dunYg13HgDNI6RHuYwqd36DOICKKraw8-U_N4"/>
                  <span class="arrival-card__overlay-badge">Próximamente</span>
                </div>
                <div class="arrival-card__content">
                  <h3 class="arrival-card__name">Grid Master</h3>
                  <p class="arrival-card__info">La prueba definitiva de conciencia espacial y lógica.</p>
                  <span class="arrival-card__price">$38.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Classic Strategy -->
      <section class="section section--alt">
        <div class="section__container">
          <div class="section__header-left">
            <span class="section__overline">Colecciones Legado</span>
            <h2 class="section__title">Estrategia Clásica</h2>
          </div>
          <div class="list-container">
            <!-- Classic Strategy Items -->
            <div v-for="item in classicStrategy" :key="item.sku" class="list-item">
              <div class="list-item__media">
                <img class="list-item__img" :src="item.image"/>
              </div>
              <div class="list-item__content">
                <div class="list-item__badges">
                  <span v-for="tag in item.tags" :key="tag.label" class="badge" :class="tag.isAccent ? 'badge--primary' : 'badge--secondary'">{{ tag.label }}</span>
                </div>
                <h3 class="list-item__title">{{ item.name }}</h3>
                <p class="list-item__desc">{{ item.description }}</p>
              </div>
              <div class="list-item__action">
                <p class="list-item__price">${{ item.price }}</p>
                <button @click="addToCart(item)" class="list-item__btn">Añadir al Carrito</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Artisan Editions -->
      <section class="artisan-section">
        <div class="artisan-section__overlay">
          <svg class="artisan-section__svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40"></circle>
          </svg>
        </div>
        <div class="section__container relative-z">
          <div class="artisan-header">
            <div class="artisan-header__content">
              <span class="artisan-header__overline">Ediciones Limitadas de Taller</span>
              <h2 class="artisan-header__title">Ediciones Artesanales</h2>
              <p class="artisan-header__desc">Elevando el juego de mesa a través de materiales a medida, artesanía maestra y diseño atemporal.</p>
            </div>
          </div>
          <div class="artisan-grid">
            <!-- Imperial Mahogany Set -->
            <div class="artisan-card">
              <div class="artisan-card__media">
                <img class="artisan-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqCsz6YkEXwZe1mo1MpQM13PzuauQXC3QrW7WyRnyhm11y9T7-mKcgQFXDX0Ff3z6rAGAFcEjVzMk4XXpg9pRqK2CXy7JZh18sBksOA_vuzbnpFlxUKqkaPyfjVs0tayyrnko8w07agRBo9jisaWTxG4DdqmjXmzZizUHxnBf26tw6FRiUkvhKU7DYZm9-i4FO3tw5yp1wl0m_EyfFikAWQp_M1t1eXGAkyd9l4Y3n_3pB-CVKVO1gd5ETLvb000Daol82u5dcIROQ"/>
              </div>
              <div class="artisan-card__content">
                <div class="artisan-card__badge">Coleccionista #041/100</div>
                <h3 class="artisan-card__title">Set Imperial de Caoba</h3>
                <p class="artisan-card__quote">"Una experiencia táctil como ninguna otra, con piezas torneadas a mano e incrustaciones de latón."</p>
                <span class="artisan-card__price">$850.00</span>
                <button class="artisan-card__btn">Solicitar Comisión</button>
              </div>
            </div>
            <!-- Gemstone Dice -->
            <div class="artisan-card">
              <div class="artisan-card__media artisan-card__media--order-2">
                <img class="artisan-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZP_f3bPmCiWLQcbalOwh8KvkAP8wM3ZCFQlHaoi-rLzhls36syr2aCFYogL18oTfaNj7txJEj2x8YSh9vk4MNEirOOurVTNVfyGkppczybGvjdcWcMgELAIGCCq7l3GkwyJHTec0_lLU38kBJxzA5EmqA9utTDntL7yF3xlQKXArScynYrCgwz-mQGxGS-BDK_yFEHBnOjjQiT9nBnCVhre-JQFek-6mH84DyB3WHqIMdB8Z9hYJNw8PMbMsCXATQzQKXKmuLEyMD"/>
              </div>
              <div class="artisan-card__content artisan-card__content--order-1">
                <div class="artisan-card__badge">Material Raro</div>
                <h3 class="artisan-card__title">Dados de Piedras Preciosas</h3>
                <p class="artisan-card__quote">"Cada dado está tallado en Malaquita sólida, equilibrado tanto para la belleza como para el destino."</p>
                <span class="artisan-card__price">$120.00</span>
                <button class="artisan-card__btn">Ver Selección</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Mobile Layout -->
    <main class="mobile-layout">
      <!-- Hero Section -->
      <section class="mobile-hero">
        <div class="mobile-hero__card">
          <img alt="Complex Strategy Game" class="mobile-hero__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI5ijyujGrkU80fLmcCnXgUzhRLLn0yxngUtjzsIKpOmktGgwsEQKFhL3MxAZxg8WlUwAOWW7jB6uvLbYLrB6FSfNBdIzfVvYTKiWxwCx8tYqjJ9FbFHMWGoPZ31oIsHQG4Vfn5QUBgdimWbaBtUI24vXiMgGWqWQjJ0nQmTnR4-Sm3sj4aCS07K85O_4QmFk7jO-tScivXfn7gmYi0xBoF9xhSKKHEPI5K97gDmccynStui3rK_UEkDmWU6UgENB5PuHWfnGUteXY"/>
          <div class="mobile-hero__overlay"></div>
          <div class="mobile-hero__content">
            <span class="mobile-hero__badge">Pilar Destacado</span>
            <h2 class="mobile-hero__title">Juegos de Mesa</h2>
            <p class="mobile-hero__desc">Domina el arte de la mesa. Descubre nuestra colección curada de obras maestras estratégicas.</p>
            <button class="mobile-hero__cta">
              Explorar Colección
            </button>
          </div>
        </div>
      </section>

      <!-- New Arrivals -->
      <section class="mobile-section">
        <div class="mobile-section__header">
          <h3 class="mobile-section__title">Novedades</h3>
          <span class="mobile-section__link">Ver Todo</span>
        </div>
        <div class="mobile-grid">
          <div class="mobile-card mobile-card--full">
            <div class="mobile-card__content-overlay">
              <span class="mobile-card__badge">Próximamente</span>
              <h4 class="mobile-card__title">Cosmic Dominion</h4>
              <p class="mobile-card__desc">La próxima evolución de la conquista galáctica.</p>
            </div>
            <img alt="Sci-Fi Game" class="mobile-card__img-half" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtOKVmq_duKppeJ4aLpw2CuGjjZckEck4tEJSNYZOksBF5wQOAzOy4Ym4-nJd9XDaog_vD8JSA8hkWVTBQlcQzRfsQwsL9ljx0sGTvR013K73tVOZXTfBJnTUofDT5xrpMmjHkmTj0OdtSitz6AzsaBrXn5uEpfZN1oF-d5jwmtrxeF5iLH2ajwoL8mJxFPcFnxP4C-Tty9luvDBH8j-GMM-_jpCUWhCFwK9OwbgRO4ZKEppWqyabhutzBMmuUOtWCW6c3woiSyyzi"/>
          </div>
          <div class="mobile-card">
            <div class="mobile-card__media">
              <img alt="Game Box" class="mobile-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfYzGC61SdSOnWe4XjFL8QH0hQFRMMDOP_GKpKhg39X8Bax9z4IETRC0i0Jp6u9n3RY047yDQKrp8OTYA3ub9LC3sDoJzbNI1L4wZLKbjiPyxkxrE-3ET3zibcCo-pH1XKue31Fgy0ZSSLoBzKbLJrEGGtI9UWnHRbvs1GUBcfj-pRgY0C9WkljamnAbKh2AeELh4aJoBYl1g0mA2S5d2ExwfR_IzmrLfPVu8aU7rFVrHL_sVtOIXMIEzMcxkf-SHufIqSdLApEr5"/>
            </div>
            <p class="mobile-card__overline">Euro Game</p>
            <p class="mobile-card__name">Harvest Moon</p>
          </div>
          <div class="mobile-card">
            <div class="mobile-card__media">
              <img alt="Game Pieces" class="mobile-card__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCAZuENTTNeX4W7ZPBeGgJgTnHhC4Kp0d0EcmAfIv_-4ItKSH5e6cxdIwfZFoFsOTCxKjgt1Y17-qTow1vW6CgWd9_2XmNZnSdLjBiuzpmoERK3aqWP25CHcxAI5LUZTf3NB8oH1-SFefQQJGTRgI9HMOnrSgIZYZ3a24Js_C5ygEWCaD-heL2BM28UtWoT0qDD0gjCt7y7me1VkSEUFTqn12-fvd715x7pQ1F0FMYYNONGrHDhKYU2fz3gwpX2PwRWqJRb8ISFlsD"/>
            </div>
            <p class="mobile-card__overline">Abstracto</p>
            <p class="mobile-card__name">Grid Master</p>
          </div>
        </div>
      </section>

      <!-- Classic Strategy -->
      <section class="mobile-section mobile-section--alt">
        <h3 class="mobile-section__title">Estrategia Clásica</h3>
        <p class="mobile-section__desc">Los fundamentos del hobby. Juegos atemporales que definieron una generación de juego.</p>
        <div class="mobile-list">
          <div class="mobile-list-item">
            <div class="mobile-list-item__media">
              <img alt="Strategy" class="mobile-list-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAu73Aw93-D819QFP7JpQg2sX8Z_aFwD3SRnqQdXraZoV-V1Suti_aVJvrd9ppDdrlbc301KcNtuvASpQvc-nA7giyxGdl8UA0GT6fmZDNS19ORcXheZMm4jn_TjdCLgqU2YHucyMPjNoW1CZL-NUdbFlp9dI7bpC0FHJ_j9lll4YjBH9zt6xfH5wyh97RPGt9QlduH0WfEn9wO6RN09tqamfME5eM_KGHsgy2Gpo28xOMctP68SO9KzYZJ9dIq69D9lzwk-ZreuAb"/>
            </div>
            <div class="mobile-list-item__content">
              <h5 class="mobile-list-item__name">The Grand Architect</h5>
              <p class="mobile-list-item__text">Reconstruye el imperio en este clásico de 1995.</p>
              <div class="mobile-list-item__footer">
                <span class="badge badge--fixed">Esencial</span>
                <span class="mobile-list-item__price">$49.99</span>
              </div>
            </div>
          </div>
          <div class="mobile-list-item">
            <div class="mobile-list-item__media">
              <img alt="Tactical" class="mobile-list-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqsswO_zpOFX_KFqys4bMQhKf5ivkijB_O9w0YAI4XJ1qJc6QAAptL8t-YpVdZHaAZq6C5c_C4x2iVgyErq4MSjo4WDa2e2Zm756yCDVreS4asmINlFha_d2rh_E2s0Bx54PJDEvrQ4RuBB_moeycor9TbanZWNmoj50chABEwy5IGlWBXs9_2TeCjegpUqrXtO-vrxS1SIinRXvc4R2J8Q30QODw26NQGN-ypoa5oWazEaJe5kCQqisPailBEnH7Nq_FCpLqts3er"/>
            </div>
            <div class="mobile-list-item__content">
              <h5 class="mobile-list-item__name">Silk Road Express</h5>
              <p class="mobile-list-item__text">Comercia, negocia y prospera.</p>
              <div class="mobile-list-item__footer">
                <span class="badge badge--fixed-alt">Más Vendido</span>
                <span class="mobile-list-item__price">$55.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Artisan Editions -->
      <section class="mobile-section">
        <h3 class="mobile-section__title">Ediciones Artesanales</h3>
        <div class="mobile-scroll">
          <div class="mobile-scroll-item">
            <div class="mobile-scroll-item__media">
              <img alt="Premium Board" class="mobile-scroll-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEdrSSA99tiDH7N6YUqeFqajiQEcwoe6plEazwI_k0vOdOoO2LN21sY-1ymx-3WtNMcc1Uq2ZNeHHaIjjCk7Sur63hDyMBz1lvVr08j3V-zMZd9QdqJdJlHstH-Aa3G1THskue4dYucPtTB_v1C1a2H1X022acCrUpt-bu_epI7dWUWHqp1AbJtrjk6Iy2oRQzsuge4fO2jZN0tq4OweDCpwW79t_FfbJZ1DV9fh_rMBHdzAx7x1lQ4myC-6B-84liNvOozteT2Nog"/>
              <div class="mobile-scroll-item__badge">Coleccionista</div>
            </div>
            <h4 class="mobile-scroll-item__name">Set Imperial de Caoba</h4>
            <p class="mobile-scroll-item__desc">Producción Limitada • Serializado</p>
            <p class="mobile-scroll-item__price">$249.00</p>
          </div>
          <div class="mobile-scroll-item">
            <div class="mobile-scroll-item__media">
              <img alt="Luxury Components" class="mobile-scroll-item__img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs8WT26kuLc5yILa4ovwi3AsrPH7AVssW-cclkDS9sGEjRfpd5_pf5A5mPPNcyXYVFQHPuKviaLrmZ-gQ27vwu46UW0nUPRMCW0P0QOAv4JcPN8aWpCW4RuXmkhjtCW8OZcOSXL6BHT2iN7u1Slrr3xmTyIwzQ-JabEFsviwIgdxGKSjW_JOs3ULGeMi2luua_7FSU28q1fepJfyTmebxVulUwcJd6NCKg5NBpLS2XegfXAVmm-U7YC1RL9KrVpnc3sjjpxwnbqp23"/>
              <div class="mobile-scroll-item__badge">A Medida</div>
            </div>
            <h4 class="mobile-scroll-item__name">Gemstone Odyssey</h4>
            <p class="mobile-scroll-item__desc">Amatista Pulida a Mano</p>
            <p class="mobile-scroll-item__price">$185.00</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useCart } from '../../composables/useCart'

const { addToCart } = useCart()

const classicStrategy = [
  {
    sku: 'BG-CLASSIC-01',
    name: "The Grand Architect",
    price: 59.99,
    description: "Diseña ciudades catedralicias y gestiona la mano de obra en este premiado juego de construcción de motores ambientado en el Renacimiento.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1Oyw5F0HhDm-Z_LTnMkK4YFTSkNjJUj-qQwh4EkepiF4WW1CBBhGu0lQ5xWVZl_90ZiyL-5BycLdL3ca1pTVT-wX3KiqEiuu_dDyf3xgGiPPK5pe_YgBf849mDK_6HB8AeWx5wV2n9zwACfEyOijbp11lc62AwPTep-goYeDnovioUnVVPla88zIm7Mh7lvvo2NJWYDtq7Ra57LKn1JcIjsJCb0hLwIj7M3Uxz4uhwkOhkV4rmSDKhHBuwdo3mKDf6GrbHQjAuKnG',
    tags: [{ label: 'Esencial', isAccent: true }, { label: 'Más Vendido', isAccent: false }]
  },
  {
    sku: 'BG-CLASSIC-02',
    name: "Silk Road Express",
    price: 42.50,
    description: "Un juego de comercio de ritmo rápido donde construyes rutas de caravanas a través de los desiertos de Asia Central.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-DaHExGqVgKpXF9BvkMTrNIhXFks6TaXHelTStHjudHyK1cGZzK0uesqN6f5o9BHxkuMXmTgZgdTDTY6509ju0CNiOqYFjnyEOTtnwJUdnYKwvUITNIrcmMui_4pwPtUa3AQXg11a0K9muVWS1EPH1kRWKJCJuPzCbsfmEdMe8FZnVYR5welvgrmCh4EJT_r6nQ9_Bc4DeBLAZBDUi7HrBtOgbVfxTfcEh84nl1v9Kj3MT1mkGJOJOY3Z55VO_fXml1qFJYqkefis',
    tags: [{ label: 'Más Vendido', isAccent: false }]
  }
]
</script>

<style scoped>
.board-games-view {
  background-color: var(--surface);
  min-height: 100vh;
}

/* Common Utilities */
.relative-z {
  position: relative;
  z-index: 10;
}

/* Layout Toggles */
.desktop-layout {
  display: none;
}

.mobile-layout {
  display: block;
}

@media (min-width: 768px) {
  .desktop-layout {
    display: block;
  }
  .mobile-layout {
    display: none;
  }
}

/* Desktop Hero */
.hero {
  position: relative;
  height: 819px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(3, 61, 96, 0.9), transparent);
}

.hero__content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
}

.hero__content {
  max-width: 40rem;
}

.hero__title {
  font-size: 4.5rem;
  font-weight: 800;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero__desc {
  font-size: 1.25rem;
  color: var(--on-primary-container);
  font-weight: 300;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero__cta {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%);
  color: #ffffff;
  padding: 1rem 2.5rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.hero__cta:hover {
  box-shadow: var(--shadow-2xl);
  transform: scale(1.05);
}

/* Section Common */
.section {
  padding: 6rem 0;
}

.section--alt {
  background-color: var(--surface-container-low);
}

.section__container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 3rem;
}

.section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.section__header-left {
  margin-bottom: 4rem;
}

.section__overline {
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  text-transform: uppercase;
}

.section__title {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--primary);
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-top: 0.5rem;
}

.section__link {
  color: var(--primary);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s ease;
}

.section__link:hover {
  gap: 1rem;
}

/* Arrivals Grid */
.arrivals-grid {
  display: grid;
  grid-template-cols: repeat(12, 1fr);
  gap: 2rem;
}

.arrival-card {
  background-color: var(--surface-container-lowest);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all 0.5s ease;
}

.arrival-card:hover {
  transform: translateY(-0.5rem);
}

.arrival-card--featured {
  grid-column: span 6;
}

.arrival-card__media {
  overflow: hidden;
  position: relative;
}

.arrival-card--featured .arrival-card__media {
  aspect-ratio: 16 / 9;
}

.arrival-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.arrival-card:hover .arrival-card__img {
  transform: scale(1.1);
}

.arrival-card__content {
  padding: 2rem;
}

.arrival-card__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.arrival-card__badge {
  padding: 0.25rem 0.75rem;
  background-color: rgba(251, 109, 0, 0.1);
  color: var(--on-secondary-container);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: var(--radius-full);
}

.arrival-card__dot {
  color: var(--outline-variant);
}

.arrival-card__category {
  color: var(--outline);
  font-size: 0.75rem;
  font-weight: 500;
}

.arrival-card__title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.arrival-card__desc {
  color: var(--on-surface-variant);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.arrival-card__link {
  color: var(--primary);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
}

.arrivals-side-grid {
  grid-column: span 6;
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 2rem;
}

.arrival-card__overlay-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
}

.arrival-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.arrival-card__info {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  margin-bottom: 1rem;
}

.arrival-card__price {
  color: var(--primary);
  font-weight: 700;
}

/* List Items */
.list-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background-color: var(--surface-container-lowest);
  border-radius: var(--radius-xl);
  transition: all 0.3s ease;
}

.list-item:hover {
  box-shadow: var(--shadow-xl);
}

.list-item__media {
  width: 8rem;
  height: 8rem;
  border-radius: var(--radius-lg);
  background-color: var(--surface-container-highest);
  flex-shrink: 0;
  overflow: hidden;
}

.list-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.list-item:hover .list-item__img {
  transform: scale(1.1);
}

.list-item__content {
  flex-grow: 1;
}

.list-item__badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.badge {
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge--primary {
  background-color: rgba(3, 61, 96, 0.1);
  color: var(--primary);
}

.badge--secondary {
  background-color: rgba(251, 109, 0, 0.1);
  color: var(--secondary);
}

.list-item__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.list-item__desc {
  color: var(--on-surface-variant);
  max-width: 36rem;
  font-size: 0.875rem;
}

.list-item__action {
  text-align: right;
}

.list-item__price {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.list-item__btn {
  background-color: var(--primary);
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color 0.3s ease;
}

.list-item__btn:hover {
  background-color: var(--primary-container);
}

/* Artisan Section */
.artisan-section {
  padding: 8rem 0;
  background-color: var(--primary);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.artisan-section__overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 33.333%;
  height: 100%;
  opacity: 0.1;
  pointer-events: none;
}

.artisan-section__svg {
  width: 100%;
  height: 100%;
  fill: #ffffff;
}

.artisan-header {
  margin-bottom: 5rem;
}

.artisan-header__content {
  max-width: 40rem;
}

.artisan-header__overline {
  color: var(--secondary-container);
  font-weight: 900;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}

.artisan-header__title {
  font-size: 3.75rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.1;
}

.artisan-header__desc {
  margin-top: 1.5rem;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--on-primary-container);
}

.artisan-grid {
  display: grid;
  grid-template-cols: 1fr;
  gap: 4rem;
}

@media (min-width: 768px) {
  .artisan-grid {
    grid-template-cols: repeat(2, 1fr);
  }
}

.artisan-card {
  display: flex;
  gap: 2rem;
}

.artisan-card__media {
  width: 50%;
  aspect-ratio: 4 / 5;
  background-color: var(--tertiary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.artisan-card__media--order-2 {
  order: 2;
}

.artisan-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
}

.artisan-card:hover .artisan-card__img {
  transform: scale(1.05);
}

.artisan-card__content {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.artisan-card__content--order-1 {
  order: 1;
}

.artisan-card__badge {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--secondary-container);
  align-self: flex-start;
  margin-bottom: 1rem;
}

.artisan-card__title {
  font-size: 1.875rem;
  font-weight: 700;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: 1rem;
}

.artisan-card__quote {
  color: var(--on-primary-container);
  font-weight: 300;
  font-style: italic;
  margin-bottom: 2rem;
}

.artisan-card__price {
  font-size: 2.25rem;
  font-weight: 300;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
}

.artisan-card__btn {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: none;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.875rem;
  align-self: flex-start;
  transition: all 0.3s ease;
}

.artisan-card__btn:hover {
  background-color: #ffffff;
  color: var(--primary);
}

/* Mobile Hero */
.mobile-hero {
  padding: 2.5rem 1.5rem;
}

.mobile-hero__card {
  position: relative;
  height: 480px;
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 24px 40px -12px rgba(28, 27, 27, 0.06);
}

.mobile-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--primary), transparent, transparent);
  opacity: 0.8;
}

.mobile-hero__content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
  width: 100%;
}

.mobile-hero__badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: var(--secondary-container);
  color: var(--on-secondary-container);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
  backdrop-filter: blur(12px);
  margin-bottom: 1rem;
}

.mobile-hero__title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.mobile-hero__desc {
  color: var(--on-primary-container);
  font-size: 0.875rem;
  line-height: 1.6;
  max-width: 20rem;
  margin-bottom: 1.5rem;
}

.mobile-hero__cta {
  background: linear-gradient(to right, var(--primary), var(--primary-container));
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: 0 24px 40px -12px rgba(28, 27, 27, 0.06);
  transition: transform 0.2s ease;
}

.mobile-hero__cta:active {
  transform: scale(0.95);
}

/* Mobile Grid */
.mobile-section {
  padding: 0 1.5rem;
  margin-bottom: 3rem;
}

.mobile-section--alt {
  background-color: var(--surface-container-low);
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
}

.mobile-section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.mobile-section__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.mobile-section__link {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--secondary);
}

.mobile-grid {
  display: grid;
  grid-template-cols: repeat(2, 1fr);
  gap: 1rem;
}

.mobile-card {
  background-color: var(--surface-container-lowest);
  padding: 1rem;
  border-radius: var(--radius-xl);
  box-shadow: 0 24px 40px -12px rgba(28, 27, 27, 0.06);
}

.mobile-card--full {
  grid-column: span 2;
  position: relative;
  height: 14rem;
  background-color: var(--surface-container-low);
  padding: 1.5rem;
  overflow: hidden;
}

.mobile-card__content-overlay {
  position: relative;
  z-index: 10;
  width: 50%;
}

.mobile-card__badge {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--secondary-container);
}

.mobile-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
  margin-top: 0.5rem;
}

.mobile-card__desc {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  margin-top: 0.5rem;
}

.mobile-card__img-half {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
}

.mobile-card__media {
  height: 8rem;
  background-color: var(--surface-container-highest);
  border-radius: var(--radius-lg);
  margin-bottom: 0.75rem;
  overflow: hidden;
}

.mobile-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-card__overline {
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.mobile-card__name {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Mobile List */
.mobile-section__desc {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.mobile-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--surface-container-lowest);
  padding: 0.75rem;
  border-radius: var(--radius-xl);
}

.mobile-list-item__media {
  width: 5rem;
  height: 5rem;
  background-color: var(--surface-container-highest);
  border-radius: var(--radius-lg);
  flex-shrink: 0;
  overflow: hidden;
}

.mobile-list-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-list-item__content {
  flex-grow: 1;
}

.mobile-list-item__name {
  font-weight: 700;
  color: var(--primary);
}

.mobile-list-item__text {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mobile-list-item__footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.badge--fixed {
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--on-secondary-fixed);
  background-color: var(--secondary-fixed);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-full);
}

.badge--fixed-alt {
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--on-tertiary-fixed);
  background-color: var(--tertiary-fixed);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-full);
}

.mobile-list-item__price {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
}

/* Mobile Scroll */
.mobile-scroll {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-right: -1.5rem;
  scrollbar-width: none;
}

.mobile-scroll::-webkit-scrollbar {
  display: none;
}

.mobile-scroll-item {
  min-width: 280px;
}

.mobile-scroll-item__media {
  position: relative;
  height: 360px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  margin-bottom: 1rem;
}

.mobile-scroll-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-scroll-item__badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  color: #ffffff;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.mobile-scroll-item__name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--primary);
}

.mobile-scroll-item__desc {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  font-weight: 500;
}

.mobile-scroll-item__price {
  margin-top: 0.5rem;
  color: var(--secondary);
  font-weight: 800;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
