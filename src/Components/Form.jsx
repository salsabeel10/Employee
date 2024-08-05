import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeadset } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  return (
    <div className="pl-4 mt-5 w-[90%]">
      <form className="p-3 border-2 border-blue-300">
        <div className="grid grid-cols-3 gap-4">
          {/* First Column */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Employee Name</label>
              <input
                type="text"
                placeholder="Bond"
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Joining Date</label>
              <input type="date" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                placeholder="Your mother House"
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Divison</label>
              <select className="w-full bg-white border rounded px-2 py-1">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Salary</label>
              <input
                type="text"
                placeholder="7 peacocks"
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Save Employee
            </button>
          </div>

          {/* Second Column */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Employee ID</label>
              <input
                type="number"
                placeholder="23343425445"
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Designation</label>
              <input
                type="text"
                placeholder="primary bread"
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Business Unit</label>
              <input
                type="text"
                placeholder="big money"
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Department</label>
              <input
                type="text"
                placeholder="Daddy Issues"
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div className="relative w-full ">
              <label className="block text-gray-700 ">
                Authorization Code
              </label>
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-full border rounded px-3 py-1 text-gray-700 pr-24 pl-4" // Adjust padding for the button
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className="absolute  inset-y-0 right-16 pr-2 my-auto text-blue-500 cursor-pointer" // Position icon before button
                />
                <button className="absolute inset-y-0 right-0 bg-blue-500 text-white text-sm px-4 py-1 rounded-r">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 mb-2">Employee Name</label>
            <div className="w-[10rem] h-[10rem] mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              {/* Placeholder for profile image */}
              <span>Profile</span>
            </div>
            <button className="border text-gray-700 hover:bg-blue-100 px-4 py-2 rounded transition">
              Upload Picture
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
