import React from 'react';
import Banner from './Banner';
import NewsLatter from './NewsLatter';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import Trainers from './Trainers/Trainers';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';
import LatestForum from './LatestForum';
import SuccessStory from '../../../Components/SuccessStory/SuccessStory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
            <LatestForum></LatestForum>
            <NewsLatter></NewsLatter>
            <AICropAdvisory></AICropAdvisory>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;