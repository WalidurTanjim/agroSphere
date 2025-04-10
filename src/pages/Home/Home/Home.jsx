import React from 'react';
import Banner from './Banner';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';
import LatestForum from './LatestForum';
import SuccessStory from '../../../Components/SuccessStory/SuccessStory';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
            <AICropAdvisory></AICropAdvisory>
            <LatestForum></LatestForum>
            <SuccessStory></SuccessStory>
          
        </div>
    );
};

export default Home;