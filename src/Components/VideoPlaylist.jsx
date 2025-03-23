import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoPlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://agro-sphere-server.vercel.app/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="w-full min-h-screen py-16">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center pb-10">
          Farming Video Tutorials 🎥
        </h2>

        {/* Video Grid - Showing only 6 videos */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-200 animate-pulse rounded-lg p-4">
                <div className="w-full h-56 bg-gray-300 rounded-lg"></div>
                <div className="h-6 bg-gray-400 rounded mt-4 w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded mt-2 w-5/6"></div>
              </div>
            ))
          ) : videos.slice(0, 6).map((video) => (
            <div
              key={video._id}
              className="w-full bg-green-50 p-5 relative overflow-hidden group cursor-pointer rounded-md before:bg-green-800 before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[29px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]"
            >
              <iframe
                className="w-full h-56 rounded-lg"
                src={video.url}
                title={video.title}
                allowFullScreen
              ></iframe>
              <h3 className="pt-3 text-green-600 text-xl font-bold transition-all duration-500 group-hover:text-white ease-out text-left">{video.title}</h3>
              <p className="text-sm text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white text-left">{video.description}</p>
            </div>
          ))}
        </div>

        {/* See All Videos Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/all-videos")}
            className="btn border-none shadow-none bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
          >
            See All Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;