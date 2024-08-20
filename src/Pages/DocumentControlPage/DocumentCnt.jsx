import React from 'react'
import Header from '../../Components/Header'
import Sidebar2 from '../../Components/Sidebar2'
import SelectOption from '../../Components/DocumentControl/SelectOption'
import TableDocument from '../../Components/DocumentControl/TableDocument'
import PrintDocument from '../../Components/DocumentControl/PrintDocument'
import Support from '../../Components/Support'

const DocumentCnt = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Hidden on small screens, visible on medium screens and above */}
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col ">
        {/* Header takes full width */}
        <Header />
        {/* Form takes remaining space */}
        <div className='pl-6'>
        <SelectOption />
        <div className='py-5 pr-5'>
          <TableDocument />
          <PrintDocument />
        </div>
        </div>
          <Support />
        
      </div>
    </div>
  )
}

export default DocumentCnt
