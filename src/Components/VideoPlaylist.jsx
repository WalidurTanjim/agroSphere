import { useEffect, useState } from "react";

const VideoPlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setFilteredVideos(data);

        // Extract unique categories from videos
        const uniqueCategories = ["All", ...new Set(data.map((video) => video.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  // Filter videos based on selected category
  const filterVideos = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter((video) => video.category === category));
    }
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-green-700 text-center pb-6">
        Farming Video Tutorials 🎥
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterVideos(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-green-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {filteredVideos.map((video) => (
          <div key={video._id} className="bg-white shadow-lg rounded-lg p-4">
            <iframe
              className="w-full h-56 rounded-lg"
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold mt-3">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlaylist;
