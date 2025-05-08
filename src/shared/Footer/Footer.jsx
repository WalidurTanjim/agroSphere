import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import AgroButton from "../Button/AgroButton";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-[#0F0E13]">
      <div className="container mx-auto px-6 2xl:px-40 py-14 text-sm grid gap-5 items-start grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 md:col-span-4">
          <h1 className="text-white text-[2rem] md:text-[2.5rem] pb-1">
            Moving Forward Together for Stronger Agriculture
          </h1>
          <p>
            AgroSphere brings modern agricultural solutions right to farmers' fingertips, offering smart crop advice, market prices, weather updates, and much more.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 flex gap-2 items-center justify-start md:justify-center md:flex-col lg:flex-row">


          <Link to="/dashboard/farmer-dashboard">
          <AgroButton >
          Dashboard
          </AgroButton>
          </Link>

          <Link to="/support">
          <AgroButton variant="outline">
          Get in Touch
          </AgroButton>
          </Link>

          {/* <button className="text-white bg-black px-5 py-2 rounded-md border border-gray-300">Get in Touch</button> 
<button className="text-black bg-white px-5 py-2 rounded-md border border-gray-300">Dashboard</button>
*/}
        </div>
      </div>

      <div className="pt-10 pb-12 text-sm border-t border-[#0F0E13]">
        <div className="container px-6 2xl:px-40 mx-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-4">
              <Link to="/" className="flex items-center gap-2 mb-6 text-base font-medium text-slate-700">
                <img src={logo} alt="logo" className="w-[25px] h-[25px]" />
                <span className="text-xl text-white font-medium">AgroSphere</span>
              </Link>
              <p className="text-white">
                AgroSphere is a digital platform designed for farmers, offering real-time crop insights, weather updates, AI-powered advisory, and marketplace access.
              </p>
            </div>

            <nav className="col-span-2 md:col-span-4 lg:col-span-2">
              <h3 className="pb-3 text-base font-medium text-gray-200">Product</h3>
              <ul>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Features</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Customers</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Why Us?</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Pricing</Link></li>
              </ul>
            </nav>

            <nav className="col-span-2 md:col-span-4 lg:col-span-2">
              <h3 className="pb-3 text-base font-medium text-gray-200">Docs & Help</h3>
              <ul>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Documentation</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Training</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">System Status</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">FAQs</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Help Center</Link></li>
              </ul>
            </nav>

            <nav className="col-span-2 md:col-span-4 lg:col-span-2">
              <h3 className="pb-3 text-base font-medium text-gray-200">About Us</h3>
              <ul>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">About AgroSphere</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Careers</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Leadership</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Blog</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Events</Link></li>
              </ul>
            </nav>

            <nav className="col-span-2 md:col-span-4 lg:col-span-2">
              <h3 className="pb-3 text-base font-medium text-gray-200">Get in Touch</h3>
              <ul>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Contact</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Support</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Partners</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Join Research</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-4 text-sm border-t border-[#0F0E13] bg-[#0F0E13]">
        <div className="container px-6 2xl:px-48 mx-auto">
          <div className="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="text-gray-300 col-span-2 md:col-span-4 lg:col-span-6">Copyright 2025 AgroSphere</div>

            <nav className="col-span-3 md:col-span-4 lg:col-span-6">
              <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                <li><Link className="transition-colors duration-300 hover:text-gray-500">T&C</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Privacy</Link></li>
                <li><Link className="transition-colors duration-300 hover:text-gray-500">Cookies</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
