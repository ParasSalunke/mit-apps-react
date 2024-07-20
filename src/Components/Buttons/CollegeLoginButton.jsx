import React from 'react'
import { Link } from 'react-router-dom'

function CollegeLoginButton() {
    return (
        <div>
            <Link
                className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:bg-gradient-to-b dark:shadow-orange-900 shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 hover:-tranneutral-y-px "
                to="/CollegeLogin"
            >
                College Login
            </Link>
        </div>
    )
}

export default CollegeLoginButton;