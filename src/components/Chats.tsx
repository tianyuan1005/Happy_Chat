import { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot, DocumentData } from 'firebase/firestore'
import { db } from '../firebase'
import { User } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

type Props = {
  isToggled: boolean
  setIsToggled: (value: boolean) => void
}
const Chats = ({ isToggled, setIsToggled }: Props) => {
  const [chats, setChats] = useState<DocumentData>([])

  const currentUser = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)
  const id = currentUser !== null && currentUser.uid

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'userChats', id + ''), (doc) => {
      const data = doc.data() as DocumentData
      setChats(data)
    })
    return () => unsub()
  }, [id])
  // console.log(Object.entries(chats))

  const handleSelect = (user: User) => {
    dispatch({ type: 'CHANGE_USER', payload: user })
    setIsToggled()
  }
  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <div
              className='p-2.5 flex items-center gap-2 text-white cursor-pointer hover:bg-dark-purple-200'
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img
                src={chat[1].userInfo.photoURL}
                alt='profile'
                className='h-12 w-12 rounded-full object-cover'
              />
              <div>
                <span className='font-medium text-lg'>
                  {chat[1].userInfo.displayName}
                </span>
                <p className='text-sm text-gray-300'>
                  {chat[1].lastMessage?.text}
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default Chats
