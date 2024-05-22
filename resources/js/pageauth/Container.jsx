import React from 'react'
import { useState, useEffect } from 'react'
import Config from '../Config';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';
import AuthUser from './AuthUser';

import FilterButtons from '../filters/filtersJuego/FilterJuego';
import SearchJuego from '../filters/filtersJuego/SearchJuego';
import SortJuego from '../filters/filtersJuego/SortJuego';

function Container() {
    
    const [juegos, setJuegos] = useState([]);
    const { getToken } = AuthUser();
    const [nombreEmpresa, setNombreEmpresa] = useState("");

    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [search, setSearch] = useState("");


    useEffect(()=>{
        _getAllJuego()
    },[])

    const _getAllJuego = async () => {
        try {
            const response = await Config.getAllJuego();
            const juegosWithEmpresaName = await Promise.all(response.data.map(async juego => {
                const empresaResponse = await Config.getEmpresaId(juego.empresa_id);
                return {
                    ...juego,
                    empresa_nombre: empresaResponse.data.nombre
                };
            }));
            setJuegos(juegosWithEmpresaName);
        } catch (error) {
            console.error('Error fetching juegos:', error);
        }
    };
    

    const _deleteJuego = async(id)=>{
        const isDelete = window.confirm("¿Desea Borrar Juego?")
        if (isDelete) {
            await Config.getJuegoDelete(id)
            _getAllJuego()
        }
    }

    const handleFilter = (filter) => {
        setFilter(filter);
    };

    const handleSort = (sortOption) => {
        setSortBy(sortOption);
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    // ! _____________________________ renderLinks _____________________________

    const renderLinks = (juego) => {
        if (getToken()) {
            return (
                <>
                    <td className="pb-4">
                        <Link
                            to={`/juegos/edit/${juego.id}`}
                            className="bg-blue-500 rounded p-[6.5px] mr-5"
                        >
                            Editar
                        </Link>
                    </td>
                    <td className="pb-4">
                        <button
                            onClick={() => _deleteJuego(juego.id)}
                            className="bg-red-500 rounded p-[5px]">
                            Eliminar
                        </button>
                    </td>
                </>
            );
        } else {
            return null;
        }
    };

    // ! _____________________________ renderLinks _____________________________


    // ? _____________________________ renderTable _____________________________

    const renderTable = () => {
        if (getToken()) {
            return (
                <>
                <th scope="col">Acciones</th>
                </>
            );
        } else {
            return null;
        }
    };

    // ? _____________________________ renderTable _____________________________

return (
    <section className='z-10 -mt-20 justify-center flex '>
        <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35'>
            <div className=' text-[#6C727F] font-semibold py-8 flex justify-between'>
                <div className='ml-10'>
                    <p className=''>Juegos contados {juegos.length}</p>
                </div>
                <SearchJuego handleSearch={handleSearch}/>
            </div>

            <div className='flex text-[#6C727F] w-full '>
                <div className=' w-[300px] '>
                    
                    <SortJuego handleSort={handleSort}/>
                    <FilterButtons filterCallback={handleFilter}/>
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
                        <th scope="col">{renderTable()}</th>
                        
                    </tr>
                </thead>

                <tbody className='text-[#D2D5DA]'>
                    {!juegos ? (
                        <tr>
                            <td colSpan="6">Cargando</td>
                        </tr>
                    ) : (juegos
                            .filter((juego) => {
                                if (!filter) return true;
                                return juego.genero === filter; 
                            })
                            .filter((juego) => {
                                if (!search) return true;
                                return juego.nombre
                                    .toLowerCase()
                                    .includes(search);
                            })
                            .sort((a, b) => {
                                if (sortBy === "a-z"){
                                    return a.nombre.localeCompare(b.nombre);
                                } else if (sortBy === "z-a"){
                                    return b.nombre.localeCompare(a.nombre);
                                } else if (sortBy === "mejor"){
                                    return a.votacion - b.votacion;
                                } else if (sortBy === "peor"){
                                    return b.votacion - a.votacion;
                                } else if (sortBy === "mayor"){
                                    return a.descargas - b.descargas;
                                } else if (sortBy === "menor"){
                                    return b.descargas - a.descargas;
                                } 
                            })
                            .map((juego) => (
                                <tr key={juego.id}>
                                    <td className='pb-1 flex justify-center'><img src={`/storage/${juego.logo}`} alt=""  className="w-16 m-2 rounded-xl justify-start"/></td>
                                    <td>{juego.nombre}</td>                                    
                                    <td>{juego.descargas}</td>                                    
                                    <td>{juego.votacion}</td>                                    
                                    <td>{juego.empresa_nombre}</td>                                 
                                    <td>{juego.genero}</td>
                                    <td>{renderLinks(juego)}</td>                        
                                </tr>
                    ))
                    )}

                </tbody>
                </table>
            </div>

        </div>
    </main>
</section>
    )
}

export default Container