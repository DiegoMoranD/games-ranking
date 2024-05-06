import React, { useEffect, useState } from 'react';
import Config from '../Config';
import { useParams } from 'react-router-dom';

function EmpresaUpdate() {
    const { id } = useParams()
    const [empleados, setEmpleados] = useState("");
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [logo, setLogo] = useState("");
    const [ano, setAno] = useState("");

    useEffect(()=>{
        const _getEmpresaUpdate = async()=>{
            Config.getEmpresaId(id)
            .then(({data})=>{
                setEmpleados(data.empleados)
                setNombre(data.nombre)
                setTipo(data.tipo)
                setLogo(data.logo)
                setAno(data.ano)
            })
        };
        _getEmpresaUpdate();
    },[])

    const submitEmpresaUpdate = async(ev)=>{
        ev.preventDefault();
        await Config.getEmpresaUpdate({nombre, tipo, empleados, ano, logo}, id)
    }

    return (
        <form action="" onSubmit={submitEmpresaUpdate}>
        <section className='z-10 -mt-20 justify-center flex '>
            <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35 p-10'>
                <div>
                    <h2 className=' text-[26px] text-white font-medium pb-6'>Formulario de Empresas</h2>
                    <hr className=' opacity-35 pb-6' />
                </div>
                <div className='flex pb-8 justify-between'>
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="" className=' text-white font-semibold pb-2'>Nombre: </label>
                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} required type="text" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white' />
                    </div>
                </div>

                <div className='flex pb-8 justify-between'>
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="" className=' text-white font-semibold pb-2'>Tipo: </label>
                        <input value={tipo} onChange={(e) => setTipo(e.target.value)} required type="text" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white' />
                    </div>
                </div>

                <div className='flex pb-8 justify-between'>
                    <div className='flex flex-col w-[48%]'>
                        <label htmlFor="" className=' text-white font-semibold pb-2'>Fundado (Año): </label>
                        <input value={ano} onChange={(e) => setAno(e.target.value)} required type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white ' />
                    </div>
                    <div className='flex flex-col w-[48%]'>
                        <label htmlFor="" className='text-white font-semibold pb-2'>Empleados: </label>
                        <input value={empleados} onChange={(e) => setEmpleados(e.target.value)} required type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white' />
                    </div>
                </div>

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

export default EmpresaUpdate;
