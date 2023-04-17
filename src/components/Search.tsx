import { useContext, useState } from 'react'
import {
  collection,
  query,
  where,
  getDoc,
  doc,
  DocumentData,
  setDoc,
  updateDoc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { StorageError } from 'firebase/storage'
import { AuthContext } from '../context/AuthContext'

type Props = {}
const Search = (props: Props) => {
  const currentUser = useContext(AuthContext)
  const id = currentUser !== null && currentUser.uid
  const [userName, setUserName] = useState<string>('')
  const [user, setUser] = useState<DocumentData | null>(null)
  const [err, setErr] = useState<boolean>(false)
  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', userName)
    )

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((document) => {
        setUser(document.data())
      })
    } catch (error) {
      setErr(true)
    }
  }
  const handleKey = (e: any) => {
    e.code === 'Enter' && handleSearch()
  }
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      id > user?.uid
        ? currentUser?.uid + user?.uid
        : user?.uid + currentUser?.uid

    try {
      const docRef = doc(db, 'chats', combinedId)
      const res = await getDoc(docRef)

      if (!res.exists()) {
        await setDoc(doc(db, 'charts', combinedId), { messages: [] })

        // create user chats
        const currentUserRef = doc(db, 'userChats', currentUser?.uid + '')
        await updateDoc(currentUserRef, {
          [combinedId + '.userInfo']: {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        })

        const userRef = doc(db, 'userChats', user?.uid)
        await updateDoc(userRef, {
          [combinedId + '.userInfo']: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        })
      }
    } catch (error) {}
    setUser(null)
    setUserName('')
  }

  return (
    <div className='border-b-2 border-gray-400 border-solid'>
      <div className='p-2.5'>
        <input
          className='bg-transparent border-0 text-white outline-0 placeholder:text-gray-300'
          type='text'
          placeholder='Find a User'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKey}
          value={userName}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div
          className='p-2.5 flex items-center gap-2 text-white cursor-pointer hover:bg-dark-purple-200'
          onClick={handleSelect}
        >
          <img
            src={user.photoURL}
            alt='profile'
            className='h-12 w-12 rounded-full object-cover'
          />

          <div>
            <span>{user?.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}
export default Search
