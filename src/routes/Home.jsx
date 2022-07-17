import React from 'react'
import { motion } from 'framer-motion'
import delivery from '../components/img/delivery.png'
import heroBg from '../components/img/heroBg.png'
import { menuData } from '../utils/data'

const Home = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className=' mt-4 grid grid-cols-1 md:grid-cols-2 gap-2'
    >

<div className="py-2 gap-6 flex-1 flex flex-col items-start  justify-start">
      <div className="flex items-center justify-start bg-orange-300 rounded-md p-2 gap-2">
      <p className='text-base text-orange-900 font-semibold'>
          Biker Delivery
        </p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white text-center">
          <img src={delivery} className='w-full h-full object-cover ' alt="delivery" />
        </div>
      </div>


      <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in {' '} <span className=' text-orange-600 text-[3rem] lg:text-[5rem]'>Your House</span></p>


      <p className=' text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum iste deserunt ipsa aliquid atque temporibus suscipit, saepe quibusdam asperiores voluptas necessitatibus consectetur. Temporibus delectus necessitatibus ab sint eveniet accusantium ullam.</p>

      <button className=' to-orange-500 transition-all ease-in-out duration-100 bg-gradient-to-br from-orange-500 px-3 py-2 rounded-md text-center text-blue-900  text-base font-bold md:w-auto w-full shadow-lg'>Order Now</button>
      </div>



      <div className=" relative py-2 flex-1">
          <img className=' h-[620px] ml-auto w-full lg:w-auto xl:ml-auto xl:h-[650px]' src={heroBg} alt="heroBg" />

          <div className=" absolute top-0 lg:left-[100px] flex items-center justify-center lg:px-40 py-4 w-full h-full gap-6 xl:gap-3 flex-wrap ">

          {
            menuData && menuData.map((item,inx)=>(
              <div key={inx} className= " min-w-[190px] w-190 p-4 rounded-md bg-cartOverlay backdrop-blur-md  flex items-center justify-center flex-col">
              <img className=' mr-auto ml-auto w-20 -mt-10 lg:w-40 lg:-mt-20' src={item.imgUrl} alt="i1" />
              <p className=' text-base lg:text-xl font-semibold text-textColor'>{item.name} </p>

              <p className=' text-[10px] lg:text-sm text-lightText font-semibold my-2'>{item.desc}</p>


            <p className='text-sm font-semibold text-headingColor '><span className='text-sm text-red-600'>$</span>{item.price}</p>




            </div>
            ))
          }
          
          </div>
      </div>
    
    </motion.div>
  )
}

export default Home