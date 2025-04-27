import DashboardRoutes from '../../../../router/DashboardRoutes';

import WeatherDashboard from '../../../WeatherUpdate/WeatherDashboard';

// Tailwind UI resources for modal
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import ChangeRoleModal from '../../../../components/ChangeRoleModal/ChangeRoleModal';
import WasteList from '../../../../Components/WasteList/WasteList';

const FarmerDashboard = () => {
    const { user, open, setOpen } = useAuth();

    return (
        <section className='farmer_dashboard w-full min-h-screen bg-gray-100'>
            <DashboardRoutes />

            <div className='admin_dashboard_inner container mx-auto px-6 py-14 w-full h-full'>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-slate-700'>Farmer <span className='text-slate-600'>Dashboard</span></h1>

                {/* work here */}
                <div className='my-10'>
                    {/* <SuccessStory/> */}
                    {/* <WeatherDashboard/> */}
                    <button type="button" className='px-5 py-2 text-sm font-medium text-slate-200 bg-green-700 hover:bg-green-600 active:bg-green-700 border outline-none border-gray-200 rounded-md' onClick={() => setOpen(true)}>Change Role</button>
                </div>
                <WasteList></WasteList>
            </div>


            { open ? <ChangeRoleModal /> : undefined }
        </section>
    );
};

export default FarmerDashboard;