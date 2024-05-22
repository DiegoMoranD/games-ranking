import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Config from "../Config";
import Modal from "../components/Modal";

function JuegoUpdate() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [redirectPath, setRedirectPath] = useState("");

    const openModal = (title, path) => {
        setModalTitle(title);
        setRedirectPath(path);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { id } = useParams();
    const [descargas, setDescargas] = useState("");
    const [empresa_id, setEmpresa] = useState("");
    const [votacion, setVotacion] = useState("");
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [logo, setLogo] = useState("");
    const [empresas, setEmpresaName] = useState([]);

    useEffect(() => {
        const _getJuegoUpdate = async () => {
            Config.getJuegoId(id).then(({ data }) => {
                setDescargas(data.descargas);
                setEmpresa(data.empresa_id);
                setVotacion(data.votacion);
                setGenero(data.genero);
                setNombre(data.nombre);
                setLogo(data.logo);
            });
        };
        _getJuegoUpdate();

        const fetchEmpresa = async () => {
            try {
                const response = await Config.getAllEmpresa();
                setEmpresaName(response.data);
            } catch (error) {
                console.error("Error encontrado", error);
            }
        };
        fetchEmpresa();
    }, [id]);

    const handleLogoChange = (ev) => {
        setLogo(ev.target.files[logo]);
    };

    const submitUpdate = async (ev) => {
        ev.preventDefault();
        try {
            const response = await Config.getJuegoUpdate({ logo, nombre, votacion, descargas, genero,empresa_id }, id);
            if (response.status === 200) {
                openModal(`Registro #${id} Actualizado`, "/juegos");
            } else {
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    return (
        <form action="" onSubmit={submitUpdate}>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalTitle}
                redirectPath={redirectPath}
            />
            <section className="z-10 -mt-20 justify-center flex ">
                <main className=" rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35 p-10">
                    <div>
                        <h2 className=" text-[26px] text-white font-medium pb-6">
                            Formulario de Juegos
                        </h2>
                        <hr className=" opacity-35 pb-6" />
                    </div>
                    <div className="flex pb-8 justify-between">
                        <div className="flex flex-col w-[48%]">
                            <label
                                htmlFor=""
                                className=" text-white font-semibold pb-2"
                            >
                                Nombre:{" "}
                            </label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                type="text"
                                className="h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white"
                            />
                        </div>
                        <div className="flex flex-col w-[48%]">
                            <label
                                htmlFor=""
                                className="text-white font-semibold pb-2"
                            >
                                Genero:{" "}
                            </label>
                            <select
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                                name=""
                                id=""
                                className="h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-zinc-100"
                            >
                                <option value="">Seleccione el genero</option>
                                <option value="Aventura">Aventura</option>
                                <option value="Terror">Terror</option>
                                <option value="Accion">Accion</option>
                                <option value="Disparos">Disparos</option>
                                <option value="Supervivencia">
                                    Supervivencia
                                </option>
                                <option value="Peleas">Peleas</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex pb-8 justify-between">
                        <div className="flex flex-col w-[48%]">
                            <label
                                htmlFor=""
                                className=" text-white font-semibold pb-2"
                            >
                                Votacion:{" "}
                            </label>
                            <input
                                value={votacion}
                                onChange={(e) => setVotacion(e.target.value)}
                                type="number"
                                className="h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white "
                            />
                        </div>
                        <div className="flex flex-col w-[48%]">
                            <label
                                htmlFor=""
                                className="text-white font-semibold pb-2"
                            >
                                Descargas:{" "}
                            </label>
                            <input
                                value={descargas}
                                onChange={(e) => setDescargas(e.target.value)}
                                type="number"
                                className="h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white"
                            />
                        </div>
                    </div>

                    <div className="flex pb-8 justify-between">
                        <div className="flex flex-col w-[100%]">
                            <label
                                htmlFor=""
                                className="text-white font-semibold pb-2"
                            >
                                Empresa:{" "}
                            </label>
                            <select
                                value={empresa_id}
                                onChange={(e) => setEmpresa(e.target.value)}
                                className="h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white"
                            >
                                <option value="">Selecciona una empresa</option>
                                {empresas.map((empresa) => (
                                    <option key={empresa.id} value={empresa.id}>
                                        {empresa.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex pb-8 justify-between">
                        <div className="flex flex-col w-[100%]">
                            <label
                                htmlFor=""
                                className="text-white font-semibold pb-2"
                            >
                                Logo:{" "}
                            </label>
                            <img
                                src={`/storage/${logo}`}
                                alt=""
                                className="w-20 rounded justify-start"
                            />
                            <input
                                type="file"
                                onChange={handleLogoChange}
                                accept="imgs/*"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className=" w-full text-white font-medium bg-blue-500 h-10 rounded-md hover:bg-blue-400 transition-colors duration-300"
                        >
                            Actualizar
                        </button>
                    </div>
                </main>
            </section>
        </form>
    );
}

export default JuegoUpdate;
