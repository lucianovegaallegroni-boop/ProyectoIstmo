import { ref, computed, watch } from 'vue'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

const cartItems = ref([])
const isInitialized = ref(false)

export function useCart() {
  const { user } = useAuth()

  const totalItems = computed(() => {
    return cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
  })

  const subtotal = computed(() => {
    return cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  })

  // Load cart from localStorage or Supabase
  const initCart = async () => {
    if (isInitialized.value) return
    
    // Load from localStorage first
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    if (user.value) {
      await fetchUserCart(localCart)
    } else {
      cartItems.value = localCart
    }
    
    isInitialized.value = true
  }

  const fetchUserCart = async (localCart = []) => {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', user.value.id)
      
      if (error) throw error
      
      if (localCart.length > 0) {
        // Merge local cart with database cart
        await mergeCarts(localCart, data || [])
      } else {
        cartItems.value = data || []
      }
    } catch (err) {
      console.error('Error fetching cart:', err.message)
      cartItems.value = localCart // Fallback to local
    }
  }

  const mergeCarts = async (localCart, dbCart) => {
    const merged = [...dbCart]
    
    for (const localItem of localCart) {
      const existingItem = merged.find(item => item.sku === localItem.sku)
      if (existingItem) {
        existingItem.quantity += localItem.quantity
        // Update in DB
        await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity })
          .eq('id', existingItem.id)
      } else {
        // Insert into DB
        const { data, error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.value.id,
            sku: localItem.sku,
            name: localItem.name,
            price: localItem.price,
            quantity: localItem.quantity,
            image: localItem.image,
            badge: localItem.badge,
            tags: localItem.tags
          })
          .select()
        
        if (!error && data) {
          merged.push(data[0])
        }
      }
    }
    
    cartItems.value = merged
    localStorage.removeItem('cart')
  }

  const addToCart = async (product) => {
    const existingItem = cartItems.value.find(item => item.sku === product.sku)
    
    if (existingItem) {
      await updateQuantity(existingItem.sku, existingItem.quantity + 1)
    } else {
      const newItem = { ...product, quantity: 1 }
      
      if (user.value) {
        try {
          const { data, error } = await supabase
            .from('cart_items')
            .insert({
              user_id: user.value.id,
              sku: newItem.sku,
              name: newItem.name,
              price: newItem.price,
              quantity: newItem.quantity,
              image: newItem.image,
              badge: newItem.badge,
              tags: newItem.tags
            })
            .select()
          
          if (error) throw error
          cartItems.value.push(data[0])
        } catch (err) {
          console.error('Error adding to cart:', err.message)
          // Fallback to local if DB fails? Or just show error
        }
      } else {
        cartItems.value.push(newItem)
        saveLocalCart()
      }
    }
  }

  const removeFromCart = async (sku) => {
    const index = cartItems.value.findIndex(item => item.sku === sku)
    if (index === -1) return
    
    const item = cartItems.value[index]
    
    if (user.value && item.id) {
      try {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('id', item.id)
        
        if (error) throw error
      } catch (err) {
        console.error('Error removing from cart:', err.message)
      }
    }
    
    cartItems.value.splice(index, 1)
    if (!user.value) saveLocalCart()
  }

  const updateQuantity = async (sku, quantity) => {
    const item = cartItems.value.find(item => item.sku === sku)
    if (!item) return
    
    if (quantity <= 0) {
      await removeFromCart(sku)
      return
    }
    
    item.quantity = quantity
    
    if (user.value && item.id) {
      try {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity })
          .eq('id', item.id)
        
        if (error) throw error
      } catch (err) {
        console.error('Error updating quantity:', err.message)
      }
    } else if (!user.value) {
      saveLocalCart()
    }
  }

  const clearCart = async () => {
    if (user.value) {
      try {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.value.id)
        
        if (error) throw error
      } catch (err) {
        console.error('Error clearing cart:', err.message)
      }
    }
    
    cartItems.value = []
    localStorage.removeItem('cart')
  }

  const saveLocalCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
  }

  // Watch for user changes to sync cart
  watch(user, async (newUser, oldUser) => {
    if (newUser && !oldUser) {
      // User just logged in
      const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
      await fetchUserCart(localCart)
    } else if (!newUser && oldUser) {
      // User just logged out
      cartItems.value = []
      isInitialized.value = false
    }
  })

  return {
    cartItems,
    totalItems,
    subtotal,
    initCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}
