import React from 'react'
import { Navigate } from 'react-router-dom'
import { service } from '../Services/service'

const Guard = ({ children }) => {
    if (!service.isLogged()) {
        return <Navigate to="/login" />
    }
    return children
}

export default Guard
