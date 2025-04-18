import React from 'react';
import DashboardRoutes from '../../../../router/DashboardRoutes';
import SuccessStory from '../SuccessStory/SuccessStory';
import WeatherDashboard from '../../../WeatherUpdate/WeatherDashboard';

const FarmerDashboard = () => {
    return (
        <section className='farmer_dashboard w-full min-h-screen bg-gray-100'>
            <DashboardRoutes />
            
            <div className='admin_dashboard_inner container mx-auto px-6 py-14 w-full h-full'>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-slate-700'>Farmer <span className='text-slate-600'>Dashboard</span></h1>

                    {/* work here */}
                <div className='my-10'>
                    {/* <SuccessStory/> */}
                    <WeatherDashboard/>
                </div>
            </div>
        </section>
    );
};

export default FarmerDashboard;