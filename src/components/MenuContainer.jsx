import React from 'react'
import '../style/menuContainer.css'
import {IoFastFoodSharp} from 'react-icons/io5'

const MenuContainer = () => {
  return (
    <section className=' w-full my-6' id='menu'>
        <div className=' w-full flex flex-col items-center justify-center'>
            <p className=' text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>Our Hot Dishes</p>


            <div className='  w-full flex flex-col items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none '>
                <div className='group menu_anim w-24 min-w-[94px] h-28 cursor-pointer rounded-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all  ease-in-out drop-shadow-lg'>
                    <div className='  w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-100 flex items-center justify-center'>
                        <IoFastFoodSharp className=' text-textColor group-hover:bg-gray-100' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
//jikohokih
export default MenuContainer