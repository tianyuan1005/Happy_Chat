import { useContext, useState, useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
import Message from './Message'
import { doc, onSnapshot, DocumentData } from 'firebase/firestore'
import { db } from '../firebase'

const Messages = () => {
  const [messages, setMessages] = useState<DocumentData>([])
  const { state } = useContext(ChatContext)
  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'charts', state.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => unSub()
  }, [state.chatId])

  return (
    <div className='h-[calc(100%-176px)] bg-light-white-100 p-2.5 overflow-y-scroll'>
      {messages.map((m: DocumentData) => (
        <Message key={m.id} message={m} />
      ))}
    </div>
  )
}
export default Messages
