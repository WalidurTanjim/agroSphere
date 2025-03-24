import { useEffect, useState } from "react";
import gif from "../../assets/images/plant.gif"

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
            const title = video.title || ""; // Ensure title is always a string
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
        <div className="w-full min-h-screen">
            <div className="w-11/12 mx-auto py-10">
                <h2 className="text-4xl font-bold text-green-700 text-center pb-10">
                    All Farming Video Tutorials 🎥
                </h2>

                <div className="flex justify-center space-x-4 mb-10">
                    <input
                        type="text"
                        placeholder="Search videos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full md:w-1/3 px-4 py-2 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-green-500"
                    />

                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full md:w-1/3 px-4 py-2 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-green-500"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-gray-200 animate-pulse rounded-lg p-4">
                                <div className="w-full h-56 bg-gray-300 rounded-lg"></div>
                                <div className="h-6 bg-gray-400 rounded mt-4 w-3/4"></div>
                                <div className="h-4 bg-gray-400 rounded mt-2 w-5/6"></div>
                            </div>
                        ))
                    ) : currentVideos.length > 0 ? (
                        currentVideos.map((video) => (
                            <div key={video._id} className="w-full rounded-lg card-bg p-2 relative border-2">
                                <iframe className="w-full h-56 rounded-lg relative z-10" src={video.url} title={video.title} allowFullScreen></iframe>
                                <h3 className="pt-3 text-white text-xl font-bold relative z-10 text-shadow text-left">{video.title}</h3>
                                <p className="text-sm text-white relative z-10 text-shadow text-left">{video.description}</p>
                            </div>

                        ))
                    ) : (
                        <p className="text-center text-green-500 col-span-3">No videos found.</p>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-10 space-x-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-2 sm:px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 sm:px-4 py-2 border rounded ${currentPage === index + 1 ? "bg-green-600 text-white" : "bg-green-50 text-green-600 border-green-500"}`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-2 sm:px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllVideos;
