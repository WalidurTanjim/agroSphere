import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle/SectionTitle";

const VideoPlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="tutorials w-full">
      <div className="tutorials-inner container mx-auto px-6 lg:px-40 py-12 text-center">

        {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-lime-700 dark:text-lime-400 mb-4 tracking-tight py-12">
          📺 Smart Farming Video Hub
        </h2> */}

        <SectionTitle title={"Smart Farming Video Hub"} sub_title={"Explore educational and inspiring videos on modern and traditional farming"} />


        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white/50 dark:bg-white/10 backdrop-blur-md animate-pulse rounded-xl shadow-md p-5 h-[320px]"
              >
                <div className="w-full h-52 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-5 bg-gray-400 dark:bg-gray-600 rounded mt-4 w-3/4"></div>
                <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded mt-2 w-2/3"></div>
              </div>
            ))
            : videos.slice(0, 6).map((video) => (
              <div
                key={video._id}
                className="relative bg-white dark:bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg p-4 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                <div className="relative w-full h-56 overflow-hidden rounded-xl mb-4">
                  <iframe
                    className="w-full h-full rounded-xl pointer-events-auto"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>


                <h3 className="text-2xl font-semibold text-left text-lime-700 dark:text-lime-400 group-hover:text-lime-900 dark:group-hover:text-lime-300 transition">
                  {video.title}
                </h3>
                <p className="text-sm mt-1 text-left text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition">
                  {video.description}
                </p>
              </div>
            ))}
        </div>

        {/* see all video button container div */}
        <div className="text-center mt-20">
          <button onClick={() => navigate("/all-videos")} className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-green-600 hover:to-lime-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300">🌟 See All Videos</button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaylist;
