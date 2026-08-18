import { useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="notfound">
      <div className="notfound-content">
        <div className="notfound-emoji">👟</div>
        <h2 className="notfound-title">Welcome Home...</h2>
        <div className="notfound-buttons">
          <button  className="notfound-home-btn"  onClick={() => navigate('/')}>
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound