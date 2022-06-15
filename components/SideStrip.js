import Image from 'next/dist/client/image'

import Home from '../public/HomeIcon.svg'

function SideStrip() {
  return (
    <div className='flex flex-col justify-top items-center w-full space-y-3 pt-20 text-slate-200 bg-slate-800 h-screen'>
      <a href='#' alt='home'>
        <div className='rounded-full w-7 h-8 '>
          <img src='/homeIcon.svg' className='h-[32px] w-[28px]' />
        </div>
      </a>
      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <img src='/OfficeIcon.svg' className='h-[32px] w-[28px]' />
        </div>
      </a>
      <a href='#'>
        <div className='grid text-center rounded mx-auto bg-slate-200 text-slate-800  w-7 h-8 '>
          <img src='/Brief.svg' className='h-[32px] w-[28px]' />
        </div>
      </a>

      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <img src='/users.svg' className='h-[32px] w-[28px]' />
        </div>
      </a>
      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <img src='/sect.svg' className='h-[32px] w-[28px]' />
        </div>
      </a>
      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <img src='/user.svg' className='h-[32px] w-[28px]' />
        </div>
      </a>
    </div>
  )
}

export default SideStrip
