import React from 'react';
import Banner from './Banner';
import NewsLatter from './NewsLatter';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';
import Trainers from './Trainers/Trainers';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
            <Trainers />
        </div>
    );
};

export default Home;