import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCog, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between p-4">
        {/* Input with trailing icons */}
        <div className="flex items-center w-full space-x-2">
          <div className="relative w-[90%]">
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
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
              <FontAwesomeIcon icon={faCog} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 pl-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Employee Enrollment
        </button>
        <button className="px-4 py-2 bg-[#e9eefa] text-blue-500 rounded hover:bg-blue-200">
          Compute Salary
        </button>
      </div>
    </div>
  )
}

export default Header