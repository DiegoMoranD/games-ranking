import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' bg-Header-bg h-[290px] bg-cover bg-no-repeat content-center'>
        <div className=' text-white flex justify-center -mt-8'>
            <div className=''>
            <Link className='font-semibold hover:text-cyan-400 transition-colors duration-300'>Inicio</Link>
            <Link className='mx-12 font-semibold hover:text-cyan-400 transition-colors duration-300'>Top play</Link>
            <Link className='font-semibold hover:text-cyan-400 transition-colors duration-300'>Ranking</Link>
            </div>
        </div>
    </div>
  )
}

export default Header