import { createContext, useState, useCallback, useEffect } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  // Load cart from localStorage on first render
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = useCallback((product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])
  const removeFromCart = useCallback((productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }, [])
  const increaseQuantity = useCallback((productId) => {
    setCartItems(prev =>
      prev.map(item =>  item.id === productId  ? { ...item, quantity: item.quantity + 1 } : item))
  }, [])
  const decreaseQuantity = useCallback((productId) => {
    setCartItems(prev =>
      prev.map(item =>  item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } 
        : item).filter(item => !(item.id === productId && item.quantity === 1)))
  }, [])
  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider