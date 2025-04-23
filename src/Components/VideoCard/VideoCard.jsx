const VideoCard = ({ video }) => {
    const { _id, title, description , category, url } = video;
    // console.log(video);

    return (
        <div className="video-card group w-full p-2 border border-gray-200 hover:border-green-300 rounded-lg hover:shadow-xl">
            <iframe className="w-full h-[125px] border border-gray-200 rounded-md" src={url} title={title} allowFullScreen></iframe>

            <div className="mt-2 text-start">
                <p className="text-left text-xs text-slate-700 inline-block px-3 rounded-full border border-green-300 bg-green-50">{ category }</p>
                <h1 className="font-medium text-left text-slate-700 group-hover:text-green-700 pt-1">{title.length > 19 ? title.slice(0, 19)+'...' : title}</h1>
            </div>
        </div>
    );
};

export default VideoCard;