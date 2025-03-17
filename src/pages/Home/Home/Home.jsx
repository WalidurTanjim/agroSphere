import React from 'react';
import Banner from './Banner';
import NewsLatter from './NewsLatter';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';
import LatestForum from './LatestForum';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoPlaylist></VideoPlaylist>
            <LatestForum></LatestForum>
            <NewsLatter></NewsLatter>
          <AICropAdvisory></AICropAdvisory>
        </div>
    );
};

export default Home;