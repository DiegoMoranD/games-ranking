import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import  ReactDOM  from 'react-dom/client'

import Header from './components/Header'
import Container from './components/Container'

import Subir from './pages/subir'
import Login from './pages/login'
import Empresas from './pages/empresas'
import Register from './pages/register'
import JuegosForm from './pages/forms/juegos'
import EmpresasForm from './pages/forms/empresas'

function PageMain() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path='/empresas' element={<Empresas/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/subir' element={<Subir/>}/>
        <Route path='/subir/juego' element={<JuegosForm/>}/>
        <Route path='/subir/empresa' element={<EmpresasForm/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PageMain/>);

// if(document.getElementById('ReactMain')){
//     createRoot(document.getElementById('ReactMain')).render(<PageMain/>);
// }