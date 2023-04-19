import { createContext, useContext, useReducer } from 'react'

import { AuthContext } from './AuthContext'

interface childrenProp {
  children?: React.ReactNode
}

export const ChatContext = createContext({})

export const ChatContextProvider: React.FC = ({ children }: childrenProp) => {
  const currentUser = useContext(AuthContext)
  const id = currentUser !== null && currentUser.uid
  const INITIAL_STATE = {
    chatId: 'null',
    user: {},
  }
  const chatReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'CHANGE_USER':
        return {
          user: action.payload,
          chatId:
            id > action.payload?.uid
              ? currentUser?.uid + action.payload?.uid
              : action.payload?.uid + currentUser?.uid,
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}