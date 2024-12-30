import './Informathion.css';
import 'aos/dist/aos.css';
import AOS from 'aos';    
import { useEffect } from 'react';
import walking from '/src/assets/json/walking.json';
import hospitalBed from '/src/assets/json/hospital-bed.json';
import ambulance from '/src/assets/json/ambulance.json';
import InfoCard from "./InfoCard"


export const infoData = [
  {
    animation: walking,
    title: " بیمه سالمندان سامان ",
    description: "حافظ امنیت و زندگی خود باشید",
  },
  {
    animation: hospitalBed,
    title: " بستری سالمندان ",
    description: "آساف لایف سپر امنیت خانواده شما",
  },
  {
    animation: ambulance,
    title: " خدمات پزشکی اورژانسی ",
    description: "اطمینان خاطر در هر لحظه",
  },
];


export default function Informathion() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // bg-[url('../../img/elderly/background.jpg')]
    <div className="w-full flex justify-center items-center h-auto max-lg:flex-col-reverse my-32 py-8 bg-elderly" data-aos="fade-up" data-aos-duration="2000">
      {/* Information Section */}
      <div className="lg:w-1/2 max-lg:w-full flex lg:justify-end max-lg:justify-center items-end max-sm:-mt-16">
        <div className="w-11/12 max-sm:w-full flex lg:items-end max-lg:items-center justify-center min-h-[450px] flex-col max-lg:mt-14">
          <div className="w-10/12 max-lg:w-full flex flex-col gap-y-7 max-xl:mx-auto items-center">
            {infoData.map(info => (
              <InfoCard key={info.title} {...info} />
            ))}
            <div className="w-[80%] h-[40px] lg:min-w-[350px] flex justify-end self-center">
              <button className="text-[12px] w-24 rounded-lg bg-gray-100 font-bold text-[#213063]">ادامه مطلب</button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
     
     <div className='lg:w-1/2 max-lg:w-full h-[450px]  flex items-center justify-center relative overflow-hidden'>
     <div className='flex flex-col z-50 sm:w-[600px] max-sm:w-[500px] sm:-mt-72 max-sm:-mt-60 '>
     <div className='w-full h-1/6 flex items-center justify-center  '>
    <img src="./img/elderly/saman.png" alt="" className="md:w-16 md:h-20 max-md:w-12 max-md:h-14 suspended "/>
    </div>
    <div className='w-full h-1/6 flex items-center justify-between '>
    <img src="./img/elderly/iconTwo.png" alt="" className="md:w-16 md:h-16 max-md:w-12 max-md:h-12 max-sm:mr-4  suspended-first-aid "/>
    <img src="./img/elderly/iconOne.png" alt="" className="md:w-16 md:h-16 max-md:w-12 max-md:h-12  max-sm:ml-3 -rotate-[20deg] suspended-heart"/>
    </div></div>

     <img src="./img/elderly/elderly.webp" alt="" className= " md:object-cover md:h-full absolute max-md:min-w-[400px] p-4" />
      </div>

    </div>

  );
}