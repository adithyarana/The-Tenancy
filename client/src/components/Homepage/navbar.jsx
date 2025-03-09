import React, { useState } from 'react';
import { Search, Home, Info, Phone, MessageSquare, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // WhatsApp redirect function
  const redirectToWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and brand */}
        <Link>
        <div className="flex items-center mt-5">
            <div className="flex-shrink-0 flex items-center">
             <Home className="h-8 w-8 text-emerald-600" />
             <span className="ml-2 text-2xl font-bold text-gray-800">The Tenancy</span>
            </div>
            </div>
        </Link>
        
       

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               
              </div>
             
            </div>
            
            <a href="/propertylisting" className="text-gray-700 hover:text-emerald-600 font-medium transition duration-150 ease-in-out">
               Properties
            </a>
            
            <a href="/Our-Services" className="text-gray-700 hover:text-emerald-600 font-medium transition duration-150 ease-in-out">
            Our Services
            </a>
            
            <a href="/contact-us" className="text-gray-700 hover:text-emerald-600 font-medium transition duration-150 ease-in-out">
              Contact Us
            </a>
            
            <button 
              onClick={redirectToWhatsApp}
              className="bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-emerald-700 transition duration-150 ease-in-out cursor-pointer"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              WhatsApp Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <div className="relative mx-2 my-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               
              </div>
            </div>
            
            <a 
              href="/propertylisting" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Properties
            </a>
            
            <a 
              href="/Our-Services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Our Services
            </a>
            
            <a 
              href="/contact-us" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Contact Us
            </a>
            
            <button 
              onClick={redirectToWhatsApp}
              className="w-full mt-2 bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-emerald-700 transition duration-150 ease-in-out"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              WhatsApp Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;