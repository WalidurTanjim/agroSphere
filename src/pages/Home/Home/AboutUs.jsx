import React from "react";
import { motion } from "framer-motion";
import farmer from '../../../assets/banner_photo/futuristic-technology-concept (1).jpg'
import aboutbg from '../../../assets/banner_photo/smart-farming-with-agriculture-iot.jpg'

const AboutUs = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20 px-6 lg:px-20 overflow-hidden">
   
      <div className="absolute inset-0 opacity-10">
        <img
          src={aboutbg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      

      <motion.h2 
        className="text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-green-400">AgroSphere</span>
      </motion.h2>
      
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold">Empowering Farmers with Technology</h3>
          <p className="text-lg opacity-80">
            AgroSphere is a digital platform designed to revolutionize agriculture by providing AI-driven crop advisory, real-time market insights, and a seamless e-commerce experience for farmers.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>📌 AI-powered farming insights</li>
            <li>📌 Real-time market price tracking</li>
            <li>📌 Community-driven farming support</li>
            <li>📌 Seamless e-commerce for agricultural supplies</li>
          </ul>
        </motion.div>
        
     
        <motion.div 
          className="relative" 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={farmer}
            alt="Farmers using technology"
            className="rounded-2xl shadow-lg w-full object-cover h-80"
          />
        </motion.div>
      </div>
      
     
      <motion.div 
        className="mt-16 bg-green-700 text-white py-10 px-6 md:px-12 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-center">🌱 Our Mission</h3>
        <p className="text-lg opacity-90 text-center mt-4">
          Our goal is to create a sustainable, technology-driven ecosystem for farmers, ensuring growth, knowledge sharing, and prosperity in the agricultural industry.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;