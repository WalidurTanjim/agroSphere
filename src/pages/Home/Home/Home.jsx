import React from 'react';
import Banner from './Banner';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';
import LatestForum from './LatestForum';
import SuccessStory from '../../../Components/SuccessStory/SuccessStory';
import CountdownTimer from '../../../Components/Occation Features/CountdownTimer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CountdownTimer></CountdownTimer>
            <VideoPlaylist></VideoPlaylist>
            <AICropAdvisory></AICropAdvisory>
            <LatestForum></LatestForum>
            <SuccessStory></SuccessStory>
          
        </div>
    );
};

export default Home;