import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../footer/Footer.jsx'
import PreviewCounseling from '../counseling/PreviewCounseling.jsx';
import LegalBanner from '../newbanner/LegalBanner.jsx';

export default function CarBody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
 
   <Navbar></Navbar>
  <LegalBanner></LegalBanner>
  
   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full  flex justify-center items-center py-16 '>
   <video className="rounded-3xl  lg:h-[700px] "
        src= "./img/video/allinsurance.MP4"
        preload="auto"
        autoPlay
        loop
        controls
       >
     </video>
  
   </div>
   <div className='w-full mx-auto md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4'>

    <div className='xl:w-[1250px] max-xl:w-full px-4  flex items-center gap-2  '>
    <div className='md:w-4 max-md:w-3 h-10 bg-[#fdce0b] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > مشاوره حقوقی  </h1>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4  flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#fdce0b] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >پیشگیری از مشکلات قانونی: </h1>
    </div>
    <p className=' '> با دریافت مشاوره قبل از ورود به معاملات یا تصمیمات مهم، می‌توان از بروز مشکلات قانونی جلوگیری کرد
    </p>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4  '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#fdce0b] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >راهنمایی در فرآیندهای قانونی: </h1>
    </div>
    <p className=' '>
    مشاوران حقوقی می‌توانند در مراحل دادگاهی، تنظیم قراردادها، ثبت املاک و سایر امور قانونی به مراجعین کمک کنند.
   توسعه استراتژی‌های قانونی: در موارد پیچیده، مشاوران می‌توانند استراتژی‌های مناسبی برای حل مسائل قانونی ارائه دهند
    </p>
    </div>
    <div className='xl:w-[1250px] max-xl:w-full px-4 lg:h-1/6' >
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#fdce0b] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>
    انواع خدمات مشاوره حقوقی
      </h1>
    </div>
    <p className='    ' >
    مشاوره در زمینه خانواده: شامل طلاق، حضانت، و مسائل مالی.
    مشاوره در زمینه کسب‌وکار: شامل ثبت شرکت، قراردادها و حقوق کار.
    مشاوره در زمینه حقوق جزا: شامل دفاع از متهمان و مشاوره در پرونده‌های کیفری.
    مشاوره در زمینه املاک و مستغلات: شامل خرید و فروش، اجاره و مسائل مربوط به مالکیت.

    </p></div>
    <div className='xl:w-[1250px] max-xl:w-full px-4 h-1/6  flex items-center justify-end mouse-pointer'>
     {/* <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/> */}
     <button className='w-[150px] h-10 bg-[#fdce0b] rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2' 
       style={{
        background: 'linear-gradient(to bottom, #fffbcb 0.2%, #ffef37 ,#fdce0b 50%)',
      }}>
      <img src="./img/button/Asset.svg" alt="" className='w-8'/>
      درخواست
     </button>
    </div>
   </div>

  <PreviewCounseling></PreviewCounseling>
   <Footer></Footer>
   </div>
    </>
    
  )
}
