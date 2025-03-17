import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaLeaf, FaHome, FaStore, FaUsers, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeProvider";
import useAuth from "../../Hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("User logged out successfully");
    });
  };

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/market", label: "Market", icon: <FaStore /> },
    { to: "/community", label: "Community", icon: <FaUsers /> },
    { to: "/aboutus", label: "About Us", icon: <FaInfoCircle /> },
    { to: "/forum", label: "Forum", icon: <FaCalendarAlt /> },
    { to: "/events", label: "Events", icon: <FaCalendarAlt /> },
  ];

  return (
    <nav className={`sticky top-0 left-0 w-full z-50 p-4 shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-green-900 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <NavLink to="/" className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <FaLeaf className="text-green-500" size={28} /> AgroSphere
        </NavLink>

        <ul className="hidden lg:flex gap-6 text-lg items-center">
          {navLinks.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink to={to} className="hover:text-green-400 flex items-center gap-2">
                {icon} {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4 relative">
          <button onClick={toggleTheme} className="p-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 transition-transform duration-300 transform hover:scale-110 shadow-md">
            {theme === 'dark' ? <FaSun className="text-yellow-500 w-6 h-6" /> : <FaMoon className="text-gray-700 w-6 h-6" />}
          </button>

          {user ? (
            <div className="relative">
              <img referrerPolicy="no-referrer" src={user.photoURL} alt="User" className="rounded-full w-10 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)} />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                  <p className="px-4 py-2 border-b">{user.displayName}</p>
                  <button onClick={handleLogOut} className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center gap-2">
                    <IoIosLogOut /> LogOut
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/signin" className="px-4 py-2 border border-green-400 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition">Sign In</NavLink>
              <NavLink to="/signup" className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">Sign Up</NavLink>
            </>
          )}
        </div>

        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {isOpen && (
        <ul className={`lg:hidden absolute left-0 top-16 w-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-green-800 text-white'} flex flex-col py-4 transition-all duration-300 text-center space-y-4`}>
          {navLinks.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink to={to} className="flex items-center gap-2 justify-center" onClick={() => setIsOpen(false)}>
                {icon} {label}
              </NavLink>
            </li>
          ))}
          
          {user ? (
            <div className="flex flex-col items-center space-y-2">
              <img referrerPolicy="no-referrer" src={user.photoURL} alt="User" className="rounded-full w-12 border border-white" />
              <p>{user.displayName}</p>
              <button onClick={handleLogOut} className="text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition flex items-center gap-2">
                <IoIosLogOut /> LogOut
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/signin" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-green-900 transition">Sign In</NavLink>
              <NavLink to="/signup" className="px-4 py-2 bg-white text-green-900 rounded-full hover:bg-green-700 hover:text-white transition">Sign Up</NavLink>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
