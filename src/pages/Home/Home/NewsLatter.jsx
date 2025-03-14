import React from 'react';
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { useState } from "react"
const NewsLatter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    };
        return (
            <section className="bg-green-100 py-16 px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-5xl font-bold mb-1 text-green-800 flex items-center justify-center py-2 gap-3">
          <FaLeaf /> Smart E-Farming
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mt-8  w-[650px]  mx-auto">
          Subscribe to our newsletter and get the latest updates on smart e-farming innovations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 w-full max-w-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-green-400 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            onClick={handleSubscribe}
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-700 transition-all"
          >
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
        );
};

export default NewsLatter;