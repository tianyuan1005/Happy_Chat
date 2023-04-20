import { DocumentData } from 'firebase/firestore'
import { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { User } from 'firebase/auth'

type Props = {
  message: DocumentData
}
const Message = ({ message }: Props) => {
  const currentUser = useContext(AuthContext) as User
  const { state } = useContext(ChatContext)
  const userPhoto = state?.user.photoURL as string
  const currentUserPhoto = currentUser.photoURL as string

  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])

  return (
    <div
      ref={ref}
      className={`${
        message.senderId === currentUser?.uid && 'flex-row-reverse'
      } flex gap-5 mb-5`}
    >
      <div className='flex flex-col text-gray-400 font-light mb-3'>
        <img
          src={
            message.senderId === currentUser?.uid ? currentUserPhoto : userPhoto
          }
          alt='profile'
          className='w-10 h-10 object-cover rounded-full'
        />
        <span>just now</span>
      </div>
      <div className='max-w-[80%] flex flex-col gap-2'>
        {message.text && (
          <p
            className={`${
              message.senderId === currentUser?.uid
                ? 'bg-primary-400 text-white rounded-tl-lg'
                : 'bg-white rounded-tr-lg'
            } py-2.5 px-5 rounded-b-lg  max-w-max`}
          >
            {message.text}
          </p>
        )}

        {message.img && (
          <img src={message.img} alt='message-pic' className='w-1/2' />
        )}
      </div>
    </div>
  )
}
export default Message
