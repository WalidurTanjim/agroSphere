import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://source.unsplash.com/800x400/?farm,nature",
  "https://source.unsplash.com/800x400/?agriculture,field",
  "https://source.unsplash.com/800x400/?organic,farm",
  "https://source.unsplash.com/800x400/?farmer,plants",
  "https://source.unsplash.com/800x400/?vegetables,market",
  "https://source.unsplash.com/800x400/?tractor,crop"
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <motion.div
        className="w-full h-full flex"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="E-Farming Banner"
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </motion.div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        <FaChevronRight size={24} />
      </button>
    </section>
  );
};

export default Banner;
