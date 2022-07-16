import React from 'react'
import delivery from '../components/img/delivery.png'

const MainContainer = () => {
  return (
    <div className='grid mt-2 grid-cols-1 md:grid-cols-2 gap-2' >
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
      <div className="flex items-center justify-center bg-orange-300 rounded-md p-2 gap-2">
      <p className='text-base text-orange-900 font-semibold'>
          Biker Delivery
        </p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white text-center">
          <img src={delivery} className='w-full h-full object-cover ' alt="delivery" />
        </div>
      </div>
      </div>



      <div className="py-2 bg-blue-400"></div>
    </div>
  )
}

export default MainContainer