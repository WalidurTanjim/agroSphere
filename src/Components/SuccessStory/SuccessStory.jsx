import React from 'react';
import Marquee from "react-fast-marquee";
import SuccessCard from './SuccessCard';
const SuccessStory = () => {
    return (
        <div className='mb-10 mt-4'>
            <h2 className='text-4xl md:text-5xl text-center font-bold py-8 text-green-800 '>Success Stories</h2>
            <div className='z-0'>
            <Marquee pauseOnHover direction='left' speed={20} >
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
            </Marquee>
            </div>
            <div className='z-0'>
            <Marquee pauseOnHover direction='right' speed={20} >
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
                <SuccessCard></SuccessCard>
            </Marquee>
            </div>
        </div>
    );
};

export default SuccessStory;