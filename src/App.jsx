import React from 'react'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Form from './Components/Form'

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default App
