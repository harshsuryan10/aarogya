import React from 'react'
import Navbar from '../components/navbar'
import FloatingActions from './FloatingActions'

const MedicalPersonnelPage = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />

      {/* Main Heading */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-blue-700">Corporate Health</h1>
        <h2 className="text-xl text-blue-500 mt-1">Medical Personnel Manning</h2>
      </div>

      {/* Info Box */}
      <div className="border-2 border-blue-400 rounded-xl mx-20  mt-6 px-8 py-24 bg-white text-center shadow-md">
        <h3 className="text-xl font-bold text-blue-900">Medical Personnel Manning Information</h3>
      </div>

      {/* Ads Section */}
      <div className="flex justify-center gap-6 mt-10 px-6  flex-wrap">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-blue-100 opacity-90 rounded-xl h-56 w-[27.5rem] flex items-center justify-center text-blue-900 font-semibold shadow"
          >
            Ads Image
          </div>
        ))}
      </div>
      <FloatingActions/>
    </div>
  )
}

export default MedicalPersonnelPage
