import React from 'react'
import worldMap from '../../assets/world-map.png'
const WhrereToBuy = () => {
  return (
    <div className='container my-36'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 
      place-items-center'>
      {/* form section */}
      <div className='space-y-8'  
  >
    <h1 className='text-4xl font-bold text-darkGray font-serif'
    data-aos="zoom-out-up">Buy our Products from anywhere</h1>
    <div className='flex items-center gap-4'   data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <input type="text" name="" id="" placeholder='Name'
       className='input-style w-full lg:w-[150px]'/>
      <input type="email" name="" id="" placeholder='Email'
       className='input-style w-full '/>

    </div>
    <div className='flex items-center gap-4' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
  >
      <input type="text" name="" id="" placeholder='counter'
       className='input-style w-full'/>
      <input type="email" name="" id="" placeholder='zipcode'
       className='input-style w-full lg:w-[150px]'/>

    </div>
    <button className='primary-btn hover:scale-110 w-full'>Order Now</button>
      </div>
       {/* world map section */}
       <div className='col-span-2'>
        <img src={worldMap} alt="" className='w-full sm:w-[500px] mx-auto' 
        data-aos="zoom-in-down"/>
       </div>
       </div>
    </div>
  )
}

export default WhrereToBuy
