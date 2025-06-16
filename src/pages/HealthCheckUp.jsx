import FloatingActions from './FloatingActions';
import Navbar from '../components/Navbar';
import VaccineCarousel2 from '../components/VaccineCarousel2';

const HealthCheckUp = () => {
  const vaccineData = [
    {
      rev: "350",
      h3t: "Pre-Employment Prime",
      pt1: "Including Lab Test:"
    },
    {
      rev: "258",
      h3t: "Pre-Employment Silver",
      pt1: "Including Lab Test:"
    },
    {
      rev: "580",
      h3t: "Employee Annual Health Check-up",
      pt1: "Including Lab Test:"
    },
    {
      rev: "351",
      h3t: "Executive Health Check-up(Male)",
      pt1: "Including Lab Test:"
    },
    {
      rev: "183",
      h3t: "Executive Health Check-up(Female)",
      pt1: "Including Lab Test:"
    },
    
  ];
  return (
    <div className="relative bg-gray-50 min-h-screen min-w-7xl">
      <Navbar />
      <VaccineCarousel2 data={vaccineData} head={"Health Check-up Packages"}/>
      
      <h2 className='text-2xl text-center font-extrabold text-blue-500 '>Request a Call Back</h2>
      <div className="bg-white py-6 px-4 md:px-8 rounded-md shadow-md max-w-screen-xl mx-auto">
      <form className="flex flex-wrap justify-center gap-4 items-center">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-orange-500 font-semibold text-sm mb-1">Full Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="rounded-full border border-gray-300 px-4 py-2 w-52 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <label className="text-orange-500 font-semibold text-sm mb-1">Mobile Number<span className="text-red-500">*</span></label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="rounded-full border border-gray-300 px-4 py-2 w-52 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email ID */}
        <div className="flex flex-col">
          <label className="text-orange-500 font-semibold text-sm mb-1">Email ID<span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Enter Email ID"
            className="rounded-full border border-gray-300 px-4 py-2 w-52 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-orange-500 font-semibold text-sm mb-1">Company Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="rounded-full border border-gray-300 px-4 py-2 w-52 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

      </form>
        {/* Submit Button */}
        <div className="mt-6 text-center md:mt-8">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full"
          >
            Submit Request
          </button>
        </div>
    </div>
      <FloatingActions />
    </div>
  )
}

export default HealthCheckUp
