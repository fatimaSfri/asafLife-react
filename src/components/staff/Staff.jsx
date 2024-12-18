import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
export default function Staff() {
 
    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className=" w-full lg:h-[90vh] max-lg:h-[90vh] flex flex-col items-center justify-center"  data-aos="fade-up" data-aos-duration="2000" >
       <div className="w-8/12 max-md:w-full max-md:px-4  h-1/4 max-md:h-2/4 flex flex-col justify-center  ">
       <h1 className="text-right py-4 font-bold text-[#213063] text-lg xl:text-[20px] max-sm:text-[16px]">شرکت کارگزاری رسمی بیمه آینده سازان آسایش فردا  </h1>
       <p className="w-full xl:text-[18px] max-sm:text-[14px]">  شرکت کارگزاری آینده سازان آسایش فردا با سابقه 30 ساله مدیران خود در عرضه تجارت بیمه و ایجاد باشگـــاه مشتریان با بیش از 600 عضو حقوقی  و بیش از 10000 عضو حقیقی،  برای اولین بار در کشور اقدام به توسعه خدمات زندگی در عرصه بیمه های مربوطه  نموده است ، همراهی بیمه گـــذاران محترم در تمامی لحظات زندگــی و پشتیبــانی 24 ساعته از اهداف اصلی راه اندازی سامانه آســاف لایف می باشد. </p>
       </div>
       <div className="w-8/12  h-[10%] flex items-center justify-between max-md:px max-md:w-11/12">
        <img src="./img/staff/ob-staff.png" alt=""  className=" w-16 h-16 lg:mx-10"/>
        <img src="./img/staff/Shape-01.svg" alt=""  className=" w-20 h-20 lg:mx-10"/>

       </div>
       <div className="w-8/12  h-2/4 flex  justify-center max-lg:items-center max-md:w-11/12">
       <div className="xl:w-11/12 max-xl:w-full">
         <img src="./img/staff/staff3.jpg " alt="" className=" rounded-2xl object-cover" /></div>
       </div>
   </div>
   
  )
}
