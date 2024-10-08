import React from 'react'

import FormComputeSalary from '../../Components/Employee/FormComputeSalary'
import TimeSheetCompute from '../../Components/TimeSheet/TimeSheetCompute'
import Sidebar2 from '../../Components/Sidebar2'
import Header from '../../Components/Header'
import ButtonEmp from '../../Components/Employee/ButtonEmp'
import Support from '../../Components/Support'

const ComputeSalary = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar2 className="md:w-64 hidden md:block" />
      <div className="flex-1 flex flex-col">
        <Header className="p-4" />
        <ButtonEmp />
        <main className="flex-1 p-4">
          <FormComputeSalary />
        </main>
        <div className="w-full h-full px-6  md:px-11">
          <TimeSheetCompute />
        </div>
        <div >
          <Support />
        </div>
      </div>
    </div>
  )
}

export default ComputeSalary
