import { useEffect, useState } from "react";

const VideoPlaylist = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Farming Video Tutorials 🎥
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
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
