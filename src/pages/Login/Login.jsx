import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useToast from '../../hooks/useToast'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const toast = useToast()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!identifier || !password) {
      return setError('All fields are required!')
    }
    setLoading(true)
    setTimeout(() => {
      const result = login(identifier, password)
      setLoading(false)
      if (!result.success) {
        return setError(result.message)
      }
      toast.success('Welcome back! 👟')
      navigate('/')
    }, 600)
  }
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-brand">
          <h1>🛍️ ShopEase</h1>
          <p>Your one-stop shoe destination</p>
        </div>
        <div className="auth-features">
          <div className="auth-feature">👟 Premium shoe collection</div>
          <div className="auth-feature">🚚 Free shipping on all orders</div>
          <div className="auth-feature">↩️ Easy 30-day returns</div>
          <div className="auth-feature">🔒 Secure checkout</div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Welcome Back!</h2>
          <p className="auth-subtitle">Login to continue shopping</p>
          {error && <div className="auth-error">⚠️ {error}</div>}
          <div className="auth-form">
            <div className="form-group">
              <label>Email or User ID</label>
              <input
                type="text"
                placeholder="Enter your email or user ID"
                value={identifier}
                onChange={(e) => {  setIdentifier(e.target.value)
                  setError('')}}/>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input  type="password"  placeholder="Enter your password"  value={password}
                onChange={(e) => {  setPassword(e.target.value)
                  setError('')}}/>
            </div>

            <button  className={`auth-btn ${loading ? 'loading' : ''}`}  onClick={handleSubmit}  disabled={loading}>
              {loading ? 'Logging in...' : 'Login →'}
            </button>

            <p className="auth-switch">
              Don't have an account?{' '}
              <Link to="/signup">Create one free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login