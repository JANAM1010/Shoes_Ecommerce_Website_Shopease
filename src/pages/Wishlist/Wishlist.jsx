import { useNavigate } from 'react-router-dom'
import useWishlist from '../../hooks/useWishlist'
import useCart from '../../hooks/useCart'
import useToast from '../../hooks/useToast'
import './Wishlist.css'

function Wishlist() {
  const navigate = useNavigate()
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const toast = useToast()

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-empty">
        <div className="wishlist-empty-icon">❤️</div>
        <h2>Your wishlist is empty!</h2>
        <p>Save items you love by clicking the ❤️ button</p>
        <button
          className="wishlist-shop-btn"
          onClick={() => navigate('/')}
        >
          Start Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h2>My Wishlist ❤️</h2>
        <span>{wishlistItems.length} items</span>
      </div>

      <div className="wishlist-grid">
        {wishlistItems.map(item => (
          <div key={item.id} className="wishlist-card">
            <div
              className="wishlist-image-container"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="wishlist-image"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/200x200?text=No+Image'
                }}
              />
            </div>
            <div className="wishlist-info">
              <h3 className="wishlist-title">{item.title}</h3>
              <p className="wishlist-price">${item.price}</p>
              <div className="wishlist-buttons">
                <button
                  className="wishlist-add-cart-btn"
                  onClick={() => {
                    addToCart(item)
                    toast.success(`${item.title} added to cart!`)
                  }}
                >
                  🛒 Add to Cart
                </button>
                <button
                  className="wishlist-remove-btn"
                  onClick={() => {
                    removeFromWishlist(item.id)
                    toast.error('Removed from wishlist')
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist