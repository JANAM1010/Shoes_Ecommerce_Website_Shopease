import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext'
import AuthProvider from './context/AuthContext'
import ThemeProvider from './context/ThemeContext'
import ToastProvider from './context/ToastContext'
import WishlistProvider from './context/WishlistContext'
import './components/Toast/Toast.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)