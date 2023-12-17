import React from 'react'
import Awarness from '../components/Awarness/Awarness'

function Home() {
  return (
    <div>
      <div className='mt-80 flex flex-col items-center'>
      <h1 className='text-4xl text-red-500 font-bold'>Know the truth of Palestine</h1>
      <Awarness/>
      </div>
    </div>
  )
}

export default Home