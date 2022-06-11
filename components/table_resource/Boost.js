const Btn = (props) => {
  // const [boosted, setboosted] = useState(false);

  if (props.valid) {
    return (
      <div>
        <button
          type='button'
          className='w-36 text-xs rounded-md bg-slate-300 px-3 py-2 text-gray-600'
        >
          <b>
            {' '}
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
      </div>
    )
  } else {
    return (
      <div>
        <button
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
