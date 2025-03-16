import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane, FaCommentDots } from "react-icons/fa";

const AICropAdvisory = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">

        
      {!isVisible && (
        <div className="relative group">
          <motion.button
            onClick={() => setIsVisible(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <FaCommentDots size={24} />
          </motion.button>

        
          <div className="absolute bottom-12 right-0 hidden group-hover:block bg-gray-800 text-white p-2 rounded-md text-sm shadow-lg">
            Click to start chatting
          </div>
        </div>
      )}

      
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-5 flex flex-col border border-gray-200"
        >
    
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between text-white bg-gradient-to-r from-green-500 to-green-700 px-4 py-3 rounded-t-3xl"
          >
            <div className="flex items-center gap-2">
              <FaRobot className="text-xl" />
              <h2 className="text-lg font-semibold">AgroSphere AI</h2>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white text-lg hover:opacity-75 transition-all"
            >
              ✖
            </button>
          </motion.div>

        
          <div className="flex flex-col space-y-3 h-72 overflow-y-auto p-4 bg-gray-50 rounded-b-3xl border-t">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 max-w-[80%] rounded-xl text-sm bg-green-500 text-white self-start shadow-md"
            >
              Hey there! 👋 How can I assist you today?
            </motion.div>
          </div>

      
          <div className="flex items-center p-2 border-t bg-gray-100 rounded-b-3xl">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow p-3 rounded-l-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              className="p-3 bg-green-500 text-white rounded-r-xl hover:bg-green-600 transition-all"
            >
              <FaPaperPlane />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AICropAdvisory;
