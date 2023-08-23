import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export function Home() {
  return (
    <div>
      <Sidebar/>
      <div className='ml-[100px]'>
        <Main/>
      </div>
    </div>
  )
}
