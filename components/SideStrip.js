import Image from 'next/dist/client/image'

function SideStrip() {
  return (
    <div className='flex flex-col justify-top items-center w-full space-y-3 pt-20 text-slate-200 bg-slate-800 h-screen'>
      <a href='#' alt='home'>
        <div className='rounded-full w-7 h-8 '>
          <Image alt='Icon' src='/homeIcon.svg' width={28} height={32} />
        </div>
      </a>
      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <Image alt='Icon' src='/OfficeIcon.svg' width={28} height={32} />
        </div>
      </a>
      <a href='#'>
        <div className='grid text-center rounded mx-auto bg-slate-200 text-slate-800  w-7 h-8 '>
          <Image alt='Icon' src='/Brief.svg' width={28} height={32} />
        </div>
      </a>

      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <Image alt='Icon' src='/users.svg' width={28} height={32} />
        </div>
      </a>
      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <Image alt='Icon' src='/sect.svg' width={28} height={32} />
        </div>
      </a>
      <a href='#'>
        <div className='rounded-full  w-7 h-8 '>
          <Image alt='Icon' src='/user.svg' width={28} height={32} />
        </div>
      </a>
    </div>
  )
}

export default SideStrip
