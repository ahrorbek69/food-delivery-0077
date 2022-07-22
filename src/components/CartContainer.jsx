import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus,BiPlus } from 'react-icons/bi'
import {motion} from 'framer-motion'
import '../style/cart_container.css'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import EmptyCart from './img/emptyCart.svg'
import CartItems from './CartItems'

const CartContainer = () => {
    const [{cartShow,cartItems,user},dispatch] = useStateValue()
    const [tot,setTot] = useState('')
    const flag = []
    const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow
        })
      }

      useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator,item){
            return accumulator + item.qty * item.price
        },0);
        setTot(totalPrice)
        console.log(tot);
      } ,[tot,flag])

      const cleardata = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: []
        })
      }

 return <motion.div
 initial={{opacity: 0 , x :200}}
 animate={{opacity: 1 , x :0}}
 exit={{opacity: 0 , x :200}}
 className=' fixed top-0 right-0 w-full md:w-375 z-[1001] h-[100vh] bg-white drop-shadow-md flex flex-col'>
    
<div className=' w-full flex items-center justify-between cursor-pointer p-4'>
    <motion.div
    onClick={showCart}
    whileTap={{scale: .75}}
    >
        <MdOutlineKeyboardBackspace className=' text-textColor text-3xl ' />
    </motion.div>
        <p className=' text-textColor text-lg font-semibold'>Cart</p>

        <motion.p 
        whileTap={{scale: .75}}
        onClick={cleardata}
        className=' flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md select-none cursor-pointer text-textColor text-base'>Clear <RiRefreshFill /></motion.p>
    
</div>

{/* bottom section */}

{
    cartItems && cartItems.length > 0 ? (
<div className=' w-full h-full bg-cartbg rounded-t-[2rem] flex flex-col'>
     {/* cart item section*/}
    <div className=' w-full h-340 md:h-42 px-6 my-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
        {/* cart item */}
        {
            cartItems && cartItems.map(item => (
                <CartItems key={item.id} item={item}/>
            ))
        }
    </div>


{/* cart total section */}
    <div className=' w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
        <div className=' w-full flex items-center justify-center'>
            <p className=' text-gray-400 text-lg'>Sub Total</p>
            <p className=' text-gray-400 text-lg'>$ {tot}</p>
        </div>
        <div className=' w-full flex items-center justify-center'>
            <p className=' text-gray-400 text-lg'>Delivery</p>
            <p className=' text-gray-400 text-lg'>$ 2.5</p>
        </div>

        <div className=' w-full border-b border-gray-600 my-2'></div>


        <div className=' w-full flex items-center justify-between'>
            <p className=' text-gray-200 text-xl font-semibold'>Total</p>
            <p className=' text-gray-200 text-xl font-semibold'>$ {tot + 2.5}</p>
        </div>

       {
        user ? (
            <motion.button
            whileTap={{scale: .75}}
            type='button'
            className=' w-full p-2 rounded-full cart_container text-gray-50 text-lg my-2 hover:shadow-lg'
            >
                Check Out
            </motion.button>
        ):(
            <motion.button
            whileTap={{scale: .75}}
            type='button'
            className=' w-full p-2 rounded-full cart_container text-gray-50 text-lg my-2 hover:shadow-lg'
            >
                Login to check out
            </motion.button>
        )
       }
    </div>



</div>

    ):(
        <div className=' w-full h-full flex flex-col items-center justify-center gap-6'>
            <img src={EmptyCart} alt="EmptyCart" className=' w-300'/>
            <p className=' text-xl text-textColor font-semibold'>Add some items to cart</p>
        </div>
    )
    
}


 </motion.div>

  
}

export default CartContainer