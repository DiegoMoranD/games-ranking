import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM  from 'react-dom/client'
import Config from '../../Config';

function JuegosForm() {
    // ? ______________________________________________________________

    

    // ? ______________________________________________________________

    const [descargas, setDescargas] = useState("");
    const [votacion, setVotacion] = useState("");
    const [empresa_id, setEmpresa] = useState("");
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [logo, setLogo] = useState("");

    const submitJuego = async(e)=>{
        e.preventDefault();
        await Config.getJuegoStore({logo, nombre, votacion, descargas, empresa_id, genero})
    }

return (
<form action="" onSubmit={submitJuego}>
<section className='z-10 -mt-20 justify-center flex '>
    <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35 p-10'>
        <div>
            <h2 className=' text-[26px] text-white font-medium pb-6'>Formulario de Juegos</h2>
            <hr className=' opacity-35 pb-6'/>
        </div>
        <div className='flex pb-8 justify-between'>
            <div className='flex flex-col w-[48%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Nombre: </label>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white'/>
            </div>
            <div className='flex flex-col w-[48%]'>
                <label htmlFor="" className='text-white font-semibold pb-2'>Genero: </label>
                <select value={genero} onChange={(e) => setGenero(e.target.value)} name="" id="" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-zinc-100'>
                    <option value="">Seleccione el genero</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Terror">Terror</option>
                    <option value="Accion">Accion</option>
                    <option value="Disparos">Disparos</option>
                    <option value="Supervivencia">Supervivencia</option>
                    <option value="Peleas">Peleas</option>
                </select>
                {/* <input value={genero} onChange={(e) => setGenero(e.target.value)} type="text" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white'/> */}
            </div>
        </div>

        <div className='flex pb-8 justify-between'>
            <div className='flex flex-col w-[48%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Votacion: </label>
                <input value={votacion} onChange={(e) => setVotacion(e.target.value)} type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white '/>
            </div>
            <div className='flex flex-col w-[48%]'>
                <label htmlFor="" className='text-white font-semibold pb-2'>Descargas: </label>
                <input value={descargas} onChange={(e) => setDescargas(e.target.value)} type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white'/>
            </div>
        </div>

        <div className='flex pb-8 justify-between'>
            {/* <div className='flex flex-col w-[100%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Empresa: </label>
                <select name="" id="" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-zinc-100'>
                    <option value="">Seleccione la empresa_id</option>
                    <option value="">Nintendo</option>
                    <option value="">Xbox</option>
                    <option value="">PlayStation</option>
                </select>
            </div> */}

            <div className='flex flex-col w-[100%]'>
                <label htmlFor="" className='text-white font-semibold pb-2'>Empresa: </label>
                <input value={empresa_id} onChange={(e) => setEmpresa(e.target.value)} type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white'/>
            </div>
        </div>

        {/* <div className='flex justify-between'>
            <div value={logo} onChange={(e) => setLogo(e.target.value)} className='flex flex-col w-[100%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Logo: </label>
                <input type="file" name="" id=""  className=' w-[100%] text-white'/>
            </div>
        </div> */}

        <div className='flex pb-8 justify-between'>
            <div className='flex flex-col w-[100%]'>
                <label htmlFor="" className='text-white font-semibold pb-2'>Logo: </label>
                <input value={logo} onChange={(e) => setLogo(e.target.value)} required type="text" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white' />
            </div>
        </div>

        <div className='flex justify-between'>
            <button type='submit' className=' w-full text-white font-medium bg-blue-500 h-10 rounded-md hover:bg-blue-400 transition-colors duration-300'>Subir</button>
        </div>
    </main>
</section>
</form>
);
}

export default JuegosForm

