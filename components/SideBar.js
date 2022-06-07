import logo from '../image/logo.svg'

function SideBar() {
  return (
    <div className=' bg-gray-100 p-4 flex flex-col space-y-4'>
      <div className='w-full h-10 text-center bg-green-400 mx-auto mb-4'>
        <h1>logo</h1>
      </div>
      <div className='bg-red-200 h-64'>
        <div>
          <h1>Job opening</h1> <span></span>
        </div>
        <div></div>
      </div>
      <div className='bg-red-200 h-64'></div>
    </div>
  )
}

export default SideBar
