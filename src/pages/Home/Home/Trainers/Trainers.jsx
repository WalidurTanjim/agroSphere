import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useTrainers from '../../../../hooks/useTrainers';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserTie } from 'react-icons/fa';


const Trainers = () => {
    const [trainers, isPending, isError, error, refetch] = useTrainers();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [theme, setTheme] = useState('light');

    const filteredTrainers = trainers.filter((trainer) =>
        trainer.country.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory ? trainer.category.toLowerCase() === selectedCategory.toLowerCase() : true)
    );



    return (
        <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-lime-50 via-green-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-lg">
            <SectionTitle title="AgriTrainer Explorer" subtitle="Empowering farmers through expert guidance" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
                <div className="flex gap-4 w-full">
                    <div className="relative w-full text-center">
                        <input
                            type="search"
                            placeholder="Search trainer by country"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`py-2 px-5 w-2/3 border outline-none border-green-600 focus:border-green-800 rounded-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800 text-white'}`}
                        />
                        <FaSearch className="absolute top-3 right-3 text-green-600" />
                    </div>
                   
                </div>

             
            </div>

       

            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-4 ${theme === 'light' ? 'text-green-800' : 'text-green-300'}`}>Nearby Agri Experts</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredTrainers.map((trainer) => (
                            <div key={trainer._id} className={`p-5 rounded-xl shadow-md transition hover:shadow-xl ${theme === 'light' ? 'bg-white' : 'bg-gray-800 text-white'}`}>
                                <div className="flex items-center gap-4 mb-2">
                                    <FaUserTie className="text-green-500 text-xl" />
                                    <Link to={`/trainer_profile/${trainer._id}`} className="text-lg font-semibold hover:underline">
                                        {trainer?.trainer?.name}
                                    </Link>
                                </div>
                                <p><strong>Country:</strong> {trainer.country}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-300">{trainer.category}</p>
                                <a href={trainer.videoUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline text-cyan-500">Watch Training</a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <MapContainer center={[23.8759, 90.3795]} zoom={14} style={{ height: '500px', width: '100%' }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {filteredTrainers.map((trainer) => (
                                <Marker key={trainer._id} position={[trainer.latitude, trainer.longitude]}>
                                    <Popup>
                                        <div className="trainer-popup text-center">
                                            <img src={trainer.image || 'default-image.jpg'} alt={trainer.name} className="w-16 h-16 rounded-full mx-auto object-cover mb-2" />
                                            <Link to={`/trainer_profile/${trainer._id}`} className="text-cyan-500 hover:underline font-medium">{trainer?.trainer?.name}</Link>
                                            <p>{trainer.country}</p>
                                            <a href={trainer.videoUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline">Watch Training</a>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainers;