import Cam from '../images/cam.png'
import Add from '../images/add.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
Input
type Props = {}
const Chat = (props: Props) => {
  return (
    <div className='basis-2/3'>
      <div className='h-20 bg-second-100 flex items-center justify-between p-2 text-gray-300'>
        <span>Jane</span>
        <div className='flex gap-2'>
          <img className='cursor-pointer' src={Cam} alt='camera-icon' />
          <img className='cursor-pointer' src={Add} alt='add-icon' />
          <img className='cursor-pointer' src={More} alt='more-icon' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
export default Chat
