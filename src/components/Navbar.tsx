const Navbar = () => {
  return (
    <div className='flex items-center bg-dark-purple-200 h-20 p-2.5 justify-between text-light-white-100'>
      <span className='font-bold text-lg'>Happy Chat</span>

      <div className='flex gap-2'>
        <img
          className='h-7 w-7 rounded-full bg-text-light-white-100 object-cover'
          src='https://images.unsplash.com/photo-1664575603992-0f17b771dd91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60'
          alt='profile'
        />
        <span>John</span>
        <button className='bg-second-100 text-xs text-light-white-100 cursor-pointer'>
          Logout
        </button>
      </div>
    </div>
  )
}
export default Navbar
