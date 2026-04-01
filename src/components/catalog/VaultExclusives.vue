<template>
  <section class="vault">
    <div class="vault__header">
      <span class="vault__divider"></span>
      <h2 class="vault__title">Vault Exclusives</h2>
      <span class="vault__divider"></span>
    </div>

    <div class="vault__grid">
      <!-- Card 1 -->
      <div class="vault-card">
        <img 
          class="vault-card__img" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5LOh75B1oLkV1_gPjB2hQ7XdeOvKFl3iemFDGP3CpkbRyDKsnFJIawZ5MTO8swzFGcRs5ZvXENUe1CX0H-aIDbF88mzxdHUa15a0Ve9F4K5D06DSLawgxFuj1MB2JrCMYOwOSVBRqiJfYWHvRdlLXoKeMqFzVK8-M4jUu0WMRdZeOTvuzcZf0t1GCazQxcLxuFKHZ914MHclbKreUI78T7eWA4Y4lAWKtBx8_ZrXF1TCl-aJXV-Mc0DVQHX1mLuWDtN577XFheTYq" 
          alt="Cinematic shot of a massive metal dice set on a charred wood surface with dramatic embers and glowing light" 
          loading="lazy"
        />
        <div class="vault-card__overlay"></div>
        <div class="vault-card__content">
          <span class="vault-card__badge vault-card__badge--limited">Extremely Limited</span>
          <h3 class="vault-card__title">Iron Reign: Deluxe Edition</h3>
          <p class="vault-card__desc">A masterwork of game design featuring hand-forged metal components and exclusive scenario maps.</p>
          <div class="vault-card__actions">
            <span class="vault-card__price">$249.00</span>
            <button class="vault-card__btn">Enter The Vault</button>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="vault-card">
        <img 
          class="vault-card__img" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXJHJR8k6fL5tohd2S_CUFVvLYwwx1q-ydG89mOM-AbddlJ6tLbXJPhoJi6fCD-ByZtcHJ959F7lnwH97Va1kW81kZMUjkhs58S19krr9Og-1z2Xe-P9S3X-Wv2Wmujv-wn60L8fIJKVAz0slrTLVwC9Apz0j-z61I6rBFr0mdJtHzOyleU3DZirxDL33xijTBuTYZiJDE63O2i3cLNSDLLUSrS9ux5BJSLfLWnkst0xyZ4bGaoAl3fOcYmf9QEZfyrSAmVzDGDauU" 
          alt="Aerial view of a sprawling fantasy diorama with intricate buildings and nature elements in a misty atmosphere" 
          loading="lazy"
        />
        <div class="vault-card__overlay"></div>
        <div class="vault-card__content">
          <span class="vault-card__badge vault-card__badge--collector">Collector's Choice</span>
          <h3 class="vault-card__title">Empire of Glass</h3>
          <p class="vault-card__desc">Complete legacy campaign with transparent acrylic tiles and illuminated board elements.</p>
          <div class="vault-card__actions">
            <span class="vault-card__price">$185.00</span>
            <button class="vault-card__btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vault {
  margin-top: 5rem;
}

.vault__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.vault__divider {
  flex: 1;
  height: 1px;
  background-color: var(--surface-container-highest);
}

.vault__title {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.vault__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .vault__grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Card */
.vault-card {
  position: relative;
  height: 400px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  /* The group equivalent for hover mapping */
}

.vault-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1000ms ease;
}

.vault-card:hover .vault-card__img {
  transform: scale(1.1);
}

.vault-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(3, 61, 96, 0.9) 0%, rgba(3, 61, 96, 0.3) 50%, transparent 100%);
  z-index: 1;
}

.vault-card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;
}

.vault-card__badge {
  color: white;
  font-size: 0.625rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0.375rem 1rem;
  border-radius: var(--radius-full);
  width: fit-content;
}

.vault-card__badge--limited {
  background-color: var(--secondary);
}

.vault-card__badge--collector {
  background-color: var(--secondary-container);
  color: var(--on-secondary-container); /* Usually white enough, but let's stick to explicit */
}

.vault-card__title {
  font-size: 1.875rem; /* 3xl */
  font-weight: 900;
  color: white;
  line-height: 1;
}

.vault-card__desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  max-width: 24rem;
  line-height: 1.5;
}

.vault-card__actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.vault-card__price {
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
}

.vault-card__btn {
  background-color: white;
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.875rem;
  transition: all var(--transition-fast);
}

.vault-card__btn:hover {
  background-color: var(--secondary-fixed);
  transform: translateY(-1px);
}
.vault-card__btn:active {
  transform: translateY(0);
}
</style>
