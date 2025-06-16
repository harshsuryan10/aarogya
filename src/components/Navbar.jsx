import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white shadow px-4 py-4">
      {/* Top row: Logo + Search + Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://live.staticflickr.com/65535/49976655997_a5655e00d9_h.jpg"
            alt="Logo"
            className="h-10 w-10 object-cover"
          />
          <img
            src="https://live.staticflickr.com/65535/49976655997_a5655e00d9_h.jpg"
            alt="Brand"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Search and Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search Healthcare Services"
              className="flex-grow sm:w-72 px-3 py-1 border border-gray-300 rounded-l-full focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-1 rounded-r-full">
              Search
            </button>
          </div>

          {/* Auth & Language Links */}
          <div className="flex gap-3 justify-center text-sm">
            <a href="#" className="text-blue-600 hover:underline">Login</a>
            <a href="#" className="text-blue-600 hover:underline">Register</a>
            <a href="#" className="text-blue-600 hover:underline">English</a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
        <Link to="/" className="px-3 py-1 border border-orange-600 rounded-2xl bg-orange-600 text-white text-sm">
          Corporate Health
        </Link>
        <Link to="/doctor-medical-staff" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          OHC AFIH Doctor & Staff
        </Link>
        <Link to="/medical-personnel" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          Surgery & Medical Personnel
        </Link>
        <Link to="/employee-insurance" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          Employee Insurance
        </Link>
        <Link to="/csr" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          CSR Initiatives
        </Link>
        <Link to="/seminars" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          Workplace Seminars
        </Link>
        <Link to="/health-talks" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          Health Talks
        </Link>
        <Link to="/health-check-up" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          Check-up Packages
        </Link>
        <Link to="/ambulance" className="px-3 py-1 border border-black rounded-2xl bg-white text-black text-sm hover:bg-gray-100">
          Ambulance Services
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
