import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-green-100 py-16 my-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.ibb.co.com/v6brJC2w/smart-farming-digital-technology-agriculture-260nw-1772914631.webp"
            alt="E-Farming"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>
        
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700 mb-4">
            About Our AgroSphere 
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            We are committed to revolutionizing modern farming by connecting farmers with technology. Our e-farming platform helps farmers manage crops efficiently, sell produce directly, and promote sustainable agriculture.
          </p>
          <motion.button
            className="bg-green-600 text-white px-6 py-3 my-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
