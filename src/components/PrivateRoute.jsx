import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ userLogged, emailValue  }) => {
    if (userLogged) {
        return <Outlet emailValue ={emailValue } />
    }else{
        return <Navigate to={"/login"} />
    }
}

export default PrivateRoute