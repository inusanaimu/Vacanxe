import Boost from './Boost'

function Table() {
  return (
    <div>
      <div className='w-11/12 mt-16 mx-auto overflow-x-auto '>
        <table className='w-full text-sm border text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-sm text-gray-700 capitalize bg-gray-50 dark:bg-gray-900 dark:text-gray-100'>
            <tr>
              <th scope='col' className='p-1'>
                <div className='flex items-center p-3 border-r-2'>
                  {/* <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label className='sr-only'>checkbox</label> */}
                </div>
              </th>
              <th scope='col' className='py-1'>
                <div className='px-6 py-2 border-r'>Position name</div>
              </th>
              <th scope='col' className='py-1'>
                <div className='px-6 py-2 border-r'>Employment</div>
              </th>
              <th scope='col' className='py-1'>
                <div className='px-6 py-2 border-r'>Date closed</div>
              </th>
              <th scope='col' className='py-1'>
                <div className='px-6 py-2 border-r'>Application</div>
              </th>
              <th scope='col' className='py-1'>
                <div className='px-6 py-2 border-r'>Boost job</div>
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
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
              <th
                scope='row'
                className='px py-1 font-medium  whitespace-nowrap'
              >
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
                    <Boost valid={true} />
                  </a>
                </div>
              </td>
              <td className='px py-4 text-center'>
                {' '}
                <a href='#' className=' text-center font-medium '>
                  . . .
                </a>
              </td>
            </tr>
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
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
              <th
                scope='row'
                className='px py-1 font-medium  whitespace-nowrap'
              >
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
                    <Boost />
                  </a>
                </div>
              </td>
              <td className='px-6 py-4 text-center'>
                <a href='#' className=' text-center font-medium '>
                  . . .
                </a>
              </td>
            </tr>{' '}
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
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
              <th
                scope='row'
                className='px py-1 font-medium  whitespace-nowrap'
              >
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
                    <Boost valid={true} />
                  </a>
                </div>
              </td>{' '}
              <td className='px-6 py-4 text-center'>
                <a href='#' className=' text-center font-medium '>
                  . . .
                </a>
              </td>
            </tr>{' '}
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
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
              <th
                scope='row'
                className='px py-1 font-medium  whitespace-nowrap'
              >
                <div className='py-3 border-r-2'>Digital Marketing </div>
              </th>
              <td className='px py-1 '>
                <div className='border-r-2 py-2 '> Contract</div>
              </td>
              <td className='px py-1'>
                <div className='border-r-2 py-2 '> 30 June 2022</div>
              </td>{' '}
              <td className='px py-1'>
                <div className='border-r-2 py-2 '> 103</div>
              </td>
              <td className='px py-1 text-right'>
                <div className='border-r-2 py-2 '>
                  <a href='#' className=' text-center font-medium '>
                    <Boost />
                  </a>
                </div>
              </td>{' '}
              <td className='px-6 py-4 text-center'>
                <a href='#' className=' text-center font-medium '>
                  . . .
                </a>
              </td>
            </tr>
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
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
              <th
                scope='row'
                className='px py-1 font-medium  whitespace-nowrap'
              >
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
                    <Boost />
                  </a>
                </div>
              </td>
              <td className='px-6 py-4 text-center'>
                <a href='#' className=' text-center font-medium '>
                  . . .
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
