import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PreviewServices from '../services/PreviewSrvices';
import Treatment from "../newbanner/Treatment.jsx"

export default function CarBody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
 
   <Navbar></Navbar>
   <Treatment></Treatment>
   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full  flex justify-center items-center py-16 '>
   <video className="rounded-3xl  lg:h-[700px] "
<<<<<<< HEAD
        src= "./img/video/allinsurance.MP4"
=======
        src= "./img/video/asaf.mp4"
>>>>>>> feature-branch
        preload="auto"
        autoPlay
        loop
        controls
       >
     </video>
  
   </div>
   <div className='w-full  mx-auto md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 '>

    <div className='xl:w-[1250px] max-xl:w-full px-4 flex items-center gap-2 '>
    <div className='md:w-4 max-md:w-3 h-10 bg-[#0096e3] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه درمان </h1>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4 flex flex-col '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#0096e3] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >بیمه‌های پایه </h1>
    </div>
    <p className=' '> 
    این نوع بیمه معمولاً توسط دولت یا سازمان‌های بیمه‌گر عمومی ارائه می‌شود و شامل خدمات اساسی پزشکی است. بیمه‌های پایه معمولاً هزینه‌های بیمارستانی، ویزیت پزشک و برخی داروها را پوشش می‌دهند.
    </p>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4 '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#0096e3] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >بیمه درمان خصوصی </h1>
    </div>
    <p className=' '>
    این بیمه‌ها توسط شرکت‌های بیمه خصوصی ارائه می‌شوند و شامل خدمات گسترده‌تری نسبت به بیمه‌های پایه هستند. این نوع بیمه معمولاً انتخاب‌های بیشتری برای پزشکان و بیمارستان‌ها فراهم می‌کند.
    </p>
    </div>
    <div className='xl:w-[1250px] max-xl:w-full px-4 lg:h-1/6' >
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#0096e3] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>
    بیمه درمان تکمیلی
      </h1>
    </div>
    <p className='    ' >
    بیمه درمان تکمیلی به عنوان یک پوشش اضافی برای بیمه پایه عمل می‌کند. این بیمه هزینه‌هایی را که بیمه پایه پوشش نمی‌دهد، مانند هزینه‌های جراحی‌های خاص یا داروهای خاص، جبران می‌کند.

    </p></div>
    <div className='xl:w-[1250px] max-xl:w-full px-4 h-1/6  flex items-center justify-end mouse-pointer'>
     {/* <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/> */}
     <button className='w-[150px] h-10  rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2' 
     style={{
      background: 'linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 50%)',
    }}>
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
