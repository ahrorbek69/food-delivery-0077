import React from 'react'
import Logo from './img/logo.png'
import {TiShoppingCart} from 'react-icons/ti'
import Avatar from './img/avatar.png'

const Header = () => {
  return (
    <div className=' fixed z-50 w-screen px-16 p-6'>
        {/* desktop-table */}
        <div className="hidden md:flex w-full items-center justify-between">
          <div className="flex items-center  gap-2 ">
            <img src={Logo} alt="logo" className=' w-8 object-cover' />
            <p className=' text-headingColor text-xl font-bold'>City</p>
          </div>

          <div className="flex items-center gap-8">
          <ul className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
          </ul>

          <div className="relative flex items-center justify-center">
              <TiShoppingCart className='text-textColor text-2xl cursor-pointer'/>
              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cart flex items-center justify-center">
                <p className='text-xs text-white font-semibold'>2</p>
                 
              </div>
          </div>

          <img src={Avatar} alt="avatar" className='w-10 min-w-[40px] h-10
          min-h-[40px] drop-shadow-xl cursor-pointer
          '/>

          </div>

        </div>



        {/* mobile */}
        <div className="flex md:hidden w-full"></div>
    </div>
  )
}

export default Header