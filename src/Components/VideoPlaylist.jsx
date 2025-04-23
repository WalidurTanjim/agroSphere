import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle/SectionTitle";
import useVideos from "../hooks/useVideos";
import Spinner from "./Spinner/Spinner";
import VideoCard from "./VideoCard/VideoCard";

const VideoPlaylist = () => {
  const [videos, isPending, isError, error, refetch] = useVideos();
  const navigate = useNavigate();

  return (
    <section className="tutorials w-full">
      <div className="tutorials-inner container mx-auto px-6 lg:px-40 py-12 text-center">

        {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-lime-700 dark:text-lime-400 mb-4 tracking-tight py-12">
          📺 Smart Farming Video Hub
        </h2> */}

        <SectionTitle title={"Smart Farming Video Hub"} sub_title={"Explore educational and inspiring videos on modern and traditional farming"} />

        {/* all video container div starts */}
        {
          isPending ? (
            <div className="w-full py-14 flex items-center justify-center">
              <Spinner />
            </div>
          ) : isError ? (
            <div className="w-full py-14 flex items-center justify-center">
              <h1 className="text-2xl font-medium text-red-600">{error?.message}</h1>
            </div>
          ) : (
            <div className="grid gap-5 gird-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {
                videos?.map(video => <VideoCard key={video?._id} video={video} />)
              }
            </div>
          )
        }

        {/* see all video button container div */}
        <div className="text-center mt-20">
          <button onClick={() => navigate("/all-videos")} className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-green-600 hover:to-lime-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300">🌟 See All Videos</button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaylist;
