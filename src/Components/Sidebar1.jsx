import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faClock,
  faFileInvoice,
  faProjectDiagram,
  faCalendarAlt,
  faFileAlt,
  faDollarSign,
  faSignOutAlt,
  faUsers,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import reactIcon from '../assets/Staff.svg'
import Logo from '../assets/Logo.svg'

const Sidebar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative ">
      {/* Menu icon for mobile */}
      <button
        className="pl-4 pt-2 md:hidden top-4 left-6 z-50 text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed md:relative pt-6 top-0 left-0 h-full w-64 bg-[#f9fcfe] text-black p-4 border-r-2 border-blue-200 transition-transform duration-300 ease-in-out z-40 md:translate-x-0 flex flex-col justify-between`}
      >
        <div className="flex-1 flex-col h-screen">
          <div className="flex items-center mb-6">
            <span className="text-xl font-semibold text-blue-600">
              ClearTime®
            </span>
            <img src={Logo} alt="logo" className="pl-2" />
          </div>

          <ul className="space-y-4">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Employees
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              TimeSheet Entry
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
        <div>
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

      {/* Overlay to close sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Sidebar1
