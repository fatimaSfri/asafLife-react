import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Blog from '../blog/Blog'
import LifeBanner from '../newbanner/LifeBanner';

export default function CarBody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
  
   <Navbar></Navbar>
   <LifeBanner play="hidden" gap="xl:gap-96 gap-20" size="xl:w-4/12"></LifeBanner>
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
   <div className='w-full md:h-[700px] max-md:h-[950px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 '>

    <div className='md:w-10/12 max-md:w-11/12  flex items-center gap-2  '>
    <div className='w-4 h-10 bg-[#6827b5] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' >بیمه زندگی  </h1>
    </div>

    <div className='md:w-9/12 max-md:w-10/12 flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#6827b5] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' > تأمین مالی خانواده:</h1>
    </div>
    <p className=' '> اگر بیمه‌شده سرپرست مالی خانواده باشد، فوت او می‌تواند به شدت بر روی وضعیت مالی خانواده تأثیر بگذارد. مبلغ بیمه به خانواده کمک می‌کند تا بدون نگرانی از مسائل مالی، به سوگواری و سازگاری با فقدان بپردازند در صورت فوت بیمه‌شده، مبلغ بیمه به وراث پرداخت می‌شود تا نیازهای مالی آن‌ها تأمین گردد مبلغ بیمه می‌تواند به تأمین هزینه‌های روزمره مانند مسکن، خوراک و تحصیل فرزندان کمک کند، به‌طوری‌که خانواده به راحتی بتوانند به زندگی ادامه دهند.
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
