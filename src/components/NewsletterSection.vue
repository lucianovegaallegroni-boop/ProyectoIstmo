<template>
  <section class="newsletter" id="newsletter">
    <div class="newsletter__card">
      <!-- Decorative blurs -->
      <div class="newsletter__blur newsletter__blur--top"></div>
      <div class="newsletter__blur newsletter__blur--bottom"></div>

      <div class="newsletter__content">
        <span class="newsletter__label">The Inner Circle</span>
        <h2 class="newsletter__title">Gain Strategic Advantage</h2>
        <p class="newsletter__desc">
          Be the first to know about Vault drops, tournament schedules, and exclusive masterpiece editions.
        </p>

        <form class="newsletter__form" @submit.prevent="handleSubscribe" id="newsletter-form">
          <input
            v-model="email"
            type="email"
            class="newsletter__input"
            placeholder="YOUR ARCHIVE EMAIL"
            required
            :disabled="isSubmitting"
            id="newsletter-email"
          />
          <button
            type="submit"
            class="newsletter__btn"
            :disabled="isSubmitting"
            id="newsletter-submit"
          >
            {{ isSubmitting ? 'Joining...' : 'Join Now' }}
          </button>
        </form>

        <!-- Success/Error messages -->
        <transition name="msg">
          <p v-if="successMsg" class="newsletter__msg newsletter__msg--success">
            <span class="material-symbols-outlined">check_circle</span>
            {{ successMsg }}
          </p>
        </transition>
        <transition name="msg">
          <p v-if="errorMsg" class="newsletter__msg newsletter__msg--error">
            <span class="material-symbols-outlined">error</span>
            {{ errorMsg }}
          </p>
        </transition>

        <p class="newsletter__disclaimer">NO SPAM. ONLY STRATEGY.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

const email = ref('')
const isSubmitting = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

async function handleSubscribe() {
  if (!email.value) return

  isSubmitting.value = true
  successMsg.value = ''
  errorMsg.value = ''

  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: email.value })

    if (error) {
      if (error.code === '23505') {
        errorMsg.value = 'This email is already subscribed!'
      } else {
        errorMsg.value = 'Something went wrong. Please try again.'
      }
    } else {
      successMsg.value = 'Welcome to the Inner Circle! 🎯'
      email.value = ''
    }
  } catch (err) {
    errorMsg.value = 'Network error. Please try again.'
  }

  isSubmitting.value = false

  setTimeout(() => {
    successMsg.value = ''
    errorMsg.value = ''
  }, 5000)
}
</script>

<style scoped>
.newsletter {
  padding: 6rem 3rem;
}

.newsletter__card {
  background: var(--primary-container);
  border-radius: var(--radius-2xl);
  padding: 5rem 4rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.newsletter__blur {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}

.newsletter__blur--top {
  top: -12rem;
  right: -12rem;
  background: rgba(251, 109, 0, 0.2);
}

.newsletter__blur--bottom {
  bottom: -12rem;
  left: -12rem;
  background: rgba(3, 61, 96, 0.4);
}

.newsletter__content {
  position: relative;
  z-index: 10;
  max-width: 560px;
}

.newsletter__label {
  color: var(--on-primary-container);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  display: block;
}

.newsletter__title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.newsletter__desc {
  color: var(--on-primary-container);
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  opacity: 0.8;
  line-height: 1.7;
}

.newsletter__form {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.newsletter__input {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 1rem 1.5rem;
  color: white;
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.newsletter__input::placeholder {
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.05em;
}

.newsletter__input:focus {
  box-shadow: 0 0 0 2px var(--secondary-container);
  background: rgba(255, 255, 255, 0.15);
}

.newsletter__btn {
  background: var(--secondary-container);
  color: var(--on-secondary-container);
  padding: 1rem 2.5rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.newsletter__btn:hover:not(:disabled) {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.newsletter__btn:active:not(:disabled) {
  transform: scale(0.97);
}

.newsletter__btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.newsletter__msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
}

.newsletter__msg--success {
  background: rgba(76, 175, 80, 0.2);
  color: #a5d6a7;
}

.newsletter__msg--error {
  background: rgba(244, 67, 54, 0.2);
  color: #ef9a9a;
}

.newsletter__msg .material-symbols-outlined {
  font-size: 1.1rem;
}

.newsletter__disclaimer {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.7rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

/* Message transition */
.msg-enter-active,
.msg-leave-active {
  transition: all 0.3s ease;
}
.msg-enter-from,
.msg-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .newsletter {
    padding: 4rem 1.5rem;
  }

  .newsletter__card {
    padding: 3rem 1.5rem;
  }

  .newsletter__title {
    font-size: 2.2rem;
  }

  .newsletter__form {
    flex-direction: column;
  }

  .newsletter__btn {
    width: 100%;
    text-align: center;
  }
}
</style>
