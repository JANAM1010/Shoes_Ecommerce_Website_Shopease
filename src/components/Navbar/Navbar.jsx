import { Link, useNavigate } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useAuth from '../../hooks/useAuth'
import useTheme from '../../hooks/useTheme'
import useWishlist from '../../hooks/useWishlist'
import './Navbar.css'

function Navbar() {
  const { totalItems } = useCart()
  const { isLoggedIn, currentUser, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const { totalWishlist } = useWishlist()
  const navigate = useNavigate()
  const handleLogout = () => {  logout()
      navigate('/')}

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🛍️ ShopEase</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className='Home'>Home</Link>
        <Link to="/wishlist" className="cart-link">
          Wishlist ❤️
          {totalWishlist > 0 && ( <span className="cart-count">{totalWishlist}</span>)}
        </Link>

        <Link to="/cart" className="cart-link">
          Cart 🛒  {totalItems > 0 && (  <span className="cart-count">{totalItems}</span>  )}
        </Link>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '☀️' : '🌙'}
        </button>

        {isLoggedIn ? (
          <>
            <span className="navbar-username">👤 {currentUser.userId}</span>
            <button className="navbar-logout-btn" onClick={handleLogout}>  Logout  </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="navbar-signup-btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar