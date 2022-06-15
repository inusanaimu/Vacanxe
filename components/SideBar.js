import Image from 'next/dist/client/image'

import Logo from '../public/logo.svg'

function SideBar() {
  const handleClick = (id) => {
    let ele = document.getElementById(id)
    ele.classList.toggle('hidden')
    ele.classList.toggle('block')
  }
  return (
    <div className='bg-white p-4 flex flex-col space-y-4 h-full'>
      <div className=' pl-10  mb-6'>
        {/* <a href='#'>
          <Logo />
        </a> */}
        <Image src={'/Logo.svg'} alt='logo' height={40} width={138} />
      </div>
      <div className=''>
        <div className='mb-6'>
          <a href='#'>
            <div
              className='flex justify-between '
              onClick={() => {
                handleClick('jobOpening')
              }}
            >
              <h3 className='inline'>
                <b>Job opening </b>
              </h3>
              <span className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M19 9l-7 7-7-7' />
                </svg>
              </span>
            </div>
          </a>
          <div className='text-xs w-11/12 pl-2 py-3 hidden ' id='jobOpening'>
            <h3 className=' p-2'>Creating job ads</h3>
            <h3 className=' p-2 rounded bg-slate-800 text-white'>
              Managing current job ads
            </h3>
            <h3 className=' p-2'>Pre-employment assessment</h3>
          </div>
        </div>
        <div className=' mb-6'>
          <a href='#'>
            <div className='flex justify-between'>
              <h3 className='inline'>
                <b>Applicants pipeline </b>
              </h3>
              <span className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M19 9l-7 7-7-7' />
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className='mb-6'>
          <a href='#'>
            <div className='flex justify-between'>
              <h3 className='inline'>
                <b>Applicants Profile </b>
              </h3>
              <span className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M19 9l-7 7-7-7' />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className='pt-40'>
        <div className=' text-center rounded w-full h-auto bg-orange-400 mx-auto text-white text-sm p-3'>
          <div className='text-left'>
            <h2 className='text-sm'>Your plan expires in 7 days</h2>
            <h4 className='text-xs'>
              Extend your plan now to maintain our premium features
            </h4>
          </div>
          <button className=' rounded-md mx-auto w-11/12 bg-cyan-500 text-center px-4 py-2 my-2'>
            Extend your plan
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
