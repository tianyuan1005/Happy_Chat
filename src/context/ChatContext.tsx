import { createContext, useContext, useReducer } from 'react'

import { AuthContext } from './AuthContext'
import {User} from 'firebase/auth'

interface childrenProp {
  children?: React.ReactNode
}
type initialState={
  chatId:string,
  user:User
}

type ActionType = {type:'CHANGE_USER',payload:User}

type ContextType ={
  state:initialState,
  dispatch:React.Dispatch<ActionType>
}

export const ChatContext = createContext<ContextType>({} as ContextType)

export const ChatContextProvider = ({ children }: childrenProp) => {
  const currentUser = useContext(AuthContext)
  const id = currentUser !== null && currentUser.uid
  const INITIAL_STATE = {
    chatId: 'null',
    user: {} as User,
  }
  const chatReducer = (state: initialState, action:ActionType ) => {
    switch (action.type) {
      case 'CHANGE_USER':
        return {
          chatId:
            id > action.payload?.uid
              ? currentUser?.uid + action.payload?.uid
              : action.payload?.uid + currentUser?.uid,
            user: action.payload,
        }
      default:
        return state
    }
  }
 const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)
  return ( 
    <ChatContext.Provider value={{dispatch,state}}>
      {children}
    </ChatContext.Provider>
  )
}
