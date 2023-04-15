type Props = {}
const Search = (props: Props) => {
  return (
    <div className='border-b-2 border-gray-400 border-solid'>
      <div className='p-2.5'>
        <input
          className='bg-transparent border-0 text-white outline-0 placeholder:text-gray-300'
          type='text'
          placeholder='Find a User'
        />
      </div>
      <div className='p-2.5 flex items-center gap-2 text-white cursor-pointer hover:bg-dark-purple-200'>
        <img
          src='https://images.unsplash.com/photo-1658632302262-957f74b1fdd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60 '
          alt='profile'
          className='h-12 w-12 rounded-full object-cover'
        />
        <div>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
export default Search
