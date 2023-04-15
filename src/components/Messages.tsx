import Message from './Message'

Message
type Props = {}
const Messages = (props: Props) => {
  return (
    <div className='h-[calc(100%-176px)] bg-light-white-100 p-2.5'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}
export default Messages
