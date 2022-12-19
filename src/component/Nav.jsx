import React from 'react'
import {Link} from 'react-router-dom'
import {Icons} from './icon'

export  const Nav = () => {
  return (
    <Link to='/'>
    <div className='w-full bg-blue-800'>
      <div className='text-stone-300  text-5xl flex justify-center py-5'>
     <span className='mr-2'> <Icons/></span>Crypto app <span className='text-sm mt-5 ml-4'>(--press this)</span>
      </div>
  
      </div>  
    </Link>
  )
}
export default Nav