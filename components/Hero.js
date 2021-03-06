function Hero() {
  return (
    <div className='grid grid-cols-2 border pb-0 pt-2 md:px-10 px-2 bg-white'>
      <div className='pb-0 mb-0 relative'>
        <ul className=' md:text-sm text-xs absolute bottom-0'>
          <li className='mr-2  border-b-4 pb-0 mb-0 border-gray-800 inline-block'>
            <a href='#' className=' mb-0 p-0'>
              Active
              <sup className='ml-1'>
                <span className='inline-flex items-center p-1 text-sm font-semibold rounded-full bg-cyan-500 text-white'>
                  <svg
                    className='md:w-3 md:h-3 w-2 h-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
              </sup>
            </a>
          </li>
          <li className='pb-0 mb-0 px-2 inline-block'>
            <a href='#' className='pb-0 mb-0'>
              Inactive
              <sup className='ml-1'>
                <span className='inline-flex items-center p-1 text-sm font-semibold rounded-full bg-orange-300 text-white'>
                  <svg
                    className='md:w-3 md:h-3 w-2 h-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
              </sup>
            </a>
          </li>
          <li className=' pb-0 mb-0 px-2 inline-block'>
            <a href='#' className='pb-0 mb-0'>
              Draft
              <sup className='ml-1'>
                <span className='inline-flex items-center p-1 text-sm font-semibold  rounded-full bg-gray-700 text-white'>
                  <svg
                    className='md:w-3 md:h-3 w-2 h-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
              </sup>
            </a>
          </li>
        </ul>
      </div>
      <div className='text-right py-2 px-2'>
        <button className='text-slate-100 md:text-sm text-xs rounded-md mx-auto md:w-44 bg-cyan-600 text-center md:px-4 p-2'>
          Create job ad
        </button>
      </div>
    </div>
  )
}

export default Hero
