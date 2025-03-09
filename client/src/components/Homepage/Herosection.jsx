import React, { useState } from "react";
import {  Shield, Star, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import Tredingproperties from "./Tredingproperties";
import PropertyFilter from "./PropertyFilter";

const RealEstateLandingPage = () => {
  
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
          <motion.h1
           className="text-5xl font-extrabold text-white mb-4"
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}>
              Welcome to{" "}
              <span className="text-green-400">The Tenancy properties</span>
            </motion.h1>
            <motion.p 
            className="text-lg text-white max-w-2xl mx-auto mb-8 
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}>
              Discover your dream home with personalized real estate solutions.
              We help you find the perfect property that matches your lifestyle
              and aspirations.
            </motion.p>
          </div>

          {/* Property Filter */}
          <PropertyFilter/>
         
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
            Why Choose The Tenancy
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

      {/* trending properties section */}
      <Tredingproperties />

      {/* Ready to Find Your Dream Home */}
      <section className="py-16 ">
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
