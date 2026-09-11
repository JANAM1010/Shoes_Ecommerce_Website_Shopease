import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound/NotFound'
import Wishlist from './pages/Wishlist/Wishlist'
import useAuth from './hooks/useAuth'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      {isLoggedIn ? <Navbar /> : null}
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" replace /> : <Login />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" replace /> : <Signup />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/login" replace />} />
        <Route path="/product/:id" element={isLoggedIn ? <ProductDetail /> : <Navigate to="/login" replace />} />
        <Route path="/wishlist" element={isLoggedIn ? <Wishlist /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App