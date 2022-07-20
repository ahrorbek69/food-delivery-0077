import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-auto my-12  ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
        <div className=' w-300 md:w-225 my-12 backdrop-blur-lg'>
            <div className=' w-full flex items-center justify-between'>
                <motion.img
                whileHover={{scale: 0.75}}
                className=' w-40  -mt-8' src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" alt="" />

                <div className=' w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                  <MdShoppingBasket className=' text-white' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowContainer