import { createContext, useState, useCallback, useEffect } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('currentUser')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    } 
    else{
      localStorage.removeItem('currentUser')
    }
  }, [currentUser])
  //SignUp
  const signup = useCallback((userData) => {
    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    // Check if email already exists
    const emailExists = existingUsers.find(u => u.email === userData.email)
    if (emailExists) {
      return { success: false, message: 'Email already registered!' }
    }
    // Check if userId already exists
    const userIdExists = existingUsers.find(u => u.userId === userData.userId)
    if (userIdExists) {
      return { success: false, message: 'User ID already taken!' }
    }
    // Save new user
    const newUser = {
      userId: userData.userId,
      email: userData.email,
      password: userData.password,
    }
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]))
    setCurrentUser({ userId: newUser.userId, email: newUser.email })
    return { success: true }
  },[])

  // Login
  const login = useCallback((identifier, password) => {
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')

  // Find user by email OR userId
  const user = existingUsers.find(u =>
    (u.email === identifier || u.userId === identifier) &&
    u.password === password
  )
    if (!user) {
      return { success: false, message: 'Invalid credentials!' }
    }
    setCurrentUser({ userId: user.userId, email: user.email })
    return { success: true }
  }, [])
  // Logout
  const logout = useCallback(() => {
    setCurrentUser(null)
  }, [])
  const isLoggedIn = !!currentUser
  return (
    <AuthContext.Provider value={{
      currentUser,
      isLoggedIn,
      signup,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider