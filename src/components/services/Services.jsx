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
import { Link } from "react-router-dom";

const servicesData = [
  {
    animation: life,
    title: "بیمه زندگی",
    description: "مشاوره حقوقی تخصصی، راهی مطمئن برای حل مشکلات شما در دنیای پیچیده قوانین و مقررات.",
    imgSrc: "./img/servics/Life.jpg",
    link:"/Life"
  },
  {
    animation: investment,
    title: "ثالث بدنه",
    description: "مشاوره روانشناسی، قدمی برای آرامش و رشد شخصی.",
    imgSrc: "./img/servics/carBody.jpg",
    link:"./carBody"
  },
  {
    animation: psychology  ,
    title: " بیمه درمان",
    description: "مشاوره سرمایه‌گذاری، کلید موفقیت مالی شما.",
    imgSrc: "./img/servics/treatment.jpg",
    link:"/treatment"
  },
  {
    animation: animal,
    title: "بیمه حیوانات خانگی ",
    description: "برنامه‌ریزی برای دوران بازنشستگی از مهم‌ترین تصمیمات است.",
    imgSrc: "./img/servics/animals.jpg",
    link:"/pet"
  },
  {
    animation: legal ,
    title: "بیمه موبایل",
    description: "زندگی پر از اتفاقات پیش‌بینی‌نشده است، اما با بیمه زندگی می‌توانید از خود و عزیزانتان محافظت کنید.",
    imgSrc: "./img/servics/mobile.jpg",
    link:"/Mobile"
  },
  {
    animation: retirement,
    title: "بیمه خدام",
    description: "بیمه حیوانات خانگی به شما این امکان را می‌دهد که با خیال راحت، بهترین خدمات درمانی و مراقبتی را برای دوست کوچک خود فراهم کنید.",
    imgSrc: "./img/servics/img-06.jpg",
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
          <>
         <Link to={service.link} ><ServiceCard key={service.title} {...service} /></Link></>
        ))}
      </div>
    </div>
  );
}

export default Services;