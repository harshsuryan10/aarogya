import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CorporateHealth from './pages/CorporateHealth';
import MedicalPersonnelPage from './pages/MedicalPersonnelPage';
import EmployeeInsurancePage from './pages/EmployeeInsurancePage';
import Csrnew from './pages/Csrnew';
import Seminars from './pages/SeminarsPage';
import HealthTalks from './pages/HealthTalks';
import AmbulancePage from './pages/AmbulancePage';
import DoctorMedicalStaff from './pages/DoctorMedicalStaff';
import HealthCheckUp from './pages/HealthCheckUp';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Corporate Health Page */}
        <Route path="/" element={<CorporateHealth/>} />
         <Route path="/medical-personnel" element={<MedicalPersonnelPage />} />
          <Route path="/employee-insurance" element={<EmployeeInsurancePage />} />
         <Route path="/csr" element={<Csrnew />} />
         <Route path="/seminars" element={<Seminars />} />
         <Route path="/health-talks" element={<HealthTalks />} />
         <Route path="/health-check-up" element={<HealthCheckUp />} />
         <Route path="/ambulance" element={<AmbulancePage />} />
         <Route path="/doctor-medical-staff" element={<DoctorMedicalStaff />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
