import { useContext, useState } from 'react'
import Img from '../images/img.png'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { db, storage } from '../firebase'
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

type Props = {}
const Input = (props: Props) => {
  const [text, setText] = useState<string>('')
  const [img, setImg] = useState<any>(null)
  const [err, setErr] = useState<boolean>(false)
  const currentUser = useContext(AuthContext)
  const { state } = useContext(ChatContext)
  const id = currentUser !== null && currentUser.uid

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid())

      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, 'charts', state.chatId), {
              messages: arrayUnion(`{
                id: uuid(),
                text,
                senderId: currentUser?.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }`),
            })
          } catch (err) {
            setErr(true)
          }
        })
      })
    } else {
      await updateDoc(doc(db, 'charts', state.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser?.uid,
          date: Timestamp.now(),
        }),
      })
    }

    await updateDoc(doc(db, 'userChats', id + ''), {
      [state.chatId + '.lastMessage']: {
        text,
      },
      [state.chatId + '.date']: serverTimestamp(),
    })
    await updateDoc(doc(db, 'userChats', state.user.uid), {
      [state.chatId + '.lastMessage']: {
        text,
      },
      [state.chatId + '.date']: serverTimestamp(),
    })

    setText('')
    setImg(null)
  }
  return (
    <div className='bg-white h-24 p-2.5 flex justify-between'>
      <input
        className='w-full outline-none border-none text-second-100 text-lg placeholder:text-gray-300'
        type='text'
        placeholder='Type something...'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className='flex items-center justify-between gap-2'>
        <label htmlFor='file'>
          <img className='w-12' src={Img} alt='attach' />
        </label>
        <input
          type='file'
          style={{ display: 'none' }}
          id='file'
          onChange={(e) => setImg(e.target.files?.[0])}
        />

        <button
          className='border-none py-1 px-2 text-white bg-primary-400'
          type='button'
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  )
}
export default Input
