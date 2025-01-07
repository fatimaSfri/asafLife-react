import  { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PreviewServices from '../services/PreviewSrvices';
import Text from '../newbanner/Text';
import PhoneCall from './PhoneCall';

export default function Mobile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   const [play,setPlay]= useState(true)
     
     useEffect(()=>{
     if(window.innerWidth<900){
       setPlay(false)
     }else{
       setPlay(true)
     }
     },[])
   


  return (
    <>

<Navbar></Navbar>
    <div className=  {`bg-gradient-circle-Mobile back_medium_01  bg-[length:100%_100%] bg-no-repeat shadow-md
            h-[750px] w-full flex justify-center max-md:flex-col items-center px-4 xl:gap-40 max-xl:gap-20 `}>
    
        {/* text */}
         <Text colorText="text-[#d21a1a]"  title="بیمــه موبایل "  subTitle="در امان، از خط و خش و زیان" icon="./img/banner/mobile/07-Shield.webp"
              sizeTitle="xl:text-[70px] lg:text-[65px] md:text-[50px] max-md:text-[45px]" sizeSubTitle="xl:text-[34px] lg:text-[32px] max-lg:text-[24px]" colorSubTitle="text-[#552ade]"></Text>
    
        <div className='md:w-6/12 max-md:w-11/12 max-sm:w-full flex justify-center items-center py-16 max-md:-mt-20 xl:p-8'>
         <video className="rounded-lg"
        src= "./img/video/allinsurance.MP4"
        preload="auto"
        autoPlay={play}
        loop
        controls
       >
     </video>

   </div>
   </div>

   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full lg:h-[270px]  py-4 flex justify-center items-center'>
   <div className='w-[96%] lg:h-[240px]  grid  gap-4 lg:grid-cols-3 max-lg:grid-cols-1 py-10 items-center  mx-auto rounded-xl bg-[#c1c1c1] '>
   
      <PhoneCall post=" پشتیبانی " phone="09021887644"  employeeName=" " ></PhoneCall>
      <PhoneCall post="پشتیبانی "   phone="09366507644"  employeeName=" " ></PhoneCall>
      <PhoneCall post="دفتر مرکزی" phone="021-91098951"  ></PhoneCall>
   </div>
   </div>
  <PreviewServices></PreviewServices>
   <Footer></Footer>
   </div>
  

   
    </>
  )
}
