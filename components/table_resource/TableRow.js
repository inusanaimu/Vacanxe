import Boost from './Boost'
import CheckBox from './CheckBox'

function TableRow(props) {
  return (
    <>
      <td className='w-4 p-1'>
        <div className='flex items-center p-3 border-r-2'>
          <CheckBox />
        </div>
      </td>
      <th scope='row' className='px py-1 font-medium  whitespace-nowrap'>
        <div className='py-3 border-r-2'>Digital Marketing </div>
      </th>
      <td className='px py-1 '>
        <div className='border-r-2 py-2 '> Contract</div>
      </td>
      <td className='px py-1'>
        <div className='border-r-2 py-2 '> 30 June 2022</div>
      </td>
      <td className='px py-1'>
        <div className='border-r-2 py-2 '> 103</div>
      </td>
      <td className='px py-1 text-right'>
        <div className=' text-center border-r-2 py-2 '>
          <Boost valid={props.valid} />
        </div>{' '}
      </td>
      <td className='px py-4 text-center'>
        <a href='#' className=' text-center font-medium '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
            />
          </svg>
        </a>
      </td>
    </>
  )
}

export default TableRow
