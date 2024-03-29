import React from 'react'

function Container() {
  return (
    <section className='z-10 -mt-20 justify-center flex '>
        <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35'>
            <div className=' text-[#6C727F] font-semibold py-8 flex justify-between'>
                <div className='ml-10'>
                    <p className=''>Lenguajes contados 56</p>
                </div>
                <div className='mr-10'>
                    <input type="search" name="" placeholder='Buscar' id="" className=' rounded-xl bg-[#282B30] w-[250px] h-[40px] indent-6 content-center'/>
                </div>
            </div>

            <div className='flex text-[#6C727F] w-full'>
                <div className=' w-[300px]'>
                    <div className='p-8'>
                        <p className='text-[14px] font-bold'>Ver por:</p>
                        <select name=""  id="" className='bg-[#1B1D1F] border border-[#6C727F] rounded-xl w-[100%] border-opacity-35 p-2 mt-3'>
                            <option value="">Todos</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className=' p-8 float-left'>
                        <p className='mb-3 text-[14px] font-bold'>Region:</p>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>America</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Africa</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Asia</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Europa</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Oceania</button>
                        <button className='text-[#D2D5DA] p-2 m-1 bg-[#282B30] w-auto h-auto rounded-2xl hover:bg-slate-500 transition-colors duration-300 text-[13px]'>Antartida</button>
                    </div>
                    <div className=' flex-row p-8'>
                        <p className='text-[14px] font-bold'>Estado:</p>
                        <input type="checkbox" name="" id="" /><p>Activo</p> 
                        <input type="checkbox" name="" id="" /><p>Inutil</p>
                    </div>
                </div>

            <div className=' w-[72%] '>
                <table className='w-full'>
                <thead className='text-[13px] font-black border-[#6C727F] border-b-[1px] border-opacity-35'>
                    <tr className=' text-left '>
                        <th scope="col" className='py-4'>Logo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descargas</th>
                        <th scope="col">Compañia</th>
                    </tr>
                </thead>

                <tbody className='text-[#D2D5DA]'>
                    <tr className=''>
                        <td scope="">Chris</td>
                        <td>HTML tables</td>
                        <td>HTML tables</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td scope="row">Chris</td>
                        <td>HTML tables</td>
                        <td>22</td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
    </main>
</section>
    )
}

export default Container