import React from 'react';
import Banner from './Banner';
import NewsLatter from './NewsLatter';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
        </div>
    );
};

export default Home;