import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/banner_photo/futuristic-technology-concept (1).jpg";
import img2 from "../../../assets/banner_photo/futuristic-technology-concept.jpg";
import img3 from "../../../assets/banner_photo/lush-green-farmland-being-surveyed-by-drone-precision-agriculture.jpg";
import img4 from "../../../assets/banner_photo/robot-spraying-fertilizer-vegetable-garden.jpg";
import img5 from "../../../assets/banner_photo/smart-agriculture-iot-with-hand-planting-tree-background.jpg";

const Banner = () => {
  const captions = [
    "Empowering Farmers with Digital Solutions",
    "Real-time Market Insights for Smarter Sales",
    "AI-powered Crop Advisory at Your Fingertips",
    "Community Support & Expert Advice",
    "Innovative E-Commerce for Farming Supplies",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        transitionTime={800}
        showStatus={false}
      >
        {[img1, img2, img3, img4, img5].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="object-cover w-full h-[650px] brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <motion.h3
                className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {captions[index]}
              </motion.h3>
              <motion.p
                className="mt-4 text-lg md:text-xl text-white opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Connecting Farmers with Technology for a Sustainable Future
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore More
              </motion.button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
