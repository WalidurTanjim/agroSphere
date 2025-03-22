import { ArrowDownToDot, ArrowLeft, Home, LayoutDashboard, NotebookPen, UserCheck, Users, Video } from "lucide-react";
import React, { useState } from "react"
import { Link, useRouteError } from "react-router-dom";
import logo from '../assets/logo.png'
import useUserRole from "../hooks/useUserRole";
import useAuth from "../hooks/useAuth";

const DashboardRoutes = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const { user } = useAuth();
    const { userRole } = useUserRole();

    return (
        <>
            {/*  <!-- Component: Side navigation menu with content separator --> */}
            {/*  <!-- Mobile trigger --> */}
            <button title="Side navigation" type="button" className={`cursor-pointer visible fixed right-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 ${isSideNavOpen ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45" : ""}`} aria-haspopup="menu" aria-label="Side navigation" aria-expanded={isSideNavOpen ? " true" : "false"} aria-controls="nav-menu-2" onClick={() => setIsSideNavOpen(!isSideNavOpen)}>
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                    <span aria-hidden="true" className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"></span>
                    <span aria-hidden="true" className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                    <span aria-hidden="true" className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                </div>
            </button>

            {/*  <!-- Side Navigation --> */}
            <aside id="nav-menu-2" aria-label="Side navigation" className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-[#222E3C] transition-transform ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"}`}>
                {/* dashboard routes logo */}
                <Link to="/" aria-label="WindUI logo" className="flex items-center gap-2 whitespace-nowrap p-6 text-xl text-white font-medium focus:outline-none">
                    <img src={logo} className="w-8 h-8" /> AgroSphere
                </Link>

                {/* all routes in here */}
                <nav aria-label="side navigation" className="flex-1 divide-y divide-slate-400 overflow-auto">
                    {/* user profile */}
                    <div className="user_profile flex gap-2 px-6 py-3">
                        <img src={user?.photoURL} className="rounded-md w-[30px] h-[30px]" alt="User Avatar" />
                        <div className="mb-5">
                            <h1 className="text-sm font-medium text-white">{user?.displayName}</h1>
                        </div>
                    </div>


                    {/* dashboard routes */}
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            {
                                userRole.userRole === "admin" ?
                                    <>
                                        <li className="px-3">
                                            <Link to='/dashboard/admin-dashboard' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                <div className="flex items-center self-center"><LayoutDashboard size={20} /></div>

                                                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Admin Dashboard</div>
                                            </Link>
                                        </li>

                                        <li className="px-3">
                                            <Link to='/dashboard/video-upload' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                <div className="flex items-center self-center"><Video size={20} /></div>

                                                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Video Upload</div>
                                            </Link>
                                        </li>

                                        <li className="px-3">
                                            <Link to='/dashboard/incomming-requests' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                <div className="flex items-center self-center"><UserCheck size={20} /></div>

                                                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Incomming Requests</div>
                                            </Link>
                                        </li>

                                        <li className="px-3">
                                            <Link to='/dashboard/all-users' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                <div className="flex items-center self-center"><Users size={20} /></div>

                                                <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">All Users</div>
                                            </Link>
                                        </li>
                                    </> :
                                    userRole.userRole === "farmer" ?
                                        <>
                                            <li className="px-3">
                                                <Link to='/dashboard/farmer-dashboard' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                    <div className="flex items-center self-center"><LayoutDashboard size={20} /></div>

                                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Farmer Dashboard</div>
                                                </Link>
                                            </li>

                                            <li className="px-3">
                                                <Link to='/dashboard/farmer-dashboard' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                    <div className="flex items-center self-center"><NotebookPen size={20} /></div>

                                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Add Success Story</div>
                                                </Link>
                                            </li>
                                        </> :
                                        userRole.userRole === "seller" ?
                                            <>
                                                <li className="px-3">
                                                    <Link to='/dashboard/seller-dashboard' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                        <div className="flex items-center self-center"><LayoutDashboard size={20} /></div>

                                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Seller Dashboard</div>
                                                    </Link>
                                                </li>
                                            </> :
                                            <>
                                                <li className="px-3">
                                                    <Link to='/dashboard/trainer-dashboard' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                                        <div className="flex items-center self-center"><LayoutDashboard size={20} /></div>

                                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Trainer Dashboard</div>
                                                    </Link>
                                                </li>
                                            </>
                            }
                        </ul>
                    </div>

                    {/* broad routes */}
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            {/* home route */}
                            <li className="px-3">
                                <Link to='/' className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100 focus:bg-gray-100 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-400">
                                    <div className="flex items-center self-center"><Home size={20} /></div>

                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">Home</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* footer button */}
                <footer className="border-t border-slate-200 p-3 cursor-default">
                    <p className="flex items-center gap-3 rounded p-3 text-gray-400 transition-colors hover:bg-gray-100  hover:text-gray-600 active:bg-gray-100">
                        <div className="flex items-center self-center"><ArrowLeft size={20} /></div>

                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">Sign out</div>
                    </p>
                </footer>
            </aside>

            {/*  <!-- Backdrop --> */}
            <div className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"}`} onClick={() => setIsSideNavOpen(false)} ></div>
            {/*  <!-- End Side navigation menu with content separator --> */}
        </>
    );
};

export default DashboardRoutes;
