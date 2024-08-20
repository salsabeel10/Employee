import React from 'react'
import Header from '../../Components/Header'
import Sidebar2 from '../../Components/Sidebar2'
import FormProjectInit from '../../Components/ProjectInitiation/FormProjectInit'
import Print from '../../Components/Print'
import Support from '../../Components/Support'

const ProjectInit = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar2 className="md:w-64" />
      <div className="flex-1 flex flex-col">
        {/* Header takes full width */}
        <Header className="p-4" />
        <main className="flex-1 p-3 ">
          <FormProjectInit />
        </main>
        
        <div className='mb-2'> 
          <Support />
        </div>
      </div>
    </div>
  )
}

export default ProjectInit
