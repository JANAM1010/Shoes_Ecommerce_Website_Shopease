import { useNavigate } from 'react-router-dom'
import useWishlist from '../../hooks/useWishlist'
import useToast from '../../hooks/useToast'
import './ProductCard.css'

function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist()
  const toast = useToast()
  const wishlisted = isWishlisted(product.id)

  const handleWishlist = (e) => {
    e.stopPropagation()
    if(wishlisted){
      removeFromWishlist(product.id)
      toast.error('Removed from wishlist')
    } 
    else{
      addToWishlist(product)
      toast.success('Added to wishlist ❤️')
    }
  }
  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-image-container">
        <img  src={product.images?.[0]}  alt={product.title}  className="product-image"
          onError={(e) => {  e.target.src = 'https://placehold.co/200x200?text=No+Image'  }}/>
        <div className="product-overlay">
          <span className="view-details-btn">View Details</span>
        </div>
        <button
          className={`wishlist-btn ${wishlisted ? 'wishlisted' : ''}`}
          onClick={handleWishlist}>
          {wishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-bottom">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard