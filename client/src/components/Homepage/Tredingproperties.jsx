import React from 'react'
import  Slider  from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// Dummy data for properties
const propertyData = [
    {
      image: "/land.jpg",
      type: "2 BHK Apartment",
      location: "Mumbai, India",
      area: "1200 sq. ft.",
    },
    {
      image: "https://via.placeholder.com/400x250",
      type: "3 BHK Villa",
      location: "Delhi, India",
      area: "2500 sq. ft.",
    },
    {
      image: "https://via.placeholder.com/400x250",
      type: "1 BHK Studio",
      location: "Bangalore, India",
      area: "800 sq. ft.",
    },
    {
      image: "https://via.placeholder.com/400x250",
      type: "4 BHK Duplex",
      location: "Chennai, India",
      area: "3000 sq. ft.",
    },
  ];

  // Slider settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

const Tredingproperties=()=> {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <motion.h2
            className="text-3xl font-bold text-green-800 mb-6 flex justify-center hover:text-green-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Treding Properties
          </motion.h2>

      <Slider {...settings}>
        {propertyData.map((property, index) => (
          <div key={index} className="p-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6  cursor-pointer h-96">
              <div className=" shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 s">
                <img
                  src={property.image}
                  alt={property.type}
                  className="w-full h-56 lg:h-72  object-cover"
                />
                <div className="p-4 text-center flex flex-col  lg:flex-row mt-8 lg:justify-between  gap-2  ">
                  <h3 className="text-lg font-semibold text-green-800">
                    {property.type}
                  </h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-sm font-medium text-green-700">
                    Area: {property.area}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Tredingproperties