import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus,BiPlus } from 'react-icons/bi'
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
            <img className=' w-20 h-20 max-w-0-[60px] rounded-full object-contain' src="https://firebasestorage.googleapis.com/v0/b/fast-food-delivery-app-be95c.appspot.com/o/Image%2F1658478027228-f9.png?alt=media&token=4e0e1042-096f-4e58-8703-d3f7c2777043" alt="" />

            {/* name section */}
            <div className='flex flex-col gap-2'>
                <p className=' text-base text-gray-50'>Banana</p>
                <p className=' text-sm block text-red-600 font-semibold'>$ 8.25</p>
            </div>
            {/* button section */}
            <div className=' group flex items-center gap-2 ml-auto cursor-pointer'>
                <motion.div whileTap={{scale: .75}}>
                    <BiMinus className=' text-gray-50' />
                </motion.div>
                <p className=' w-5 h-5 rounded-sm bg-cartbg text-gray-50 flex items-center justify-center'>
                    1
                </p>
                <motion.div
                whileTap={{scale: .75}}
                >
                <BiPlus className=' text-gray-50' />
                </motion.div>
            </div>
        </div>

    </div>
</div>


 </div>

  
}

export default CartContainer