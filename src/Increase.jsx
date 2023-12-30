import React, { useState } from 'react'

function Increase() {
    var [a,b] = useState(69);
  return (
    <div className='w-1/2 h-auto rounded-md bg-zinc-600 p-4 text-white mx-1.5 p-5'>
        <h2>Increase Working {a}</h2>
        {/* <button type='button' onClick={()=>b(70)} className='bg-green-600 rounded-md px-3 py-1 my-2'>Increse Num</button> */}
        <button type='button' onClick={()=>b(a+1)} className='bg-green-600 rounded-md px-3 py-1 my-2'>Increse Num</button>
    </div>
  )
}

export default Increase