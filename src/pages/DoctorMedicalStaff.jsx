
import VaccineCarousel from './../components/VaccineCarousel';
import FloatingActions from './FloatingActions';
import Navbar from './../components/Navbar';

const DoctorMedicalStaff = () => {
    const vaccineData = [
    {
      btn: "Enquire Now",
      h3t: "Ambulance Driver",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 25,000 to Rs. 35,000<br>per Month"
    },
    {
      btn: "Enquire Now",
      h3t: "Nursing Staff",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 20,000 to Rs. 35,000<br>per Month"
    },
    {
      btn: "Enquire Now",
      h3t: "On Call AFIH Doctor",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 5,000 to Rs. 10,000<br>per Day"
    },
    {
      btn: "Enquire Now",
      h3t: "AFIH Doctor",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 1,00,000 to Rs. 3,00,000<br>per Month"
    },
    {
      btn: "Enquire Now",
      h3t: "AFIH Doctor1",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 1,00,000 to Rs. 3,00,000<br>per Month"
    },
    {
      btn: "Enquire Now",
      h3t: "AFIH Doctor2",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 1,00,000 to Rs. 3,00,000<br>per Month"
    },
    
  ];
  return (
    <div className="relative bg-gray-50 min-h-screen min-w-7xl">
      <Navbar />
      <VaccineCarousel data={vaccineData} head={"OHC AFIH Doctor & Medical Staff"}/>
      <div className="flex items-center justify-center ">
      <div className="flex items-center bg-blue-900 text-white rounded-full px-4 py-2 shadow-md">
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png" alt="phone--v1"/>

        <input
          type="tel"
          placeholder="Enter Contact Number"
          className="bg-transparent outline-none text-white placeholder-white text-sm w-40 sm:w-60"
        />
        <button className="ml-4 bg-white text-blue-900 font-semibold px-4 py-1 rounded-full text-sm hover:bg-gray-200">
          Call Now
        </button>
      </div>
    </div>
      <h2 className='text-2xl text-center font-extrabold text-blue-900 '>Request a Call Back</h2>
      <FloatingActions />

    </div>
  )
}

export default DoctorMedicalStaff
