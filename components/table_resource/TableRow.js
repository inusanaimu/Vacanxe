import Boost from './Boost'
import CheckBox from './CheckBox'
import EditModal from './modals/EditModal'

function TableRow(prop) {
  const props = prop.item
  console.log(props)
  return (
    <>
      <td className='w-4 p-1'>
        <div className='flex items-center p-3 border-r-2'>
          <CheckBox />
        </div>
      </td>
      <th scope='row' className='px py-1 font-medium  whitespace-nowrap'>
        <div className='py-3 border-r-2'>{props.positionName} </div>
      </th>
      <td className='px py-1 '>
        <div className='border-r-2 py-3 pl-1 '> {props.employment}</div>
      </td>
      <td className='px py-1'>
        <div className='border-r-2 py-3 pl-1'> {props.dateClosed}</div>
      </td>
      <td className='px py-1'>
        <div className='border-r-2 py-3 pl-1 '> {props.applicants} </div>
      </td>
      <td className='px py-1 text-right'>
        <div className=' text-center border-r-2 py-2 '>
          <Boost valid={props.boost} />
        </div>{' '}
      </td>
      <td className='px py-3 text-center'>
        <a href='#' className=' text-center font-medium '>
          <EditModal />
        </a>
      </td>
    </>
  )
}

export default TableRow
