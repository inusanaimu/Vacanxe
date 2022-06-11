function Hero() {
  return (
    <div className='grid grid-cols-2 border pb-0 pt-2 px-10 bg-white'>
      <div className='pb-0 mb-0 relative'>
        <ul className=' text-sm absolute bottom-0'>
          <li className='px-2 border-b-4 pb-0 mb-0 border-gray-800 inline-block'>
            <a href='#' className='pb-0 mb-0'>
              Active
              <sup className='ml-1'>
                <span className='inline-flex items-center p-1 text-sm font-semibold rounded-full dark:bg-cyan-500 text-white'>
                  <svg
                    className='w-3 h-3'
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
                    className='w-3 h-3'
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
                <span className='inline-flex items-center p-1 text-sm font-semibold bg-gray-100 rounded-full dark:bg-gray-700 text-white'>
                  <svg
                    className='w-3 h-3'
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
        <button className='text-slate-100 text-sm rounded-md mx-auto w-44 bg-cyan-600 text-center px-4 py-2'>
          Create job ad
        </button>
      </div>
    </div>
  )
}

export default Hero

// function Hero() {
//   return (
//     <>
//       <div className=''>
//         <div className='pb-0 w-full  pt-6 '>
//           <div className=' float-left px-6'>
//             <ul className='flex flex-row gap-4 text-sm'>
//               <li className='px-2 border-b-4 border-gray-800'>
//                 <a href='#'>
//                   Active
//                   <sup className='ml-1'>
//                     <span className='inline-flex items-center p-1 text-sm font-semibold rounded-full dark:bg-blue-400 text-white'>
//                       <svg
//                         className='w-3 h-3'
//                         fill='currentColor'
//                         viewBox='0 0 20 20'
//                         xmlns='http://www.w3.org/2000/svg'
//                       >
//                         <path
//                           fillRule='evenodd'
//                           d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//                           clipRule='evenodd'
//                         ></path>
//                       </svg>
//                     </span>
//                   </sup>
//                 </a>
//               </li>
//               <li className='px-2'>
//                 <a href='#'>
//                   Inactive
//                   <sup className='ml-1'>
//                     <span className='inline-flex items-center p-1 text-sm font-semibold rounded-full bg-orange-300 text-white'>
//                       <svg
//                         className='w-3 h-3'
//                         fill='currentColor'
//                         viewBox='0 0 20 20'
//                         xmlns='http://www.w3.org/2000/svg'
//                       >
//                         <path
//                           fillRule='evenodd'
//                           d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//                           clipRule='evenodd'
//                         ></path>
//                       </svg>
//                     </span>
//                   </sup>
//                 </a>
//               </li>
//               <li className='px-2'>
//                 <a href='#'>
//                   Draft{' '}
//                   <sup className='ml-1'>
//                     <span className='inline-flex items-center p-1 text-sm font-semibold bg-gray-100 rounded-full dark:bg-gray-700 text-white'>
//                       <svg
//                         className='w-3 h-3'
//                         fill='currentColor'
//                         viewBox='0 0 20 20'
//                         xmlns='http://www.w3.org/2000/svg'
//                       >
//                         <path
//                           fillRule='evenodd'
//                           d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//                           clipRule='evenodd'
//                         ></path>
//                       </svg>
//                     </span>
//                   </sup>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <div className='w-40 float-right mr-10 '>
//               <button className='text-white text-sm rounded-sm mx-auto w-full bg-blue-500 text-center px-4 py-2 my-2'>
//                 Create job ads
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Hero
