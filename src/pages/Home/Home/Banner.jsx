import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, CloudRain, Thermometer, Leaf, Bot, Globe } from "lucide-react";
import bg1 from "../../../assets/banner_photo/futuristic-technology-concept.jpg";
import bg2 from "../../../assets/banner_photo/lush-green-farmland-being-surveyed-by-drone-precision-agriculture.jpg";
import bg3 from "../../../assets/banner_photo/robot-spraying-fertilizer-vegetable-garden.jpg";

const images = [bg1, bg2, bg3];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );
        const data = await response.json();
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
        });
      } catch (error) {
        console.error("Weather fetch failed", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0d1a13] overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 py-20 flex items-center justify-center">
      {/* background blur effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-lime-500 opacity-20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-150px] w-[400px] h-[400px] bg-teal-600 opacity-20 blur-[150px] rounded-full z-0" />

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-14 w-full">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-6 w-full"
        >
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-lime-400 uppercase tracking-wide">
            E-Agriculture Platform
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            AgroSphere:{" "}
            <span className="text-lime-300">Smart Digital Platform for Farmers</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Empowering farmers with personalized dashboards, real-time crop advisory, weather forecasts, and a smart e-commerce platform. Grow better, trade smarter.
          </p>

          {/* Feature Icons & Weather */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Feature icon={<Leaf />} label="Eco-Aware" />
            <Feature icon={<Bot />} label="AI Farming" />
            <Feature icon={<Globe />} label="Global Trade" />
            {weather && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-lime-400 text-white shadow-lg ring-2 ring-white/20 backdrop-blur-md animate-pulse"
              >
                <span className="text-2xl">
                  {weather.condition === "Rain" ? <CloudRain /> : <Sun />}
                </span>
                <span className="text-sm sm:text-base font-medium">
                  {weather.temp}°C • {weather.condition}
                </span>
              </motion.div>
            )}
          </div>

     
          <div className="flex gap-3 flex-wrap pt-6">
            <Link to="/events">
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full bg-lime-500 hover:bg-lime-600 text-sm sm:text-base md:text-lg font-semibold shadow-lg transition-all">
                Meet Experts
              </button>
            </Link>
            <Link to="/support">
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border-2 border-white hover:bg-white hover:text-green-800 text-sm sm:text-base md:text-lg font-semibold transition-all">
                Get Support
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Image area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] lg:h-[600px]"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-[1200ms]"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              clipPath:`polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)`,
              borderRadius: "60px",
              boxShadow: "0 0 30px rgba(0,255,150,0.4)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-sm md:text-base text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-sm">
    <span className="text-lime-300 text-xl">{icon}</span>
    <span>{label}</span>
  </div>
);

export default Banner;
