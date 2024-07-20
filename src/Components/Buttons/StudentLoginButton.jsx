import { Link } from "react-router-dom";

function StudentLoginButton() {
    return (
        <div>
            <Link
                className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-b dark:shadow-red-900 shadow-red-200 hover:shadow-2xl hover:shadow-red-400 hover:-tranneutral-y-px "
                to="/StudentLogin"
            >
                Student Login
            </Link>
        </div>
    )
}

export default StudentLoginButton;