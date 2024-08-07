import React from 'react'
import EmployeeEnrolment from './Pages/EmployeeEnrolment'
import { Route, Routes } from 'react-router-dom'
import ComputeSalary from './Pages/ComputeSalary'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<EmployeeEnrolment />} />
      <Route path="/computeSalary" element={<ComputeSalary />} />
    </Routes>
  )
}

export default App
