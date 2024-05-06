import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'

function LayoutAdmin() {
    
    const {getRol} = AuthUser()
    const navigate = useNavigate()

    useEffect(()=>{
        if(getRol()!="admin"){
            navigate("/")
        }
    },[])

return (
<>
    <h1>Admin</h1>
    <Header/>
    <Outlet/>
    <Footer/>
</>
)
}

export default LayoutAdmin