import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UniversityLogin from "./Pages/LoginPages/UniversityLogin";
import CollegeLogin from "./Pages/LoginPages/CollegeLogin";
import StudentLogin from "./Pages/LoginPages/StudentLogin";
import RecoverAccount from "./Pages/LoginPages/RecoverAccount";
import CollegeDashboard from "./Pages/Dashboards/CollegeDashboard";
import UniversityDashboard from "./Pages/Dashboards/UniversityDashboard";

// Student Components
import StudentDashboard from "./Pages/Dashboards/StudentDashboard";
import Dashboard from "./StudentComponents/Dashboard";
import Profile from "./StudentComponents/Profile";
import Program from "./StudentComponents/Program";
import ExamForms from "./StudentComponents/ExamForms";
import GradeCards from "./StudentComponents/GradeCards";
import Results from "./StudentComponents/Results";
import Redressal from "./StudentComponents/Redressal";
import StudentServices from "./StudentComponents/StudentServices";
import Payments from "./StudentComponents/Payments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="UniversityLogin" element={<UniversityLogin />} />
      <Route path="CollegeLogin" element={<CollegeLogin />} />
      <Route path="StudentLogin" element={<StudentLogin />} />
      <Route path="RecoverAccount" element={<RecoverAccount />} />
      <Route path="CollegeDashboard" element={<CollegeDashboard />} />
      <Route path="UniversityDashboard" element={<UniversityDashboard />} />

      <Route path="StudentDashboard" element={<StudentDashboard />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="Program" element={<Program />} />
      <Route path="ExamForms" element={<ExamForms />} />
      <Route path="GradeCards" element={<GradeCards />} />
      <Route path="Results" element={<Results />} />
      <Route path="Redressal" element={<Redressal />} />
      <Route path="StudentServices" element={<StudentServices />} />
      <Route path="Payments" element={<Payments />} />
    </Routes>
  );
}

export default App;
