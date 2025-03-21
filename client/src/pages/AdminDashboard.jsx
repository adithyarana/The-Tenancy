import React, { useState } from 'react'
import AdminForm from "../components/Dashboardcomponent/AdminForm.jsx"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function AdminDashboard() {

  const navigate= useNavigate();

  const handleLogout = ()=>{
   localStorage.removeItem("adminToken")
    
    navigate('/admin/login')
    toast.success("Logged Out Successfully")
  
  }

 
  
  return (
    <>
    <div className="p-5 flex items-center justify-between  shadow-md rounded-lg">
      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
  
      {/* Action Buttons */}
      <div className="flex gap-x-4">
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-lg font-medium flex items-center gap-x-2 hover:bg-green-700 transition cursor-pointer">
          <span className="text-2xl">+</span> Create Property
        </button>
  
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  </>
  
      

    
  )
}

export default AdminDashboard