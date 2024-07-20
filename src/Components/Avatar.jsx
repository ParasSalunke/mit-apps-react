import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertSuccess from './Alerts/LogOutSuccess'; // Import the AlertSuccess component

function Avatar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Clear authentication tokens or user session here
        localStorage.removeItem('authToken'); // Example of clearing a token from local storage

        // Show the alert
        setIsAlertVisible(true);

        // Redirect to login page or home page after a delay to show the alert
        setTimeout(() => {
            navigate('/'); // Adjust this path as needed
        }, 1000); // Adjust delay as needed
    };

    const handleCloseAlert = () => {
        setIsAlertVisible(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <img
                    id="avatarButton"
                    type="button"
                    onClick={toggleDropdown}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="User dropdown"
                />
            </div>
            {isDropdownOpen && (
                <div
                    id="userDropdown"
                    className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Paras Salunke</div>
                        <div className="font-medium truncate">salunkeparasorg@gmail.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <button
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            )}
            {isAlertVisible && (
                <AlertSuccess
                    message="You have been logged out successfully!"
                    onClose={handleCloseAlert}
                />
            )}
        </div>
    );
}

export default Avatar;
