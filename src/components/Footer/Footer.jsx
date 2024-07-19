import React from 'react'
import { FaFacebook ,FaInstagram,FaYoutube,FaGoogle,FaPhone} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-primary pt-12 pb-8 text-white'>
    <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
      {/* company detailes section */}
      <div className='space-y-6' data-aos="fade-up"
     data-aos-duration="1000">
       <h1 className='text-2xl font-bold uppercase'>Coders Cafe</h1>
       <p className='text-sm max-w-[300px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. atque iste perspiciatis
         accusamus hic sunt voluptatem quaerat doloribus</p>
         <div>
            <p className='flex items-center gap-2'>
                <FaPhone/>
                +1234567890
            </p>
            <p className='flex items-center gap-2'>
                <MdEmail/>
               Coffee12@gmail.com
            </p>
         </div>
         </div>
      {/* footer linkes section */}
      <div className='space-y-6' data-aos="fade-up"
     data-aos-duration="2000">
          <h1 className='text-3xl font-bold'> Qhick Links </h1>
          <div className='grid grid-cols-2 gap-3'>
            <div className='space-y-6'>
                <ul className='space-y-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>

                </ul>
            </div>
            <div >
                <ul className='space-y-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>

                </ul>
            </div>


          </div>
      </div>
      {/* social linkes section */}
          <div className='space-y-6' data-aos="fade-up"
     data-aos-duration="3000">
            <h1 className='text-3xl font-bold'>Follow Us</h1>
            <div className='flex items-center gap-3'>
                <FaFacebook className='text-2xl hover:scale-105 duration-300 cursor-pointer '/>
                <FaInstagram className='text-2xl hover:scale-105 duration-300 cursor-pointer'/>
                <FaYoutube className='text-2xl hover:scale-105 duration-300 cursor-pointer'/>
                <FaGoogle className='text-2xl hover:scale-105 duration-300 cursor-pointer'/>

            </div>
            <div>
                <h1 className='text-1xl font-bold '>Payment Methods</h1>
               
            </div>

          </div>
          <div className='w-[1000px] ml-[90px]' data-aos="fade-up">
          <hr/></div>
          <div className='mt-10' data-aos="fade-up">
            <h1>Copyright @2024 company Name. All reservied</h1>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
