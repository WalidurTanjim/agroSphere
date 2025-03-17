import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const AddForum = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState("");
  const [topic, setTopic] = useState("");
  const [rating, setRating] = useState(5);
  const [anonymous, setAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: anonymous ? "Anonymous" : user?.displayName || "Anonymous",
      email: user?.email || "No Email Provided",
      topic,
      rating,
      review,
      photoURL: user?.photoURL || "", // Store user photo URL
    };

    try {
      const response = await fetch("http://localhost:5000/forum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your post has been submitted successfully.",
        });
        setReview("");
        setTopic("");
        setRating(5);
        setAnonymous(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to submit your post.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error!",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-8 bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-xl rounded-lg mt-10"
    >
      {/* Profile Picture */}
      {user?.photoURL && (
        <div className="flex justify-center">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white shadow-md mb-4"
          />
        </div>
      )}

      {/* Top Input Field */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 shadow-sm"
          placeholder="Write something here..."
        />
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Share Your Thoughts</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg">Name</label>
          <input
            type="text"
            value={anonymous ? "Anonymous" : user?.displayName || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-lg">Email</label>
          <input
            type="email"
            value={user?.email || "No Email Provided"}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-lg">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 shadow-sm"
            placeholder="Enter discussion topic"
          />
        </div>
        <div>
          <label className="block text-lg">Rating</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        <div>
          <label className="block text-lg">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-white text-gray-900 shadow-sm"
            placeholder="Write your review..."
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
            className="mr-2"
          />
          <label className="text-lg">Post as Anonymous</label>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="w-full bg-white text-green-600 py-3 px-4 rounded-md font-bold text-lg hover:bg-gray-200"
        >
          {loading ? "Submitting..." : "Submit Post"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddForum;
