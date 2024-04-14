import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM  from 'react-dom/client'

function EmpresasForm() {

return (
<section className='z-10 -mt-20 justify-center flex '>
    <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35 p-10'>
        <div>
            <h2 className=' text-[26px] text-white font-medium pb-6'>Formulario de Empresas</h2>
            <hr className=' opacity-35 pb-6'/>
        </div>
        <div className='flex pb-8 justify-between'>
            <div className='flex flex-col w-[100%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Nombre: </label>
                <input type="text" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white'/>
            </div>
        </div>

        <div className='flex pb-8 justify-between'>
            <div className='flex flex-col w-[100%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Tipo: </label>
                <select name="" id="" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-zinc-100'>
                    <option value="">Seleccione el tipo</option>
                    <option value="">Privada</option>
                    <option value="">Publica</option>
                </select>
            </div>
        </div>

        <div className='flex pb-8 justify-between'>
            <div className='flex flex-col w-[48%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Fundado (Año): </label>
                <input type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white '/>
            </div>
            <div className='flex flex-col w-[48%]'>
                <label htmlFor="" className='text-white font-semibold pb-2'>Empleados: </label>
                <input type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white'/>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col w-[100%]'>
                <label htmlFor="" className=' text-white font-semibold pb-2'>Logo: </label>
                <input type="file" name="" id=""  className=' w-[100%] text-white'/>
            </div>
        </div>
    </main>
</section>
);
}

export default EmpresasForm

