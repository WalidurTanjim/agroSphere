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
  const {user, logOut} = useAuth()
  const handleLogOut = () => {
    logOut()
    .then(res=>{
      toast.success("User logged out successfully")
    })
  }
// console.log(user)
  return (
    <nav className={`sticky top-0 left-0 w-full z-50 p-4 shadow-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-green-900 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <NavLink to="/" className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <FaLeaf className="text-green-500" size={28} /> AgroSphere
        </NavLink>


        <ul className="hidden lg:flex gap-6 text-lg items-center">
          <li><NavLink to="/" className="hover:text-green-400 flex items-center gap-2"><FaHome /> Home</NavLink></li>
          <li><NavLink to="/market" className="hover:text-green-400 flex items-center gap-2"><FaStore /> Market</NavLink></li>
          <li><NavLink to="/community" className="hover:text-green-400 flex items-center gap-2"><FaUsers /> Community</NavLink></li>
          <li><NavLink to="/aboutus" className="hover:text-green-400 flex items-center gap-2"><FaInfoCircle /> About Us</NavLink></li>
          <li><NavLink to="/forum" className="hover:text-green-400 flex items-center gap-2"><FaCalendarAlt /> Events</NavLink></li>
        </ul>


        <div className="hidden lg:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 transition-transform duration-300 transform hover:scale-110 shadow-md"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-500 w-6 h-6 transition-transform duration-500 rotate-180" />
            ) : (
              <FaMoon className="text-gray-700 w-6 h-6 transition-transform duration-500 rotate-180" />
            )}
          </button>

          {user ? <>
          <button onClick={handleLogOut} className="flex justify-center items-center cursor-pointer"><IoIosLogOut className="mr-3"/> LogOut</button>
          <img referrerPolicy="no-referrer" src={user.photoURL} alt="User Photo" className="rounded-full w-10"/>
          </> : <>
            <NavLink to="/signin" className="px-4 py-2 border border-green-400 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
            Sign Up
          </NavLink>
          </>}
        </div>


        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>


      {isOpen && (
        <ul className={`lg:hidden absolute left-0 top-16 w-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-green-800 text-white'} flex flex-col items-center space-y-4 py-4 transition-all duration-300`}>
          <li><NavLink to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}><FaHome /> Home</NavLink></li>
          <li><NavLink to="/market" className="flex items-center gap-2" onClick={() => setIsOpen(false)}><FaStore /> Market</NavLink></li>
          <li><NavLink to="/community" className="flex items-center gap-2" onClick={() => setIsOpen(false)}><FaUsers /> Community</NavLink></li>
          <li><NavLink to="/aboutus" className="flex items-center gap-2" onClick={() => setIsOpen(false)}><FaInfoCircle /> About Us</NavLink></li>
          <li><NavLink to="/events" className="flex items-center gap-2" onClick={() => setIsOpen(false)}><FaCalendarAlt /> Events</NavLink></li>


          <button onClick={toggleTheme} className="p-2 rounded-full border border-white">
            {theme === 'dark' ? <FaSun className="text-yellow-500 w-6 h-6" /> : <FaMoon className="text-gray-700 w-6 h-6" />}
          </button>

          <NavLink to="/signin" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-green-900 transition" onClick={() => setIsOpen(false)}>
            Sign In
          </NavLink>
          <NavLink to="/signup" className="px-4 py-2 bg-white text-green-900 rounded-full hover:bg-green-700 hover:text-white transition" onClick={() => setIsOpen(false)}>
            Sign Up
          </NavLink>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
