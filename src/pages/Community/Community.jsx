import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaThumbsDown, FaStar } from "react-icons/fa";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Updated to 6 posts per page

  useEffect(() => {
    fetch("http://localhost:5000/forum")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleVote = async (id, type) => {
    const endpoint = type === "upvote" ? "upvote" : "downvote";

    const response = await fetch(`http://localhost:5000/forum/${endpoint}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === id
            ? {
                ...post,
                upVote: type === "upvote" ? (post.upVote || 0) + 1 : post.upVote,
                downVote: type === "downvote" ? (post.downVote || 0) + 1 : post.downVote,
              }
            : post
        )
      );
    }
  };

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (indexOfLastPost < posts.length) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="max-w-6xl mx-auto p-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-green-700 mb-8"
      >
        Community Discussions
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-100 dark:bg-gray-900 shadow-lg rounded-xl p-6 overflow-hidden transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">{post.topic}</h3>
            
            <p className="text-gray-800 dark:text-gray-300 text-md">{post.review}</p>
            
            <div className="flex items-center mt-3">
              {[...Array(post.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-lg" />
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">By: {post.name}</p>
            
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => handleVote(post._id, "upvote")}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
              >
                <FaThumbsUp /> {post.upVote || 0}
              </button>
              
              <button
                onClick={() => handleVote(post._id, "downvote")}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
              >
                <FaThumbsDown /> {post.downVote || 0}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination - Visible only if posts > 6 */}
      {posts.length > postsPerPage && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-5 py-2 text-lg font-semibold rounded-lg transition-all ${
              currentPage === 1 ? "bg-green-400 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextPage}
            disabled={indexOfLastPost >= posts.length}
            className={`px-5 py-2 text-lg font-semibold rounded-lg transition-all ${
              indexOfLastPost >= posts.length ? "bg-green-400 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Community;
