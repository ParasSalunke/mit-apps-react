import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
// import LogInSuccess from './Alerts/LogInSuccess'; // Import the AlertSuccess component

function StudentLogin() {
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Perform any login logic here (e.g., authentication)

        // Show the success alert
        setIsAlertVisible(true);

        // Redirect to the dashboard after a delay to show the alert
        setTimeout(() => {
            navigate('/StudentDashboard');
        }, 1000); // Adjust the delay as needed
    };

    const RecoverAccountClick = () => {
        navigate('/RecoverAccount');
    };

    const handleCloseAlert = () => {
        setIsAlertVisible(false);
    };

    return (
        <div>
            <Helmet>
                <title>Student Login</title>
            </Helmet>
            <div className="flex h-screen bg-indigo-700">
                <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                    <form>
                        <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="username">Username *</label>
                            <input
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="text"
                                name="username"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="password">Password *</label>
                            <input
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div>
                            <button
                                className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                                type="button"
                                onClick={handleLoginClick}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <footer>
                        <button className="text-indigo-700 hover:text-pink-700 text-sm float-left"
                            onClick={RecoverAccountClick}
                        >
                            Forgot Password?
                        </button>
                    </footer>
                </div>
            </div>
            {/* {isAlertVisible && (
                <LogInSuccess
                    message="Login successful! Redirecting..."
                    onClose={handleCloseAlert}
                />
            )} */}
        </div>
    );
}

export default StudentLogin;