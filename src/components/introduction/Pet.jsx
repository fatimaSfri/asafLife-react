import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Blog from '../blog/Blog'
import Animal from '../newbanner/AnimalBanner.jsx';

export default function CarBody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
  
   <Navbar></Navbar>
   <Animal ></Animal>
   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full  flex justify-center items-center py-16 '>
   <video className="rounded-3xl  lg:h-[700px] "
        src= "./img/video/pet.mp4"
        preload="auto"
        autoPlay
        loop
        controls
        muted
       >
     </video>
  
   </div>
   <div className='w-10/12 mx-auto md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 '>

    <div className='md:w-9/12 max-md:w-10/12  flex items-center gap-2  '>
    <div className='w-4 h-10 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه حیوانات خانگی</h1>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >معاینات سالانه</h1>
    </div>
    <p className=' '> 
    خدمات تشخیصی پیشرفته: شامل هزینه‌های تصویربرداری (مانند رادیوگرافی، سونوگرافی) و آزمایشات تخصصی 
    هزینه‌های معاینه‌های دوره‌ای که برای بررسی سلامتی حیوان خانگی انجام می‌شود و هزینه‌های واکسن‌های ضروری برای جلوگیری از بیماری‌های شایع
    </p>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >درمان‌های اورژانسی</h1>
    </div>
    <p className=' '> 
     پوشش هزینه‌های درمان در مواقع اضطراری، مانند تصادفات یا بیماری‌های ناگهانی.
     داروهای تجویزی: هزینه‌های داروهایی که دامپزشک برای درمان بیماری‌های خاص تجویز می‌کند آزمایشات تشخیصی: هزینه‌های آزمایشات اولیه مانند آزمایش خون یا ادرار
    </p>
    </div>
    <div className='md:w-9/12 max-md:w-10/12 lg:h-1/6 '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>
    هزینه‌های جراحی
      </h1>
    </div>
    <p className='    ' >
    پوشش هزینه‌های جراحی‌های ضروری، مانند جراحی‌های اورژانسی یا جراحی‌های مرتبط با بیماری‌ها
    ،هزینه‌های درمان‌های تخصصی که توسط دامپزشکان متخصص انجام می‌شود، مانند درمان‌های اورتوپدی یا قلبی
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
