import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'

type Props = {}
const Sidebar = (props: Props) => {
  return (
    <div className='basis-1/3 bg-dark-purple-100'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}
export default Sidebar
