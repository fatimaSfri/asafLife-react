import Lottie from "lottie-react";
import life from '/src/assets/json/life.json';
import animal from "/src/assets/json/animal.json";
import carBody from "/src/assets/json/car-body.json";
import phone from "/src/assets/json/phone.json";
import mosque from "/src/assets/json/mosque.json";
import treatment from "/src/assets/json/health-checkup.json";
import 'aos/dist/aos.css';
import AOS from 'aos';    
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";

const servicesData = [
  {
    animation: life,
    title: "بیمه زندگی",
    description:
   "این نوع بیمه به عنوان یک ابزار مالی مهم برای تأمین آینده مالی خانواده‌ها و جلوگیری از مشکلات مالی در صورت فوت ناگهانی یکی از اعضای خانواده عمل می‌کند.",
    imgSrc: "./img/servics/life-service.jpg",
    link:"/life",
    color:"#f6f461",
    bgColor:"#29a8ac"
  },
  {
    animation: carBody,
    title: "ثالث بدنه",
    description: 
   "بیمه ثالث بدنه، نوعی بیمه خودرو است که شامل دو بخش اصلی می‌شود: بیمه مسئولیت مدنی (ثالث) و بیمه .بدنه این نوع بیمه به مالکان خودرو کمک می‌کند . ",
    imgSrc: "./img/servics/carBody.jpg",
    link:"./carBody",
    color:"#fdce0b",
    bgColor:"#975fff"
  },
  {
    animation: treatment  ,
    title: " بیمه درمان",
    description: 
   "بیمه درمان به افراد کمک می‌کند تا در صورت بروز بیماری یا حادثه، نگرانی کمتری درباره هزینه‌های درمان داشته باشند و بتوانند به راحتی به خدمات پزشکی دسترسی پیدا کنند." , 
  imgSrc: "./img/servics/treatment.jpg",
    link:"/treatment",
    color:"#c32c3e",
    bgColor:"#72e2fb"
  },
  {
    animation: animal,
    title: "بیمه حیوانات خانگی ",
    description: 
    "بیمه حیوانات خانگی به شما این امکان را می‌دهد که با خیال راحت، بهترین خدمات درمانی و مراقبتی را برای دوست کوچک خود فراهم کنید.",
    imgSrc: "./img/servics/animals.jpg",
    link:"/pet",
    color:"#552ade",
    bgColor:"#fcb000"
  },
  {
    animation: phone ,
    title: "بیمه موبایل",
    description: 
    "بیمه موبایل به کاربران کمک می‌کند تا از هزینه‌های بالای تعمیر یا تعویض گوشی‌های خود در صورت بروز حادثه محافظت کنند و آرامش خاطر بیشتری داشته باشند.",
    imgSrc: "./img/servics/mobile.jpg",
    link:"/mobile",
    color:"#d21a1a",
    bgColor:"#a7a7a7"
  },
  {
    animation: mosque,
    title: "بیمه خدام",
    description:
    "پوشش بیماری: برخی از بیمه‌ها ممکن است هزینه‌های درمانی را در صورت بیماری کارمند نیز پوشش دهند  و همچنین امنیت بیشتری برای کارمندان فراهم کند.",
    imgSrc: "./img/servics/ministrant.jpg",
    color:"#ffcb05",
   bgColor:"#f8c67a",
   link:"/ministrant"
  },
];

function ServiceCard({ animation , title, description , imgSrc , color, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div className="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px]">
      <div className="font-bold  w-11/12 mt-8 py-[2px] bg-gray-200 rounded-e-[14px] flex relative" >
        <div className="flex justify-center items-center w-14 absolute -mt-5" >
          <Lottie animationData={animation} loop={true} />
        </div>
        <h2 className="text-lg max-sm:text-[14px] mx-auto text-[#213063]">{title}</h2>
      </div>
      <p className="text-gray-600 flex-grow  mx-auto w-11/12 py-3 text-[12px]">{description}</p>
      <button className="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">توضیحات بیشتر &#62;</button>
      {/* <div className="w-full"> */}
      <div 
            className="relative w-full overflow-hidden" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
        <img src={imgSrc} alt={title} className="rounded-3xl " />
        <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 h-3/5 w-[4%] rounded-s-lg ${isHovered ? 'translate-x-0'  : '-translate-x-full'}  p-2 bg-white`}  style={{backgroundColor:color }}  >
              
            </div>
            <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 h-3/5 w-[4%] rounded-e-lg -mr-[0.5px] ${isHovered ? 'translate-x-0 ' : 'translate-x-full'}  p-2  bg-white`}
             style={{ backgroundColor:color }}
            >
               
            </div>
       
        
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