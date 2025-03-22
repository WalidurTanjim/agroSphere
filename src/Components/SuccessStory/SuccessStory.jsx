import React from 'react';
import Marquee from "react-fast-marquee";
import SuccessCard from './SuccessCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const SuccessStory = () => {
     const axiosPublic = useAxiosPublic()
    const { data: success = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['success'],
        queryFn: async() => {
            const res = await axiosPublic.get('/success-stories');
            const data = await res.data;
            return data;
        }
    })
    return (
        <div className='mb-10 mt-4'>
            <h2 className='text-4xl md:text-5xl text-center font-bold py-8 text-green-800 '>Success Stories</h2>
            <div className='z-0'>
            <Marquee pauseOnHover direction='left' speed={20} >
                {success.map((story, index) => (
                    <SuccessCard key={index} story={story}></SuccessCard>
                ))}
            </Marquee>
            </div>
            <div className='z-0'>
            <Marquee pauseOnHover direction='right' speed={20} >
            {success.map((story, index) => (
                    <SuccessCard key={index} story={story}></SuccessCard>
                ))}
            </Marquee>
            </div>
        </div>
    );
};

export default SuccessStory;