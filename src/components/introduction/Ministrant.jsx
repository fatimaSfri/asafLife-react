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
   <div className='w-full md:h-[230px] max-md:h-[300] py-4 flex justify-center items-center'>
   <div className='w-[96%]  md:h-[200px] max-md:h-[300px] flex max-md:flex-col items-center justify-around  mx-auto rounded-xl bg-[#c1c1c1] '>
      <PhoneCall post="صدور" phone="021-91098951-313"  employeeName="سرکار خانم رعنا صباغ" ></PhoneCall>
      <PhoneCall post="خسارت" phone="021-91098951-320"  employeeName=" جناب آقای رسول حسین زاده" ></PhoneCall>
    
   </div>
   </div>
  <PreviewServices></PreviewServices>
   <Footer></Footer>
   </div>

    </>
  )
}
