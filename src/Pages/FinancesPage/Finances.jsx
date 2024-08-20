import React from 'react'
import Header from '../../Components/Header'
import Sidebar2 from '../../Components/Sidebar2'
import SelectFinance from '../../Components/Finance/SelectFinance'
import TableFinance from '../../Components/Finance/TableFinance'
import PrintDocument from '../../Components/DocumentControl/PrintDocument'
import Support from '../../Components/Support'
import PrintFinance from '../../Components/Finance/PrintFinance'

const Finances = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar*/}
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        <div className='pl-6'>
          <SelectFinance />
        <div className='py-5 pr-5'>
          <TableFinance />
          <PrintFinance />
        </div>
        </div>
        <Support />
      </div>
    </div>
  )
}

export default Finances
