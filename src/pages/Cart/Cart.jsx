import { useNavigate } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useToast from '../../hooks/useToast'
import './Cart.css'

function Cart() {
  const navigate = useNavigate()
  const toast = useToast()
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Your cart is empty!</h2>
        <p>Looks like you haven't added anything yet.</p>
        <button  className="continue-shopping-btn"  onClick={() => navigate('/home')}>
          Continue Shopping
        </button>
      </div>
    )
  }
  
  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart 🛒</h2>
        <span>{totalItems} items</span>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image-container">
                <img  src={item.images?.[0] || 'https://placehold.co/100x100?text=No+Image'}  alt={item.title}
                  className="cart-item-image"
                  onError={(e) => {  e.target.src = 'https://placehold.co/100x100?text=No+Image'}}/>
              </div>

              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-controls">
                  <button  className="qty-btn"  onClick={() => decreaseQuantity(item.id)}>
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button  className="qty-btn"  onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-right">
                <p className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button  className="remove-btn"  onClick={() => {  removeFromCart(item.id)
                  toast.error('Item removed from cart')}}>
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Items ({totalItems})</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free-shipping">FREE</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
          <button
            className="clear-cart-btn"
            onClick={() => {  clearCart() 
              toast.error('Cart cleared!')
            }}>
            Clear Cart
          </button>
          <button
            className="continue-btn" onClick={() => navigate('/home')}>
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart