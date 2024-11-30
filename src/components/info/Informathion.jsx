import Lottie from "lottie-react";
import './Informathion.css'
import life from  '/src/assets/json/life.json'
import child from '/src/assets/json/child.json'
import family from '/src/assets/json/family.json'
import 'aos/dist/aos.css';
import AOS from 'aos';    
import { useEffect } from 'react';

export default function Informathion() {
    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className=" w-full flex justify-center items-center  h-auto max-lg:flex-col-reverse my-32 py-8 bg-gray-100" data-aos="fade-up" data-aos-duration="2000">
        {/* information  */}
        {/* max-lg:h-[50vh] */}
     <div className="lg:w-1/2 max-lg:w-full lg:h-full  flex lg:justify-end max-lg:justify-center items-end  max-sm:-mt-16 ">
     
     {/* parent center */}
        <div className="w-11/12 max-sm:w-full flex lg:items-end max-lg:items-center justify-center  min-h-[450px] flex-col max-lg:mt-14  ">
         {/* parent 3 */}
            <div className="w-10/12 max-lg:w-full flex  flex-col gap-y-7 max-xl:mx-auto items-center ">
           {/* 1 */}
                <div className="h-[70px] w-11/12  flex justify-center max-sm:-mr-4">
                {/* circle */}
                    <div className="rounded-full border-2 border-[#55c7e0] w-16 h-16 z-10 -mt-5 flex justify-center items-center bg-gray-200"> 
                    <div className="w-14 ">
                  <Lottie animationData={life} loop={true} />
                   </div>
                    </div>
                {/* text */}
                    <div className="w-10/12  rounded-xl h-full -mr-10 shadow-custom lg:min-w-[350px] bg-white"> 
                    <h1 className="md:pr-16 max-md:pr-14  max-md:text-[14px] pt-3 font-bold text-[#213063]"> بیمه زندگی </h1>
                    <p  className="md:pr-16 max-md:pr-12 max-md:text-[12px]">  حافظ امنیت و زندگی خود باشید</p>
                    </div>
               </div>
            {/* 2 */}
            <div className="h-[70px] w-11/12 flex justify-center max-sm:-mr-4">
                {/* circle */}
                    <div className="rounded-full border-2 border-[#55c7e0] w-16 h-16 z-10 -mt-5 flex justify-center items-center bg-gray-200"> 
                    <div className="w-14 ">
                  <Lottie animationData={child} loop={true} />
                   </div>
                    </div>
                {/* text */}
                    <div className="w-10/12 rounded-xl h-full -mr-10 shadow-custom lg:min-w-[350px] bg-white"> 
                    <h1 className="md:pr-16 max-md:pr-14  max-md:text-[14px] pt-3 font-bold text-[#213063]"> مشاوره خانواده </h1>
                    <p  className=" md:pr-16 max-md:pr-12 max-md:text-[12px] "> آساف لایف سپر امنیت خانواده شما </p>
                    </div>
               </div>
            {/* 3 */}
            <div className="h-[70px] w-11/12  flex justify-center max-sm:-mr-4">
                {/* circle */}
                    <div className="rounded-full border-2 border-[#55c7e0] w-16 h-16 z-10 -mt-5 flex justify-center items-center bg-gray-200"> 
                    <div className="w-14 ">
                  <Lottie animationData={family} loop={true} />
                   </div>
                    </div>
                {/* text */}
                    <div className="w-10/12 rounded-xl h-full -mr-10 shadow-custom lg:min-w-[350px] bg-white"> 
                    <h1 className="md:pr-16 max-md:pr-14  max-md:text-[14px] pt-3 font-bold text-[#213063]">  نگهداری کودکان </h1>
                    <p  className="md:pr-16 max-md:pr-12 max-md:text-[12px] "> اطمینان خاطر در هر لحظه </p>
                    </div>
               </div>
               {/* button */}
            <div className=" w-[80%] h-[40px] lg:min-w-[350px]  flex justify-end self-center">
                <button className="text-[12px] w-24 rounded-lg bg-custom-gradient text-white" > ادامه مطلب</button>
            </div>
            </div>   
        </div> 
     </div>

     {/* img */}
     {/* h-50vh */}
     <div className="lg:w-1/2 max-lg:w-full h-[50vh] flex items-center justify-center relative lg:ml-20">
     <div className="sm:w-[500px] max-sm:w-11/12 h-full max-md:h-5/6 flex items-end absolute">
     <div  className="w-1/3 h-2/6  z-10 flex items-center max-sm:hidden suspended-security">
     <img src="./img/info/security.png" alt="" className="md:w-16 md:h-16 max-md:w-12 max-md:h-12"/>
     </div>
     <div className="w-1/3 h-1/4 self-start flex justify-center items-center z-10 max-sm:hidden suspended-first-aid">
      <img src="./img/info/first-aid.png" alt="" className="md:w-20 md:h-20 max-md:w-14 max-md:h-14 mr-10" />
     </div>
     <div className="w-1/3 h-1/6  z-10 -rotate-12 max-sm:hidden suspended-heart ">
     <img src="./img/info/heart.png" alt="" className="md:w-16 md:h-16 max-md:w-14 max-md:h-14 mr-10 "/>
    </div>

     <img src="./img/info/bg-blue.png" alt="" className="w-full absolute self-center " /> 
     <img src="./img/info/family-photo.png" alt="" className="w-11/12 absolute self-center mr-2 " /> 
     </div>
      

     </div>



    </div>
  )
}
