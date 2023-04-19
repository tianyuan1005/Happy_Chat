import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase'

interface childrenProp {
  children?: React.ReactNode
}

export const AuthContext = createContext<User | null>({} as User)

export const AuthContextProvider = ({ children }: childrenProp) => {
  const [currentUser, setCurrentUser] = useState<User | null>({} as User)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => {
      unsub
    }
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}
