import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useTrainers from '../../../../hooks/useTrainers';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Trainers = () => {
    const [ trainers, isPending, isError, error, refetch ] = useTrainers();
    // console.log(trainers)

    return (
        <section className='trainers container mx-auto px-6 py-12'>
            <SectionTitle title={"Find Nearby Farming Trainers"} />

            <div className='all-trainers'>
                <MapContainer center={[23.8759, 90.3795]} zoom={14} style={{ height: '500px', width: '100%' }} className='rounded-md'>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {trainers.map(trainer => (
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