import { useState } from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import useMediaQuery from '../hooks/useMediaQuery'

const Home = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const isAboveSmallScreen = useMediaQuery('(min-width:768px)')
  return (
    <div className='bg-primary-100 h-screen flex justify-center items-center'>
      <div className='xs:flex border-2 border-white border-solid rounded-md md:w-4/6 h-5/6 overflow-hidden w-[80%]'>
        <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} />

        <Chat isToggled={isToggled} setIsToggled={setIsToggled} />
      </div>
    </div>
  )
}
export default Home
