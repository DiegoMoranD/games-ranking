import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthUser from './AuthUser'

function ProtectedRoutes() {
    const {getToken} = AuthUser()
    if(!getToken()){
        return <Navigate to = {'/login'} />
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoutes