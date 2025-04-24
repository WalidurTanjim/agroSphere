import React from 'react';
import Banner from './Banner';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';
import LatestForum from './LatestForum';
import SuccessStory from '../../../Components/SuccessStory/SuccessStory';
// import CountdownTimer from '../../../Components/Occation Features/CountdownTimer';



const Home = () => {
    return (
        <div>
            {/* <CountdownTimer></CountdownTimer> */}
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
            <AICropAdvisory></AICropAdvisory>
            <SuccessStory></SuccessStory>
          
        </div>
    );
};

export default Home;