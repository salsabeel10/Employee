import React, { useState, useEffect } from 'react'
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

import Logo from '../assets/Logo.svg'
import { useLocation,useNavigate } from 'react-router-dom'

const menuItems = [
  { icon: faUsers, label: 'Employees', path: '/employee' },
  { icon: faClock, label: 'TimeSheet Entry', path: '/timeSheetEntry' },
  { icon: faFileInvoice, label: 'Invoice', path: '/invoice' },
  {
    icon: faProjectDiagram,
    label: 'Project Initiation',
    path: '/projectInitiation',
  },
  {
    icon: faCalendarAlt,
    label: 'Resource Planner',
    path: '/resourcePlanner',
  },
  { icon: faFileAlt, label: 'Document Control', path: '/documentControl' },
  { icon: faDollarSign, label: 'Finances', path: '/finances' },
]


const Sidebar2 = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const [selectedIndex, setSelectedIndex] = useState(null)

   useEffect(() => {
     const currentPath = location.pathname
     const currentIndex = menuItems.findIndex((item) =>
       currentPath.startsWith(item.path)
     )
     if (currentIndex !== -1) {
       setSelectedIndex(currentIndex)
     }
   }, [location.pathname])

   const handleClick = (index) => {
     setSelectedIndex(index)
     navigate(menuItems[index].path);
     
   }

  

  
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
        } fixed md:relative pt-5 pb-2 top-0 left-0 h-full w-64 bg-[#f9fcfe] text-black p-4 border-r-2 border-blue-200 transition-transform duration-300 ease-in-out z-40 md:translate-x-0 flex flex-col justify-between`}
      >
        <div className="flex-1 flex-col h-screen">
          <div className="flex items-center mb-7 pl-1">
            <span className="text-xl font-semibold text-blue-600">
              ClearTime®
            </span>
            <img src={Logo} alt="logo" className="pl-2" />
          </div>

          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center p-2 cursor-pointer ${
                  selectedIndex === index
                    ? 'bg-blue-400 border-l-4 border-blue-700 text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleClick(index)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-600 py-2 px-4 mb-4 w-full rounded justify-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Aditya Arun
          </button>
          <button className="flex items-center bg-[#6f74f6] hover:bg-[#6f74f6]/80 text-white py-2 px-4 w-full rounded justify-center">
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

export default Sidebar2
