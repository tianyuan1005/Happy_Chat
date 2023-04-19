import { useState } from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  return (
    <div
      className='bg-primary-100 h-screen
     flex justify-center items-center'
    >
      <div className='flex border-2 border-white border-solid rounded-md md:w-4/6 h-5/6 overflow-hidden w-[80%]'>
        <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} />

        <Chat isToggled={isToggled} setIsToggled={setIsToggled} />
      </div>
    </div>
  )
}
export default Home
