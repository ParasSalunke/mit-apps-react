import React from 'react'

function HomeInfo() {
    return (
        <div>
            <div>
                <div className="dark:bg-gray-800 text-white">
                    <h1 className="font-bold mb-4 pt-24">
                        An online examination form filling schedule for the Summer Term Examinations 2023-2024
                    </h1>
                    <p className="mb-4">
                        As provided in the O.320 (B) of the Examination Ordinances 2023 there are following provisions for conducting
                        the Summer Term Examinations:
                    </p>
                    <ul className=" mb-4">
                        <li>
                            Summer Term Examinations will be available to the students who have failed in courses, or have secured low
                            grade -
                            <ul className="list-decimal list-inside ml-4">
                                <li>
                                    to improve by repeating the course/s at Summer Term on offer by re-registering and attending the
                                    classes.
                                </li>
                                <li>
                                    to improve by directly appearing for summer term examinations (students who obtain I grade, fail (F
                                    Grade) or obtained lower grade in an even semester, will appear directly for summer term examinations
                                    instead of makeup examinations, as there would be no makeup examination after even semester.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Those students who are appearing for Summer Term Examination after repeating the course in Summer Term and
                            the students with I Grade appearing for Summer Term Examination will get the actual Grade, calculated as per
                            the norms and students who are appearing for Summer Term Examination for improvement without repeating the
                            course/s at Summer Term will get the Grade maximum up to B grade.
                        </li>
                    </ul>
                    <p className="mb-4">
                        An online Examination form filling schedule for the Summer Term Examinations July 2024 of all the schools for
                        all semesters is as follows:
                    </p>
                    <table className="w-full mb-4">
                        <thead>
                            <tr>
                                <th className="text-left">Particulars</th>
                                <th className="text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Start Date for the submission of an Online Exam form</td>
                                <td>16.07.2024</td>
                            </tr>
                            <tr>
                                <td>Last Date for the submission of an Online Exam form (Without Late Fee)</td>
                                <td>20.07.2024</td>
                            </tr>
                            <tr>
                                <td>Last Date for the submission of an Online Exam form (With Late Fee of Rs. 100/- per day)</td>
                                <td>21.07.2024</td>
                            </tr>
                            <tr>
                                <td>
                                    Last Date for the submission of an Online Exam form (With Late Fee + Special Late fees of Rs. 300/- per
                                    day)
                                </td>
                                <td>22.07.2024</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mb-4">
                        Please note that as per the O.319 (7) there will be no makeup/summer term examinations for courses that are
                        100% internally assessed (CA based) and students are evaluated continuously throughout the semester e.g.
                        courses like term projects, field work, studio work and other practical based courses.
                    </p>
                    <p className="mb-4">
                        However, makeup /summer term examinations will be held only of those courses (except CA/Midterm/Internal etc.
                        component), examinations of which can be conducted in the examination hall/laboratory in the given time span
                        of two or three hours, as the case may be.
                    </p>
                    <p className="mb-4">
                        If a student has applied for both re-evaluation and summer term examinations but has passed the re-evaluation
                        and is not willing to appear for the summer term examinations, the student must communicate with the
                        examination department through the concerned school at least 7 days prior to the commencement of the
                        examination to withdraw the application. Otherwise, the examination fee will not be refunded.
                    </p>
                    <h2 className="text-lg font-bold mb-2">Important Note:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            Please check and update a neat, clean passport-size photograph, signature, ABC ID and 'Name as per Aadhar'
                            in the student profile (if not updated), without that your Even Semester exam form will not be approved.
                        </li>
                        <li>
                            No Student should be allowed to appear for the Theory/Practical/Jury/Viva etc. examinations without an
                            authenticated Hall Ticket.
                        </li>
                        <li>
                            Uploading of photograph and signature in the profile of the student is mandatory, without which the Hall
                            Ticket will not be authenticated.
                        </li>
                        <li>
                            As per Govt. of India and UGC Notification, it is mandatory for all the students to generate an ABC ID which
                            needs to be submitted to the university through Exam Portal.
                        </li>
                    </ul>
                    <h2 className="text-lg font-bold mb-2">Weblinks:</h2>
                    <ul className="list-disc list-inside">
                        <li>
                            University Website:{" "}
                            <a href="#" className="text-blue-500 underline">
                                https://www.mituniversity.ac.in/
                            </a>
                        </li>
                        <li>
                            Academic Bank of Credits:{" "}
                            <a href="#" className="text-blue-500 underline">
                                https://www.abc.gov.in/
                            </a>{" "}
                            (
                            <a href="#" className="text-blue-500 underline">
                                ABC ID Creation Guide
                            </a>
                            )
                        </li>
                        <li>
                            DigiLockerNAD:{" "}
                            <a href="#" className="text-blue-500 underline">
                                https://nad.digilocker.gov.in/
                            </a>
                        </li>
                        <li>
                            Alumni Portal:{" "}
                            <a href="#" className="text-blue-500 underline">
                                https://alumni.mituniversity.edu.in/
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeInfo