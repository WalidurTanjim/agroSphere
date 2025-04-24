import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaLeaf, FaHome, FaStore, FaUsers, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeProvider";
import useAuth from "../../hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import useUserRole from "../../hooks/useUserRole";
import { LayoutDashboard } from "lucide-react";
import LoadingSpinner from "../../secure/LoadingSpinner";
import { MdOutlineContactSupport } from "react-icons/md";




// Tailwind UI navbar created by Walidur Tanjim [*** Before update this navbar please inform Walidur Tanjim]
// Tailwind ui important resources for navbar. Don't touch this without permission
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Market', href: '/market', current: false },
  { name: 'Community', href: '/community', current: false },
  { name: 'Events', href: '/events', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// Tailwind ui important resources end

const Navbar = () => {
 
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logOut, loading } = useAuth();

  const { userRole } = useUserRole();

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("User logged out successfully");
    });
  };



  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
 

      <Disclosure as="nav" className="sticky top-0 left-0 z-50 bg-gray-800">
        <div className="container mx-auto px-6 lg:px-48">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
              <div className="flex shrink-0 items-center">
                <img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto" />
              </div>

              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link to={item.href} key={item.name} aria-current={item.current ? 'page' : undefined} className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}>{item.name}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* dark & light mood button & profile with dropdown container */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* dark & light mood button */}
              <button
  onClick={toggleTheme}
  type="button"
  className="relative rounded-full bg-gray-800 p-[6px] text-gray-400 hover:text-white transition duration-300 ease-in-out focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
>
  <span className="sr-only">Toggle theme</span>
  {
    theme === 'dark' ? (
      <SunIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
    ) : (
      <MoonIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
    )
  }
</button>


              {/* profile dropdown */}
              {
                user ?
                  (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img alt="" src={user?.photoURL} className="size-8 rounded-full" />
                        </MenuButton>
                      </div>

                      <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                        <p className="block px-4 py-2 rounded-t-md text-xs bg-gray-200 text-center cursor-not-allowed text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">{user ? user?.displayName : "No user"}</p>

                        <div>
                          {
                            userRole.userRole === "admin" ?
                              <MenuItem>
                                <Link to="/dashboard/admin-dashboard" className="block px-4 py-2 rounded-t-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Dashboard</Link>
                              </MenuItem> :
                              userRole.userRole === "farmer" ?
                                <MenuItem>
                                  <Link to="/dashboard/farmer-dashboard" className="block px-4 py-2 rounded-t-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Dashboard</Link>
                                </MenuItem> :
                                userRole.userRole === "seller" ?
                                  <MenuItem>
                                    <Link to="/dashboard/seller-dashboard" className="block px-4 py-2 rounded-t-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Dashboard</Link>
                                  </MenuItem> :
                                  <MenuItem>
                                    <Link to="/dashboard/trainer-dashboard" className="block px-4 py-2 rounded-t-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Dashboard</Link>
                                  </MenuItem>
                          }
                        </div>

                        <MenuItem onClick={handleLogOut}>
                          <p className="block px-4 py-2 rounded-b-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer">Sign Out</p>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  ) : 
                  <Link to={`/signin`}><button className={`px-4 py-1.5 text-sm font-medium text-[#fff] outline-none border border-gray-200 rounded-md bg-green-600 hover:bg-green-400 active:bg-green-600 ms-2 cursor-pointer`}>Sign In</button></Link>
              }
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link to={item?.href} key={item.name}>
                <DisclosureButton aria-current={item.current ? 'page' : undefined} className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium w-full text-left',
                )}>{item.name}</DisclosureButton>
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default Navbar;
