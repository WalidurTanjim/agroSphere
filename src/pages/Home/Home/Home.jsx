import React from 'react';
import Banner from './Banner';
import VideoPlaylist from '../../../Components/VideoPlaylist';
import AICropAdvisory from '../../../AI Intrigate/AICropAdvisory';
import SuccessStory from '../../../Components/SuccessStory/SuccessStory';
import Questions from '../Questions/Questions';
import FeatureShowcase from '../../../Components/optional/FeatureShowcase';
import ScrollReveal from '../../../Components/optional/ScrollReveal ';
import AgricultureHighlight from '../../../Components/optional/AgricultureHighlight ';
import AppPromoSection from '../../../Components/optional/AppPromoSection';


const Home = () => {
    return (
        <div className='agrospere'>
            
            <ScrollReveal direction="up" delay={0.2} duration={0.9} blur={true}>
                <Banner />
            </ScrollReveal>
            <ScrollReveal delay={0.1}><VideoPlaylist /></ScrollReveal>
            <AICropAdvisory />
            <ScrollReveal delay={0.3}><FeatureShowcase /></ScrollReveal>
            <AgricultureHighlight />
            <ScrollReveal delay={0.4}><SuccessStory /></ScrollReveal>
            <ScrollReveal delay={0.5}><Questions /></ScrollReveal>
            <AppPromoSection></AppPromoSection>
        </div>
    );
};

export default Home;
