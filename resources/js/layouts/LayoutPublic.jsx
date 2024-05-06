import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

import Container from '../components/Container'

function LayoutPublic() {
return (
<>
    <h1></h1>
    <Header/>
    <Outlet/>
    <Footer/>
</>
)
}

export default LayoutPublic