import { motion } from "framer-motion";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaLeaf, FaSeedling } from "react-icons/fa";
import FAQSection from "../../Components/FAQ/FAQSection";
import NewsLatter from "../Home/Home/NewsLatter";
import ContactForm from "./ContactForm";

const SupportPage = () => {
    return (
        <div className="min-h-screen py-16 px-6 md:px-16 bg-gradient-to-b from-lime-50 via-green-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        
            <motion.div 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10"
            >
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 dark:text-green-300 flex items-center justify-center md:justify-start gap-2">
                        <MdOutlineSupportAgent className="text-5xl" /> Support Center
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
                        We're always ready to help with anything related to <span className="text-green-600 font-semibold">AgroSphere</span>. Browse the FAQs or send us a message anytime!
                    </p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="bg-green-100 dark:bg-green-900 p-6 rounded-full shadow-lg">
                        <FaLeaf className="text-green-700 dark:text-green-300 text-7xl" />
                    </div>
                </motion.div>
            </motion.div>

         
            <section className="mt-24 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row gap-10 items-start"
                >
                  
                    <div className="flex-1 w-full">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4 flex items-center gap-2">
                                <FaLeaf className="text-green-500 dark:text-green-300" /> Frequently Asked Questions
                            </h2>
                            <FAQSection />
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-green-200 dark:border-green-700">
                            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4 flex items-center gap-2">
                                <MdOutlineSupportAgent className="text-green-600 dark:text-green-300 mb-4" /> Need Help?
                            </h2>
                            <ContactForm />
                        </div>
                    </div>
                </motion.div>
            </section>

    
            <section className="mt-24">
                <NewsLatter />
            </section>
        </div>
    );
};

export default SupportPage;
