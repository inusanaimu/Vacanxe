import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/solid'

export default function EditModal() {
  return (
    <div className=''>
      <Menu as='div' className=''>
        <div>
          <Menu.Button className='inline-flex '>
            <span>
              <EditIcon />
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-16 mt w-36  rounded-xs bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none'>
            <div className='  text-left  '>
              <Menu.Item>
                {({ active }) => (
                  <h4
                    className={`${
                      active ? 'bg-slate-100 text-slate-600' : 'text-gray-900'
                    } group flex w-full items-center rounded-sm px-3 py-2 text-sm`}
                  >
                    Edit Job opening
                  </h4>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <h4
                    className={`${
                      active ? 'bg-slate-100 text-slate-600' : 'text-gray-900'
                    } group flex w-full items-center rounded-sm px-3 py-2 text-sm`}
                  >
                    Move to inactive
                  </h4>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <h4
                    className={`${
                      active ? 'bg-slate-100 text-slate-500' : 'text-gray-900'
                    } group flex w-full items-center rounded-sm px-3 py-2 text-sm`}
                  >
                    Delete
                  </h4>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EditIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='1.5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
      />
    </svg>
  )
}
