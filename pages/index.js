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
    <div className='column-12'>
      {/* side bar div */}
      <div className='column-4'>
        <div className='column-4'>
          <SideStrip />
        </div>
        <div className='column-8'>
          <SideBar />
        </div>
      </div>
      {/* main content div */}
      <div className='column-8'>
        <div className='column-8'>
          <NavBar />
        </div>
        <div className='column-8'>
          <Banner />
        </div>
        <div className='column-8'>
          <Table />
        </div>
        <div className='column-2'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Home
