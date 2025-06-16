import FloatingActions from './FloatingActions';
import Navbar from '../components/navbar';
import VaccineCarousel from './../components/VaccineCarousel';

const EmployeeInsurance = () => {
  const vaccineData = [
    {
      btn: "Enquire Now",
      h3t: "Health Insurance C Name",
      pt1: "Starting <span class=' font-semibold'>I</span>nsurance Amount <br><span class=' font-bold'>Rs. 3000 to Rs. 10000</span> <br>Per Year (<span class='font-semibold'>I</span>ncluded*)"
    },
    {
      btn: "Enquire Now",
      h3t: "Health Insurance C Name",
      pt1: "Starting <span class=' font-semibold'>I</span>nsurance Amount <br><span class=' font-bold'>Rs. 3000 to Rs. 10000</span> <br>Per Year (<span class='font-semibold'>I</span>ncluded*)"
    },
    {
      btn: "Enquire Now",
      h3t: "Health Insurance C Name",
      pt1: "Starting <span class=' font-semibold'>I</span>nsurance Amount <br><span class=' font-bold'>Rs. 3000 to Rs. 10000</span> <br>Per Year (<span class='font-semibold'>I</span>ncluded*)"
    },
    {
      btn: "Enquire Now",
      h3t: "Health Insurance C Name",
      pt1: "Starting <span class=' font-semibold'>I</span>nsurance Amount <br><span class=' font-bold'>Rs. 3000 to Rs. 10000</span> <br>Per Year (<span class='font-semibold'>I</span>ncluded*)"
    },
    {
      btn: "Enquire Now",
      h3t: "Health Insurance C Name",
      pt1: "Starting <span class=' font-semibold'>I</span>nsurance Amount <br><span class=' font-bold'>Rs. 3000 to Rs. 10000</span> <br>Per Year (<span class='font-semibold'>I</span>ncluded*)"
    },
    {
      btn: "Enquire Now",
      h3t: "Health Insurance C Name",
      pt1: "Starting <span class=' font-semibold'>I</span>nsurance Amount <br><span class=' font-bold'>Rs. 3000 to Rs. 10000</span> <br>Per Year (<span class='font-semibold'>I</span>ncluded*)"
    },
    
  ];
  return (
    <div className="relative bg-gray-50 min-h-screen min-w-7xl">
      <Navbar />
      <VaccineCarousel data={vaccineData} head={"Employee Health Insurance"}/>
      <div className="text-center border-2 rounded-lg py-16 mx-[60px] mt-10 text-xl font-bold text-blue-700">Employee Health Insurance Information</div>
      <FloatingActions />
    </div>
  )
}

export default EmployeeInsurance
