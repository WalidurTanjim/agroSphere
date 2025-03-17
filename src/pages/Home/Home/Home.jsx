import React from 'react';
import Banner from './Banner';
import NewsLatter from './NewsLatter';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import Trainers from './Trainers/Trainers';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
            <Trainers />
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;