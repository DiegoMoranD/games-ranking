import React from 'react'

function SortJuego({ handleSort }) {

    const handleChange = (e) => {
        handleSort(e.target.value);
    };

  return (
<div className='p-8'>
    <p className='text-[14px] font-bold'>Ver por:</p>
    <select onChange={handleChange} name=""  id="" className='bg-[#1B1D1F] border border-[#6C727F] rounded-xl w-[100%] border-opacity-35 p-2 mt-3'>
        <option value="">Todos</option>
        <option value="a-z">De la A-Z</option>
        <option value="z-a">De la Z-A</option>
        <option value="mejor">Mejor valoracion</option>
        <option value="peor">Peor valoracion</option>
        <option value="mayor">Mayor descargas</option>
        <option value="menos">Menos descargas</option>
    </select>
</div>
  )
}

export default SortJuego