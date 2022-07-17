import React from 'react'
import { motion } from 'framer-motion'
import delivery from '../components/img/delivery.png'


const Home = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='grid mt-2 grid-cols-1 md:grid-cols-2 gap-2'
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



      <div className="py-2 bg-blue-400"></div>
    
    </motion.div>
  )
}

export default Home