import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane, FaUser } from "react-icons/fa";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const AICropAdvisory = () => {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hey there! 🌿 How can I assist you with your farming tasks today?",
      sender: "ai",
    },
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
      const response = await axios.post("http://localhost:5000/ai-response", {
        prompt: input,
      });
      setMessages((prev) => [
        ...prev,
        { text: response.data.answer, sender: "ai" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "AI response failed. Try again.", sender: "ai" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="p-5 bg-gradient-to-br from-lime-600 via-emerald-600 to-green-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all">
        <FaRobot size={28} />
      </button>

      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-[400px] max-w-full bg-gradient-to-br from-green-50 via-lime-100 to-emerald-50 shadow-xl rounded-3xl p-0 border border-emerald-300 overflow-hidden">

          <div className="flex items-center justify-between text-white bg-gradient-to-r from-green-700 via-emerald-600 to-lime-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <FaRobot className="text-2xl" />
              <h2 className="text-lg font-bold tracking-wide">AgroSphere AI</h2>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white text-xl hover:opacity-80 transition-all">
              ✖
            </button>
          </div>

          <div className="flex flex-col space-y-4 h-80 overflow-y-auto px-5 py-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-5 py-3 max-w-[75%] text-sm shadow-md rounded-xl font-medium tracking-wide ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                      : "bg-white text-gray-800 border border-green-200"
                  }`}>
                  {msg.text}
                </div>
                {msg.sender === "user" ? (
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="h-[24px] w-[24px] rounded-full ml-2 shadow"
                  />
                ) : (
                  <FaRobot className="ml-2 text-green-500 text-xl" />
                )}
              </motion.div>
            ))}
            {loading && <p className="text-gray-500 text-center italic">🌱 Thinking...</p>}
          </div>

          <div className="flex items-center px-4 py-3 bg-white border-t border-green-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-grow p-3 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ask Agro AI anything..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:scale-105 transition-all">
              <FaPaperPlane />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AICropAdvisory;
