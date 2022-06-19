import SideStrip from './SideStrip'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Hero from './Hero'
import Table from './Table'
import Paggination from './Paggination'

function Body() {
  return (
    <>
      <div className='bg-blue-50 overflow-hidden h-screen'>
        <div className='flex flex-row'>
          {/* side bar div */}
          <div className=' md:flex flex-row hidden'>
            <div className='md:block  w-12 w-68 '>
              <SideStrip />
            </div>
            <div className='lg:block hidden w-64 lg:w-296 bg-slate-100 h-full border'>
              <SideBar />
            </div>
          </div>
          {/* main content div */}
          <div className='p-0 flex-auto'>
            <div className=''>
              <NavBar />
            </div>
            <Hero />
            <div>
              <Table />

              <Paggination />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
