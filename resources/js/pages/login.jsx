import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className=' bg-[#1B1D1F] text-white h-[30vh] flex justify-center items-center'>
        <div>
        <div className=' bg-[#282B30] border border-slate-700 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
            <h1 className=' text-4xl text-white font-bold text-center mb-6'>Iniciar sesion</h1>
            <form action="">
            <div className=' relative my-4'>
                <input type="email" name="" id="" className='block w-[100%] py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                <label htmlFor="" className=' absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                
                <p className=' absolute top-3 right-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </p>
            </div>
            <div className=' relative my-4'>
                <input type="password" name="" id="" className='block w-[100%] py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                <label htmlFor="" className=' absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Contraseña</label>

                <p className=' absolute top-3 right-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="Recordarme">Recordar</label>
                </div>
                <span className=' text-blue-500 hover:text-cyan-400 cursor-pointer'>Olvidaste tu contraseña</span>    
            </div>
                <a href={'/'}>
                    <button type="submit" className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'>Iniciar sesion</button> 
                </a>
            <div>
                <span className='m-4'>No tienes una cuenta? <Link className=' text-blue-500 hover:text-cyan-400 cursor-pointer' to={'/register'}>Craer una cuenta</Link></span>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login