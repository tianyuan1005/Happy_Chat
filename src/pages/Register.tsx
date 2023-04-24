import addAvatar from '../images/addAvatar.png'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import defaultPhoto from '../images/defaultPhoto.jpg'

const Register = () => {
  const [err, setErr] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [isMember, setIsMember] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleRegister = async (e: any) => {
    e.preventDefault()
    const displayName: string = e.target[0].value
    const email: string = e.target[1].value
    const password: string = e.target[2].value
    const file: ArrayBuffer = e.target[3].files[0]
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      //Create a unique image name
      const date = new Date().getTime()
      let storageRef = ref(storage, `${displayName + date}`)

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: file === undefined ? defaultPhoto : downloadURL,
            })
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: file === undefined ? defaultPhoto : downloadURL,
            })

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          } catch (err) {
            console.log(err)
            setErr(true)
            setLoading(false)
          }
        })
      })
    } catch (err) {
      setErr(true)
      setLoading(false)
    }
  }
  const handleLogin = async (e: any) => {
    e.preventDefault()
    const email: string = e.target[0].value
    const password: string = e.target[1].value
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      console.log(err)
      setErr(true)
      setLoading(false)
    }
  }

  const inputConfig: string =
    'p-3.5 border-b-2 border-primary-100 placeholder:text-slate-2300 w-80'
  return (
    <div className='bg-primary-100 h-screen flex justify-center items-center'>
      <div className='bg-white py-5 px-16 rounded-lg flex flex-col gap-2.5 items-center'>
        <span className='text-second-100 font-bold text-2xl'>Happy Chat</span>
        <span className='text-second-100 text-sm'>
          {isMember ? 'Log In' : 'Register'}
        </span>
        <form
          className='flex flex-col gap-4 '
          onSubmit={isMember ? handleLogin : handleRegister}
        >
          {!isMember && (
            <input className={inputConfig} type='text' placeholder='name' />
          )}
          <input className={inputConfig} type='email' placeholder='email' />
          <input
            className={`mb-2 ${inputConfig}`}
            type='password'
            placeholder='password'
          />
          {!isMember && (
            <>
              <input
                id='files'
                type='file'
                accept='image/png, image/gif, image/jpeg'
                style={{ display: 'none' }}
              />
              <label
                className='flex gap-4 items-center cursor-pointer'
                htmlFor='files'
              >
                <img className='w-9' src={addAvatar} alt='avatar' />
                <span className='text-second-100 text-sm'>Add an Avatar</span>
              </label>
            </>
          )}

          <button
            className='text-white bg-primary-300 border-0 cursor-pointer py-2 hover:bg-primary-500'
            type='submit'
          >
            {isMember ? 'Log In' : 'Sign Up'}
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className='text-second-100 mt-4 text-sm'>
          {isMember
            ? "Don't have an account yet? "
            : 'Already have an account?'}
          <button
            className='ml-1 underline decoration-solid'
            onClick={() => setIsMember(!isMember)}
          >
            {isMember ? 'Register' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  )
}
export default Register
