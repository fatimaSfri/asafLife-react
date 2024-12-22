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
        src= "./img/video/allinsurance.MP4"
        preload="auto"
        autoPlay
        loop
        controls
       >
     </video>
  
   </div>
   <div className='w-full px-4 mx-auto md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 '>

    <div className='xl:w-[1250px] max-xl:w-full flex items-center gap-2  '>
    <div className='md:w-4 max-md:w-3 h-10 bg-[#007eff] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > مشاوره روانشناسی </h1>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#007eff] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >جستجوی منابع: </h1>
    </div>
    <p className=' '> 
    خواندن نظرات و تجربیات دیگر مراجعین را در مورد مشاوران مختلف مطالعه کنید. این اطلاعات می‌تواند به شما در انتخاب کمک کند.از منابع معتبر مانند وب‌سایت‌های روانشناسی، انجمن‌های روانشناسی و مراکز درمانی محلی استفاده کنید. همچنین می‌توانید از دوستان یا خانواده توصیه‌هایی بپرسید
    </p>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#007eff] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >مصاحبه اولیه: </h1>
    </div>
    <p className=' '>
    با مشاوران مورد نظر تماس بگیرید و از آن‌ها بخواهید تا در یک جلسه مشاوره اولیه، روش‌های خود و تجربه‌شان را توضیح دهند. این جلسه به شما کمک می‌کند تا احساس راحتی و اعتماد به نفس بیشتری پیدا کنید
    </p>
    </div>
    <div className='xl:w-[1250px] max-xl:w-full lg:h-1/6' >
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#007eff] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>
    بررسی هزینه‌ها:
      </h1>
    </div>
    <p className='   ' >
    هزینه مشاوره را نیز در نظر بگیرید و مطمئن شوید که با بودجه شما سازگار است.
    در نهایت، احساس خود را نسبت به مشاور بررسی کنید. ارتباط و اعتماد به مشاور بسیار مهم است    </p></div>
    <div className='xl:w-[1250px] max-xl:w-full px-4 h-1/6  flex items-center justify-end mouse-pointer'>
     {/* <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/> */}
     <button className='w-[150px] h-10 bg-purple-500 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2'
      style={{
        background: 'linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 50%)',
      }}
     >
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
