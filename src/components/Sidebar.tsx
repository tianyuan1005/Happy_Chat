import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'
import useMediaQuery from '../hooks/useMediaQuery'

type Props = {
  isToggled: boolean
  setIsToggled: (value: boolean) => void
}
const Sidebar = ({ isToggled, setIsToggled }: Props) => {
  const isAboveSmallScreen = useMediaQuery('(min-width:768px)')

  return (
    <>
      {isAboveSmallScreen && (
        <div className='bg-dark-purple-100 basis-1/3 relative'>
          <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
          <Search isToggled={isToggled} setIsToggled={setIsToggled} />
          <Chats isToggled={isToggled} setIsToggled={setIsToggled} />
        </div>
      )}
      {!isAboveSmallScreen && isToggled && (
        <div className='bg-dark-purple-100 h-full z-10 relative basis-full'>
          <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
          <Search isToggled={isToggled} setIsToggled={setIsToggled} />
          <Chats isToggled={isToggled} setIsToggled={setIsToggled} />
        </div>
      )}
    </>
  )
}
export default Sidebar
