import { createContext, useState, useCallback, useEffect } from 'react'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('wishlist')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])
  
  const addToWishlist = useCallback((product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) return prev
      return [...prev, product]
    })
  }, [])
  
  const removeFromWishlist = useCallback((productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId))
  }, [])
  
  const isWishlisted = useCallback((productId) => {
    return wishlistItems.some(item => item.id === productId)
  }, [wishlistItems])
  
  const totalWishlist = wishlistItems.length
  
  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isWishlisted,
      totalWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider