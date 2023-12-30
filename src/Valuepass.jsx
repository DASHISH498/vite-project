import React from 'react'

function Valuepass({age, data}) {
  return (
    <div className='w-1/2 h-auto text-white mx-1.5 p-5'>
        <h1>{age}</h1>
        <h1>{data.age}</h1>
        <h1>{data.name}</h1>
    </div>
  )
}

export default Valuepass