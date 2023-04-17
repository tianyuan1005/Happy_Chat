type Props = {}
const Message = (props: Props) => {
  return (
    <div className='flex gap-5'>
      <div className='flex flex-col text-gray-400 font-light mb-3'>
        <img
          src='https://images.unsplash.com/photo-1664575603992-0f17b771dd91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60'
          alt='profile'
          className='w-10 h-10 object-cover rounded-full'
        />
        <span>just now</span>
      </div>
      <div className='max-w-[80%] flex flex-col gap-2'>
        <p className='bg-white py-2.5 px-5 rounded-b-lg rounded-tr-lg max-w-max'>
          hello
        </p>
        <img
          src='https://images.unsplash.com/photo-1664575603992-0f17b771dd91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60'
          alt='profile'
          className='w-1/2'
        />
      </div>
    </div>
  )
}
export default Message
