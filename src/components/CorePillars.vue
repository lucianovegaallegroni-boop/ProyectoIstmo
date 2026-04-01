<template>
  <section class="pillars" id="pillars">
    <div class="pillars__header">
      <div>
        <span class="pillars__label">Distinction</span>
        <h2 class="pillars__title">The Core Pillars</h2>
      </div>
      <p class="pillars__tagline">Curating excellence across domains</p>
    </div>
    <div class="pillars__grid">
      <div
        v-for="(pillar, index) in pillars"
        :key="pillar.title"
        class="pillar-card"
        :class="{ 'pillar-card--offset': index % 2 !== 0 }"
      >
        <img :src="pillar.image" :alt="pillar.alt" class="pillar-card__image" loading="lazy" />
        <div class="pillar-card__overlay"></div>
        <div class="pillar-card__content">
          <h3 class="pillar-card__title">{{ pillar.title }}</h3>
          <p class="pillar-card__subtitle">{{ pillar.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pillars = [
  {
    title: 'Board Games',
    subtitle: 'Modern Strategy & Classics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_IIAEIGxRsfQHF4ZIqm_wjZViTRgtJ0N1LJJj8d82F11SaivIvaDBIykKB-dnMem9CJSdevZ4Xyk839lwvkE5RE2C6i5-kWAjsNBmn3VRCq4k9kvmV8lcV_HGEkLHqZCcyX9adfr59E54T1CTmoL4uHSecIM6KHMC2LMDYOpgJsDfBZu7_u_EgYEOy42ZcXDcn7ByqK8o8_zs8JaNodHDJwf6Barhnu5QatFiiThhR37Dvoq2qvk7x_h0FpkqznEeDzqZ0J14yCwT',
    alt: 'High-end modern board game pieces on a dark walnut table with cinematic lighting'
  },
  {
    title: 'RPGs',
    subtitle: 'Infinite Worlds, Curated',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGZRHPbGT0Amnft-C9amND03MnInfXDFUQ7xayONUc6wbK6eVEHyGuvIfGfLaKDaOFdycWrb1Avw39DwR1_zZvolOJmuQwCqPC5acMVvfbVhooFcvCko2whVdlpOH_8Hu4HInhrfJH-g2qHmZxTYthsMYYhP-CnfsRkzykjoaX2mnRwcSvsP1gjF3eta76z8xHRk1MTVBtzQvtyhdbssIjgw3zjAYu-RGqU9q3ylbbfxdNDWvfTlcMKUOtv-JNyal5d5FLWPNaV_HO',
    alt: 'Metal polyhedral dice set on a leather-bound book in a candlelit fantasy setting'
  },
  {
    title: 'Trading Cards',
    subtitle: 'Elite Rarity Acquisitions',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeude5UwQyWs89tPILo8F6H9OMNZtTeB8Fq9Sq2Hlnyyoc0Web5BIjkYdI_CPM97YSXR_VduHSgEAt258TYq7P43GsCC-LJQfrrebCbPAUF3A1UagVAELl_rYGeeZHlz12dMc4wgEjXc19Ii-OqTGhYXTDqjCoZNqQmCJRvnLtXDZWkkkQGVDUceEavQMjzpBzZ86n_lbcmaQ8mwiEieCeium5cc0b31xSXU_O5k3AamYFJmgzAoVtT_uLjPMeX2sa5thuRsIREasM',
    alt: 'Close-up of collectible trading cards in premium protective sleeves with metallic highlights'
  },
  {
    title: 'Modelism',
    subtitle: 'Precision & Artistry',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMrquIYpT3ZGvnv9fpbOks8YNAIFbYeJTklExivHtsNXQHQLn0L7COqNAtLMj_Ccu5w3D5O-80sREl761Em87CQD3J3z8e69wztxu5ulJ1cWCWTh_y7XtEmt3qcKzRJCO_GiZDHEAuNG2-gG5pvYqhIrb5naYQVKG-ccXEOYkdHLNboVnvB5hrfuWUpscuMGPjR_N4XZTBUdn6nTAOzlfJIftyEgHno40itv7d1Qvz4nEDp0oyUOZ7JyHgynvPm1QneRheFXYK6QnF',
    alt: 'Expertly painted miniature wargaming figure on a detailed scenic base under studio lights'
  }
]
</script>

<style scoped>
.pillars {
  padding: 6rem 3rem;
  background: var(--surface);
}

.pillars__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.pillars__label {
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.pillars__title {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--primary);
  margin-top: 0.5rem;
  letter-spacing: -0.02em;
}

.pillars__tagline {
  color: var(--on-surface-variant);
  font-weight: 500;
  font-size: 0.95rem;
}

.pillars__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.pillar-card {
  position: relative;
  height: 500px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
}

.pillar-card--offset {
  transform: translateY(2rem);
}

.pillar-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(.4,0,.2,1);
}

.pillar-card:hover .pillar-card__image {
  transform: scale(1.1);
}

.pillar-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 60%);
  transition: background var(--transition-base);
}

.pillar-card:hover .pillar-card__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 70%);
}

.pillar-card__content {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
  z-index: 2;
}

.pillar-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.pillar-card__subtitle {
  font-size: 0.875rem;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .pillars__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pillar-card {
    height: 360px;
  }

  .pillar-card--offset {
    transform: none;
  }
}

@media (max-width: 768px) {
  .pillars {
    padding: 4rem 1.5rem;
  }

  .pillars__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .pillars__grid {
    grid-template-columns: 1fr;
  }

  .pillar-card {
    height: 300px;
  }
}
</style>
