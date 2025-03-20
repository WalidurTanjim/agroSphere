import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const faqData = [
    {
        question: "How does AgroSphere help farmers?",
        answer:
            "AgroSphere provides real-time market trends, AI-powered crop advisory, weather alerts, and a seamless e-commerce platform for farming supplies."
    },
    {
        question: "Is AgroSphere free to use?",
        answer:
            "Yes, AgroSphere offers free access to most of its features. However, premium advisory services may require a subscription."
    },
    {
        question: "How does the AI-powered advisory system work?",
        answer:
            "The AI analyzes soil type, weather conditions, and crop data to provide the best farming practices and maximize yield."
    },
    {
        question: "Can I buy farming products directly from the platform?",
        answer:
            "Yes, AgroSphere features a built-in e-commerce marketplace where farmers can purchase seeds, fertilizers, and tools directly from suppliers."
    },
    {
        question: "Does AgroSphere provide weather alerts?",
        answer:
            "Yes, the platform offers real-time weather updates and alerts to help farmers plan their activities efficiently."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-6 md:px-16 mt-10">
            <div className="max-w-4xl mx-auto text-center">
                <SectionTitle title="Frequently Asked Questions"></SectionTitle>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-green-700 hover:bg-green-50"
                        >
                            {faq.question}
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="p-5 border-t text-gray-600"
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;