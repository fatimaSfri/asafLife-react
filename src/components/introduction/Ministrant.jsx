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
   <div className='w-full md:h-[430px] max-md:h-[300] py-4 flex justify-center items-center'>
   <div className='w-[96%]  md:h-[400px] max-md:h-[500px] grid  gap-4 lg:grid-cols-2 max-lg:grid-cols-1 py-10 justify-items-center  mx-auto rounded-xl bg-[#c1c1c1] '>
      <PhoneCall post=" کارشناس صدور" phone="09150758200"  employeeName="سرکار خانم صباغ" ></PhoneCall>
      <PhoneCall post=" کارشناس خسارت " phone="09021887644"  employeeName=" جناب آقای  حسین زاده" ></PhoneCall>
      <PhoneCall post="مدیریت" phone="09121887644"  employeeName=" جناب آقای مجتبایی " ></PhoneCall>
      <PhoneCall post="دفتر مرکزی" phone="021-91098951"  ></PhoneCall>
   </div>
   </div>
  <PreviewServices></PreviewServices>
   <Footer></Footer>
   </div>

    </>
  )
}
