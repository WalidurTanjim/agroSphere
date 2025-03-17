import { useEffect, useState } from "react";

const AllVideos = () => {
    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(""); // New state for category filter

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

    // Search and category filter function
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        filterVideos(value, selectedCategory);
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setSelectedCategory(value);
        filterVideos(searchTerm, value);
    };

    const filterVideos = (searchTerm, category) => {
        const filtered = videos.filter((video) => {
            const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category ? video.category === category : true;
            return matchesSearch && matchesCategory;
        });
        setFilteredVideos(filtered);
    };

    // Get unique categories for dropdown
    const categories = [...new Set(videos.map((video) => video.category))];

    return (
        <div className="w-full min-h-screen py-16">
            <div className="w-11/12 mx-auto">
                <h2 className="text-4xl font-bold text-green-700 text-center pb-10">
                    All Farming Video Tutorials 🎥
                </h2>

                {/* Search Box and Category Dropdown */}
                <div className="flex justify-center space-x-4 mb-10">
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full btn bg-green-50 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative w-full md:w-1/3">
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="w-full btn bg-green-50 border border-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                        >
                            <option value="" className="">All Categories</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category} className="hover:bg-green-500">
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
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
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-3">No videos found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllVideos;
