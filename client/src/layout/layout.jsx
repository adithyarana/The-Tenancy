import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Homepage/navbar.jsx';
import Footer from '../components/Homepage/Footer.jsx'

function Applayout() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar  />
      <main className="flex-grow w-full">  
        <Outlet />
      </main>

      <Footer/>
     
    </div>
  );
}

export default Applayout;
