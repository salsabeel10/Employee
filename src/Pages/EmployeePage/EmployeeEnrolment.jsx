import React from 'react'
import FormEmpEnroll from '../../Components/Employee/FormEmpEnroll'
import Sidebar2 from '../../Components/Sidebar2'
import Header from '../../Components/Header'
import ButtonEmp from '../../Components/Employee/ButtonEmp'


const EmployeeEnrolment = () => {
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        <ButtonEmp />
        {/* Form */}
        <main className="flex-1 p-4">
          <FormEmpEnroll />
        </main>
      </div>
    </div>
  )
}

export default EmployeeEnrolment
