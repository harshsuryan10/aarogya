import React from 'react';
import Navbar from '../components/navbar';
import {
  FaAmbulance,
  FaCalendarCheck,
  FaBed,
  FaIdCard,
  FaUsers,
  FaRupeeSign,
  FaHandsHelping,
} from 'react-icons/fa';

const Csrnew = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />

      {/* Title */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-blue-700">Corporate Health</h1>
      </div>

      {/* CSR Section */}
      <div className="bg-gray-100 mt-6 mx-6 rounded-xl p-6 flex flex-col lg:flex-row items-center justify-between shadow-md">
        {/* Left: Illustration */}
        <div className="flex-1 flex justify-center items-center mb-4 lg:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2345/2345334.png"
            alt="CSR Illustration"
            className="w-40 h-40"
          />
        </div>

        {/* Center: Tagline */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl text-red-500 font-cursive italic">To Save</h2>
          <h2 className="text-4xl text-orange-500 font-bold -mt-4">Countless Lives</h2>
        </div>

        {/* Right: Stats Icons */}
        <div className="flex-1 flex flex-row justify-center items-center gap-6 mt-6 lg:mt-0">
  

  <h2 class="text-blue-700 text-xl font-bold">CSR</h2>
  <p class="text-gray-800 text-lg font-semibold">Corporate Social Responsibility</p>
          {/* Fundraisers */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-700 flex items-center justify-center rounded shadow-md">
              <FaUsers className="text-white text-3xl" />
            </div>
            <span className="text-sm font-semibold mt-2 text-center">3000+ Fundraisers</span>
          </div>

          {/* Raised */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-700 flex items-center justify-center rounded shadow-md">
              <FaRupeeSign className="text-white text-3xl" />
            </div>
            <span className="text-sm font-semibold mt-2 text-center">₹50 Lakhs+ Raised</span>
          </div>

          {/* Donations */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-700 flex items-center justify-center rounded shadow-md">
              <FaHandsHelping className="text-white text-3xl" />
            </div>
            <span className="text-sm font-semibold mt-2 text-center">650+ Donations</span>
          </div>
        </div>
      </div>

      {/* CSR Info Box */}
      <div className="border-2 border-blue-400 rounded-xl mx-6 mt-10 px-6 py-20 bg-white text-center shadow-md">
        <h3 className="text-lg font-semibold text-blue-900">CSR Fund Information</h3>
      </div>

      {/* Right Floating Buttons */}
      <div className="fixed right-4 top-1/3 z-50 flex flex-col gap-4">
        <div className="flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full shadow-lg">
          <FaAmbulance size={20} />
        </div>
        <div className="flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full shadow-lg">
          <FaCalendarCheck size={20} />
        </div>
        <div className="flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full shadow-lg">
          <FaBed size={20} />
        </div>
        <div className="flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full shadow-lg">
          <FaIdCard size={20} />
        </div>
      </div>
    </div>
  );
};

export default Csrnew;
