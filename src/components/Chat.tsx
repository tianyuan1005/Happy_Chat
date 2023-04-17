import Cam from '../images/cam.png'
import Add from '../images/add.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
import useMediaQuery from '../hooks/useMediaQuery'

type Props = {
  isToggled: boolean
  setIsToggled: (value: boolean) => void
}
const Chat = ({ isToggled, setIsToggled }: Props) => {
  const isAboveSmallScreen = useMediaQuery('(min-width:768px)')

  return (
    <div className={`${isAboveSmallScreen} && 'basis-2/3'`}>
      <div className='h-20 bg-second-100 flex items-center justify-between p-2 text-gray-300'>
        <span>Jane</span>
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
