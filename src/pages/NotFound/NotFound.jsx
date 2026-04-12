import { useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="notfound">
      <div className="notfound-content">
        <div className="notfound-emoji">👟</div>
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-subtitle">
          Oops! Looks like this page walked away.
        </p>
        <div className="notfound-buttons">
          <button  className="notfound-home-btn"  onClick={() => navigate('/')}>
            🏠 Go Home
          </button>
          <button  className="notfound-back-btn"  onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound