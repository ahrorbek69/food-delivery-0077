import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import {motion} from 'framer-motion'

const CartContainer = () => {
 return <div className=' fixed top-0 right-0 w-full md:w-375 z-[1001] h-[100vh] bg-white drop-shadow-md flex flex-col'>
    
<div className=' w-full flex items-center justify-between cursor-pointer p-4'>
    <motion.div
    whileTap={{scale: .75}}
    >
        <MdOutlineKeyboardBackspace className=' text-textColor text-3xl ' />
    </motion.div>
        <p className=' text-textColor text-lg font-semibold'>Cart</p>

        <motion.p 
        whileTap={{scale: .75}}
        className=' flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md select-none cursor-pointer text-textColor text-base'>Clear <RiRefreshFill /></motion.p>
    
</div>

{/* bottom section */}
<div className=' w-full h-full bg-cartbg rounded-t-[2rem] flex flex-col'>
    <div className=' w-full h-340 md:h-44 px-6 my-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
        {/* cart item */}
        <div className=' w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>

        </div>

    </div>
</div>


 </div>

  
}

export default CartContainer