import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaLeaf, FaHome, FaStore, FaUsers, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky w-full top-0 left-0 z-50 p-4 shadow-lg bg-green-900 text-white transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <NavLink to="/" className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <FaLeaf className="text-green-600" size={28} /> AgroSphere
        </NavLink>

 
        <ul className="hidden lg:flex gap-6 text-lg items-center">
          <li>
            <NavLink to="/dashboard" className="hover:text-green-700 flex items-center gap-2">
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/market" className="hover:text-green-700 flex items-center gap-2">
              <FaStore /> Market
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className="hover:text-green-700 flex items-center gap-2">
              <FaUsers /> Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className="hover:text-green-700 flex items-center gap-2">
              <FaInfoCircle /> About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="hover:text-green-700 flex items-center gap-2">
              <FaCalendarAlt /> Events
            </NavLink>
          </li>
        </ul>

        <div className="hidden lg:flex gap-4">
          <NavLink to="/signin" className="px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition">Sign In</NavLink>
          <NavLink to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">Sign Up</NavLink>
        </div>

      
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

  
      {isOpen && (
        <ul className="lg:hidden absolute left-0 top-16 w-full bg-green-800 text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300">
          <li>
            <NavLink to="/dashboard" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/market" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaStore /> Market
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaUsers /> Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaInfoCircle /> About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaCalendarAlt /> Events
            </NavLink>
          </li>
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
