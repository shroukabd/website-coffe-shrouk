import React from 'react'
 import BannerImg from '../../assets/coffee-cover.jpg'
 import AppStoreImg from '../../assets/app_store.png'
 import playStoreImg from '../../assets/play_store.png'

 const BannerStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    hight: "100%" ,
    width: "100%" ,

 }
const AppBaner = () => {
  return (
    <div className='container my-14'>
      <div style={BannerStyle} className='sm:min-h-[400px]
      sm-flex sm-justify-end sm-items-center' data-aos="fade-up"
     data-aos-duration="3000"
    >
        <div>
            <div className='space-y-6 max-w-xl mx-auto pt-[90px] pl-[210px]'>
                <h1 className='text-2xl text-center sm:text-4xl font-semibold' 
                data-aos="zoom-in">Dawnlod the App</h1>
                <p className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quidem dicta placeat reprehenderit autem non architecto</p>
                   {/* images linkes */}
                   <div className='flex justify-center items-center gap-4'>
                    <a href="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                        <img src={AppStoreImg} alt="" data-aos="fade-right"/>
                    </a>
                    <a href=""  className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                        <img src={playStoreImg} alt="" data-aos="fade-left"/>
                    </a>
                   </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default AppBaner
