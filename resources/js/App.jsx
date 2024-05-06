import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import  ReactDOM  from 'react-dom/client'

import LayoutPublic from './layouts/LayoutPublic'
import LayoutAdmin from './layouts/LayoutAdmin'
import LayoutClient from './layouts/LayoutClient'

import Container from './pageauth/Container'
import Empresas from './pages/empresas'

import Panel from './pageadmin/Panel'
import Register from './pageauth/Register'
import Login from './pageauth/login'
import ProtectedRoutes from './pageauth/ProtectedRoutes'
import PageHome from './pagepublic/PageHome'
import Header from './components/Header'

import Subir from './pages/subir'
import JuegosForm from './pages/forms/juegos'
import EmpresasForm from './pages/forms/empresas'

import JuegoUpdate from './pagepublic/JuegoUpdate'
import EmpresaUpdate from './pagepublic/EmpresaUpdate'

function App() {
  return (
    // <BrowserRouter>
    //   <Header/>
    //   <Container/>
    // </BrowserRouter>
    <Router>
      <Routes>
        <Route path='/' element = {<LayoutPublic/>}>
          <Route index element = { <PageHome/> } />
          <Route path='/login' element = {<Login/>} />
          
          <Route path='/register' element = {<Register/>} />

          <Route path='juegos' element = {<Container/>} />

          <Route path='juegos/edit/:id' element={<JuegoUpdate/>}/>

          <Route path='/empresas' element = {<Empresas/>} />

          <Route path='/subir' element={<Subir/>}/>

        <Route path='subir/formjuego' element={<JuegosForm/>}/>

        <Route path='subir/formempresa' element={<EmpresasForm/>}/>

        <Route path='empresas/edit/:id' element={<EmpresaUpdate/>}/>
        
        </Route>

        <Route element = {<ProtectedRoutes/>}>
          <Route path='/admin' element ={<LayoutAdmin/>} >
            <Route index element = {<Panel/>} />
          </Route>

          <Route path='/client' element ={<LayoutClient/>} >
            <Route index element = {<Panel/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
