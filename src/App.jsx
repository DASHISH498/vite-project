import React from 'react'
import Products from './products'
import Increase from './Increase'
import Valuepass from './Valuepass'
import Selfcomponentdatatrasfer from './Selfcomponentdatatrasfer'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-4'>
      <div className='bg-zinc-900 p-4 flex w-full'>
        <div className='w-1/2 h-32 rounded-md bg-red-600 p-4 text-white mx-1.5'>
          <h3>Hello How are you guys !!!!</h3>
        </div>
        <Products/>
      </div>
      <div className='bg-zinc-900 p-4 flex w-full'>
        <Increase/>
        <Valuepass age="25" data={{age: 27, name: "Ashish"}}/>
      </div>
      <div className='bg-zinc-900 p-4 flex w-full'>
        <Selfcomponentdatatrasfer/>
      </div>
    </div>
  )
}

export default App