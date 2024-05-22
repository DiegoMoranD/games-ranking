import React, { useState, useEffect } from "react";
import Config from "../Config";
import { Link } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";

import FilterButtons from "../filters/filtersEmpresa/FilterEmpresa";
import SortSelect from "../filters/filtersEmpresa/SortEmpresa";
import SearchInput from "../filters/filtersEmpresa/SearchEmpresa";

function Empresas() {
    const { getToken } = AuthUser();

    const [empresas, setEmpresas] = useState([]);
    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAllEmpresa();
    }, []);

    const getAllEmpresa = async () => {
        const response = await Config.getAllEmpresa();
        setEmpresas(response.data);
    };

    const _deleteEmpresa = async (id) => {
        const isDelete = window.confirm("¿Desea Borrar Juego?");
        if (isDelete) {
            await Config.getEmpresaDelete(id);
            getAllEmpresa();
        }
    };

    const handleFilter = (filter) => {
        setFilter(filter);
    };

    const handleSort = (sortOption) => {
        setSortBy(sortOption);
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

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

    // ! _____________________________ renderLinks _____________________________

    const renderLinks = (empresa) => {
        if (getToken()) {
            return (
                <>
                    <td className="pb-4">
                        <Link
                            to={`/empresas/edit/${empresa.id}`}
                            className="bg-blue-500 rounded p-[6.5px] mr-5"
                        >
                            Editar
                        </Link>
                    </td>
                    <td className="pb-4">
                        <button
                            onClick={() => _deleteEmpresa(empresa.id)}
                            className="bg-red-500 rounded p-[5px]"
                        >
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

    return (
        <section className="z-10 -mt-20 justify-center flex">
            <main className="rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35">
                <div className="text-[#6C727F] font-semibold py-8 flex justify-between">
                    <div className="ml-10">
                        <p className="">
                            Empresas contadas {empresas.length}
                        </p>
                    </div>
                    <SearchInput handleSearch={handleSearch} />
                </div>

                <div className="flex text-[#6C727F] w-full">
                    <div className="w-[300px]">
                        <SortSelect handleSort={handleSort} />
                        <FilterButtons filterCallback={handleFilter} />
                    </div>

                    <div className="w-[72%]">
                        <table className="w-full mt-3">
                            <thead className="text-[13px] font-black border-[#6C727F] border-b-[1px] border-opacity-35">
                                <tr className="text-left">
                                    <th scope="col" className="py-4 pl-8">
                                        Logo
                                    </th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Fundado</th>
                                    <th scope="col">Empleados</th>
                                    {renderTable()}
                                </tr>
                            </thead>

                            <tbody className="text-[#D2D5DA] font-medium">
                                {!empresas ? (
                                    <tr>
                                        <td colSpan="6">Cargando...</td>
                                    </tr>
                                ) : (
                                    empresas
                                        .filter((empresa) => {
                                            if (!filter) return true;
                                            return empresa.tipo === filter;
                                        })
                                        .filter((empresa) => {
                                            if (!search) return true;
                                            return empresa.nombre
                                                .toLowerCase()
                                                .includes(search);
                                        })
                                        .sort((a, b) => {
                                            if (sortBy === "mayor") {
                                                return b.empleados - a.empleados;
                                            } else if (sortBy === "menor") {
                                                return a.empleados - b.empleados;
                                            } else if (sortBy === "antiguas") {
                                                return a.ano - b.ano;
                                            } else if (sortBy === "recientes") {
                                                return b.ano - a.ano;
                                            } else if (sortBy === "a-z") {
                                                return a.nombre.localeCompare(b.nombre);
                                            } else if (sortBy === "z-a") {
                                                return b.nombre.localeCompare(a.nombre);
                                            }
                                            return 0;
                                        })
                                        .map((empresa) => (
                                            <tr key={empresa.id} className="pb-4">
                                                <td className="pb-4 flex justify-center">
                                                    <img src={`/storage/${empresa.logo} `} alt="" className="w-20 m-2 rounded-xl justify-start"/>
                                                </td>
                                                <td className="pb-4">
                                                    {empresa.nombre}
                                                </td>
                                                <td className="pb-4">{empresa.tipo}</td>
                                                <td className="pb-4">{empresa.ano}</td>
                                                <td className="pb-4">
                                                    {empresa.empleados}
                                                </td>
                                                <td className="pb-4">{renderLinks(empresa)}</td>
                                            </tr>
                                        ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Empresas;
