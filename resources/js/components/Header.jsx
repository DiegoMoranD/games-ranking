import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthUser from '../pageauth/AuthUser';
import Config from '../Config';

function Header() {

  const { getToken, getLogout } = AuthUser();

const logoutUser = async () => {
  try {
    const response = await Config.getLogout('/logout');
    console.log(response);
    getLogout();
  } catch (error) {
    
  }
};

const renderLinks = () => {
  if (getToken()) {
    return (
      <>
      <Link onClick={logoutUser} to={"#"} className='font-semibold hover:text-cyan-400 transition-colors duration-300'>Administrar</Link>
        <Link onClick={logoutUser} to={"#"} className='font-semibold hover:text-cyan-400 transition-colors duration-300'>Logout</Link>
      </>
    );
  } else {
    return (
      <>
        <Link to={"/login"} className='font-semibold hover:text-cyan-400 transition-colors duration-300'>Login</Link>
      </>
    );
  }
};

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-Header-bg h-[290px] bg-cover bg-no-repeat content-center'>
      <div className='text-white flex justify-center -mt-8'>
        <div className=''>
          <Link to={'/'} className='mr-10 font-semibold hover:text-cyan-400 transition-colors duration-300'>Inicio</Link>
          <Link to={'/juegos'} className='mr-10 font-semibold hover:text-cyan-400 transition-colors duration-300'>Juegos</Link>
          <Link to={"/empresas"} className='mr-10 font-semibold hover:text-cyan-400 transition-colors duration-300'>Empresas</Link>
          <div className="relative inline-block text-left">
            <div>
              <button onClick={toggleMenu} className='mr-10 font-semibold hover:text-cyan-400 transition-colors duration-300'>
                Subir
              </button>
            </div>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#1B1D1F] ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/subir/formjuego" className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-500" role="menuitem">Juego</Link>
                  <Link to="/subir/formempresa" className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-500" role="menuitem">Empresa</Link>
                </div>
              </div>
            )}
          </div>
          {renderLinks()}
        </div>
      </div>
    </div>
  );
}

export default Header;
