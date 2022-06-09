import Boost from './Boost'

function TableRow(props) {
  return (
    <>
      <td className='w-4 p-1'>
        <div className='flex items-center p-3 border-r-2'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label className='sr-only'>checkbox</label>
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
        <div className='border-r-2 py-2 '>
          <a href='#' className=' text-center font-medium '>
            <Boost valid={props.valid} />
          </a>
        </div>
      </td>
      <td className='px py-4 text-center'>
        <a href='#' className=' text-center font-medium '>
          . . .
        </a>
      </td>
    </>
  )
}

export default TableRow
