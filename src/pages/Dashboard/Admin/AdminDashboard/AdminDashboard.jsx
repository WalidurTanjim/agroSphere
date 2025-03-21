import React from 'react';
import DashboardRoutes from '../../../../router/DashboardRoutes';
import { DollarSign, ShieldUser, StickyNote, Tractor, Truck, Users } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <section className='admin_dashboard w-full min-h-screen bg-gray-100'>
            <DashboardRoutes />

            <div className='admin_dashboard_inner container mx-auto px-6 py-14 w-full h-full '>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-slate-700'>Admin <span className='text-slate-600'>Dashboard</span></h1>
                
                {/* cards to display total quantity of specific topic */}
                <div className='cards grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 my-10'>
                    {/* total_user card */}
                    <div className='card total_user bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Users</h1>
                            
                            <div className='p-2 rounded-full bg-blue-100'><Users className='text-blue-600' size={18} /></div>
                        </div>
                    </div>

                    {/* total_farmer card */}
                    <div className='card total_farmer bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Farmers</h1>
                            
                            <div className='p-2 rounded-full bg-blue-100'><Tractor className='text-blue-600' size={18} /></div>
                        </div>
                    </div>

                    {/* total_sellers card */}
                    <div className='card total_sellers bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Sellers</h1>
                            
                            <div className='p-2 rounded-full bg-blue-100'><Truck className='text-blue-600' size={18} /></div>
                        </div>
                    </div>

                    {/* total_trainers card */}
                    <div className='card total_trainers bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Trainers</h1>
                            
                            <div className='p-2 rounded-full bg-blue-100'><ShieldUser className='text-blue-600' size={18} /></div>
                        </div>
                    </div>

                    {/* total_posts card */}
                    <div className='card total_posts bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Posts</h1>
                            
                            <div className='p-2 rounded-full bg-blue-100'><StickyNote className='text-blue-600' size={18} /></div>
                        </div>
                    </div>

                    {/* total_transactions card */}
                    <div className='card total_transactions bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Transactions</h1>
                            
                            <div className='p-2 rounded-full bg-blue-100'><DollarSign className='text-blue-600' size={18} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;