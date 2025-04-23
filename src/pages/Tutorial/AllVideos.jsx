import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Search, VideoIcon } from "lucide-react";

const AllVideos = () => {
    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 9;

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/videos")
            .then((res) => res.json())
            .then((data) => {
                setVideos(data);
                setFilteredVideos(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    useEffect(() => {
        filterVideos(searchTerm, selectedCategory);
    }, [searchTerm, selectedCategory, videos]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1);
    };

    const filterVideos = (search, category) => {
        const filtered = videos.filter((video) => {
            const title = video.title || "";
            const matchesSearch = title.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category ? video.category === category : true;
            return matchesSearch && matchesCategory;
        });
        setFilteredVideos(filtered);
        setCurrentPage(1);
    };

    const categories = [...new Set(videos.map((video) => video.category))];

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 text-center mb-12 flex items-center justify-center gap-3">
                    <VideoIcon className="w-10 h-10 py-12" /> Farming Video Tutorials
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full pl-10 pr-4 py-3 border border-green-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-700 placeholder-green-400"
                        />
                    </div>

                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full md:w-1/3 px-4 py-3 border border-green-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-700"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-gray-200 animate-pulse rounded-xl p-4">
                                <div className="w-full h-56 bg-gray-300 rounded-lg"></div>
                                <div className="h-6 bg-gray-400 rounded mt-4 w-3/4"></div>
                                <div className="h-4 bg-gray-400 rounded mt-2 w-5/6"></div>
                            </div>
                        ))
                    ) : currentVideos.length > 0 ? (
                        currentVideos.map((video) => (
                            <div
                                key={video._id}
                                className="bg-white dark:bg-green-950 border border-green-100 dark:border-green-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
                            >
                                <iframe
                                    className="w-full h-56"
                                    src={video.url}
                                    title={video.title}
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-green-800 dark:text-white mb-2 text-center">
                                        {video.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-green-500 col-span-3">No videos found.</p>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12 space-x-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" /> Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-4 py-2 rounded transition duration-200 font-semibold ${currentPage === index + 1 ? "bg-green-600 text-white" : "bg-white border border-green-500 text-green-700"}`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                        >
                            Next <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllVideos;