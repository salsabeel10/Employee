import React from 'react'


import FormComputeSalary from '../../Components/FormComputeSalary'
import TimeSheetCompute from '../../Components/TimeSheetCompute'
import Sidebar2 from '../../Components/Sidebar2'
import Header from '../../Components/Header'
import ButtonEmp from './ButtonEmp'
import Support from '../../Components/Support'

const ComputeSalary = () => {
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Hidden on small screens, visible on medium screens and above */}
      <Sidebar2 className="md:w-64 hidden md:block" />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <Header className="p-4" />
        <ButtonEmp />
        {/* Form takes remaining space */}
        <main className="flex-1 p-4">
          <FormComputeSalary />
        </main>
        <div className="w-full h-full px-6 mb-9 md:px-11">
          <TimeSheetCompute />
        </div>
        <div className='mt-3'>

          <Support/>
        </div>
        
      </div>
    </div>
  )
}

export default ComputeSalary
