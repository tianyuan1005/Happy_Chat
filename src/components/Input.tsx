import Attach from '../images/attach.png'
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
      <div className='flex items-center justify-between'>
        <img className='h-6' src={Img} alt='image' />
        <label htmlFor='file'>
          <img src={Attach} alt='attach' />
        </label>
        <input type='file' style={{ display: 'none' }} id='file' />

        <button type='button'>Send</button>
      </div>
    </div>
  )
}
export default Input
