import React from 'react';
import DashboardRoutes from '../../router/DashboardRoutes';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ChangeRoleModal from '../ChangeRoleModal/ChangeRoleModal';

const WasteIncome = () => {
    const { user, open, setOpen } = useAuth();
    return (
        <div>
            <DashboardRoutes />
            <div className="px-4 lg:px-20 py-10">
                <h1 className="text-2xl font-bold text-center lg:text-3xl pb-10 w-11/12 mx-auto">
                    If you want to earn extra income, then follow the methods given below:
                </h1>
                <div className="overflow-x-auto w-11/12 mx-auto mb-10">
                    <table className="min-w-full border border-gray-300 text-left text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2 font-bold text-center">Step</th>
                                <th className="border px-4 py-2 font-bold text-center">Description</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">One way to earn extra income is by selling the waste you've collected on this site. This can help you generate a decent amount of revenue.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2">To earn income this way, you need to send a request for a seller account.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">3</td>
                                <td className="border px-4 py-2">You will be approved as a seller within 24 hours.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">4</td>
                                <td className="border px-4 py-2">After that, you can create a post mentioning how much waste you have, what kind of waste it is, and how long you've been collecting it.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">5</td>
                                <td className="border px-4 py-2">Once posted, your listing will be visible in the waste market.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">6</td>
                                <td className="border px-4 py-2">If someone wants to buy, we will connect them with you.</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">7</td>
                                <td className="border px-4 py-2">If you follow these rules, we hope you’ll be able to earn a good income.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col items-center justify-center gap-3 w-11/12 mx-auto mb-10'>
                    <h1 className='font-bold text-center'>Before changing the role, please visit waste market.</h1>
                    <Link to="/dashboard/waste-market" className='btn hover:bg-green-600 bg-green-500 w-[80px]'>Visit</Link>
                </div>
                <div className='flex flex-col items-center justify-center gap-3 w-11/12 mx-auto mb-10'>
                    <h1 className='font-bold text-center'>Now you can change the role.</h1>
                    <button type="button" className='btn bg-green-500 hover:bg-green-600 outline-none w-[80px]' onClick={() => setOpen(true)}>Change</button>
                </div>
            </div>
            { open ? <ChangeRoleModal /> : undefined }
        </div>
    );
};

export default WasteIncome;