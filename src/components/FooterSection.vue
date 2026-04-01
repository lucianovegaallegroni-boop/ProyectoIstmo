<template>
  <footer class="footer">
    <div class="footer__inner">
      <!-- Brand & Copyright -->
      <div class="footer__brand">
        <h3 class="footer__logo">Istmo Games</h3>
        <p class="footer__desc">
          © {{ new Date().getFullYear() }} Istmo Games. The Curated Arena. Elevating the standard for serious hobbyists and tactical enthusiasts.
        </p>
        <div class="footer__socials">
          <span class="material-symbols-outlined footer__social-icon">hub</span>
          <span class="material-symbols-outlined footer__social-icon">podcasts</span>
          <span class="material-symbols-outlined footer__social-icon">forum</span>
        </div>
      </div>
      
      <!-- Store Links -->
      <div class="footer__links">
        <h4 class="footer__title">The Store</h4>
        <nav class="footer__nav">
          <a href="#" class="footer__link">Community Board</a>
          <a href="#" class="footer__link">Shipping Policy</a>
          <a href="#" class="footer__link">Contact Us</a>
          <a href="#" class="footer__link">Terms of Service</a>
        </nav>
      </div>
      
      <!-- Mini Newsletter -->
      <div class="footer__newsletter">
        <h4 class="footer__title">Newsletter</h4>
        <p class="footer__desc">
          Receive bi-weekly tactical briefings and inventory restock notifications.
        </p>
        <form class="footer__form" @submit.prevent>
          <input 
            type="email" 
            class="footer__input" 
            placeholder="YOUR EMAIL"
            required
          />
          <button type="submit" class="footer__btn">Join</button>
        </form>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  margin-top: 5rem;
  background-color: var(--surface-container-low);
  padding: 4rem 2rem;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Typography styles matching Tailwind */
.footer__logo {
  font-size: 1.125rem;
  font-weight: 900;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.footer__desc {
  color: var(--on-surface-variant);
  opacity: 0.8;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer__title {
  color: var(--primary);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Socials */
.footer__socials {
  display: flex;
  gap: 1rem;
}

.footer__social-icon {
  color: var(--primary);
  cursor: pointer;
  transition: color var(--transition-fast);
  font-size: 1.25rem;
}

.footer__social-icon:hover {
  color: var(--secondary-container);
}

/* Links */
.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__link {
  color: var(--on-surface-variant);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--secondary-container);
}

/* Mini Newsletter form */
.footer__form {
  display: flex;
  gap: 0.5rem;
}

.footer__input {
  background: var(--surface);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 0.65rem;
  padding: 0.75rem 1rem;
  flex: 1;
  color: var(--on-surface);
  transition: box-shadow var(--transition-fast);
}

.footer__input:focus {
  box-shadow: 0 0 0 2px var(--primary);
  outline: none;
}

.footer__btn {
  background: var(--primary);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-lg);
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  transition: all var(--transition-fast);
}

.footer__btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.footer__btn:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
