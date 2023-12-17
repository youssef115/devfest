import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' absolute top-0 left-0 w-screen h-20  z-10 bg-white shadow-md  flex justify-around'>
      <img src={logo} alt=""/>
      <div className='flex gap-2 text-2xl  items-center cursor-pointer'>
          <Link to="/" className='hover:text-red-400'>Home</Link>
          <Link to="/new" className='hover:text-red-400'>News</Link>
      </div>
      <div className='flex gap-2 items-center'>
        <Link to="/login" className='text-xl '>login</Link>
        <Link to="/register" className='text-xl rounded-2xl p-2 h-12 bg-red-500 text-white'><span className='mb-2'>Register</span></Link>
      </div>

    </div>
  )
}

export default Header