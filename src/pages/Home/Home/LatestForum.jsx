import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LatestForum = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/forum/latest")
      .then((res) => res.json())
      .then((data) => setLatestPosts(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-4 mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center py-2 gap-3 flex-wrap text-green-700 dark:text-green-300">
          <FaLeaf className="shrink-0 text-green-600 dark:text-green-800" /> Latest Discussions
        </h1>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {latestPosts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 border border-green-200 dark:border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <img
              src={post.photoURL || "https://via.placeholder.com/150"}
              alt="User"
              className="w-full h-40 object-cover rounded-lg shadow-md border-2 border-green-500"
            />
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mt-3">
              {post.topic}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mt-2">
              {post.review.length > 120 ? post.review.substring(0, 120) + "..." : post.review}
            </p>
            <div className="flex items-center mt-2">
              {[...Array(post.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-md" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs mt-3 font-medium">By: {post.name || "Anonymous"}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <NavLink
          to="community"
          className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold shadow-md transition-all"
        >
          See More
        </NavLink>
      </div>
    </section>
  );
};

export default LatestForum;