import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PreviewServices from '../services/PreviewSrvices';
import Ministrant from '../newbanner/MinistrantBanner'

export default function Mobile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (

    <>
   <Navbar></Navbar>
   <Ministrant play="hidden" gap="xl:gap-96 gap-20" size="xl:w-4/12"></Ministrant>
   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full  flex justify-center items-center py-16 '>
   <video className="rounded-3xl  lg:h-[700px] "
        src= "./img/video/asaf.mp4"
        preload="auto"
        autoPlay
        loop
        controls
       >
     </video>
  
   </div>
   <div className='w-full md:h-[700px] max-md:h-[850px] flex flex-col items-center justify-center md:gap-8 max-md:gap-4 mx-auto'>

    <div className='xl:w-[1250px] max-xl:w-full px-4   flex items-center gap-2  '>
    <div className='md:w-4 max-md:w-3 h-10 bg-[#a78f71] rounded-full'></div>
    <h1 className='font-bold text-[20px] text-[#213063]' > بیمه خدام</h1>
    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4 flex flex-col  '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#a78f71] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' >اهمیت بیمه خدام:</h1>
    </div>
    <p className=' '> 
    بیمه خدام به عنوان یک راهکار حمایتی، می‌تواند در مواقع بحرانی مانند بیماری‌های جدی، حوادث غیرمترقبه، یا فوت ناگهانی اعضای خانواده، آرامش خاطر را به افراد و خانواده‌ها هدیه کند. این بیمه به‌ویژه در جوامع با سطح درآمد پایین‌تر می‌تواند نقش مهمی در تأمین امنیت مالی و اجتماعی ایفا کند
    </p>

    </div>

    <div className='xl:w-[1250px] max-xl:w-full px-4  '>
    <div className='flex items-center gap-4  '>
    <div className='w-4 h-4 bg-[#a78f71] rounded-full '></div>
    <h1 className='font-bold text-[18px] text-[#213063]' > دسترسی آسان: </h1>
    </div>
    <p className=' '>
    بسیاری از برنامه‌های بیمه خدام به‌صورت آنلاین و با مراحل ساده قابل دسترسی هستند. این موضوع باعث می‌شود تا افراد به راحتی بتوانند بیمه‌نامه خود را دریافت کنند.
    </p>
    </div>
    <div className='xl:w-[1250px] max-xl:w-full px-4 lg:h-1/6 '>
    <div className='flex items-center gap-4 '>
    <div className='w-4 h-4 bg-[#a78f71] rounded-full'></div>
    <h1 className='font-bold text-[18px] text-[#213063] '> هزینه معقول:</h1>
    </div>
    <p className='    ' 
    >
      یکی از مزایای مهم بیمه خدام، هزینه پایین آن نسبت به سایر بیمه‌هاست، که این امکان را برای افراد بیشتری فراهم می‌کند تا از این خدمات بهره‌مند شوند
     </p></div>
     <div className='xl:w-[1250px] max-xl:w-full px-4 h-1/6  flex items-center justify-end mouse-pointer'>
     {/* <img src="./img/Animation/car/button.png" alt=""  className='w-[150px]  cursor-pointer'/> */}
     <button className='w-[150px] h-10 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2'
     style={{
      background: 'linear-gradient(to bottom, #e3caac  0.2%, #a78f71 , #342a27 )',
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
