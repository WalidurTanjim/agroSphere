import React from 'react';
import Banner from './Banner';
import NewsLatter from './NewsLatter';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import Trainers from './Trainers/Trainers';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
            <Trainers />
            <NewsLatter></NewsLatter>
            <AICropAdvisory></AICropAdvisory>
        </div>
    );
};

export default Home;