import useMediaQuery from '../hooks/useMediaQuery'
import { AiOutlineClose } from 'react-icons/ai'
import { signOut, User } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

type Props = {
  isToggled: boolean
  setIsToggled: (value: boolean) => void
}

const Navbar = ({ isToggled, setIsToggled }: Props) => {
  const currentUser = useContext(AuthContext)

  const { photoURL, displayName } = currentUser as User

  const isAboveMediumScreen = useMediaQuery('(min-width:1200px)')
  const isAboveSmallScreen = useMediaQuery('(min-width:768px)')
  return (
    <div className='flex items-center bg-dark-purple-200 h-20 p-2.5 justify-between text-light-white-100'>
      {isAboveMediumScreen && (
        <span className='font-bold text-lg'>Happy Chat</span>
      )}

      <div className='flex gap-2'>
        <img
          className='h-7 w-7 rounded-full bg-text-light-white-100 object-cover'
          src={photoURL ? photoURL : undefined}
          alt='profile'
        />
        <span>{displayName}</span>
        <button
          className='bg-second-100 text-lg text-light-white-100 cursor-pointer absolute bottom-2.5 left-4'
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
        {!isAboveSmallScreen && (
          <button onClick={() => setIsToggled(!isToggled)}>
            <AiOutlineClose className='absolute right-7 top-7 cursor-pointer' />
          </button>
        )}
      </div>
    </div>
  )
}
export default Navbar
