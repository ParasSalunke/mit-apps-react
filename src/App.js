import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UniversityLogin from "./Pages/LoginPages/UniversityLogin";
import CollegeLogin from "./Pages/LoginPages/CollegeLogin";
import StudentLogin from "./Pages/LoginPages/StudentLogin";
import RecoverAccount from "./Pages/LoginPages/RecoverAccount";
import StudentDashboard from "./Pages/Dashboards/StudentDashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UniversityLogin" element={<UniversityLogin />} />
        <Route path="CollegeLogin" element={<CollegeLogin />} />
        <Route path="StudentLogin" element={<StudentLogin />} />
        <Route path="RecoverAccount" element={<RecoverAccount />} />
        <Route path="StudentDashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;