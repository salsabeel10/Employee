import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCog, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header1 = () => {
  return (
    <div className="container mt-1 md:mt-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
        {/* Input with trailing icons */}
        <div className="flex items-center w-full space-x-2 mb-4 md:mb-0">
          <div className="relative w-full md:w-[90%]">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full p-2 text-lg border bg-[#f2f2f2] placeholder-blue-400 placeholder:text-sm border-gray-300 rounded-md pr-10"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 pr-2"
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-500 cursor-pointer text-white rounded-full">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-500 cursor-pointer text-white rounded-full">
              <FontAwesomeIcon icon={faCog} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-2 px-6 md:flex-row space-y-2 md:space-y-0 md:space-x-4 pl-4">
        <button className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-blue-600 text-white rounded hover:bg-blue-500">
          Employee Enrollment
        </button>
        <button className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
          Compute Salary
        </button>
      </div>
    </div>
  )
}

export default Header1
