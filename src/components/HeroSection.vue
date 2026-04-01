<template>
  <section class="hero" id="hero">
    <div class="hero__bg">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEVrphWNMo7yMCAYVXnGqozK9fAH_8WNv0IwC53hd_nT7efSLwiwC4mC9bm7aGfKqGDypK5dz410tkgXci4FxK9gs4Iirc34VpKv-9L5NIWRXIpmt3CQxbcwuO-P2FB_qpbTFSRrcywXN03Y5Fi8SKrKsG7N7hzccrUP2u8WkKxTE4Eg23i_N8i756zIFuJHhj0YNheIqeBmdgWbryAeKdRwv2xlLqoXlyDLZeDxs_NUchFkBe1I3pviga0q287YxPRafFncxZvbcd"
        alt="Atmospheric photo of a luxury gaming table with wooden board game pieces, soft moody lighting, and deep navy tones"
        class="hero__image"
      />
      <div class="hero__overlay"></div>
    </div>
    <div class="hero__content" ref="heroContent">
      <h1 class="hero__title">
        Strategy <br /><span class="hero__title-accent">meets</span> Play
      </h1>
      <p class="hero__subtitle">
        Enter the curated arena. A sophisticated collection for the modern hobbyist,
        where every piece is chosen for its mastery and every game is an epic journey.
      </p>
      <div class="hero__actions">
        <button class="hero__btn hero__btn--primary" id="explore-arena-btn">Explore the Arena</button>
        <button class="hero__btn hero__btn--ghost" id="specialties-btn">Our Specialties</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroContent = ref(null)

onMounted(() => {
  if (heroContent.value) {
    heroContent.value.classList.add('animate-fade-in-up')
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 870px;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  overflow: hidden;
  background: var(--primary-container);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(3, 61, 96, 0.92), transparent 70%);
}

.hero__content {
  position: relative;
  z-index: 10;
  max-width: 680px;
  color: var(--on-primary);
}

.hero__title {
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
}

.hero__title-accent {
  color: var(--secondary-container);
}

.hero__subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 560px;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__btn {
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
}

.hero__btn--primary {
  background: var(--secondary-container);
  color: var(--on-secondary-container);
}

.hero__btn--primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(251, 109, 0, 0.35);
}

.hero__btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.hero__btn--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.hero__btn:active {
  transform: scale(0.97);
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 600px;
    padding: 6rem 1.5rem 4rem;
  }

  .hero__title {
    font-size: 2.8rem;
  }

  .hero__subtitle {
    font-size: 1rem;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__btn {
    width: 100%;
    text-align: center;
  }
}
</style>
