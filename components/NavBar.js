function NavBar() {
  return (
    <div>
      <nav className=' bg-white  w-full px-2 sm:px-4 py-2.5 mx-auto border'>
        <div>
          <div className='container flex flex-wrap justify-between items-center mx-auto'>
            <a href='#' className='flex items-center'>
              <span className='self-center text-xl font-bold whitespace-nowrap text-black'>
                My job ads
              </span>
            </a>
            <div className='flex md:order-2'>
              <div className='relative md:block'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-5 h-5 text-gray-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'></path>
                  </svg>
                </div>
                <input
                  type='text'
                  id='search-navbar'
                  className='block py-2 pl-10 pr-20 w-full bg-gray-50 rounded-md border sm:text-sm   border-gray-200 placeholder-gray-600 text-black'
                  placeholder='Input job title'
                />
              </div>
              <div className='relative px-4'>
                <div className='flex inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <div className='rounded-full bg-slate-50 h-8 w-8'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div className='flex flex-col pl-2'>
                    <strong className=' leading-5 '>
                      <b>John Doe</b>
                    </strong>
                    <div className='text-sm text-gray-400 inline leading-3'>
                      <p>Recruiting Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-full h-6 w-6 mr-4'>
                <div className=' rounded-full bg-orange-400 h-2 w-2'></div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-slate-800'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div className='rounded-full h-6 w-6 mr-4'>
                <div className='rounded-full bg-orange-400 h-2 w-2'></div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='text-slate-400 inline-block text-sm'>
          {' '}
          Jobs and recruiting / Job opening /{' '}
          <a href='#' className='text-cyan-500'>
            Manage current job ad
          </a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
