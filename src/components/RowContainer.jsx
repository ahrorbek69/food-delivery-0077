import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import NotFaund from './img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({flag,data,scrollValue}) => {
  console.log(data);



  const rowContainer = useRef()
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue
  } ,[scrollValue])

const [items, setItems] = useState([])
  const[{cartItems} , dispatch] = useStateValue()
  const addToCart = () => {
    localStorage.setItem('cartItems', JSON.stringify(items))
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items
    })
  }
  useEffect(() => {
    addToCart()  
  }, [items])

  return (
    <>
    <div ref={rowContainer} className={ ` w-full scroll-smooth gap-3 flex items-center justify-center my-12 ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
       {
        data && data.length > 0 ? data.map((item,inx)=>(
          
          <div  key={item.id} className=' min-w-350 hover:drop-shadow-lg bg-gray-200 rounded-lg p-2 w-300 md:w-350 my-12 backdrop-blur-lg'>
          <div className=' relative w-full flex items-center justify-between'>
            <motion.div 
            whileHover={{scale: 1.2}}
            className={`drop-shadow-xl w-32 h-32 object-auto absolute -mt-4`}
            >

              <Link to={`detelies/:${item.id}`}>
              
              <img
              className=' w-full h-full overscroll-contain' src={item.imageAssets} alt={item.imageAssets} />

              </Link>

            </motion.div>

              <motion.div 
              onClick={() => setItems([...cartItems,item])}
              whileHover={{scale: 0.75}} className=' w-8 h-8 rounded-full bg-red-600 ml-auto flex items-center justify-center cursor-pointer hover:shadow-md'>
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
      : 
      <div className=' w-full h-[50vh]   flex-col flex items-center justify-center'>
        <img className=' object-contain mb-4 overflow-hidden' src={NotFaund} alt="NotFaund" />
        <p className='text-2xl text-orange-800 font-bold'>Not Faund Items</p>
      </div>
      }
    </div>
</>
  )
}

export default RowContainer