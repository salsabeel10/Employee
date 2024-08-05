import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  return (
    <div className="pl-4 mt-5 w-[90%]">
      <form className="p-3 border-2 border-blue-300">
        <div className="grid grid-cols-3 gap-4">
          {/* First Column */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 1</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 2</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 3</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 4</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 5</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
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
              <label className="block text-gray-700">Label 1</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 2</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 3</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Label 4</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-gray-700">Label 5</label>
              <input type="text" className="w-full border rounded px-2 py-1" />
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 mb-2">Employee Name</label>
            <div className="w-24 h-24 mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              {/* Placeholder for profile image */}
              <span>Profile</span>
            </div>
            <button className="border border-blue-300 text-blue-300 hover:bg-blue-100 px-4 py-2 rounded transition">
              Upload Picture
            </button>
          </div>
        </div>
      </form>
      {/* Footer */}
      {/* <div className="relative h-20 mt-1">
        <div className="absolute bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full">
          <FontAwesomeIcon icon={faHeadset}/>
        </div>
      </div> */}
    </div>
  )
}

export default Form
