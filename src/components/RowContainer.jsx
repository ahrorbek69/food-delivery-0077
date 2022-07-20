import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-auto my-12  ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
        <div className=' w-300 md:w-275 my-12 backdrop-blur-lg'>
            <div className=' w-full flex items-center justify-between'>
                <motion.img
                whileHover={{scale: 1.2}}
                className=' w-28  -mt-12' src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" alt="" />

                <motion.div whileHover={{scale: 0.75}} className=' w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                  <MdShoppingBasket className=' text-white' />
                </motion.div>
            </div>

        <div className=' w-full flex items-end justify-center'>
          <p className=' text-textColor font-semibold text-base md:text-md'>
            Chocolate & Vanilla
          </p>
          <p className=' flex mt-1 text-sm text-gray-500'>45 Calories</p>

          <div className='flex items-center gap-8'>
            <p className=' text-lg text-headingColor font-semibold'>
              <span className='text-sm text-red-500'>$</span>
              5.25
            </p>
          </div>
        </div>

        </div>
    </div>
  )
}

export default RowContainer