import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'

const RowContainer = ({flag,data,scrollValue}) => {
  console.log(data);
  const rowContainer = useRef()
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue
  } ,[scrollValue])
  return (
    <>
    <div ref={rowContainer} className={ ` scroll-smooth w-auto gap-3 flex items-center my-12 ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
       {
        data && data.map((item,inx)=>(
          <div key={item.id} className=' hover:drop-shadow-lg bg-gray-200 rounded-lg p-2 w-300 md:w-350 my-12 backdrop-blur-lg'>
          <div className=' relative w-full flex items-center justify-between'>
              <motion.img
              whileHover={{scale: 1.2}}
              className=' drop-shadow-xl w-28 absolute -mt-8' src={item.imageAssets} alt={item.imageAssets} />

              <motion.div whileHover={{scale: 0.75}} className=' w-8 h-8 rounded-full bg-red-600 ml-auto flex items-center justify-center cursor-pointer hover:shadow-md'>
                <MdShoppingBasket className=' text-white' />
              </motion.div>
          </div>

      <div className=' w-full flex-col text-end justify-center'>
        <p className=' text-textColor font-semibold text-base md:text-lg'>
          {item.title}
        </p>
        <p className=' mt-1 text-sm text-gray-500'>{item.calories} Calories</p>

        <div className=' items-center gap-8'>
          <p className=' text-lg text-headingColor font-semibold'>
            <span className='text-sm text-red-500'>$</span>
           {item.price}
          </p>
        </div>
      </div>

      </div>
        ))
       }
    </div>
</>
  )
}

export default RowContainer