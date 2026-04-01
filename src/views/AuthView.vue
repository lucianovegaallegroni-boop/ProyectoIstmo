<template>
  <main class="auth-view">
    <div class="auth-card">
      
      <!-- Card Header -->
      <div class="auth-card__header">
        <div class="auth-card__logo-wrapper">
          <img src="@/assets/logo.png" alt="Istmo Games Logo" class="auth-card__logo-img" />
        </div>
        <h1 class="auth-card__title">ISTMO GAMES</h1>
        <p class="auth-card__subtitle">
          {{ isLogin ? 'Bienvenido de nuevo, jugador.' : 'Únete a The Curated Arena.' }}
        </p>
      </div>

      <!-- Auth Form -->
      <form class="auth-form" @submit.prevent="handleSubmit">
        
        <!-- Optional Name Field for Signup -->
        <div class="auth-form__group" v-if="!isLogin">
          <label class="auth-form__label">Nombre de Jugador</label>
          <div class="auth-form__input-wrapper">
            <span class="material-symbols-outlined auth-form__icon">person</span>
            <input 
              v-model="form.fullName"
              type="text" 
              class="auth-form__input" 
              placeholder="Ej: John Doe" 
              required
            />
          </div>
        </div>

        <!-- Email Field -->
        <div class="auth-form__group">
          <label class="auth-form__label">Correo Electrónico</label>
          <div class="auth-form__input-wrapper">
            <span class="material-symbols-outlined auth-form__icon">mail</span>
            <input 
              v-model="form.email"
              type="email" 
              class="auth-form__input" 
              placeholder="nombre@ejemplo.com" 
              required
            />
          </div>
        </div>

        <!-- Password Field -->
        <div class="auth-form__group">
          <div class="auth-form__label-row">
            <label class="auth-form__label">Contraseña</label>
            <a href="#" class="auth-form__forgot-link" v-if="isLogin">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div class="auth-form__input-wrapper">
            <span class="material-symbols-outlined auth-form__icon">lock</span>
            <input 
              v-model="form.password"
              type="password" 
              class="auth-form__input" 
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" 
              required
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="auth-form__submit" :disabled="isLoading">
          <span v-if="isLoading" class="material-symbols-outlined auth-form__spinner">sync</span>
          <span v-else>{{ isLogin ? 'Iniciar Sesión' : 'Registrarse' }}</span>
          <span v-if="!isLoading && isLogin" class="material-symbols-outlined auth-form__submit-icon">arrow_forward</span>
        </button>

        <!-- Error Message -->
        <p v-if="errorMessage" class="auth-form__error">{{ errorMessage }}</p>
      </form>

      <div class="auth-card__divider"></div>

      <!-- Toggle Mode -->
      <div class="auth-card__footer">
        <p v-if="isLogin">
          ¿No tienes una cuenta? 
          <button @click="toggleMode" class="auth-card__toggle-btn">Crear una cuenta</button>
        </p>
        <p v-else>
          ¿Ya tienes una cuenta? 
          <button @click="toggleMode" class="auth-card__toggle-btn">Iniciar Sesión</button>
        </p>
      </div>
    </div>

    <div class="auth-page__footer">
      <p>ISTMO GAMES &bull; THE CURATED ARENA &bull; EST. 2024</p>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { login, signup } = useAuth()

const isLogin = ref(true)
const isLoading = ref(false)
const errorMessage = ref('')

const form = reactive({
  email: '',
  password: '',
  fullName: ''
})

const toggleMode = () => {
  isLogin.value = !isLogin.value
  errorMessage.value = ''
  form.password = ''
}

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = ''
  try {
    if (isLogin.value) {
      await login(form.email, form.password)
    } else {
      await signup(form.email, form.password, form.fullName)
    }
    // Si asume autenticación exitosa, redirigir
    router.push('/')
  } catch (error) {
    errorMessage.value = error.message || 'Ocurrió un error en la autenticación.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Page Layout */
.auth-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(to bottom, #f8f6f6, #f3ecec); /* Soft gradient background matching screenshot */
}

/* Card Container */
.auth-card {
  width: 100%;
  max-width: 24rem; /* 384px */
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05); /* Soft large shadow */
  display: flex;
  flex-direction: column;
}

/* Header */
.auth-card__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
}

.auth-card__logo-wrapper {
  margin-bottom: 1.25rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: #fcfcfc;
  border: 1px solid #f0f0f0;
}

.auth-card__logo-img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  display: block;
}

.auth-card__title {
  color: #1a4a6e; /* dark blue */
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.auth-card__subtitle {
  color: #42474e; /* slate variant */
  font-size: 0.875rem;
  font-weight: 500;
}

/* Form */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.auth-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.auth-form__label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-form__label {
  color: #1a4a6e; /* dark blue */
  font-size: 0.875rem;
  font-weight: 700;
}

.auth-form__forgot-link {
  color: #a64e1d; /* distinct reddish/orange */
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
}

.auth-form__forgot-link:hover {
  text-decoration: underline;
}

.auth-form__input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.auth-form__icon {
  position: absolute;
  left: 1rem;
  color: #72787f; /* gray outline */
  font-size: 1.25rem;
  pointer-events: none;
}

.auth-form__input {
  width: 100%;
  background-color: #efefef; /* light gray fill */
  border: 2px solid transparent;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem 0.875rem 3rem;
  font-family: inherit;
  font-size: 0.875rem;
  color: #1c1b1b;
  transition: all 0.2s ease;
}

.auth-form__input:focus {
  outline: none;
  background-color: #ffffff;
  border-color: #a0cbf5;
}

.auth-form__input::placeholder {
  color: #9ca3af;
  font-weight: 500;
}

/* Submit Button */
.auth-form__submit {
  width: 100%;
  background-color: #1d4d73; /* Primary dark blue */
  color: #ffffff;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  margin-top: 0.5rem;
}

.auth-form__submit:hover:not(:disabled) {
  background-color: #153a5b;
}

.auth-form__submit:active:not(:disabled) {
  transform: scale(0.98);
}

.auth-form__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.auth-form__submit-icon {
  font-size: 1.25rem;
}

.auth-form__spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Error msg */
.auth-form__error {
  color: #ba1a1a;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  background-color: #ffdad6;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

/* Footer & Divider */
.auth-card__divider {
  height: 1px;
  background-color: #f0f0f0;
  margin: 2rem 0 1.5rem;
}

.auth-card__footer {
  text-align: center;
  font-size: 0.875rem;
  color: #42474e;
}

.auth-card__toggle-btn {
  background: none;
  border: none;
  color: #033d60; /* primary */
  font-weight: 800;
  cursor: pointer;
  padding: 0;
  font-size: 0.875rem;
  font-family: inherit;
}

.auth-card__toggle-btn:hover {
  text-decoration: underline;
}

/* Page Footer */
.auth-page__footer {
  margin-top: 3rem;
  text-align: center;
  color: #a3a3a3;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.2em;
}
</style>
