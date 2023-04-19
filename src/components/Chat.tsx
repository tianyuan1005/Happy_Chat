import Cam from '../images/cam.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
import useMediaQuery from '../hooks/useMediaQuery'
import { ChatContext } from '../context/ChatContext'
import { useContext } from 'react'

type Props = {
  isToggled: boolean
  setIsToggled: (value: boolean) => void
}
const Chat = ({ isToggled, setIsToggled }: Props) => {
  const isAboveSmallScreen = useMediaQuery('(min-width:768px)')
  const { state } = useContext(ChatContext)

  return (
    <div
      className={`${isToggled && 'hidden'} ${
        isAboveSmallScreen ? 'basis-2/3' : 'basis-full'
      }`}
    >
      <div className='h-20 bg-second-100 flex items-center justify-between p-2 text-gray-300'>
        <span>{state.user?.displayName}</span>
        <div className='flex gap-2'>
          <img className='cursor-pointer' src={Cam} alt='camera-icon' />
          {!isAboveSmallScreen && (
            <button onClick={() => setIsToggled(!isToggled)}>
              <img className='cursor-pointer' src={More} alt='more-icon' />
            </button>
          )}
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
export default Chat
