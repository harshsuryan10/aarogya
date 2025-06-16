import FloatingActions from './FloatingActions';
import Navbar from '../components/navbar'
import VaccineCarousel from './../components/VaccineCarousel';

const CorporateHealth = () => {
  const vaccineData = [
    {
      btn: "Book Now",
      h3t: "Vaccine Name",
      pt1: "Vaccine Charges"
    },
    {
      btn: "Book Now",
      h3t: "Vaccine Name",
      pt1: "Vaccine Charges"
    },
    {
      btn: "Book Now",
      h3t: "Vaccine Name",
      pt1: "Vaccine Charges"
    },
    {
      btn: "Book Now",
      h3t: "Vaccine Name",
      pt1: "Vaccine Charges"
    },
    {
      btn: "Book Now",
      h3t: "Vaccine Name",
      pt1: "Vaccine Charges"
    },
    {
      btn: "Book Now",
      h3t: "Vaccine Name",
      pt1: "Vaccine Charges"
    },
    
  ];
  return (
    <div className="relative bg-gray-50 min-h-screen min-w-7xl">
      <Navbar />
      <VaccineCarousel data={vaccineData} head={"Employees Vaccination"}/>
      <div className="text-center border-2 rounded-lg py-16 mx-[60px] mt-10 text-xl font-bold text-blue-700">Vaccine Information</div>
      <FloatingActions />
    </div>
  )
}

export default CorporateHealth
