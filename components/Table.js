import TableRow from './table_resource/TableRow'

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
              <TableRow valid={true} />
            </tr>
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
              <TableRow valid={false} />
            </tr>
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
              <TableRow valid={true} />
            </tr>
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
              <TableRow valid={false} />
            </tr>
            <tr className='border-b  text-gray-900 bg-white dark:border-slate-200  dark:hover:bg-slate-100'>
              <TableRow valid={false} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
