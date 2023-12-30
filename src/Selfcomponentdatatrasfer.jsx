import React, { useState } from 'react'

function Selfcomponentdatatrasfer() {
    const [a, b] = useState(false);
  return (
    <div className='w-1/2 h-auto rounded-md bg-zinc-600 p-4 text-white mx-1.5 p-5'>
        {/* This is conditional rendering */}
        <h3 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "Value False" : "Value True"}</h3> 
        <button type='button' className='bg-green-600 rounded-md px-3 py-1 my-2 cursor-pointer w-auto' onClick={()=>b(!a)}>Change</button>
    </div>
  ) 
}

export default Selfcomponentdatatrasfer