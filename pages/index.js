import SideStrip from '../components/SideStrip'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Banner from '../components/banner'
import Table from '../components/Table'
const Pagination = () => {
  return (
    <>
      <div>Paggination</div>
    </>
  )
}
function Home() {
  return (
    <div className='flex flex-row'>
      {/* side bar div */}
      <div className=' flex flex-row'>
        <div className='w-12 md:w-68 bg-slate-50 '>
          <SideStrip />
        </div>
        <div className='w-40 lg:w-296 bg-slate-100'>
          <SideBar />
        </div>
      </div>
      {/* main content div */}
      <div className='p-0 flex-auto'>
        <div className=''>
          <NavBar />
        </div>
        <div className=''>
          <Banner />
        </div>
        <div className=''>
          <Table />
        </div>
        <div className=''>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Home
