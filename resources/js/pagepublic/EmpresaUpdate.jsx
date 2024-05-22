import React, { useEffect, useState } from 'react';
import Config from '../Config';
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal';

function EmpresaUpdate() {

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

    const handleLogoChange = (e) => {
        setLogo(e.target.files[0]); // Update logo state with the uploaded file
    }


    const submitEmpresaUpdate = async(ev)=>{
        ev.preventDefault();
        
        try {
            const response = await Config.getEmpresaUpdate({nombre, tipo, empleados, ano, logo}, id);
            if (response.status === 200) {
                openModal(`Registro #${id} Actualizado`, "/empresas");
            } else {
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    }

    return (
        <form action="" onSubmit={submitEmpresaUpdate}>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalTitle}
                redirectPath={redirectPath}
            />
        <section className='z-10 -mt-20 justify-center flex '>
            <main className=' rounded-xl bg-[#1B1D1F] w-[1200px] border-[#6C727F] border-[0.01px] mb-24 border-opacity-35 p-10'>
                <div>
                    <h2 className=' text-[26px] text-white font-medium pb-6'>Formulario de Empresas</h2>
                    <hr className=' opacity-35 pb-6' />
                </div>
                <div className='flex pb-8 justify-between'>
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="" className=' text-white font-semibold pb-2'>Nombre: </label>
                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white' />
                    </div>
                </div>

                <div className='flex pb-8 justify-between'>
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="" className=' text-white font-semibold pb-2'>Tipo: </label>
                        <select value={tipo} onChange={(e) => setTipo(e.target.value)} name="" id="" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-zinc-100'>
                            <option value="">Seleccione el genero</option>
                            <option value="Privada">Privada</option>
                            <option value="Publica">Publica</option>
                            <option value="Sin fines de lucro">Sin fines de lucro</option>
                            <option value="Independiente">Independiente</option>
                            <option value="Cooperativa">Cooperativa</option>
                        </select>
                    </div>
                </div>

                <div className='flex pb-8 justify-between'>
                    <div className='flex flex-col w-[48%]'>
                        <label htmlFor="" className=' text-white font-semibold pb-2'>Fundado (Año): </label>
                        <input value={ano} onChange={(e) => setAno(e.target.value)} type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white ' />
                    </div>
                    <div className='flex flex-col w-[48%]'>
                        <label htmlFor="" className='text-white font-semibold pb-2'>Empleados: </label>
                        <input value={empleados} onChange={(e) => setEmpleados(e.target.value)} type="number" className='h-8 rounded bg-[#282B30] border border-white border-opacity-35 text-white' />
                    </div>
                </div>

                <div className='flex pb-8 justify-between'>
                    <div className='flex flex-col w-[100%]'>
                        <label htmlFor="" className='text-white font-semibold pb-2'>Logo: </label>
                        <img src={`/storage/${logo}`} alt=""  className="w-20 rounded justify-start"/>
                        <input type="file" onChange={handleLogoChange} accept="imgs/*"/>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <button type='submit' className=' w-full text-white font-medium bg-blue-500 h-10 rounded-md hover:bg-blue-400 transition-colors duration-300'>Actualizar</button>
                </div>
            </main>
        </section>
        </form>
    );
}

export default EmpresaUpdate;