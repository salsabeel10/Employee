import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'


const ButtonEmp = () => {
  const navigate = useNavigate()
  const location = useLocation()
  function GotoEmployee() {
    navigate('/')
  }
  function GotoCompute() {
    navigate('/employee/computeSalary')
  }
  return (
    <div className="flex flex-col py-2 px-6 md:flex-row space-y-2 md:space-y-0 md:space-x-4 pl-6">
      <button
        onClick={GotoEmployee}
        className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded ${
          location.pathname === '/employee'
            ? 'bg-[#6f74f6] text-white  hover:bg-[#6f74f6]/80'
            : 'bg-[#e9eefa] text-blue-600 hover:bg-[#e9eefa]/70'
        }`}
      >
        Employee Enrollment
      </button>
      <button
        onClick={GotoCompute}
        className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded ${
          location.pathname === '/employee/computeSalary'
            ? 'bg-[#6f74f6] text-white  hover:bg-[#6f74f6]/80'
            : 'bg-[#e9eefa] text-blue-600 hover:bg-[#e9eefa]/70'
        }`}
      >
        Compute Salary
      </button>
    </div>
  )
}

export default ButtonEmp