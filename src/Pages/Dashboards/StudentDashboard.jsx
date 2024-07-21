import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Components/Avatar';
import { Helmet } from 'react-helmet';
import Dashboard from '../../StudentComponents/Dashboard';
import Profile from '../../StudentComponents/Profile';
import Program from '../../StudentComponents/Program';
import ExamForms from '../../StudentComponents/ExamForms';
import GradeCards from '../../StudentComponents/GradeCards';
import Results from '../../StudentComponents/Results';
import Redressal from '../../StudentComponents/Redressal';
import StudentServices from '../../StudentComponents/StudentServices';
import Payments from '../../StudentComponents/Payments';
import logo from '../../assets/circle_logo.png';

function StudentDashboard() {
    const [activeContent, setActiveContent] = useState('Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigation = (content) => {
        setActiveContent(content);
        setIsSidebarOpen(false);
    };

    const renderContent = () => {
        switch (activeContent) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Profile':
                return <Profile />;
            case 'Program':
                return <Program />;
            case 'ExamForms':
                return <ExamForms />;
            case 'GradeCards':
                return <GradeCards />;
            case 'Results':
                return <Results />;
            case 'Redressal':
                return <Redressal />;
            case 'StudentServices':
                return <StudentServices />;
            case 'Payments':
                return <Payments />;
            default:
                return null;
        }
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Helmet>
                <title>Student Dashboard</title>
                <meta name="description" content="Student Dashboard Page" />
            </Helmet>

            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-gray-800`}>

                <div className="flex items-center justify-between h-16 bg-gray-900 px-3">
                    <img src={logo} alt="Logo" className="h-14 w-14" />
                    <a href="/StudentDashboard" className="text-white font-bold uppercase pr-3 pl-2">Student Dashboard</a>
                    <button className="md:hidden text-white" onClick={handleSidebarToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 bg-gray-800 pt-5">
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('Dashboard')}>
                            <i className="bi bi-house h-6 w-6 mr-2"></i>
                            Dashboard
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('Profile')}>
                            <i className="bi bi-person h-6 w-6 mr-2"></i>
                            Profile
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('Program')}>
                            <i className="bi bi-book h-6 w-6 mr-2"></i>
                            Program
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('ExamForms')}>
                            <i className="bi bi-card-checklist h-6 w-6 mr-2"></i>
                            Exam Forms
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('GradeCards')}>
                            <i className="bi bi-card-text h-6 w-6 mr-2"></i>
                            Grade Cards
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('Results')}>
                            <i className="bi bi-bar-chart-line h-6 w-6 mr-2"></i>
                            Results
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('Redressal')}>
                            <i className="bi bi-check2-square h-6 w-6 mr-2"></i>
                            Redressal
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('StudentServices')}>
                            <i className="bi bi-patch-check h-6 w-6 mr-2"></i>
                            Student Services
                        </Link>
                        <Link to="#" className="flex items-center px-5 py-2 text-gray-100 hover:bg-gray-700" onClick={() => handleNavigation('Payments')}>
                            <i className="bi bi-wallet2 h-6 w-6 mr-2"></i>
                            Payments
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-24 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden" onClick={handleSidebarToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center pr-4 pt-2 pb-2">
                        <Avatar />
                    </div>
                </div>
                <div className="flex-1">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;