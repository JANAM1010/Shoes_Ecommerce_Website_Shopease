import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useToast from '../../hooks/useToast'
import './Signup.css'

function Signup() {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const toast = useToast()
  const [formData, setFormData] = useState({userId:'',email:'',confirmEmail:'',password:'',confirmPassword:''})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
   setError('')}
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.userId || !formData.email || !formData.confirmEmail ||
      !formData.password || !formData.confirmPassword) {
      return setError('All fields are required!')
    }
    if (formData.email !== formData.confirmEmail) {
      return setError('Emails do not match!')
    }
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match!')
    }
    if (formData.password.length < 6) {
      return setError('Password must be at least 6 characters!')
    }
    setLoading(true)
    setTimeout(() => {
      const result = signup(formData)
      setLoading(false)
      if (!result.success) {
        return setError(result.message)
      }
      toast.success('Account created! Please login 🎉')
      navigate('/login')
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
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join ShopEase for free today</p>
          {error && <div className="auth-error">⚠️ {error}</div>}
          <div className="auth-form">
            <div className="form-group">
              <label>User ID</label>
              <input type="text" name="userId" placeholder="Choose a unique user ID" value={formData.userId}
              onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email" value={formData.email}
              onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Confirm Email</label>
              <input type="email" name="confirmEmail" placeholder="Confirm your email" value={formData.confirmEmail}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Min 6 characters" value={formData.password}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}/>
            </div>
            <button className={`auth-btn ${loading ? 'loading' : ''}`} onClick={handleSubmit} disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account →'}
            </button>
            <p className="auth-switch">
              Already have an account?{' '}
              <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup