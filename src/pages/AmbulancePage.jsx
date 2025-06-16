import Navbar from '../components/Navbar'
import VaccineCarousel from '../components/VaccineCarousel';
import FloatingActions from './FloatingActions';

const AmbulancePage = () => {
  const vaccineData = [
    {
      btn: "Package No 1",
      h3t: "Single Time Ambulance",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 10,000 to Rs. 30,000<br>per Day"
    },
    {
      btn: "Package No 2",
      h3t: "Prime - 24/7 Ambulance",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 3,60,000 to Rs. 4,50,000<br>Three Months <span class='font-semibold'>I</span>nhouse Service"
    },
    {
      btn: "Package No 3",
      h3t: "Silver - 24/7 Ambulance",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 6,60,000 to Rs. 7,50,000<br>Six Months <span class='font-semibold'>I</span>nhouse Service"
    },
    {
      btn: "Package No 4",
      h3t: "Gold - 24/7 Ambulance",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 9,00,000 to Rs. 14,00,000<br>Yearly <span class='font-semibold'>I</span>nhouse Service"
    },
    
  ];
  return (
    <div className="relative bg-gray-50 min-h-screen min-w-7xl">
      <Navbar />
      
      <VaccineCarousel data={vaccineData} head="24/7 Ambulance Service & Equipped Mobile Medical Unit Information" />
      <div className="text-center border-2 rounded-lg py-16 mx-[60px] mt-10 text-xl font-bold text-blue-700">24/7 Ambulance Service & Equipped Mobile Medical Unit Information</div>
      <FloatingActions />
    </div>
  )
}

export default AmbulancePage;
