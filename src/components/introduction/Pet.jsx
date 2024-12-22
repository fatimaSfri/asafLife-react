import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PreviewServices from '../services/PreviewSrvices';
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
        src= "./img/video/insurancePet.MP4"
        preload="auto"
        autoPlay
        loop
        controls
       >
     </video>
  
   </div>
   <div className='w-full mx-auto md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 '>

    <div className='xl:w-[1250px] max-xl:w-full px-4  flex items-center gap-2  '>
    <div className='md:w-4 max-md:w-3 h-10 bg-[#ffae00] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه حیوانات خانگی</h1>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4 flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#ffae00] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >معاینات سالانه</h1>
    </div>
    <p className=' '> 
    خدمات تشخیصی پیشرفته: شامل هزینه‌های تصویربرداری (مانند رادیوگرافی، سونوگرافی) و آزمایشات تخصصی 
    هزینه‌های معاینه‌های دوره‌ای که برای بررسی سلامتی حیوان خانگی انجام می‌شود و هزینه‌های واکسن‌های ضروری برای جلوگیری از بیماری‌های شایع
    </p>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4  '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#ffae00] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >درمان‌های اورژانسی</h1>
    </div>
    <p className=' '> 
     پوشش هزینه‌های درمان در مواقع اضطراری، مانند تصادفات یا بیماری‌های ناگهانی.
     داروهای تجویزی: هزینه‌های داروهایی که دامپزشک برای درمان بیماری‌های خاص تجویز می‌کند آزمایشات تشخیصی: هزینه‌های آزمایشات اولیه مانند آزمایش خون یا ادرار
    </p>
    </div>
    <div className='xl:w-[1250px] max-xl:w-full px-4  lg:h-1/6 '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#ffae00] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>
    هزینه‌های جراحی
      </h1>
    </div>
    <p className='    ' >
    پوشش هزینه‌های جراحی‌های ضروری، مانند جراحی‌های اورژانسی یا جراحی‌های مرتبط با بیماری‌ها
    ،هزینه‌های درمان‌های تخصصی که توسط دامپزشکان متخصص انجام می‌شود، مانند درمان‌های اورتوپدی یا قلبی
       </p></div>
       <div className='xl:w-[1250px] max-xl:w-full px-4 h-1/6  flex items-center justify-end mouse-pointer'>
     {/* <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/> */}
     <button className='w-[150px] h-10 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2'
     style={{
      background: 'linear-gradient(to bottom, #fff7d4 0.2%, #ffea87, #ffae00 50%)',
    }}
     >
      <img src="./img/button/Asset.svg" alt="" className='w-8'/>
      درخواست
     </button>
    </div>
    
   </div>
   <PreviewServices></PreviewServices>
   <Footer></Footer>
   </div>

   
    </>
  )
}
