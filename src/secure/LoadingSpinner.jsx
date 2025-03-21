import { motion } from "framer-motion";
import { GiFarmer, GiSprout, GiFruitTree } from "react-icons/gi";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-900 text-white">
      <motion.div
        className="flex justify-center items-center w-28 h-28 rounded-full border-8 border-yellow-400 border-t-transparent shadow-2xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <GiSprout className="text-yellow-400 text-5xl animate-pulse" />
      </motion.div>
      <p className="mt-4 text-lg font-semibold flex items-center gap-2">
        <GiFarmer className="text-xl" /> Growing Your Experience...//<GiFruitTree className="text-xl" />
      </p>
    </div>
  );
};

export default LoadingSpinner;