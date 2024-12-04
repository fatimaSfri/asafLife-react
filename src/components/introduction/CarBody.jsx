import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import BannerForCar from  '../newbanner/BannerForCar';
import Footer from '../footer/Footer'
import Blog from '../blog/Blog'

export default function CarBody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
  
   <Navbar></Navbar>
   <BannerForCar play="hidden" gap="xl:gap-40 gap-20" size="xl:w-4/12"></BannerForCar>
   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full  flex justify-center items-center py-16 '>
   <video className="rounded-3xl  lg:h-[700px] "
        src= "./img/video/tenTen.mp4"
        preload="auto"
        autoPlay
        loop
        controls
        muted
       >
     </video>
  
   </div>
   <div className='w-full md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 '>

    <div className='md:w-10/12 max-md:w-11/12  flex items-center gap-2  '>
    <div className='w-4 h-10 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه ثالث بدنه</h1>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >بیمه بدنه:</h1>
    </div>
    <p className=' '> این بیمه اختیاری است و خسارت‌هایی را که به خودروی خود بیمه‌گذار وارد می‌شود، جبران می‌کند.این بیمه اختیاری است و خسارت‌هایی را که به خودروی خود بیمه‌گذار وارد می‌شود، جبران می‌کند.این بیمه اختیاری است و خسارت‌هایی را که به خودروی خود بیمه‌گذار وارد می‌شود، جبران می‌کند.
    </p>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >پوشش‌های اصلی: </h1>
    </div>
    <p className=' '>شامل حوادثی مانند تصادف، آتش‌سوزی، سرقت کلی خودرو، یا واژگونی
    </p>
    </div>
    <div className='md:w-9/12 max-md:w-10/12 lg:h-1/6 '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>پوشش‌های اضافی:</h1>
    </div>
    <p className='    ' >شامل سرقت قطعات، شکستن شیشه، بلایای طبیعی (سیل، زلزله)، یا آسیب ناشی از آشوب و اعتصاب.
    امکان انتخاب پوشش‌های متنوع بر اساس نیاز و ارزش خودرو.
   مناسب برای کاهش هزینه‌های ناشی از خسارات سنگین به خودرو
   شامل سرقت قطعات، شکستن شیشه، بلایای طبیعی (سیل، زلزله)، یا آسیب ناشی از آشوب و اعتصاب.
   امکان انتخاب پوشش‌های متنوع بر اساس نیاز و ارزش خودرو.
   مناسب برای کاهش هزینه‌های ناشی از خسارات سنگین به خودرو
    </p></div>
    <div className='md:w-9/12 max-md:w-10/12 h-1/6  flex items-center justify-end mouse-pointer'>
     <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/>
    </div>
    
   </div>
   <Blog text='بیمه ها' gap="md:mb-32 max-md:py-10" ></Blog>
   <Footer></Footer>
   </div>

   
    </>
  )
}
