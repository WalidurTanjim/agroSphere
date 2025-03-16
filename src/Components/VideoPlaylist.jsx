import { useEffect, useState } from "react";

const VideoPlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setFilteredVideos(data);
        setCategories(["All", ...new Set(data.map((video) => video.category))]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Search & filter function
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.trim() !== "");

    // Live filtering videos based on category name match
    if (value === "") {
      setFilteredVideos(videos);
    } else {
      const matchedVideos = videos.filter((video) =>
        video.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredVideos(matchedVideos);
    }
  };

  // Apply filter when selecting a suggestion
  const handleSuggestionClick = (category) => {
    setSearchTerm(category);
    setFilteredVideos(videos.filter((video) => video.category === category));
    setShowSuggestions(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-green-700 text-center pb-6">
          Farming Video Tutorials 🎥
        </h2>

        {/* Search Box */}
        <div className="relative w-full md:w-1/3 mx-auto mb-6">
          <input
            type="text"
            placeholder="Search category..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {showSuggestions && (
            <ul className="absolute left-0 w-full bg-white shadow-lg rounded-lg mt-1 z-10">
              {categories
                .filter((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((suggestion) => (
                  <li
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 cursor-pointer hover:bg-green-100"
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-200 animate-pulse rounded-lg p-4">
                <div className="w-full h-56 bg-gray-300 rounded-lg"></div>
                <div className="h-6 bg-gray-400 rounded mt-4 w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded mt-2 w-5/6"></div>
              </div>
            ))
          ) : filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div
                key={video._id}
                className="bg-green-50 shadow-md border border-green-300 rounded-lg p-4 transition hover:shadow-lg"
              >
                <iframe
                  className="w-full h-56 rounded-lg"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                ></iframe>
                <h3 className="text-xl font-semibold mt-3 text-green-800">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-3">No videos found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
