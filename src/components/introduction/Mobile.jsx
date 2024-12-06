import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PreviewServices from '../services/PreviewSrvices';
import MobileBanner from '../newbanner/MobilBanner';

export default function Mobile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

   <Navbar></Navbar>
   <MobileBanner play="hidden" gap="xl:gap-96 gap-20" size="xl:w-4/12"></MobileBanner>
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
   <div className='w-11/12  md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 mx-auto'>

    <div className='md:w-9/12 max-md:w-10/12  flex items-center gap-2  '>
    <div className='w-4 h-10 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه موبایل</h1>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >پوشش سرقت:</h1>
    </div>
    <p className=' '> 
    پوشش سرقت به این معناست که اگر گوشی شما به سرقت برود، بیمه شما هزینه خرید یک دستگاه جدید را جبران می‌کند. برای استفاده از این پوشش، معمولاً نیاز است که گزارش پلیس و مدارک مالکیت را داشته باشید.،
    </p>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >آسیب فیزیکی: </h1>
    </div>
    <p className=' '>
    این پوشش شامل خسارت‌هایی است که به دلیل سقوط، آب‌خوردگی یا سایر آسیب‌های فیزیکی به گوشی وارد می‌شود. در این حالت، بیمه معمولاً هزینه‌های تعمیر را پوشش می‌دهد.برای استفاده از این پوشش:
       مدارک آسیب از تعمیرگاه معتبر نیاز است.
    </p>
    </div>
    <div className='md:w-9/12 max-md:w-10/12 lg:h-1/6 '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '>پوشش‌های اضافی:</h1>
    </div>
    <p className='    ' 
    >
گارانتی و خدمات اضافی: برخی از بیمه‌ها خدماتی مانند تعمیرات سریع یا تعویض فوری گوشی را ارائه می‌دهند.
هزینه‌های اضافی: در بعضی موارد، بیمه ممکن است هزینه‌های جانبی مانند هزینه‌های ثبت‌نام یا مشاوره را نیز پوشش دهد
     </p></div>
    <div className='md:w-9/12 max-md:w-10/12 h-1/6  flex items-center justify-end mouse-pointer'>
     <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/>
    </div>
    
   </div>
  <PreviewServices></PreviewServices>
   <Footer></Footer>
   </div>

   
    </>
  )
}
