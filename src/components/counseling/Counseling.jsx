import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import  counseling   from  '/src/assets/json/counseling.json'
import "./Counseling.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Counseling() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1540); 

  useEffect(() => {
    AOS.init();
}, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1540);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const cards = [
    {
      title: "مشاوره روانشناسی",
      subtitle:"مشاور",
      description: " شرکت آینده سازان آسایش فردا با سابقه 30 ساله مدیران خود در عرضه تجارت و بیمه و ایجاد باشگاه مشتریان  ",
      duration: "۶۰ دقیقه",
      color:"#55c7e0",
      image: "./img/counseling/psychology.jpg",
      iconClock: "./img/counseling/clockblue.svg",
      iconUser:"./img/counseling/userblue.svg"
    },
    {
      title: "مشاوره حقوقی",
      subtitle: "مشاور حقوقی",
      description: " شرکت آینده سازان آسایش فردا با سابقه 30 ساله مدیران خود در عرضه تجارت و بیمه و ایجاد باشگاه مشتریان  ",
      duration: "۶۰ دقیقه",
      color: "#115052",
      image: "./img/counseling/legal.jpg",
      iconClock: "./img/counseling/clockYellow.svg",
      iconUser:"./img/counseling/userYellow.svg"
    },
    {
      title: "مشاوره سرمایه گذاری",
      subtitle: "مشاور سرمایه‌گذاری",
      description: " شرکت آینده سازان آسایش فردا با سابقه 30 ساله مدیران خود در عرضه تجارت و بیمه و ایجاد باشگاه مشتریان  ",
       duration: "۶۰ دقیقه",
       color:"#6827b5",
      image: "./img/counseling/investment.jpg",
      iconClock: "./img/counseling/clockpurple.svg",
      iconUser:"./img/counseling/userpurple.svg"
    },
    {
      title: "مشاوره شغلی",
      subtitle: " مشاور شغلی ",
      description: " شرکت آینده سازان آسایش فردا با سابقه 30 ساله مدیران خود در عرضه تجارت و بیمه و ایجاد باشگاه مشتریان  ",
       duration: "۶۰ دقیقه",
       color:"#55c7e0",
       image: "./img/counseling/psychology.jpg",
      iconClock: "./img/counseling/clockblue.svg",
      iconUser:"./img/counseling/userblue.svg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="w-full h-auto flex max-xl:flex-col-reverse relative overflow-hidden mb-24" data-aos="fade-up" data-aos-duration="2000">
      <div className="w-10/12 max-xl:w-full flex justify-center items-center">
        {/* <div className=" w-full h-full"> */}
        {/* grid grid-cols-2 xl:grid-cols-4  py-8 gap-6 border w-full max-xl:mx-auto */}
        <div className=" flex  w-full gap-4  " >
        
          {cards.map((card, index) => (
      
            <div key={index}
              className={`${isMobile?' w-full h-full transition-transform duration-500 ease-in-out  flex items-center justify-center' : 'w-full '} 
                ${index === currentIndex  ? 'max-xl:opacity-100 max-xl:flex max-xl:z-10 max-xl:translate-x-0' : 'max-xl:opacity-0  max-xl:z-0 max-xl:translate-x-full max-xl:hidden'}
                `}>
                
              <div className="bg-white rounded-lg shadow-xl flex flex-col items-center text-center max-xl:w-5/12 max-lg:w-7/12 max-md:w-9/12 xl:min-w-[200px] relative ">
                <img src={card.image} alt={card.title} className="rounded-t-lg xl:h-full max-xl:h-[400px] object-cover" />
                <div class="flex justify-center items-center group ">
             <div class="bg-[rgba(250,250,250,0.78)] shadow-lg rounded-lg w-11/12 overflow-hidden absolute mb-28 group-hover:h-80 group-hover:mb-80 group-hover:justify-around transition-all duration-300 ease-out flex flex-col ">
                <div class="p-1 transition-all duration-900 h-16  group-hover:mb-32">
                <h3 class='text-lg font-bold' style={{ color: card.color }}>{card.title}</h3>
                <div className='flex justify-center gap-2'>
                  <div className='flex gap-1'>
                 <img src={card.iconClock} alt=""  className='w-4 h-4'/>
                <p class="text-gray-600 text-[12px]">{card.subtitle}</p></div>
                <div className='flex gap-1'>
                <img src={card.iconUser} alt=""  className='w-4 h-4'/>
                <p class="text-gray-600 text-[12px]"> {card.duration}</p></div>
                </div>
                <p className='text-[12px] mt-5'>{card.description}</p>
               <div class="opacity-0 group-hover:opacity-100  group-hover:mt-4 transition-opacity duration-300 ">
               <button class = 'mouse-pointer text-white font-bold py-1 px-4 rounded-xl transition-colors duration-300' style={{ backgroundColor: card.color }}>
                درخواست مشاوره
               </button>
              
             </div>
             </div>
             </div>
             </div>

              </div>
            </div>
          ))}
          </div>

        {/* </div> */}
      </div>

      <div className="w-1/2 h-[400px] flex max-xl:h-[30vh] max-md:w-9/12 max-lg:w-7/12 max-xl:w-5/12 mx-auto" >
        <div className="w-9/12 h-full max-xl:w-full" >
          <div className=" w-full h-1/6 max-xl:w-full max-xl:h-1/3 flex items-center ">
          <div className='w-24 h-12 bg-gray-100 rounded-l-xl flex items-center justify-end '>
             <div className="w-14 ">
             <Lottie animationData={counseling} loop={true} />
             </div>
          </div>
          <h1 className='md:pr-2 font-bold text-[#213063] md:text-lg max-md:text-[14px]'> مشــاوره هـا </h1>
          </div>
          <p className=" w-full h-5/6 max-xl:h-2/3 p-6 md:px-4 max-sm:text-[12px] text-right xl:px-10 overflow-hidden ">
          مشاوره یکی از مؤثرترین راه‌ها برای دریافت اطلاعات تخصصی و پیدا کردن راه‌حل‌های مناسب در موضوعات مختلف است. از مسائل شخصی گرفته تا موضوعات حرفه‌ای، مشاوره به شما کمک می‌کند تا با دید بازتری تصمیم‌گیری کنید و بهترین مسیر را انتخاب کنید.    
          </p>
        </div>
        <div className=" w-3/12 max-sm:w-1/12 h-full flex-col max-xl:justify-between items-center mx-auto p-5 ">
            <img src="./img/counseling/ob-purple.png" alt="" className='sm:w-14 sm:h-14 max-sm:w-10 max-sm:h-10 suspended max-md:absolute cu'/>
          <div></div>
          <div></div>
        </div>
      </div>
      
    </div>
  );
}