import React from 'react';
import Banner from './Banner';
import NewsLatter from './NewsLatter';
import VideoPlaylist from '../../../Components/VideoPlaylist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewsLatter></NewsLatter>
            <VideoPlaylist></VideoPlaylist>
        </div>
    );
};

export default Home;