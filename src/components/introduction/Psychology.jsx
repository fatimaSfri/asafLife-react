import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../footer/Footer.jsx'
import PreviewCounseling from '../counseling/PreviewCounseling.jsx';
import Psychology from "../newbanner/PsychologyBanner.jsx"

export default function CarBody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
 
   <Navbar></Navbar>
   <Psychology ></Psychology>
   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full  flex justify-center items-center py-16 '>
   <video className="rounded-3xl  lg:h-[700px] "
        src= "./img/video/asaf.mp4"
        preload="auto"
        autoPlay
        loop
        controls
        muted
       >
     </video>
  
   </div>
   <div className='w-10/12  mx-auto md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 '>

    <div className='md:w-9/12 max-md:w-10/12  flex items-center gap-2  '>
    <div className='w-4 h-10 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه درمان </h1>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >بیمه‌های پایه </h1>
    </div>
    <p className=' '> 
    این نوع بیمه معمولاً توسط دولت یا سازمان‌های بیمه‌گر عمومی ارائه می‌شود و شامل خدمات اساسی پزشکی است. بیمه‌های پایه معمولاً هزینه‌های بیمارستانی، ویزیت پزشک و برخی داروها را پوشش می‌دهند.
    </p>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >بیمه درمان خصوصی </h1>
    </div>
    <p className=' '>
    این بیمه‌ها توسط شرکت‌های بیمه خصوصی ارائه می‌شوند و شامل خدمات گسترده‌تری نسبت به بیمه‌های پایه هستند. این نوع بیمه معمولاً انتخاب‌های بیشتری برای پزشکان و بیمارستان‌ها فراهم می‌کند.
    </p>
    </div>
    <div className='md:w-9/12 max-md:w-10/12 lg:h-1/6' >
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>
    بیمه درمان تکمیلی
      </h1>
    </div>
    <p className='    ' >
    بیمه درمان تکمیلی به عنوان یک پوشش اضافی برای بیمه پایه عمل می‌کند. این بیمه هزینه‌هایی را که بیمه پایه پوشش نمی‌دهد، مانند هزینه‌های جراحی‌های خاص یا داروهای خاص، جبران می‌کند.

    </p></div>
    <div className='md:w-9/12 max-md:w-10/12 h-1/6  flex items-center justify-end mouse-pointer'>
     <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/>
    </div>
    
   </div>
  <PreviewCounseling></PreviewCounseling>
   <Footer></Footer>
   </div>

   
    </>
  )
}
