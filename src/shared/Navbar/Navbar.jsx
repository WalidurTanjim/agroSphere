import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLeaf } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky w-full top-0 left-0 z-50 p-4 shadow-lg bg-green-900 text-white transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/" className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <FaLeaf className="text-green-600" size={28} /> AgroSphere
        </Link>
        
     
        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link to="/dashboard" className="hover:text-green-700">Dashboard</Link></li>
          <li><Link to="/market" className="hover:text-green-700">Market</Link></li>
          <li><Link to="/community" className="hover:text-green-700">Community</Link></li>
          <li><Link to="/aboutus" className="hover:text-green-700">About Us</Link></li>
          <li><Link to="/events" className="hover:text-green-700">Events</Link></li>
        </ul>
        
     
        <div className="hidden md:flex gap-4">
          <Link to="/signin" className="px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition">Sign In</Link>
          <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">Sign Up</Link>
        </div>


        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

     
      {isOpen && (
        <ul className="md:hidden absolute left-0 top-16 w-full bg-green-800 text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 overflow-hidden">
          <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
          <li><Link to="/market" onClick={() => setIsOpen(false)}>Market</Link></li>
          <li><Link to="/community" onClick={() => setIsOpen(false)}>Community</Link></li>
          <li><Link to="/learning" onClick={() => setIsOpen(false)}>Learning</Link></li>
          <li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
          <Link to="/signin" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-green-900 transition" onClick={() => setIsOpen(false)}>Sign In</Link>
          <Link to="/signup" className="px-4 py-2 bg-white text-green-900 rounded-full hover:bg-green-700 hover:text-white transition" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
