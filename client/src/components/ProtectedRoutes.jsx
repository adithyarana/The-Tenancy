import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {

    const adminlogin = localStorage.getItem("adminToken");
    return adminlogin? children: <Navigate to="/admin/login"/>

            
    }
  


export default ProtectedRoutes