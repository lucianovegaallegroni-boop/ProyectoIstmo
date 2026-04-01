<template>
  <section class="location" id="location">
    <div class="location__grid">
      <div class="location__info">
        <div class="location__header">
          <span class="location__label">Location</span>
          <h2 class="location__title">Find Us in the Arena</h2>
        </div>
        <div class="location__details">
          <div class="location__hours">
            <h4 class="location__hours-title">Operational Hours</h4>
            <ul class="location__hours-list">
              <li class="location__hours-item">
                <span>Mon - Thu</span>
                <span class="location__hours-time">10:00 - 20:00</span>
              </li>
              <li class="location__hours-item">
                <span>Fri - Sat</span>
                <span class="location__hours-time">10:00 - 23:00</span>
              </li>
              <li class="location__hours-item">
                <span>Sunday</span>
                <span class="location__hours-time">12:00 - 18:00</span>
              </li>
            </ul>
          </div>
          <div class="location__tournament">
            <h4 class="location__tournament-label">Tournament Nights</h4>
            <p class="location__tournament-text">Every Tuesday & Friday after 19:00.</p>
            <p class="location__tournament-sub">Register in-person for the Arena ladder.</p>
          </div>
        </div>
      </div>
      <div class="location__map-wrap">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOJR24Xx_DjS90uszzUh6VA67t7ZlquNI8i7Cf8BiRV3tOZLEmIE2werTZd6D34QZI05qmB4JEi8F-72S0K0fRVljFYFiIkIhdJOQK4nFXI-3bIL_funHYlB1lcz6RNm7dzhmEhRX8DFZfe2bac2E9hbGZWzBSgsxFnQoDdfOr9ltWHGhOQIAke_DR06iwm-xh8zwPPNEkTr8jJa69_ouI3T10KvYyzsvQjc7bESoqbhaIniDtvHA5HVGJqPNLBNvaNrrOGc4yv3Un"
          alt="Overhead street map of Istmo City North"
          class="location__map-img"
          loading="lazy"
        />
        <div class="location__map-overlay"></div>
        <div class="location__map-card">
          <div class="location__map-card-header">
            <span class="material-symbols-outlined location__map-pin">location_on</span>
            <span class="location__map-place">Istmo City North</span>
          </div>
          <p class="location__map-address">42 Strategy Plaza,<br />Curated District, IC 90210</p>
          <button class="location__map-link" id="get-directions-btn">
            Get Directions
            <span class="material-symbols-outlined location__map-arrow">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location {
  padding: 6rem 3rem;
  background: white;
}

.location__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.location__label {
  color: var(--secondary);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.location__title {
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary);
  margin-top: 0.5rem;
  letter-spacing: -0.02em;
}

.location__info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.location__details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.location__hours-title {
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.location__hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.location__hours-item {
  display: flex;
  justify-content: space-between;
  color: var(--on-surface-variant);
  font-size: 0.9rem;
}

.location__hours-time {
  font-weight: 700;
  color: var(--primary);
}

.location__tournament {
  background: var(--primary);
  color: var(--on-primary);
  padding: 1.5rem;
  border-radius: var(--radius-xl);
}

.location__tournament-label {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.location__tournament-text {
  font-size: 1.15rem;
  line-height: 1.4;
  font-weight: 700;
}

.location__tournament-sub {
  font-size: 0.85rem;
  margin-top: 0.5rem;
  opacity: 0.7;
}

/* Map */
.location__map-wrap {
  position: relative;
  height: 500px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.location__map-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) brightness(0.5);
}

.location__map-overlay {
  position: absolute;
  inset: 0;
  background: rgba(3, 61, 96, 0.2);
}

.location__map-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
}

.location__map-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.location__map-pin {
  color: var(--secondary);
  font-size: 1.4rem;
}

.location__map-place {
  font-weight: 900;
  color: var(--primary);
}

.location__map-address {
  font-size: 0.85rem;
  color: var(--on-surface-variant);
  line-height: 1.6;
}

.location__map-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  color: var(--secondary);
  font-weight: 700;
  font-size: 0.85rem;
  background: none;
  transition: gap var(--transition-fast);
}

.location__map-link:hover {
  gap: 0.6rem;
}

.location__map-arrow {
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .location__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .location {
    padding: 4rem 1.5rem;
  }

  .location__title {
    font-size: 2.2rem;
  }

  .location__details {
    grid-template-columns: 1fr;
  }

  .location__map-wrap {
    height: 380px;
  }
}
</style>
