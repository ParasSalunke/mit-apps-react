import React from 'react';
import { Link } from 'react-router-dom'

function HomeInfo() {

    return (
        <div>
            <div className="flex justify-center p-4 dark:bg-gray-800 pt-16 pb-16">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
                    <h1 className="text-center text-base font-bold mb-4">
                        An online examination form filling schedule for the Summer Term Examinations 2023-2024
                    </h1>
                    <p className="mb-4">
                        As provided in the O.320 (B) of the Examination Ordinances 2023 there are following provisions for conducting
                        the Summer Term Examinations:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            Summer Term Examinations will be available to the students who have failed in courses, or have secured low
                            grade -
                            <br/>
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
                        <br/>
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
                    <div className="overflow-x-auto pt-10 pb-10">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider">
                                        Particulars
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Start Date for the submission of an Online Exam form
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        16.07.2024
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Last Date for the submission of an Online Exam form (Without Late Fee)
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        20.07.2024
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Last Date for the submission of an Online Exam form (With Late Fee of Rs. 100/- per day)
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        21.07.2024
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Last Date for the submission of an Online Exam form <br />
                                        (With Late Fee + Special Late fees of Rs. 300/- per day)
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        22.07.2024
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                            University Website:
                            <Link to="https://www.mituniversity.ac.in" target='_blank' className="text-blue-500 pl-1" rel="ugc">
                                https://www.mituniversity.ac.in
                            </Link>
                        </li>
                        <li>
                            Academic Bank of Credits:
                            <Link to="https://www.abc.gov.in" target='_blank' className="text-blue-500 pl-1" rel="ugc">
                                https://www.abc.gov.in
                            </Link>
                        </li>
                        <li>
                            ABC ID Creation Video:
                            <Link
                                to="https://www.youtube.com/watch?v=Gw3DUHaJg1c"
                                target='_blank' className="text-blue-500 pl-1"
                            >
                                ABC ID Creation Guide
                            </Link>
                        </li>
                        <li>
                            DigiLockerNAD:
                            <Link to="https://nad.digilocker.gov.in" target='_blank' className="text-blue-500 pl-1" rel="ugc">
                                https://nad.digilocker.gov.in
                            </Link>
                        </li>
                        <li>
                            Alumni Portal:
                            <Link to="https://alumni.mituniversity.edu.in" target='_blank' className="text-blue-500 pl-1" rel="ugc">
                                https://alumni.mituniversity.edu.in
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeInfo;