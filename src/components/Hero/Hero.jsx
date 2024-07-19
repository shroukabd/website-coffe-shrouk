import React from 'react'
import BgImage from '../../assets/bg-slate.png';
import Blackcoffee from '../../assets/black.png'
import Navbar from '../Navbar/Navbar';
import { FaFacebook , FaInstagram , FaTwitter  } from "react-icons/fa";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const bgImage ={
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100vh",
    // width: "100vw",
};
const Hero = () => {
 const [sideBar, setSideBar] = useState(false)
  return (
    <main style={bgImage}>
      <section className='min-h-[750px] w-full overflow-x-hidden ' >
        <div className="container ">
        {/* Navbar Section */}
        <Navbar sideBar={sideBar} setSideBar={setSideBar}/>
       {/* Hero Section */}
      
       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 
       place-items-center min-h-[850px]">

        {/* text content section */}
        <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24'>
            <h1 className='text-6xl font-bold leading-tight ml-14' data-aos="fade-down"
                                                  data-aos-easing="linear"
                                                >Blavk<br/> Tumbler</h1>
            <div className='relative'>
                <div className='relative z-10 space-y-3'>
                    <h1 className='text-2xl'  data-aos="fade-right">Black Lifestyle Lovers,</h1>
                    <h1 className='text-sm opacity-55 leading-loose w-[240px]' data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Culpa ad unde optio quisquam aut ducimus animi ab est
                          consequatur aliquam accusamus laboriosam quia voluptatibus, 
                        commodi doloribus? Itaque perspiciatis a porro.</h1>
                </div>
                <div className='absolute top-12  w-[250px] h-[180px] bg-gray-700/25'></div>
            </div>
        </div>
         {/* Hero image section */}
         <div className='relative'>
            <img src={Blackcoffee} alt=""
             className='relative z-40 h-[400px] md:h-[700px] img-shadow mr-[950px]'  data-aos="fade-up"
                                                                         data-aos-duration="3000"/>
         </div>
         {/* orange circel */}
          <div className='h-[180px] w-[180px] absolute top-20 ml-[270px]
           border-primary border-[20px] rounded-full z-10'  data-aos="fade-down"
                                                     data-aos-easing="linear"
                                                     data-aos-duration="1500" ></div>
          <div className='absolute top-10 left-[720px] z-[1]'>
          <h1 className='text-[110px] scale-150 font-bold text-darkGray/40
            leading-none'>Bluvck<br/> Tumbler</h1>
          </div>
          {/* third div section */}
          
          <div className='ml-[800px] top-40 absolute'>
          <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24'>
            <h1 className='opacity-0 text-6xl font-bold
             leading-tight ml-14'>Blavk Tumbler</h1>
            <div className='relative'>
                <div className='relative z-10 space-y-3' data-aos="fade-left">
                    <h1 className='text-2xl'>Blavk Tumbler,</h1>
                    <h1 className='text-sm opacity-55  leading-loose
                     w-[250px] h-[200px] bg-darkGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Culpa ad unde optio quisquam aut ducimus animi ab est
                          consequatur aliquam accusamus laboriosam quia voluptatibus, 
                        commodi doloribus? Itaque perspiciatis a porro.</h1>
                </div>
                <div className='absolute top-12  w-[250px] h-[180px] bg-gray-700/25'></div>
            </div>
        </div>
          </div>
         
          {/* sidebar menu section */}

        {  sideBar && (
           
          
          <div className='absolute top-0 right-0 w-[140px]
          h-full bg-gradient-to-b from-primary/80 to-primaryDark/80
           backdrop-blur-sm z-10'>
            <div className='w-full h-full flex justify-center item-center gap-6'>
              {/* line */}
              <div className='w-[1px] h-[70px bg-white]'>

              {/* social icons */}
              <div className='w-[1px] h-[70px bg-white] mt-[200px] '>
                <FaFacebook className='mb-[15px] cursor-pointer inline-block rounded-full border border-white text-white '/>
                <FaInstagram className='mb-[15px] cursor-pointer inline-block rounded-full  text-white '/>
                <FaTwitter className='mb-[15px] cursor-pointer inline-block rounded-full  text-white '/>
                </div>
              </div>
            </div>
           </div>)}
           
       </div>
       </div>
       
      </section>
    </main>
  )
}

export default Hero
