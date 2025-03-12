import React, { useState } from 'react'
import AdminForm from "../components/Dashboardcomponent/AdminForm.jsx"
function AdminDashboard() {
  return (
    <div className='p-5 flex  justify-between '>
      <h1 className='text-3xl font-bold '>Admin Dashboard</h1>
      <button  className="bg-green-600 text-white p-2 rounded mb-4 font-medium cursor-pointer "><span className='text-xl'>+ </span>Create Property</button>

    
      </div>

    
  )
}

export default AdminDashboard