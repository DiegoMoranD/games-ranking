import React from 'react'
import { useState, useEffect } from 'react'
import Config from '../Config';
import { Link } from 'react-router-dom';

function Container() {
    const [juegos, setJuegos] = useState();

    useEffect(()=>{
        _getAllJuego()
    },[])

    const _getAllJuego = async()=>{
        const response = await Config.getAllJuego()
        setJuegos(response.data)
    }

    const _deleteJuego = async(id)=>{
        const isDelete = window.confirm("¿Desea Borrar Juego?")
        if (isDelete) {
            await Config.getJuegoDelete(id)
            _getAllJuego()
        }
    }

return (
    <section className='z-10 -mt-20 justify-center flex '>
        <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35'>
            <div className=' text-[#6C727F] font-semibold py-8 flex justify-between'>
                <div className='ml-10'>
                    <p className=''>Juegos contados 56</p>
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
                        <th scope="col">Juego</th>
                        <th scope="col">Descargas</th>
                        <th scope="col">Votacion</th>
                        <th scope="col">Compañia</th>
                        <th scope="col">Genero</th>
                        <th scope="col">-</th>
                        <th scope="col">-</th>
                    </tr>
                </thead>

                <tbody className='text-[#D2D5DA]'>
                {/* <tr className=''>
                        <td scope="" className='pl-8'>Chris</td>
                        <td>Zelda</td>
                        <td>100000</td>
                        <td>9.8</td>
                        <td>Nintendo</td>
                        <td>Aventura</td>
                        <td><button className='bg-blue-500 rounded'>Editar</button></td>
                        <td><button className='bg-red-500 rounded'>Eliminar</button></td>
                    </tr> */}

                    {
                        !juegos ? <h1 className='text-[22px] text-center z-[-1] '>Cargando...</h1> : juegos.map(
                            (juego) =>{
                                return(
                                <tr key={juego.id}>
                                    <td>{juego.logo}</td>
                                    <td>{juego.nombre}</td>                                    
                                    <td>{juego.descargas}</td>                                    
                                    <td>{juego.votacion}</td>                                    
                                    <td>{juego.empresa_id}</td>                                    
                                    <td>{juego.genero}</td>
                                    <td><Link to={`/juegos/edit/${juego.id}`} className='bg-blue-500 rounded p-1'>Editar</Link> </td>
                                    <td><button onClick={()=>_deleteJuego(juego.id)} className='bg-red-500 rounded p-1'>Eliminar</button></td>                                
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

export default Container