import { LocateIcon, Mail, Phone } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-16 ">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6">The Tenency</h3>
          <p className="text-green-200 mb-4">
            Your trusted partner in finding the perfect home. We combine local expertise with personalized service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-green-200 transition">Home</a></li>
            <li><a href="#why-choose-us" className="hover:text-green-200 transition">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-green-200 transition">Properties</a></li>
            <li><a href="#" className="hover:text-green-200 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Phone className="mr-3 text-green-400" size={20} />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-3 text-green-400" size={20} />
              <span>info@adithyaproperties.com</span>
            </li>
            <li className="flex items-center">
              <LocateIcon className="mr-3 text-green-400" size={20} />
              <span>123 Real Estate St, City, State 12345</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-700 mt-12 pt-6 text-center">
        <p className="text-green-200">
          © 2025 The Tenency. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer