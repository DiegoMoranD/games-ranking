import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import  ReactDOM  from 'react-dom/client'
import Header from './components/Header'
import Container from './components/Container'

import Alumnos from './pages/alumnos'
import Acerca from './pages/acerca'

function PageMain() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <div className=' bg-black text-white'>
        Home
        <Link to={"/alumnos"}>Alumnado</Link>
        <Link to={"/acerca"}>Acerca</Link>
      </div> */}
      <Container/>
      <Routes>
        <Route path='/alumnos' element={<Alumnos/>}/>
        <Route path='/acerca' element={<Acerca/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('ReactMain')).render(<PageMain/>);

// if(document.getElementById('ReactMain')){
//     createRoot(document.getElementById('ReactMain')).render(<PageMain/>);
// }