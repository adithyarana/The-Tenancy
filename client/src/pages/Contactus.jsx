import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Hourglass } from "lucide-react";
import Map from "../components/contactus/Map";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
const  Contactus=()=> {

  const formsubmit = () => {
    e.preventDefault()
    alert("form submission successfully");
  };

  return (
    <div className=" mx-auto  ">
      {/* google map section */}
      <Map />

      {/* Contact form section */}
      <div className="container mx-auto  py-5  ">
        <h2 className="text-2xl font-semibold text-green-800 mb-4 ml-4  ">
          Contact us
        </h2>
        {/* Line below heading */}
        <div className="w-60 sm:w-2xl ml-4 border-b-2 border-green-500 mb-4"></div>
        {/* 
        // card sectoin */}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Details */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-100 rounded-2xl p-6 ">
              <div className="space-y-4">
                <div className="flex items-center ">
                  <MapPin className="mr-3 text-green-600 w-8 h-8" />
                  <span>
                    {" "}
                    <span className="text-2xl">Greater Noida</span> <br />
                    Sector MU 2, Greater Noida, UP 201310
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 text-green-600 w-6 h-6" />
                  <span className="ml-2">+916301837384</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 text-green-600 w-6 h-6" />
                  <span className="ml-2">contact@example.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Hourglass className="mr-3 text-green-600 w-6 h-6" />
                  <span className="text-2xl">Business Hours</span>
                </div>
                <div className="flex items-center ml-9">
                  <span>Monday - Saturday: 9 AM - 6 PM</span>
                </div>
                <div className="flex items-center ml-9">
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Fill up and reach out to us
            </h2>

            <form onSubmit={formsubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <select className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 ">
                <option className="" value="">
                  Select City
                </option>
                <option value="buy">Greater Noida</option>
                <option value="delhi">Delhi</option>
                <option value="noida">Noida</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-500 cursor-pointer transition duration-300 flex items-center justify-center"
              >
                <Send className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* private contact section */}

        <div className="mt-14 flex flex-col gap-4 items-center text-center px-4">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Couldn’t find what you are looking for?
          </h2>
          <h4 className="font-light">Schedule a private consultation</h4>

          {/* Input & Button Row */}
          <div className="flex  w-full max-w-2xl border border-green-300 rounded-lg overflow-hidden">
            {/* Country Code */}
            <div className="flex items-center px-4 bg-gray-100 border-r border-green-300">
              <span className="text-gray-700 font-medium">+91</span>
            </div>

            {/* Phone Number Input */}
            <input
              type="tel"
              name="phone"
              placeholder="000 000 0000"
              className="w-full p-3 text-gray-700 focus:outline-none"
            />

            {/* Request Button */}
            <button className="bg-green-600 cursor-pointer text-white px-6  py-3 font-medium hover:bg-green-700 transition duration-300 whitespace-nowrap ">
              REQUEST CONSULTATION
            </button>
          </div>

          {/* WhatsApp Notification Message */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaWhatsapp className="text-green-500 text-xl" />
            <span>We’ll send a notification on your WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
