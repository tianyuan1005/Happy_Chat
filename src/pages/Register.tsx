import addAvatar from '../images/addAvatar.png'

type Props = {
  isMember: boolean
  setIsMember: (value: boolean) => void
}

const Register = ({ isMember, setIsMember }: Props) => {
  const inputConfig =
    'p-3.5 border-b-2 border-primary-100 placeholder:text-slate-2300 w-80'
  return (
    <div className='bg-primary-100 h-screen flex justify-center items-center'>
      <div className='bg-white py-5 px-16 rounded-lg flex flex-col gap-2.5 items-center'>
        <span className='text-second-100 font-bold text-2xl'>Happy Chat</span>
        <span className='text-second-100 text-sm'>
          {isMember ? 'Log In' : 'Register'}
        </span>
        <form className='flex flex-col gap-4 '>
          {!isMember && (
            <input className={inputConfig} type='text' placeholder='name' />
          )}
          <input className={inputConfig} type='email' placeholder='email' />
          <input
            className={`mb-2 ${inputConfig}`}
            type='password'
            placeholder='password'
          />
          {!isMember && (
            <>
              <input
                id='files'
                type='file'
                accept='image/png, image/gif, image/jpeg'
                style={{ display: 'none' }}
              />
              <label
                className='flex gap-4 items-center cursor-pointer'
                htmlFor='files'
              >
                <img className='w-9' src={addAvatar} alt='avatar' />
                <span className='text-second-100 text-sm'>Add an Avatar</span>
              </label>
            </>
          )}

          <button
            className='text-white bg-primary-300 border-0 cursor-pointer py-2 hover:bg-primary-500'
            type='submit'
          >
            {isMember ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <p className='text-second-100 mt-4 text-sm'>
          {isMember
            ? "Don't have an account yet? "
            : 'Already have an account?'}
          <button
            className='ml-1 underline decoration-solid'
            onClick={() => setIsMember(!isMember)}
          >
            {isMember ? 'Register' : 'Log In'}
          </button>
        </p>
        <button></button>
      </div>
    </div>
  )
}
export default Register
