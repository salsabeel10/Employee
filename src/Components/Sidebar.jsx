import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFolder,
  faUser,
  faClock,
  faFileInvoice,
  faProjectDiagram,
  faCalendarAlt,
  faFileAlt,
  faDollarSign,
  faSignOutAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import reactIcon from '../assets/Staff.svg'
import Logo from '../assets/Logo.svg'



const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between border-r-2 border-blue-200 h-screen bg-[#f9fcfe] text-black p-4 w-64">
      <div>
        <div className="flex items-center mb-6 ">
          
          <span className="text-xl font-semibold text-blue-600">ClearTime® </span>
          <img src={Logo} alt="logo" className='pl-2' />
        </div>

        <ul className="space-y-4">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Employees
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            TimeSheet Entry
            {/* <FontAwesomeIcon icon={faDollarSign} className="mr-2" /> */}
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faFileInvoice} className="mr-2" />
            Invoice
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
            Project Initiation
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            Resource Planner
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            Document Control
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
            Finances
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <button className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-600 py-2 px-4 mb-4 w-full rounded justify-center">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Aditya Arun
        </button>
        <button className="flex items-center bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 w-full rounded justify-center">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar



