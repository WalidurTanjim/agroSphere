import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      {/* <footer className="bg-green-900 text-white py-10">
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
      </footer> */}

      <footer className="text-gray-400 bg-[#0F0E13]">
        {/* Footer header */}
        <div className='container mx-auto px-6 2xl:px-40 py-14 text-sm grid gap-5 items-start grid-cols-1 md:grid-cols-6'>
          <div className='col-span-1 md:col-span-4'>
            <h1 className='text-white text-[2rem] md:text-[2.5rem] pb-1'>Creating Lasting Change, Together</h1>
            <p>Empowering your business with transparent, sustainable solutions to meet today's challenges and secure tomorrow's future.</p>
          </div>

          <div className='col-span-1 md:col-span-2 flex gap-2 items-center justify-start md:justify-center md:flex-col lg:flex-row'>
            <Link><button type='button' className='text-black bg-white px-5 py-2 rounded-md outline-none border border-gray-300 cursor-pointer'>Dashboard</button></Link>
            <Link to="/contact"><button type='button' className='text-white bg-black px-5 py-2 rounded-md outline-none border border-gray-300 cursor-pointer'>Get in touch</button></Link>
          </div>
        </div>

        {/* <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-[#0F0E13]">
          <div className="container px-6 2xl:px-40 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              {/* project name, logo & brief description */}
              <div className="col-span-4 md:col-span-8 lg:col-span-4" aria-labelledby="footer-header">
                <Link to="/" id="WindUI-5-logo" aria-label="WindUI logo" aria-current="page" className="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap text-slate-700 focus:outline-none"><img src={logo} alt="logo" className="w-[25px] h-[25px]" /> <span className="text-xl text-white font-medium">AgroSphere</span></Link>
                <p className='text-gray-300'>Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.</p>
              </div>

              {/* product nav starts */}
              <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-product-5-logo">
                <h3 className="pb-3 text-base font-medium text-gray-200" id="footer-product-5-logo">Product</h3>

                <ul>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Features{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Customers{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Why us?{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Pricing{" "}</Link>
                  </li>
                </ul>
              </nav>

              {/* docs & help nav starts */}
              <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-docs-5-logo">
                <h3 className="pb-3 text-base font-medium text-gray-200" id="footer-docs-5-logo">Docs & Help</h3>

                <ul>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Documentation</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Training{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} System status{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} FAQ's{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Help Center{" "}</Link>
                  </li>
                </ul>
              </nav>

              {/* about us nav starts */}
              <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-about-5-logo">
                <h3 className="pb-3 text-base font-medium text-gray-200" id="footer-about-5-logo">About us</h3>

                <ul>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} About us{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Careers{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Leadership{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Blog</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Events{" "}</Link>
                  </li>
                </ul>
              </nav>

              {/* get in touch nav starts */}
              <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-get-in-touch-5-logo">
                <h3 className="pb-3 text-base font-medium text-gray-200" id="footer-get-in-touch-5-logo">Get in touch</h3>

                <ul>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Contact{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Support{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Partners{" "}</Link>
                  </li>
                  <li className="mb-1 leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">{" "} Join research{" "}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* <!-- Sub Footer --> */}
        <div className="py-4 text-sm border-t border-[#0F0E13] bg-[#0F0E13]">
          <div className="container px-6 2xl:px-48 mx-auto">
            <div className="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="text-gray-300 col-span-2 md:col-span-4 lg:col-span-6">Copyright 2024 Brand</div>

              <nav className="col-span-3 md:col-span-4 lg:col-span-6" aria-labelledby="subfooter-links-3-sub">
                <h3 className="sr-only" id="subfooter-links-3-sub">Get in touch</h3>

                <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                  <li className="leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">T&C</Link>
                  </li>
                  <li className="leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">Privacy</Link>
                  </li>
                  <li className="leading-6">
                    <Link to="/" className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-300">Cookies</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;