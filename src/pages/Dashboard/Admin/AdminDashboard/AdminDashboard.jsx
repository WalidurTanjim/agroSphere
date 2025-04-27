import React from 'react';
import DashboardRoutes from '../../../../router/DashboardRoutes';
import {DollarSign, ShieldUser, StickyNote, Tractor, Truck, Users, Video} from 'lucide-react';
import useUsersCount from '../../../../hooks/useUsersCount';
import useFarmersCount from '../../../../hooks/useFarmersCount';
import useSellersCount from '../../../../hooks/useSellersCount';
import useTrainersCount from '../../../../hooks/useTrainersCount';
import usePostsCount from '../../../../hooks/usePostsCount';
import useVideosCount from '../../../../hooks/useVideosCount';

const AdminDashboard = () => {
    const [ users ] = useUsersCount();
    const [ farmers ] = useFarmersCount();
    const [ sellers ] = useSellersCount();
    const [ trainers ] = useTrainersCount();
    const [ posts ] = usePostsCount();
    const [ videos ] = useVideosCount();
    console.log(users);

    return (
        <section className='admin_dashboard w-full min-h-screen bg-gray-100'>
            <DashboardRoutes />

            <div className='admin_dashboard_inner container mx-auto px-6 py-14 w-full h-full'>
                <h1 className='text-xl md:text-2xl lg:text-3xl text-slate-700'>Admin <span className='text-slate-600'>Dashboard</span></h1>
                
                {/* cards to display total quantity of specific topic */}
                <div className='cards grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 my-10'>
                    {/* total_user card */}
                    <div className='card total_user bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Users</h1>
                            
                            <div className="flex items-center">
                                <span className='text-blue-500 text-2xl font-semibold me-2'>{users ? users?.count : 0}</span>
                                <div className='p-2 rounded-full bg-blue-100'><Users className='text-blue-600' size={18} /></div>
                            </div>
                        </div>
                    </div>

                    {/* total_farmer card */}
                    <div className='card total_farmer bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Farmers</h1>
                            
                            <div className="flex items-center">
                                <span className='text-blue-500 text-2xl font-semibold me-2'>{farmers ? farmers?.count : 0}</span>
                                <div className='p-2 rounded-full bg-blue-100'><Tractor className='text-blue-600' size={18} /></div>
                            </div>
                        </div>
                    </div>

                    {/* total_sellers card */}
                    <div className='card total_sellers bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Sellers</h1>
                            
                            <div className="flex items-center">
                                <span className='text-blue-500 text-2xl font-semibold me-2'>{sellers ? sellers?.count : 0}</span>
                                <div className='p-2 rounded-full bg-blue-100'><Truck className='text-blue-600' size={18} /></div>
                            </div>
                        </div>
                    </div>

                    {/* total_trainers card */}
                    <div className='card total_trainers bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Trainers</h1>
                            
                            <div className="flex items-center">
                                <span className='text-blue-500 text-2xl font-semibold me-2'>{trainers ? trainers?.count : 0}</span>
                                <div className='p-2 rounded-full bg-blue-100'><ShieldUser className='text-blue-600' size={18} /></div>
                            </div>
                        </div>
                    </div>

                    {/* total_posts card */}
                    <div className='card total_posts bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Posts</h1>
                            
                            <div className="flex items-center">
                                <span className='text-blue-500 text-2xl font-semibold me-2'>{posts ? posts?.count : 0}</span>
                                <div className='p-2 rounded-full bg-blue-100'><StickyNote className='text-blue-600' size={18} /></div>
                            </div>
                        </div>
                    </div>

                    {/* total_videos card */}
                    <div className='card total_videos bg-white border border-gray-300 rounded-md p-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-500 font-medium'>Videos</h1>

                            <div className="flex items-center">
                                <span className='text-blue-500 text-2xl font-semibold me-2'>{videos ? videos?.count : 0}</span>
                                <div className='p-2 rounded-full bg-blue-100'><Video className='text-blue-600' size={18} /></div>
                            </div>
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