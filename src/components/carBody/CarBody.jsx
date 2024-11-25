import React, { Fragment } from 'react'
import Navbar from '../navbar/Navbar'
import BannerForCar from  '../newbanner/BannerForCar';
import Footer from '../footer/Footer'
import Blog from '../blog/Blog'

export default function CarBody() {
  return (
    <>
   <Navbar></Navbar>
   <BannerForCar></BannerForCar>
   <div className='h-auto w-full bg-gray-200'>
   <div className='w-full  flex justify-center items-center py-16 '>
   <video className="rounded-3xl  lg:h-[700px] "
        src= "./img/video/CarBody.MP4"
        preload="auto"
        controls
        autoPlay
        loop
        muted >
     </video>
   </div>
   <div className='w-full max-lg:h-[100vh] lg:h-[70vh] flex flex-col items-center justify-center'>

    <div className='w-9/12   flex items-center gap-2'>
    <div className='w-4 h-10 bg-[#6827b5] rounded-full mr-10'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه ثالث بدنه</h1>
    </div>

    <div className='w-9/12 flex flex-col '>
    <div className='flex items-center gap-4 p-6'>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full mr-10'></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >بیمه بدنه:</h1>
    </div>
    <p className=' lg:pr-24 max-lg:pr-10'> .این بیمه اختیاری است و خسارت‌هایی را که به خودروی خود بیمه‌گذار وارد می‌شود، جبران می‌کند.این بیمه اختیاری است و خسارت‌هایی را که به خودروی خود بیمه‌گذار وارد می‌شود، جبران می‌کند.این بیمه اختیاری است و خسارت‌هایی را که به خودروی خود بیمه‌گذار وارد می‌شود، جبران می‌کند.
    </p>
    </div>

    <div className='w-9/12  '>
    <div className='flex items-center gap-4 p-6'>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full mr-10'></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >پوشش‌های اصلی: </h1>
    </div>
    <p className=' lg:pr-24 max-lg:pr-10'>شامل حوادثی مانند تصادف، آتش‌سوزی، سرقت کلی خودرو، یا واژگونی
    </p>
    </div>
    <div className='w-9/12 lg:h-1/6 '>
    <div className='flex items-center gap-4 p-6'>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full mr-10'></div>
    <h1 className='font-bold text-[18px] text-[#213063]'>پوشش‌های اضافی:</h1>
    </div>
    <p className=' lg:pr-20 max-lg:pr-10 pl-7 w-9/12' >شامل سرقت قطعات، شکستن شیشه، بلایای طبیعی (سیل، زلزله)، یا آسیب ناشی از آشوب و اعتصاب.
    امکان انتخاب پوشش‌های متنوع بر اساس نیاز و ارزش خودرو.
   مناسب برای کاهش هزینه‌های ناشی از خسارات سنگین به خودرو
   شامل سرقت قطعات، شکستن شیشه، بلایای طبیعی (سیل، زلزله)، یا آسیب ناشی از آشوب و اعتصاب.
   امکان انتخاب پوشش‌های متنوع بر اساس نیاز و ارزش خودرو.
   مناسب برای کاهش هزینه‌های ناشی از خسارات سنگین به خودرو
    </p></div>
    <div className='w-9/12 h-1/6  flex items-end justify-end mouse-pointer '>
     <img src="./img/Animation/car/button.png" alt=""  className='w-[150px] lg:ml-16 max-lg:ml-8 lg:-mb-20'/>
    </div>
    
   </div>
   <Blog text='بیمه ها' ></Blog>
   <Footer></Footer>
   </div>

   
    </>
  )
}
