import React from 'react'
import Sidebar1 from '../Components/Sidebar1'
import Header1 from '../Components/Header1'
import FormEmpEnroll from '../Components/FormEmpEnroll'
import TimeSheetCompute from '../Components/TimeSheetCompute'


const EmployeeEnrolment = () => {
    
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Hidden on small screens, visible on medium screens and above */}
      <Sidebar1 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <Header1 className="p-4" />
        {/* Form takes remaining space */}
        <main className="flex-1 p-4">
          <FormEmpEnroll />
          
        </main>
      </div>
    </div>
  )
}

export default EmployeeEnrolment
