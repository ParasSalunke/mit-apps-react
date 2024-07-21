import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="flex-1">
        <div className="bg-white p-6 ">
          <h1 className="font-bold text-lg">Dashboard</h1>
          <br />
          <h1 className="text-center text-base font-bold mb-4">
            An online examination form filling schedule for the Summer Term
            Examinations 2023-2024
          </h1>
          <p className="mb-4">
            As provided in the O.320 (B) of the Examination Ordinances 2023
            there are following provisions for conducting the Summer Term
            Examinations:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Summer Term Examinations will be available to the students who
              have failed in courses, or have secured low grade -
              <br />
              <ul className="list-decimal list-inside ml-4">
                <li>
                  to improve by repeating the course/s at Summer Term on offer
                  by re-registering and attending the classes.
                </li>
                <li>
                  to improve by directly appearing for summer term examinations
                  (students who obtain I grade, fail (F Grade) or obtained lower
                  grade in an even semester, will appear directly for summer
                  term examinations instead of makeup examinations, as there
                  would be no makeup examination after even semester.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Those students who are appearing for Summer Term Examination after
              repeating the course in Summer Term and the students with I Grade
              appearing for Summer Term Examination will get the actual Grade,
              calculated as per the norms and students who are appearing for
              Summer Term Examination for improvement without repeating the
              course/s at Summer Term will get the Grade maximum up to B grade.
            </li>
          </ul>
          <br />
          <p className="mb-4 font-bold">
            An online Examination form filling schedule for the Summer Term
            Examinations July 2024 of all the schools for all semesters is as
            follows:
          </p>
          <div className="overflow-x-auto pt-1 pb-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Particulars
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Start Date for the submission of an Online Exam form
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">16.07.2024</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    Last Date for the submission of an Online Exam form (Without
                    Late Fee)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">20.07.2024</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Last Date for the submission of an Online Exam form (With
                    Late Fee of Rs. 100/- per day)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">21.07.2024</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    Last Date for the submission of an Online Exam form <br />
                    (With Late Fee + Special Late fees of Rs. 300/- per day)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">22.07.2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            Please note that as per the O.319 (7) there will be no makeup/summer
            term examinations for courses that are 100% internally assessed (CA
            based) and students are evaluated continuously throughout the
            semester e.g. courses like term projects, field work, studio work
            and other practical based courses.
          </p>
          <br />
          <p className="mb-4">
            However, makeup /summer term examinations will be held only of those
            courses (except CA/Midterm/Internal etc. component), examinations of
            which can be conducted in the examination hall/laboratory in the
            given time span of two or three hours, as the case may be.
          </p>
          <br />
          <p className="mb-4">
            If a student has applied for both re-evaluation and summer term
            examinations but has passed the re-evaluation and is not willing to
            appear for the summer term examinations, the student must
            communicate with the examination department through the concerned
            school at least 7 days prior to the commencement of the examination
            to withdraw the application. Otherwise, the examination fee will not
            be refunded.
          </p>
          <br />
          <p className="mb-4">
            Please note that as per revised Examination Ordinances, there will
            be no re-evaluation of Makeup Examinations and Summer Term
            Examinations, and no photocopies/soft copies of answer books for
            Makeup Examinations and Summer Term Examinations will be provided to
            the students, as Makeup and Summer Term Examinations are additional
            facilities.
          </p>
          <br />
          <p className="mb-4">
            <b>Note: </b>The result on hold due to Eligibility / Fee dues issues
            will be published, only after the dues are paid and eligibility is
            cleared. If you have cleared the issues, contact your
            School/Institute to communicate to the Examination Department for
            publishing results. The results will be published within 24-48 hours
            only after receiving the No Dues certificate from the respective
            school / Institute.
          </p>
          <br />
          <h2 className="text-lg font-bold mb-2">Important Links:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              As per Govt. of India and UGC Notification, it is mandatory for
              all the students to generate an ABC ID which needs to be submitted
              to the university through Exam Portal.
            </li>
            <li>
              Academic Bank of Credits:
              <Link
                to="https://www.abc.gov.in"
                target="_blank"
                className="text-blue-500 pl-1"
                rel="ugc"
              >
                ABC Portal
              </Link>
            </li>
            <li>
              ABC ID Creation Video:
              <Link
                to="https://www.youtube.com/watch?v=Gw3DUHaJg1c"
                target="_blank"
                className="text-blue-500 pl-1"
              >
                ABC ID Creation Guide
              </Link>
            </li>
          </ul>
          <br />
          <h2 className="text-lg font-bold mb-2">Important Note:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Please check and update a neat, clean passport-size photograph,
              signature, ABC ID and Name as per Aadhar in the student profile
              (If not updated), without that your exam form will not be
              approved.
            </li>
            <br />
            <li>
              Notice about Form Filling: Incomplete forms are not valid. Make
              sure that your form is SUBMITTED state, it should NOT be in NEW /
              CORRECTION state. Only submitted forms are valid for the
              conduction of exams.
            </li>
            <br />
            <li>
              About Result: If your results are declared and you are not able to
              view your Grade Card then it is because you have dues. (College
              Fees / Transport Fees / Hostel Fees or not submitted required
              Eligibility Documents). Contact your institute for the exact
              reason. Once you clear the dues, your result will be opened on the
              same or the next day and you can fill out your Exam Form online.
            </li>
            <br />
            <li>
              Please check your name, Father’s, and Mother’s Name in the Student
              profile as per your 10th (SSC)/12th (HSC)/degree mark-sheet, if
              any corrections/changes/modifications required, contact your
              office of the School / Institute for the updating and validating
              your documents. If a Grade Card is to be corrected, because of
              name correction, payment of Rs.500/- per Grade Card will have to
              be paid by the student.
            </li>
            <br />
            <li>
              Exam Fee Payments: For successful payment of Exam fee / Transcript
              fees etc., please do not use Mobile and use Computers / Laptop
              only and prefer debit/credit cards for the online payment.
            </li>
          </ul>
          <br />
          <h2 className="text-lg font-bold mb-2">Downloads:</h2>
          <ul className="list-disc list-inside">
            <li>
              Exam Form Filling Steps for Students |
              <Link
                to="https://drive.google.com/file/d/1rYMy57oIj8FOd1vxasTbIcCB493u8e_6/view"
                target="_blank"
                className="text-blue-500 pl-1"
                rel="ugc"
              >
                Download
              </Link>
            </li>
            <li>
              University Academic Calendar |
              <Link
                to="https://drive.google.com/file/d/1chRigbWzQVa_RdCbmD-z1WtXKh5FW-TE/view"
                target="_blank"
                className="text-blue-500 pl-1"
                rel="ugc"
              >
                2023-2024
              </Link>
            </li>
            <li>
              Examination Ordinances, 2023 |
              <Link
                to="https://drive.google.com/file/d/179Ql2pP8Om6qbd_e_VHS46RNmWM9E1f8/view"
                target="_blank"
                className="text-blue-500 pl-1"
                rel="ugc"
              >
                Download
              </Link>
            </li>
          </ul>
          <br />
          <div className="overflow-x-auto pt-1 pb-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Sr.No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Name of the document
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Fees
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Links
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Backlog Subject Form Fee (Theory or Practical)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. 1000/- (Per Subject)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Online through Student Portal
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Percentage Certificate
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. 1000/= + GST(18%)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Online through Student Portal
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">3</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Correction in Name on Grade Card
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. 500/- (Per Grade Card)
                    <Link
                      to="https://drive.google.com/file/d/1hW3igLU-qzapfn3Ewdx_D0kYl7MTHfqp/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    To pay the fees
                    <Link
                      to="https://payments.billdesk.com/bdcollect/bd/MITArtsDesignTech/10032"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      CLICK HERE
                    </Link>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">4</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Duplicate Grade Card
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. 500/- (Per Grade Card)
                    <Link
                      to="https://drive.google.com/file/d/1rAgC2nRYW_Fh1NomSxoESj5OtD8bglKj/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    To pay the fees
                    <Link
                      to="https://payments.billdesk.com/bdcollect/bd/MITArtsDesignTech/10032"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      CLICK HERE
                    </Link>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">5</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {" "}
                    Transcript Copies
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. 1000/- (First Copy) Rs. 500/- (For each subsequent copy)
                    <br />
                    If payment issue please Download the form and submit to the
                    <br />
                    CoE office with payment details
                    <Link
                      to="https://drive.google.com/file/d/1DeDiL18HXto6B9hyOogmp6mqlL1InmAy/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Online through Student Portal
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">6</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Correction in Name on Degree Certificate
                    <br />& Duplicate Degree Certificate{" "}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. 2,000/-
                    <Link
                      to="https://drive.google.com/file/d/13-itK-k8_gKi4GgJqio4qmJYrYF_sTLX/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    To pay the fees
                    <Link
                      to="https://payments.billdesk.com/bdcollect/bd/MITArtsDesignTech/10032"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      CLICK HERE
                    </Link>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">7</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Procedure & Application for Name Change
                    <br />
                    (After Gazette)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rs. 2,000/-
                    <Link
                      to="https://drive.google.com/file/d/1UBUXBtnFHMfJYFI9d5zninmKuDdiSxX0/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    To pay the fees
                    <Link
                      to="https://payments.billdesk.com/bdcollect/bd/MITArtsDesignTech/10032"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      CLICK HERE
                    </Link>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">8</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    NO DUES for Obtaining
                    <br />
                    DEGREE CERTIFICATE IN PERSON
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to="https://drive.google.com/file/d/1O0b3AKdHwhMvnU4cqjx4DBnhVfPq0pA6/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">9</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Application For Refund of Exam Fees
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to="https://drive.google.com/file/d/1BW5GEx3DUrwtbAoJ3srSKjiSHoxGllxm/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">10</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Application Form for Migration Certificate
                    <br />
                    issuing by the Registrar's Office
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to="https://drive.google.com/file/d/10Vyegdja_gXKUBRAunwcrfx-TlVjBKx6/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    To pay the fees
                    <Link
                      to="https://payments.billdesk.com/bdcollect/bd/MITArtsDesignTech/10032"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      CLICK HERE
                    </Link>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">11</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    NO DUES for Obtaining Ph.D. Notification
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to="https://drive.google.com/file/d/1ST4utGolJTgAt6Ax2iRAcvCmj3CWxsT8/view"
                      target="_blank"
                      className="text-blue-500 pl-1"
                      rel="ugc"
                    >
                      Download
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p>
            Academic Ordinances-2021.110 Clause (3): MAXIMUM DURATION FOR THE
            COMPLETION OF A PROGRAMME
          </p>
          <br />
          <p>
            The Maximum duration for the completion of a programme, shall be as
            detailed below:
          </p>
          <br />

          <div className="overflow-x-auto pt-1 pb-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Program Duration (Yrs)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                  >
                    Maximum Duration (Yrs)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">4</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">3</td>
                  <td className="px-6 py-4 whitespace-nowrap">5</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">4</td>
                  <td className="px-6 py-4 whitespace-nowrap">7</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">5</td>
                  <td className="px-6 py-4 whitespace-nowrap">8</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">6</td>
                  <td className="px-6 py-4 whitespace-nowrap">9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;