import React from 'react'
import Sidebar2 from '../../Components/Sidebar2'
import HeaderTime from '../../Components/TimeSheet/HeaderTime'
import TimeSheetCompute from '../../Components/TimeSheet/TimeSheetCompute'
import SelectTimeSheet from '../../Components/TimeSheet/SelectTimeSheet'
import Support from '../../Components/Support'
import Print from '../../Components/Print'



const TimeSheet = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar*/}
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <HeaderTime  />
        <div className="pl-5 pr-4 mb-3">
          <SelectTimeSheet />
          <TimeSheetCompute />
          <Print />  
        </div>
        <div>
          <Support />
        </div>
        
      </div>
    </div>
  )
}

export default TimeSheet
