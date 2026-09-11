import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { fetchProductById } from '../../services/productService'
import Spinner from '../../components/Spinner/Spinner'
import useCart from '../../hooks/useCart'
import useToast from '../../hooks/useToast'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const toast = useToast()
  const { data: product, loading, error } = useFetch( () => fetchProductById(id))
  
  if (loading) return <Spinner />
  if (error) return <div className="error-message"><p>{error}</p></div>

  const handleAddToCart = () => {  addToCart(product)
    toast.success(`${product.title} added to cart!`)}

  return (
    <div className="product-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="product-detail-container">
        <div className="product-detail-image-container">
          <img src={product.images?.[0]} alt={product.title} className="product-detail-image"
            onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=No+Image'}}/>
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          <div className="product-detail-rating">⭐ {product.rating} / 5</div>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-price">${product.price}</div>
          {product.stock && (<p className="product-detail-stock">✅ {product.stock} items in stock</p>)}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail