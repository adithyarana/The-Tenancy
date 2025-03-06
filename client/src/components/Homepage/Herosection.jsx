import React, { useState } from "react";
import { Search, MapPin, Home, Shield, Star, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const RealEstateLandingPage = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-screen "
        style={{
          backgroundImage: `url(${"/banner.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-45"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 pt-52">
          <div className="pb-5">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Welcome to{" "}
              <span className="text-green-400">The Tenency properties</span>
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto mb-8 ">
              Discover your dream home with personalized real estate solutions.
              We help you find the perfect property that matches your lifestyle
              and aspirations.
            </p>
          </div>

          {/* Property Filter */}
          <div className="max-w-4xl w-full px-4 pb-11 ">
            <div className="bg-white shadow-lg rounded-xl p-6 border border-green-100">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Location Filter */}
                <div className="relative">
                  <label className="block text-green-800 mb-2">
                    <MapPin
                      className="inline-block mr-2 text-green-600"
                      size={20}
                    />
                    Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border border-green-200 rounded text-green-700"
                  >
                    <option value="">All Locations</option>
                    <option value="CA">Greater Noida</option>
                    <option value="NY">Noida</option>
                    <option value="FL">Delhi</option>
                  </select>
                </div>

                {/* Property Type Filter */}
                <div className="relative">
                  <label className="block text-green-800 mb-2">
                    <Home
                      className="inline-block mr-2 text-green-600"
                      size={20}
                    />
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full p-2 border border-green-200 rounded text-green-700"
                  >
                    <option value="">All Types</option>
                    <option value="villa">Plot</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <label className="block text-green-800 mb-2">To:</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full p-2 border border-green-200 rounded text-green-700"
                  >
                    <option value="">Buy</option>
                    <option value="0-500k">Lease</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-300">
                    <Search className="inline-block mr-2" size={20} />
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <motion.h2
            className="text-3xl font-bold text-center text-green-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Choose The Tenency
          </motion.h2>

          {/* Grid Container */}
          <div className="grid md:grid-cols-4 gap-8 ">
            {[
              {
                Icon: Shield,
                title: "Trusted Service",
                text: "We provide reliable and transparent real estate services with your best interests at heart.",
              },
              {
                Icon: Star,
                title: "Expert Guidance",
                text: "Our experienced team offers personalized advice to help you make informed decisions.",
              },
              {
                Icon: Clock,
                title: "Efficient Process",
                text: "We streamline your property search with quick, hassle-free consultations and viewings.",
              },
              {
                Icon: Users,
                title: "Client-Centric",
                text: "Your satisfaction is our priority. We go above and beyond to meet your unique needs.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Animated Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mx-auto mb-4 text-green-600 flex justify-center"
                >
                  <item.Icon size={60} />
                </motion.div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-green-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Find Your Dream Home */}
      <section className="py-16 bg-green-100">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold text-green-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Ready to Find Your Dream Place?
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg text-green-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Let's turn your property dreams into reality. Contact us today for a
          personalized consultation.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-medium"
          >
            Search Properties
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-medium"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
};

export default RealEstateLandingPage;
