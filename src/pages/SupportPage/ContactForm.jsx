import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks for reaching out, ${formData.name}`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl mt-7"
        >
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">
                Still need help?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 py-3">
                If you can't find your answer in our FAQs, feel free to contact our support team.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-300 dark:border-green-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-300 dark:border-green-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
                    required
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your issue or question"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-300 dark:border-green-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
