import React from 'react'
import { useState, useEffect } from 'react'
import Config from '../Config';
import { Link } from 'react-router-dom';

function Empresas() {

    const [empresas, setEmpresas] = useState();

    useEffect(()=>{
        getAllEmpresa()
    },[])

    const getAllEmpresa = async()=>{
        const response = await Config.getAllEmpresa()
        setEmpresas(response.data)
    }

    const _deleteEmpresa = async(id)=>{
        const isDelete = window.confirm("¿Desea Borrar Juego?")
        if (isDelete) {
            await Config.getEmpresaDelete(id)
            getAllEmpresa()
        }
    }

  return (
    <section className='z-10 -mt-20 justify-center flex '>
        <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35'>
            <div className=' text-[#6C727F] font-semibold py-8 flex justify-between'>
                <div className='ml-10'>
                    <p className=''>Empresas contadas 56</p>
                </div>
                <div className='mr-10'>
                    <input type="search" name="" placeholder='Buscar' id="" className=' rounded-xl bg-[#282B30] w-[250px] h-[40px] indent-6 content-center'/>
                </div>
            </div>

            <div className='flex text-[#6C727F] w-full '>
                <div className=' w-[300px] '>
                    <div className='p-8'>
                        <p className='text-[14px] font-bold'>Ver por:</p>
                        <select name=""  id="" className='bg-[#1B1D1F] border border-[#6C727F] rounded-xl w-[100%] border-opacity-35 p-2 mt-3'>
                            <option value="">Todos</option>
                            <option value="">Mejor valoracion</option>
                            <option value="">Peor valoracion</option>
                        </select>
                    </div>
                    <div className=' p-8 float-left'>
                        <p className='mb-3 text-[14px] font-bold'>Genero:</p>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>FPS</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Aventura</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Peleas</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Supervivencia</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Indie</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Dificil</button>
                    </div>
                </div>

    {/* // ! ------------------- Tabla  ------------------- */}

            <div className=' w-[72%] '>
                <table className='w-full mt-3'>
                <thead className='text-[13px] font-black border-[#6C727F] border-b-[1px] border-opacity-35'>
                    <tr className=' text-left '>
                        <th scope="col" className='py-4 pl-8'>Logo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Fundado</th>
                        <th scope="col">Empleados</th>
                    </tr>
                </thead>

                <tbody className='text-[#D2D5DA]'>
                    
                {
                        !empresas ? "<h1>Cargando...</h1>" : empresas.map(
                            (empresa) =>{
                                return(
                                <tr key={empresa.id}>
                                    <td>{empresa.logo}</td>
                                    <td>{empresa.nombre}</td>                                    
                                    <td>{empresa.tipo}</td>                                    
                                    <td>{empresa.ano}</td>                                    
                                    <td>{empresa.empleados}</td>                                    
                                    <td><Link to={`/empresas/edit/${empresa.id}`} className='bg-blue-500 rounded p-1'>Editar</Link></td>
                                    <td><button onClick={()=>_deleteEmpresa(empresa.id)} className='bg-red-500 rounded p-1'>Eliminar</button></td>                                
                                </tr>
                                )
                            }
                        )
                    }

                </tbody>
                </table>
            </div>

        </div>
    </main>
</section>
  )
}

export default Empresas