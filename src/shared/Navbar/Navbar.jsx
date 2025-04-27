import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../context/ThemeProvider";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";

import toast from "react-hot-toast";
import LoadingSpinner from "../../secure/LoadingSpinner";
import logo from "../../assets/logo.png";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Sun, Moon, Menu as LucideMenu, X } from "lucide-react";

const navigation = [
  { name: "Market", href: "/market" },
  { name: "Community", href: "/community" },
  { name: "Events", href: "/events" },
  { name: "Support", href: "/support" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logOut, loading } = useAuth();
  const { userRole } = useUserRole();

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("User logged out successfully");
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Disclosure as="nav" className="sticky top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-[#1a3327] text-[#e7f2ec]"

>
      <div className="container mx-auto px-6 lg:px-48
      ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <LucideMenu className="block size-6 group-data-open:hidden" />
              <X className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} className="h-10 w-auto" />
              <span className="text-2xl font-extrabold tracking-wider text-green-400 drop-shadow-sm hidden md:inline">
                AgroSphere
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:ml-10 md:block">
              <div className="flex">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className={classNames(
                      "hover:text-green-800",
                      "rounded-md px-4 py-2 text-lg font-medium transition-all duration-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full bg-transparent p-[6px] text-green-300 hover:text-white"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-400" />
              )}
            </button>

            {/* Profile Dropdown */}
            {user ? (
              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                  <img
                    src={user?.photoURL}
                    alt="profile"
                    className="size-8 rounded-full"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
                  <p className="block px-4 py-2 rounded-t-md text-xs bg-gray-200 text-center text-gray-700 cursor-not-allowed">
                    {user?.displayName || "No user"}
                  </p>

                  <MenuItem>
                    <Link
                      to={`/dashboard/${userRole.userRole}-dashboard`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleLogOut}>
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Sign Out
                    </p>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <Link to="/signin">
                <button className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-500 rounded-md ms-2">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="md:hidden bg-[#233223]">
        <div className="space-y-1 px-3 pt-2 pb-4">
          {navigation.map((item) => (
            <Link to={item.href} key={item.name}>
              <DisclosureButton
                className="w-full text-left rounded-md px-4 py-2 text-base font-medium text-green-200 hover:text-white hover:bg-green-700"
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
