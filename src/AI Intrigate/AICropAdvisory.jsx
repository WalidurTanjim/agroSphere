import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane, FaUser } from "react-icons/fa";
import axios from "axios";
import useAuth from "../Hooks/useAuth";

const AICropAdvisory = () => {
  const {user} = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey there! 👋 How can I assist you today?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);
    
    try {
      const response = await axios.post("http://localhost:5000/ai-response", { prompt: input });
      setMessages((prev) => [...prev, { text: response.data.answer, sender: "ai" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "AI response failed. Try again.", sender: "ai" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-10">
      <button 
        onClick={() => setIsVisible(!isVisible)} 
        className="p-5 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all">
        <FaRobot size={28} />
      </button>

      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.3 }} 
          className="w-[380px] bg-white shadow-2xl rounded-3xl p-5 flex flex-col border border-gray-200">
          
          <div className="flex items-center justify-between text-white bg-gradient-to-r from-green-500 to-green-700 px-5 py-4 rounded-t-3xl">
            <div className="flex items-center gap-3">
              <FaRobot className="text-2xl" />
              <h2 className="text-lg font-semibold">AgroSphere AI</h2>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white text-xl hover:opacity-75 transition-all">
              ✖
            </button>
          </div>

          <div className="flex flex-col space-y-3 h-80 overflow-y-auto p-4 bg-gray-50 rounded-b-3xl border-t">
            {messages.map((msg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }}
                className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div 
                  className={`p-3 max-w-[75%] text-sm shadow-md rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}> 
                  {msg.text} 
                </div>
                {msg.sender === "user" ? <FaUser className="ml-2 text-gray-500" /> : <FaRobot className="mr-2 text-green-500" />}
              </motion.div>
            ))}
            {loading && <p className="text-gray-500 text-center">Typing...</p>}
          </div>

          <div className="flex items-center p-3 border-t bg-gray-100 rounded-b-3xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-3 rounded-l-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ask AI..."
            />
            <button 
              onClick={sendMessage} 
              className="p-3 bg-green-500 text-white rounded-r-xl hover:bg-green-600 transition-all">
              <FaPaperPlane />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AICropAdvisory;
