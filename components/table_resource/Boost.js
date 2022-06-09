const Btn = (props) => {
  // const [boosted, setboosted] = useState(false);

  if (props.valid) {
    return (
      <div>
        <button
          type='button'
          className='w-32 text-xs rounded-md bg-slate-300 px-3 py-2 text-gray-600'
        >
          <b>Opening Boosted</b>
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <button
          type='button'
          className='w-32 text-xs rounded-md px-3 py-2 text-gray-800 bg-orange-300'
        >
          <b>Boost opening</b>
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
