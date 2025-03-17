import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useTrainers from '../../../../hooks/useTrainers';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Trainers = () => {
    const [ trainers, isPending, isError, error, refetch ] = useTrainers();
    const [searchTerm, setSearchTerm] = useState('');
    // console.log(trainers)

    // Filter trainers based on the search term
    const filteredTrainers = trainers.filter((trainer) =>
        trainer.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className='trainers relative container mx-auto px-6 py-12'>
            <SectionTitle title={"Find Nearby Farming Trainers"} />

            <div className='search-field mb-10 w-full'>
                <input
                    type="search"
                    placeholder="Search trainer by country"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="py-2 px-5 w-full border outline-none border-gray-300 focus:border-green-600 rounded-md"
                />
            </div>


            <div className='all-trainers'>
                <MapContainer center={[23.8759, 90.3795]} zoom={14} style={{ height: '500px', width: '100%' }} className='rounded-md'>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {filteredTrainers.map(trainer => (
                        <Marker key={trainer._id} position={[trainer.latitude, trainer.longitude]}>
                        <Popup>
                            <strong>{trainer.name}</strong>
                            <br />
                            <a href={trainer.videoUrl} target="_blank" rel="noopener noreferrer">Watch Training</a>
                        </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
};

export default Trainers;