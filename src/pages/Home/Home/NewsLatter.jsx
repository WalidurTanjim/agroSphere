import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import AgroButton from "../../../shared/Button/AgroButton";

const NewsLatter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        alert(`Thank you for subscribing, ${email}!`);
        setEmail("");
    };

    return (
        <section className=" mt-10 py-16 px-6 flex flex-col items-center text-center w-full">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl w-full"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center py-2 gap-3 flex-wrap text-green-800 dark:text-green-300">
                    <FaLeaf className="shrink-0" /> Smart E-Farming
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4 w-full px-4">
                    Subscribe to our newsletter and get the latest updates on smart e-farming innovations.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 w-full max-w-lg px-4"
            >
                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-5 py-3 border border-green-400 rounded-xl text-lg 
                        focus:outline-none focus:ring-2 focus:ring-green-600 dark:border-green-500 
                        bg-white dark:text-white dark:placeholder-gray-400 transition-all duration-300"
                    />
                    {/* <button
                        onClick={handleSubscribe}
                        className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg 
                        hover:bg-green-700 transition-all w-full md:w-auto dark:bg-green-500 
                        dark:hover:bg-green-600"
                    >
                        Subscribe
                    </button> */}

                    <AgroButton onClick={handleSubscribe} variant="solid">
                    Subscribe
                    </AgroButton>
                </div>
            </motion.div>
        </section>
    );
};

export default NewsLatter;
