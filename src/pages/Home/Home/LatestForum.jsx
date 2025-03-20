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
    <section className="max-w-full mx-auto p-6  ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center py-4 text-green-700 dark:text-green-300 mb-10"
      >
       <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center  justify-center py-2 gap-3 flex-wrap text-green-800 dark:text-green-300">
                    <FaLeaf className="shrink-0" /> Latest Discussions
                </h1>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestPosts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-100 dark:bg-gray-800 shadow-md rounded-xl p-5 transform hover:scale-105 transition-all"
          >
            <img
              src={post.photoURL || "https://via.placeholder.com/150"}
              alt="User"
              className="w-full h-40 object-cover rounded-sm shadow-sm border-2 border-green-500"
            />
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mt-3">
              {post.topic}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mt-1">
              {post.review.length > 100 ? post.review.substring(0, 100) + "..." : post.review}
            </p>
            <div className="flex items-center mt-2">
              {[...Array(post.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-sm" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">By: {post.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
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
