import  {  useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PreviewServices from '../services/PreviewSrvices';
import Ministrant from '../newbanner/MinistrantBanner'
import PhoneCall from './PhoneCall';

export default function Mobile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <>
   <Navbar></Navbar>
   <Ministrant play="hidden" gap="xl:gap-96 gap-20" size="xl:w-4/12"></Ministrant>
   <div className='h-auto w-full bg-gray-200' >
   <div className='w-full md:h-[250px] max-md:h-[350] py-10 flex justify-center items-center'>
   <div className='w-[96%] md:h-[200px] max-md:h-[300px] flex max-md:flex-col items-center justify-around  mx-auto rounded-xl bg-[#9b9b9b] '>
      <PhoneCall post="صدور" phone="0915 075 0082"  employeeName="سرکار خانم رعنا صباغ" ></PhoneCall>
      <PhoneCall post="خسارت" phone="0915 075 0082"  employeeName=" جناب آقای رسول حسین زاده" ></PhoneCall>
    
   </div>
   </div>
  <PreviewServices></PreviewServices>
   <Footer></Footer>
   </div>

    </>
  )
}
