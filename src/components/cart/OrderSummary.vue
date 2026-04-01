<template>
  <aside class="order-summary-wrapper">
    <div class="order-summary">
      <div class="order-summary__bg-texture hidden-mobile"></div>
      
      <div class="order-summary__content">
        <h2 class="order-summary__title">Resumen de Orden</h2>
        
        <div class="order-summary__lines">
          <div class="order-summary__line">
            <span class="order-summary__label">Subtotal</span>
            <span class="order-summary__value">{{ formatPrice(subtotal) }}</span>
          </div>
          <div class="order-summary__line">
            <span class="order-summary__label">Envío Estimado</span>
            <span class="order-summary__value">{{ formatPrice(shipping) }}</span>
          </div>
          <div class="order-summary__line hidden-mobile">
            <span class="order-summary__label">Impuestos</span>
            <span class="order-summary__value">{{ formatPrice(taxes) }}</span>
          </div>
        </div>
        
        <div class="order-summary__divider"></div>
        
        <div class="order-summary__total-line">
          <span class="order-summary__total-label">Total</span>
          <div class="order-summary__total-value-wrapper">
            <p class="order-summary__total-value">{{ formatPrice(total) }}</p>
            <p class="order-summary__vat-note hidden-desktop">Including VAT & Processing</p>
          </div>
        </div>
        
        <div class="order-summary__actions">
          <button class="order-summary__checkout-btn">
            <span>Secure Checkout</span>
            <span class="material-symbols-outlined order-summary__btn-icon hidden-mobile">lock</span>
          </button>
          
          <a href="#" class="order-summary__continue-link hidden-desktop">Continue Exploring</a>
        </div>
        
        <!-- Trust Badges Desktop -->
        <div class="order-summary__trust-list hidden-mobile">
          <div class="order-summary__trust-item">
            <span class="material-symbols-outlined order-summary__trust-icon">verified_user</span>
            <span>Garantía de Autenticidad Istmo</span>
          </div>
          <div class="order-summary__trust-item">
            <span class="material-symbols-outlined order-summary__trust-icon">local_shipping</span>
            <span>Envío Premium Asegurado</span>
          </div>
        </div>
        
        <!-- Trust Badges Mobile -->
        <div class="order-summary__trust-icons hidden-desktop">
          <span class="material-symbols-outlined">lock</span>
          <span class="material-symbols-outlined">verified</span>
          <span class="material-symbols-outlined">local_shipping</span>
        </div>
      </div>
    </div>
    
    <!-- Support Section (Desktop Only) -->
    <div class="support-card hidden-mobile">
      <p class="support-card__label">¿Necesitas Ayuda?</p>
      <div class="support-card__content">
        <div class="support-card__text">
          <span class="support-card__title">Chat con un Experto</span>
          <span class="support-card__hours">Lunes - Viernes, 9am - 6pm</span>
        </div>
        <span class="material-symbols-outlined support-card__icon">support_agent</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  subtotal: { type: Number, required: true },
  shipping: { type: Number, required: true },
  taxes: { type: Number, required: true }
})

const total = computed(() => props.subtotal + props.shipping + props.taxes)

const formatPrice = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}
</script>

<style scoped>
/* Wrapper to handle sticky positioning */
.order-summary-wrapper {
  position: relative;
  height: fit-content;
}

@media (min-width: 1024px) {
  .order-summary-wrapper {
    position: sticky;
    top: 8rem; /* Equivalent to top-32 */
  }
}

/* Base Summary Card (Mobile-first light styling) */
.order-summary {
  background-color: var(--surface-container-low);
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  transition: all var(--transition-base);
}

/* Desktop Summary Card (Dark blue styling) */
@media (min-width: 1024px) {
  .order-summary {
    background-color: var(--primary);
    color: white;
    padding: 2rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-2xl);
  }
}

/* Decorative Background Texture (Desktop only) */
.order-summary__bg-texture {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--primary), var(--primary-container), var(--primary));
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
}

.order-summary__content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.order-summary__title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 800;
  color: var(--on-surface);
  line-height: 1.25;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .order-summary__title {
    font-size: 1.5rem; /* text-2xl */
    font-weight: 900;
    color: white;
    letter-spacing: -0.025em;
    margin-bottom: 2rem;
  }
}

/* Lines */
.order-summary__lines {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (min-width: 1024px) {
  .order-summary__lines {
    gap: 1rem;
    margin-bottom: 2rem;
  }
}

.order-summary__line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem; /* text-sm */
  color: var(--on-surface-variant);
}

@media (min-width: 1024px) {
  .order-summary__line {
    color: var(--on-primary);
  }
}

.order-summary__label {
  font-weight: 500;
  text-transform: capitalize;
}

@media (min-width: 1024px) {
  .order-summary__label {
    color: var(--on-primary-container);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}

.order-summary__value {
  font-weight: 700;
}

.order-summary__divider {
  height: 1px;
  background-color: var(--outline-variant);
  opacity: 0.2;
  margin: 1rem 0;
}

@media (min-width: 1024px) {
  .order-summary__divider {
    background-color: var(--on-primary-container);
    margin: 0 0 2rem 0;
  }
}

/* Total */
.order-summary__total-line {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

@media (min-width: 1024px) {
  .order-summary__total-line {
    align-items: center;
    margin-bottom: 2.5rem;
  }
}

.order-summary__total-label {
  font-size: 1rem;
  font-weight: 700;
  color: var(--on-surface);
}

@media (min-width: 1024px) {
  .order-summary__total-label {
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: white;
  }
}

.order-summary__total-value-wrapper {
  text-align: right;
}

.order-summary__total-value {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary);
  line-height: 1;
}

@media (min-width: 1024px) {
  .order-summary__total-value {
    font-size: 2.25rem; /* 4xl */
    letter-spacing: -0.05em;
    color: white;
  }
}

.order-summary__vat-note {
  font-size: 0.625rem;
  color: var(--outline);
  margin-top: 0.25rem;
}

/* Actions */
.order-summary__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .order-summary__actions {
    margin-top: 0;
  }
}

.order-summary__checkout-btn {
  width: 100%;
  background-color: var(--secondary-container);
  color: white;
  font-weight: 700;
  text-transform: capitalize;
  border-radius: var(--radius-xl);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all var(--transition-base);
  box-shadow: 0 10px 15px -3px rgba(251, 109, 0, 0.2);
}

@media (min-width: 1024px) {
  .order-summary__checkout-btn {
    border-radius: var(--radius-lg);
    padding: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.875rem;
  }
}

.order-summary__checkout-btn:hover {
  background-color: var(--secondary);
}

.order-summary__checkout-btn:active {
  transform: scale(0.98);
}

.order-summary__btn-icon {
  font-size: 1.25rem;
}

.order-summary__continue-link {
  display: block;
  text-align: center;
  color: var(--primary);
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.5rem;
  transition: color var(--transition-fast);
}

.order-summary__continue-link:hover {
  text-decoration: underline;
}

/* Trust Badges - Mobile */
.order-summary__trust-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--outline-variant-rgb, 194, 199, 207), 0.2);
  margin-top: 1rem;
}

.order-summary__trust-icons .material-symbols-outlined {
  color: var(--outline);
  font-size: 1.125rem;
  font-variation-settings: 'FILL' 1;
}

/* Trust Badges - Desktop */
.order-summary__trust-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.order-summary__trust-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(157, 200, 241, 0.8); /* on-primary-container lighter */
  font-size: 0.75rem;
  font-weight: 500;
}

.order-summary__trust-icon {
  font-size: 1.125rem;
}

/* Support Card (Desktop only) */
.support-card {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: var(--surface-container-low);
  border-radius: var(--radius-xl);
}

.support-card__label {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--outline);
  margin-bottom: 1rem;
}

.support-card__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.support-card__text {
  display: flex;
  flex-direction: column;
}

.support-card__title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
}

.support-card__hours {
  font-size: 0.625rem;
  color: var(--on-surface-variant);
}

.support-card__icon {
  color: var(--primary);
  font-size: 1.5rem;
}

/* Responsive Utilities */
.hidden-mobile {
  display: none;
}
.hidden-desktop {
  display: block;
}

@media (min-width: 1024px) {
  .hidden-mobile {
    display: flex; /* or block depending on element, but usually flex for these */
  }
  .order-summary__trust-list.hidden-mobile { display: flex; }
  .order-summary__bg-texture.hidden-mobile { display: block; }
  .support-card.hidden-mobile { display: block; }
  
  .hidden-desktop {
    display: none;
  }
}
</style>
