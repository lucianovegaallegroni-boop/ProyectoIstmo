import { ref } from 'vue'
import { supabase } from '../lib/supabase'

// Global state
const user = ref(null)
const isLoading = ref(true)

export function useAuth() {
  const initAuth = async () => {
    isLoading.value = true
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) throw error
      user.value = session?.user || null
    } catch (err) {
      console.error('Error fetching session:', err.message)
      user.value = null
    } finally {
      isLoading.value = false
    }

    // Listen to changes (login, logout, token refresh)
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user || null
    })
  }

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    return data
  }

  const signup = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })
    if (error) throw error
    return data
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    user,
    isLoading,
    initAuth,
    login,
    signup,
    logout
  }
}
