const StoryCard = ({ story }) => {
    return (
        <div className="feedback text-sm text-gray-500 w-full h-auto px-4 py-6 rounded-md bg-gray-50">
            <div className="flex gap-2 items-start mb-3">
                <img src={story?.image} alt="Profile picture" className="w-[33px] h-[33px] border border-slate-500 rounded-full" />

                <div>
                    <h1 className="text-sm font-medium text-slate-600">{story?.name}</h1>
                    <p className="text-xs text-gray-400">{story?.email}</p>
                </div>
            </div>

            <p className="text-slate-800">{story?.description.length > 190 ? story?.description.slice(0, 190)+'...' : story?.description}</p>
        </div>
    );
};

export default StoryCard;