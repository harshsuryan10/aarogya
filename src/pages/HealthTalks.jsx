import FloatingActions from './FloatingActions';
import Navbar from '../components/Navbar';
import VaccineCarousel3 from '../components/VaccineCarousel3';

const HealthTalks = () => {
  const vaccineData = [
    {
      btn: "Package No 1",
      h3t: "Health Talk & Seminar",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 1,00,000 to Rs. 1,50,000<br>per month"
    },
    {
      btn: "Package No 2",
      h3t: "Prime Talk & Seminar",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 1,60,000 to Rs. 2,50,000<br>per month"
    },
    {
      btn: "Package No 3",
      h3t: "Silver Talk & Seminar",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 2,60,000 to Rs. 3,90,000<br>per month"
    },
    {
      btn: "Package No 4",
      h3t: "Gold Talk & Seminar",
      pt1: "<span class='font-semibold'>Starting Range</span><br>Rs. 4,00,000 to Rs. 6,50,000<br>per month"
    },
    
  ];
  return (
    <div className="relative bg-gray-50 min-h-screen min-w-7xl">
      <Navbar />
      <VaccineCarousel3 data={vaccineData} head={"Health Talks & Seminar"}/>
      <div className="text-center border-2 rounded-lg py-16 mx-[60px] mt-10 text-xl font-bold text-blue-700">Health Talks  & Seminar Information</div>
      <FloatingActions />
    </div>
  )
}

export default HealthTalks
