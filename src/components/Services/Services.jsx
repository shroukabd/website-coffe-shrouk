import React from 'react'
import Coffee1 from '../../assets/coffee1.png'
import Coffee2 from '../../assets/coffee3.png'

const serviceData = [
    {
        id: 1,
        image: Coffee1,
        title:"Black Coffee",
        subtitle:"lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis",
    },
    {
        id: 2,
        image: Coffee2,
        title:"Hot Coffee",
        subtitle:"lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis",
    },
    {
        id: 3,
        image: Coffee1,
        title:"Cold Coffee",
        subtitle:"lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis",
    },
]
const Services = () => {
  return (
    <div className='overflow-x-hidden container my-16 space-y-4'>
         {/* Header Section */}
         <div className='text-center max-w-lg mx-auto space-y-2'>
            <h1 className='text-3xl font-bold text-lightGray' data-aos="fade-up">
                Fresh and <span className='text-primary'>Tasty Coffee</span>
                </h1>
                <p className='text-sm opacity-50' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, 
                    nam beatae autem soluta, cum a fugit non facilis commodi sint nulla eveniet
                     aliquam culpa!</p>
         </div>
         {/* Card Section */}
        <div className='grid grid-cols-1-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {serviceData.map((service) => (
              <div className=' text-center p-4 space-y-6'>
                <img src={service.image} alt="" className='hover:scale-110 
                duration-300 cursor-pointer' />
                <div className='space-y-2'>
                    <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                    <p className='text-darkGray'>{service.subtitle}</p>

                </div>
              </div>
          
              
            ))}
        </div>
    </div>
  )
}

export default Services
