function BoostModal() {
  const handleClick = () => {
    const modal = document.getElementById('modal')
    modal.classList.remove('flex')
    modal.classList.add('hidden')
  }

  return (
    <>
      <div className='bg-black bg-opacity-50 absolute right-0 left-72 top-36 bottom-0 flex justify-center items-center z-10 '>
        <div className='bg-white rounded-md p-6 h-60 w-120'>
          <div className='mb-6 text-left'>
            <h3 className='  mb-4 '>
              Your <b> visa</b> will be charged for <b> IDR 100,000 </b> for
              <b>
                {' '}
                boosting <br /> Managment Trainee
              </b>{' '}
              job ad
            </h3>
            <h4 className='mb-2'>
              To confirm your payment, please input your password
            </h4>
            <div className='my-4'>
              <input
                type='password'
                placeholder='Input your password'
                className='block py-3 pl-2 pr-20 w-full text-gray-900 bg-gray-50 rounded border border-gray-500 text-sm placeholder-gray-600'
              />
            </div>
            <div className='w-full text-right'>
              <button
                onClick={() => {
                  handleClick()
                }}
                className='text-slate-100 text-sm rounded-md mx-auto w-40 bg-cyan-700 text-center px-4 py-2'
              >
                Confirm payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoostModal
