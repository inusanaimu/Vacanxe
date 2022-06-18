import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Btn = (props) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  if (props.valid) {
    return (
      <div className=''>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-50' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='bg-white rounded-md p-6 h-60 w-120 w-full max-w-md transform overflow-hidden text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-md font-medium leading-6 text-gray-900'
                    >
                      <h3 className='  mb-4 '>
                        Your <b> visa</b> will be charged for{' '}
                        <b> IDR 100,000 </b> for
                        <b> boosting Managment Trainee</b> job ad
                      </h3>
                    </Dialog.Title>
                    <h4 className='mb-2 text-md'>
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
                        onClick={closeModal}
                        className='text-slate-100 text-sm rounded-md mx-auto w-40 bg-cyan-700 text-center px-4 py-2'
                      >
                        Confirm payment
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <a href='#' className=' text-center '>
          <button
            onClick={openModal}
            type='button'
            className='w-36 text-xs font-sans rounded-md bg-slate-300 px-3 py-2 text-gray-600'
          >
            <b>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
              Opening Boosted
            </b>
          </button>
        </a>
      </div>
    )
  } else {
    return (
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-50' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='bg-white rounded-md p-6 h-60 w-120 w-full max-w-md transform overflow-hidden text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-md font-medium leading-6 text-gray-900'
                    >
                      <h3 className='  mb-4 '>
                        Your <b> visa</b> will be charged for{' '}
                        <b> IDR 100,000 </b> for
                        <b> boosting Managment Trainee</b> job ad
                      </h3>
                    </Dialog.Title>
                    <h4 className='mb-2 text-md'>
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
                        onClick={closeModal}
                        className='text-slate-100 text-sm rounded-md mx-auto w-40 bg-cyan-700 text-center px-4 py-2'
                      >
                        Confirm payment
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <a href='#' className=' text-center font-medium '>
          <button
            onClick={openModal}
            type='button'
            className='w-36 text-xs rounded-md px-3 py-2 text-gray-800 bg-orange-300'
          >
            <b>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
              Boost opening
            </b>
          </button>
        </a>
      </div>
    )
  }
}

function Boost(props) {
  return (
    <>
      <div>
        <Btn valid={props.valid} />
      </div>
    </>
  )
}

export default Boost
