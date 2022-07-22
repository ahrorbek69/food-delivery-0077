import React,{useEffect, useState} from 'react'
import '../style/menuContainer.css'
import {IoFastFoodSharp} from 'react-icons/io5'
import {categories} from '../utils/data'
import {motion} from 'framer-motion'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'

const MenuContainer = () => {
    const [filter, setFilter] = useState('chicken')

    const [{foodItems} , dispatch] =useStateValue()


    return (
    <section className=' w-full my-6' id='menu'>
        <div className=' w-full flex flex-col items-center justify-center'>
            <p className=' text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>Our Hot Dishes</p>


            <div className='  w-full flex  items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none '>
                {
                    categories && categories.map((item,inx) => (
                        <motion.div

                        whileTap={() => setFilter(item.imgUrl) && {scale: 0.6}}
                        whileHover={{scale: 1.1}}
                         key={inx} className={`group ${filter === item.imgUrl ? 'menu_active  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg flex flex-col gap-3 items-center justify-center drop-shadow-lg hover:shadow-sm hover:shadow-yellow-900  border-2 border-red-600' : 'menu_anim w-24 min-w-[94px] h-28 cursor-pointer rounded-lg flex flex-col gap-3 items-center justify-center drop-shadow-lg hover:shadow-sm hover:shadow-yellow-900 '} `}>
                    <div className='  w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-100 flex items-center justify-center'>
                        <IoFastFoodSharp className=' text-lg text-textColor ' />
                    </div>
                    <p className=' text-sm text-white'>{item.name}</p>
                </motion.div>
                    ))
                }
            </div>

                <div className=' w-full'>
                    <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)}/>
                </div>

        </div>
    </section>
  )
}
//jikohokih
export default MenuContainer