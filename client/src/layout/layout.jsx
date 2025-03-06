import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

function Applayout() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow  w-full">  {/* Removed px-4 to avoid side padding */}
        <Outlet />
      </main>
     
    </div>
  );
}

export default Applayout;
