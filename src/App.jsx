import React from 'react'
import EmployeeEnrolment from './Pages/EmployeePage/EmployeeEnrolment'
import { Route, Routes, Navigate } from 'react-router-dom'
import ComputeSalary from './Pages/EmployeePage/ComputeSalary'
import TimeSheet from './Pages/TimeSheetPage/TimeSheet'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employee" replace />} />
      <Route exact path="/employee" element={<EmployeeEnrolment />} />
      <Route path="/employee/computeSalary" element={<ComputeSalary />} />
      <Route exact path="/timeSheetEntry" element={<TimeSheet />} />
    </Routes>
  )
}

export default App
