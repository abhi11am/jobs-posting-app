import React from 'react'
import Navbar from 'components/layout/Navbar'

const MasterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-70px)] mt-[70px] max-w-screen-xl mx-auto p-4">
        {children}
      </main>
    </div>
  )
}

export default MasterLayout
