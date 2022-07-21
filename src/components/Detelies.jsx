import React from 'react'

const Detelies = ({data}) => {
console.log(data);
  return (
    <div className=' w-full min-h-screen bg-gray-100'>
      {
        data && data.map((item) => (
            <div key={item.id} className=' grid grid-cols-1 md:grid-cols-2 h-[60vh] gap-4 w-full bg-neutral-400'>
                <div className=' w-[100%] h-full bg-red-300'>
                  <img src={item.imageAssets} alt="" />
                </div>
                <div className=' w-[100%] h-full bg-red-300'></div>
            </div>
        ))
      }
    </div>
  )
}

export default Detelies