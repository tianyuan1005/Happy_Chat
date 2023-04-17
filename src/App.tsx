import Register from './pages/Register'
import Home from './pages/Home'
import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

function App() {
  interface childrenProp {
    children: React.ReactNode
  }
  const [isMember, setIsMember] = useState<boolean>(false)
  const currentUser = useContext(AuthContext)

  const ProtectedRoute: any = ({ children }: childrenProp) => {
    if (!currentUser) {
      return <Navigate to='/register' />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
