import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const AICropAdvisory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
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
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      <button onClick={() => setIsVisible(!isVisible)} className="p-4 bg-green-500 text-white rounded-full shadow-xl">
        <FaRobot size={24} />
      </button>

      {isVisible && (
        <motion.div className="w-80 bg-white shadow-lg rounded-lg p-4">
          <div className="h-64 overflow-y-auto p-2 border rounded-lg">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
                <p className={msg.sender === "user" ? "bg-blue-500 text-white p-2 rounded-lg inline-block" : "bg-gray-300 p-2 rounded-lg inline-block"}>{msg.text}</p>
              </div>
            ))}
            {loading && <p className="text-gray-500">Typing...</p>}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 border rounded-l-lg"
              placeholder="Ask AI..."
            />
            <button onClick={sendMessage} className="p-2 bg-green-500 text-white rounded-r-lg">
              <FaPaperPlane />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AICropAdvisory;
