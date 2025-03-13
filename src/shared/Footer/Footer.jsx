import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
     
        <div>
          <Link to="/" className="text-2xl font-bold tracking-wide flex items-center gap-2">
            <FaLeaf className="text-green-400" size={28} /> AgroSphere
          </Link>
          <p className="mt-3 text-gray-300 text-sm">A Smart Digital Platform for Farmers</p>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/dashboard" className="hover:text-green-400">Dashboard</Link></li>
            <li><Link to="/market" className="hover:text-green-400">Market</Link></li>
            <li><Link to="/community" className="hover:text-green-400">Community</Link></li>
            <li><Link to="/learning" className="hover:text-green-400">Learning</Link></li>
            <li><Link to="/events" className="hover:text-green-400">Events</Link></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-green-400" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-green-400" aria-label="Twitter"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-green-400" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-green-400" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} AgroSphere. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;