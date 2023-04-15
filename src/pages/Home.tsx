import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-primary-100 h-screen flex justify-center items-center'>
      <div className='flex border-2 border-white border-solid rounded-md w-4/6 h-5/6 overflow-hidden'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
export default Home
