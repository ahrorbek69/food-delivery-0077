import React from 'react'

const Header = () => {
  return (
    <div className=' fixed z-50 w-screen bg-slate-300 px-16 p-6'>
        {/* desktop-table */}
        <div className="hidden md:flex w-full">
          
        </div>



        {/* mobile */}
        <div className="flex md:hidden w-full"></div>
    </div>
  )
}

export default Header