import Register from './pages/Register'
import Home from './pages/Home'
import { useState } from 'react'

function App() {
  const [isMember, setIsMember] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <div>
      {isLogin ? (
        <Home />
      ) : (
        <Register isMember={isMember} setIsMember={setIsMember} />
      )}
    </div>
  )
}

export default App
