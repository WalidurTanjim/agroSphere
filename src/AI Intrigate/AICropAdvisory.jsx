import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane, FaUser } from "react-icons/fa";
import axios from "axios";
import useAuth from "../Hooks/useAuth";

const AICropAdvisory = () => {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey there! 👋 How can I assist you today...?", sender: "ai" }
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
        className="p-5 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all ease-in-out">
        <FaRobot size={28} />
      </button>

      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.3 }} 
          className="w-[380px] max-w-full bg-gradient-to-r from-white to-teal-100 shadow-2xl rounded-3xl p-5 flex flex-col border border-gray-300">
          
          <div className="flex items-center justify-between text-white bg-gradient-to-r from-teal-400 to-teal-600 px-5 py-4 rounded-t-3xl shadow-lg">
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
                  className={`p-4 max-w-[75%] text-sm shadow-md rounded-lg ${msg.sender === "user" ? "bg-gradient-to-r from-teal-500 to-teal-700 text-white" : "bg-gradient-to-r from-gray-200 to-gray-300 text-black"}`}> 
                  {msg.text} 
                </div>
                {msg.sender === "user" ? <img src={user?.photoURL} alt="" className="h-[15px] w-[15px] rounded-full" />: <FaRobot className="mr-2 text-teal-500" />}
              </motion.div>
            ))}
            {loading && <p className="text-gray-500 text-center">Typing...</p>}
          </div>

          <div className="flex items-center p-3 border-t bg-gradient-to-r from-teal-50 to-teal-100 rounded-b-3xl shadow-inner">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-4 rounded-xl border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ease-in-out"
              placeholder="Ask AI..."
            />
            <button 
              onClick={sendMessage} 
              className="p-4 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-all ease-in-out">
              <FaPaperPlane />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AICropAdvisory;
