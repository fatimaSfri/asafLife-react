// import Lottie from "lottie-react";
// import legal from '/src/assets/json/legal.json'
// import life from  '/src/assets/json/life.json'
// import investment from '/src/assets/json/investment.json'
// import psychology from '/src/assets/json/psychology.json'
// import retirement from "/src/assets/json/retirement.json"
// import animal from "/src/assets/json/animal.json"
// import 'aos/dist/aos.css';
// import AOS from 'aos';    
// import { useEffect } from 'react';

// function Services (){
//   useEffect(() => {
//     AOS.init();
// }, []);

//   return(
// <div class=" w-full flex justify-center items-center  h-auto py-28"  data-aos="fade-up" data-aos-duration="2000" >
// <div class="grid gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

//   {/* 1 */}

//   <div class="bg-white rounded-3xl shadow min-w-[200px] max-w-[350px] flex flex-col min-h-[350px] ">
//     {/* px-8 */}
//     <div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
//     <div className="flex justify-center items-center 
//      w-14 absolute -mt-5">
//      <Lottie animationData={legal} loop={true} />
//      </div>
//     <h2 class="text-lg max-sm:text-[14px]  mx-auto text-[#213063]">
//      مشاوره حقوقی </h2>
//     </div>
//     <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]"> 
//     مشاوره حقوقی تخصصی، راهی مطمئن برای حل مشکلات شما
//     در دنیای پیچیده قوانین و مقررات، همراهی یک مشاور حقوقی می‌تواند مسیر شما را هموارتر کند.
//     </p>
//     <button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
//     <div className="w-full">
//     <img src="./img/servics/03.jpg " alt="" className=" rounded-3xl" /></div>
//   </div>

// {/* 2 */}
// <div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

// <div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
// <div className="flex justify-center items-center 
//  w-14 absolute -mt-5">
//  <Lottie animationData={psychology} loop={true} />
//  </div>
// <h2 class="text-lg  max-sm:text-[14px] mx-auto text-[#213063]">
//  مشاوره روانشناسی </h2>
// </div>
// <p class="text-gray-600 flex-grow text-center mx-auto w-11/12 py-3 text-[12px]">
// مشاوره روانشناسی، قدمی برای آرامش و رشد شخصی
// زندگی پر از چالش‌هایی است که گاهی عبور از آن‌ها به تنهایی دشوار می‌شود. ما در کنار شما هستیم
//  </p>
// <button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
// <div className="w-full">
// <img src="./img/servics/psychology.jpg " alt="" className=" rounded-3xl" /></div>
// </div>

// {/* 3 */}
// <div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

// <div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
// <div className="flex justify-center items-center 
//  w-14 absolute -mt-5">
//  <Lottie animationData={investment} loop={true} />
//  </div>
// <h2 class="text-lg mx-auto max-sm:text-[14px] text-[#213063]">
//  مشاور سرمایه گذاری </h2>
// </div>
// <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]"> 
// مشاوره سرمایه‌گذاری، کلید موفقیت مالی شما
// سرمایه‌گذاری هوشمندانه می‌تواند آینده مالی شما را متحول کند.
// </p>
// <button class="text-[#55c7e0] hover:underline text-[14px] text-left px-4 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
// <div className="w-full">
// <img src="./img/servics/investment.jpg " alt="" className=" rounded-3xl" /></div>
// </div>

// {/*  4 */}
// <div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

// <div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
// <div className="flex justify-center items-center 
//  w-14 absolute -mt-5">
//  <Lottie animationData={retirement} loop={true} />
//  </div>
// <h2 class="text-lg max-sm:text-[14px] mr-14 text-[#213063]">
//   بیمه بازنشستگی پیش از موعد </h2>
// </div>
// <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]"> 
// بیمه بازنشستگی، آرامش امروز و امنیت فردا
// برنامه‌ریزی برای دوران بازنشستگی از مهم‌ترین تصمیماتی است که می‌توانید برای آینده خود بگیرید.
// </p>
// <button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px] ">  توضیحات بیشتر &#62; </button>
// <div className="w-full">
// <img src="./img/servics/retirement.jpg " alt="" className=" rounded-3xl" /></div>
// </div>

// {/* 5 */}
// <div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

// <div className="font-bold  w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
// <div className="flex justify-center items-center 
//  w-14 absolute -mt-5">
//  <Lottie animationData={life} loop={true} />
//  </div>
// <h2 class="text-lg max-sm:text-[14px] mx-auto text-[#213063]">
//   بیمه زندگی </h2>
// </div>
// <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]">
//  آرامش امروز و پشتوانه‌ای مطمئن برای آینده
// زندگی پر از اتفاقات پیش‌بینی‌نشده است، اما با بیمه زندگی می‌توانید از خود و عزیزانتان محافظت کنید.
// </p>
// <button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
// <div className="w-full">
// <img src="./img/servics/life.jpg " alt="" className=" rounded-3xl" /></div>
// </div>

// {/* 6 */}
// <div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

// <div className="font-bold  w-11/12 mt-8 py-[2px]  bg-[#dad9da] rounded-e-[14px] flex relative">
// <div className="flex justify-center items-center 
//  w-14 absolute -mt-5">
//  <Lottie animationData={animal} loop={true} />
//  </div>
// <h2 class="text-lg max-sm:text-[14px] mx-auto text-[#213063]">
//  بیمه حیوانات خانگی  </h2>
// </div>
// <p class="text-gray-600 flex-grow text-center mx-auto w-11/12 py-3 text-[12px]">
// بیمه حیوانات خانگی به شما این امکان را می‌دهد که با خیال راحت، بهترین خدمات درمانی و مراقبتی را برای دوست کوچک خود فراهم کنید،
//  </p>
// <button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
// <div className="w-full">
// <img src="./img/servics/animal.jpg " alt="" className=" rounded-3xl" /></div>
// </div>
  
  
// </div>
// </div>
//   )

// }

// export default Services


import Lottie from "lottie-react";
import legal from '/src/assets/json/legal.json';
import life from '/src/assets/json/life.json';
import investment from '/src/assets/json/investment.json';
import psychology from '/src/assets/json/psychology.json';
import retirement from "/src/assets/json/retirement.json";
import animal from "/src/assets/json/animal.json";
import 'aos/dist/aos.css';
import AOS from 'aos';    
import { useEffect } from 'react';

const servicesData = [
  {
    animation: legal,
    title: "بیمه زندگی",
    description: "مشاوره حقوقی تخصصی، راهی مطمئن برای حل مشکلات شما در دنیای پیچیده قوانین و مقررات.",
    imgSrc: "./img/servics/03.jpg",
  },
  {
    animation: psychology,
    title: "ثالث بدنه",
    description: "مشاوره روانشناسی، قدمی برای آرامش و رشد شخصی.",
    imgSrc: "./img/servics/psychology.jpg",
  },
  {
    animation: investment,
    title: " بیمه درمان",
    description: "مشاوره سرمایه‌گذاری، کلید موفقیت مالی شما.",
    imgSrc: "./img/servics/investment.jpg",
  },
  {
    animation: retirement,
    title: "بیمه حیوانات خانگی ",
    description: "برنامه‌ریزی برای دوران بازنشستگی از مهم‌ترین تصمیمات است.",
    imgSrc: "./img/servics/retirement.jpg",
  },
  {
    animation: life,
    title: "بیمه موبایل",
    description: "زندگی پر از اتفاقات پیش‌بینی‌نشده است، اما با بیمه زندگی می‌توانید از خود و عزیزانتان محافظت کنید.",
    imgSrc: "./img/servics/life.jpg",
  },
  {
    animation: animal,
    title: "بیمه خدام",
    description: "بیمه حیوانات خانگی به شما این امکان را می‌دهد که با خیال راحت، بهترین خدمات درمانی و مراقبتی را برای دوست کوچک خود فراهم کنید.",
    imgSrc: "./img/servics/animal.jpg",
  },
];

function ServiceCard({ animation, title, description, imgSrc }) {
  return (
    <div className="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px]">
      <div className="font-bold  w-11/12 mt-8 py-[2px] bg-gray-100 rounded-e-[14px] flex relative">
        <div className="flex justify-center items-center w-14 absolute -mt-5">
          <Lottie animationData={animation} loop={true} />
        </div>
        <h2 className="text-lg max-sm:text-[14px] mx-auto text-[#213063]">{title}</h2>
      </div>
      <p className="text-gray-600 flex-grow  mx-auto w-11/12 py-3 text-[12px]">{description}</p>
      <button className="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">توضیحات بیشتر &#62;</button>
      <div className="w-full">
        <img src={imgSrc} alt={title} className="rounded-3xl" />
      </div>
    </div>
  );
}

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-auto py-28" data-aos="fade-up" data-aos-duration="2000">
      <div className="grid gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;