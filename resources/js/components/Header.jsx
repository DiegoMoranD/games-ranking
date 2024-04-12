import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' bg-Header-bg h-[290px] bg-cover bg-no-repeat content-center'>
        <div className=' text-white flex justify-center -mt-8'>
            <div className=''>
            <Link to={'/'} className='mr-10 font-semibold hover:text-cyan-400 transition-colors duration-300'>Inicio</Link>
            <Link to={"/empresas"} className='mr-10 font-semibold hover:text-cyan-400 transition-colors duration-300'>Empresas</Link>
            <Link to={"/subir"} className='mr-10 font-semibold hover:text-cyan-400 transition-colors duration-300'>Subir</Link>
            <Link to={"/login"} className='font-semibold hover:text-cyan-400 transition-colors duration-300'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Header