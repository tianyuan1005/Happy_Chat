import Img from '../images/img.png'
type Props = {}
const Input = (props: Props) => {
  return (
    <div className='bg-white h-24 p-2.5 flex justify-between'>
      <input
        className='w-full outline-none border-none text-second-100 text-lg placeholder:text-gray-300'
        type='text'
        placeholder='Type something...'
      />
      <div className='flex items-center justify-between gap-2'>
        <label htmlFor='file'>
          <img className='w-12' src={Img} alt='attach' />
        </label>
        <input type='file' style={{ display: 'none' }} id='file' />

        <button
          className='border-none py-1 px-2 text-white bg-primary-400'
          type='button'
        >
          Send
        </button>
      </div>
    </div>
  )
}
export default Input
