import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

function RecoverAccount() {

  const navigate = useNavigate();

  const handleContinueClick = () => {
    // Perform any login logic here (e.g., authentication)
    // Then navigate to the dashboard
    navigate('/');
  };

  return (
    <div className="dark:bg-gray-800">
      <Navbar />
      <Helmet>
        <title>Recover Account | MIT Apps</title>
        <meta name="description" content="Recover your account in MIT Apps" />
      </Helmet>
      <div className="flex h-screen dark:bg-gray-800 pb-96 pt-16">
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
            <p className="text-indigo-700 hover:text-pink-700 text-sm float-center pt-1 pb-4">
              Please enter your registered username.
            </p>
            </div>
            <div>
              <button
                className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                type="button"
                onClick={handleContinueClick}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RecoverAccount;
