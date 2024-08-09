import React from 'react'
import Sidebar2 from '../../Components/Sidebar2'
import HeaderTime from './HeaderTime'
import TimeSheetCompute from '../../Components/TimeSheetCompute'
import SelectTimeSheet from './SelectTimeSheet'


const TimeSheet = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Hidden on small screens, visible on medium screens and above */}
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <HeaderTime className="p-4" />
        <div className='pl-6 pr-4'>
        <SelectTimeSheet />
        <TimeSheetCompute />
        </div>
        {/* Form takes remaining space */}
      </div>
    </div>
  )
}

export default TimeSheet
