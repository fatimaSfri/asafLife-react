import Lottie from "lottie-react";
import legal from '/src/assets/json/legal.json'
import life from  '/src/assets/json/life.json'
import investment from '/src/assets/json/investment.json'
import psychology from '/src/assets/json/psychology.json'
import retirement from "/src/assets/json/retirement.json"
import animal from "/src/assets/json/animal.json"

function Services (){


  return(
<div class=" w-full flex justify-center items-center  h-auto py-28" >
<div class="grid gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

  {/* 1 */}

  <div class="bg-white rounded-3xl shadow min-w-[200px] max-w-[350px] flex flex-col min-h-[350px] ">
    {/* px-8 */}
    <div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
    <div className="flex justify-center items-center 
     w-14 absolute -mt-5">
     <Lottie animationData={legal} loop={true} />
     </div>
    <h2 class="text-lg max-sm:text-[14px]  mx-auto text-[#213063]">
     مشاوره حقوقی </h2>
    </div>
    <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]"> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
    <button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
    <div className="w-full">
    <img src="./img/servics/03.jpg " alt="" className=" rounded-3xl" /></div>
  </div>

{/* 2 */}
<div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

<div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
<div className="flex justify-center items-center 
 w-14 absolute -mt-5">
 <Lottie animationData={psychology} loop={true} />
 </div>
<h2 class="text-lg  max-sm:text-[14px] mx-auto text-[#213063]">
 مشاوره روانشناسی </h2>
</div>
<p class="text-gray-600 flex-grow text-center mx-auto w-11/12 py-3 text-[12px]"> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
<button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
<div className="w-full">
<img src="./img/servics/psychology.jpg " alt="" className=" rounded-3xl" /></div>
</div>

{/* 3 */}
<div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

<div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
<div className="flex justify-center items-center 
 w-14 absolute -mt-5">
 <Lottie animationData={investment} loop={true} />
 </div>
<h2 class="text-lg mx-auto max-sm:text-[14px] text-[#213063]">
 مشاور سرمایه گذاری </h2>
</div>
<p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]"> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
<button class="text-[#55c7e0] hover:underline text-[14px] text-left px-4 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
<div className="w-full">
<img src="./img/servics/investment.jpg " alt="" className=" rounded-3xl" /></div>
</div>

{/*  4 */}
<div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

<div className="font-bold border w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
<div className="flex justify-center items-center 
 w-14 absolute -mt-5">
 <Lottie animationData={retirement} loop={true} />
 </div>
<h2 class="text-lg max-sm:text-[14px] mr-14 text-[#213063]">
  بیمه بازنشستگی پیش از موعد </h2>
</div>
<p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]"> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
<button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px] ">  توضیحات بیشتر &#62; </button>
<div className="w-full">
<img src="./img/servics/retirement.jpg " alt="" className=" rounded-3xl" /></div>
</div>

{/* 5 */}
<div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

<div className="font-bold  w-11/12 mt-8 py-[2px] bg-[#dad9da] rounded-e-[14px] flex relative">
<div className="flex justify-center items-center 
 w-14 absolute -mt-5">
 <Lottie animationData={life} loop={true} />
 </div>
<h2 class="text-lg max-sm:text-[14px] mx-auto text-[#213063]">
  بیمه زندگی </h2>
</div>
<p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-3 text-[12px]"> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
<button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
<div className="w-full">
<img src="./img/servics/life.jpg " alt="" className=" rounded-3xl" /></div>
</div>

{/* 6 */}
<div class="bg-white rounded-3xl shadow min-w-[250px] max-w-[350px] flex flex-col min-h-[350px] ">

<div className="font-bold  w-11/12 mt-8 py-[2px]  bg-[#dad9da] rounded-e-[14px] flex relative">
<div className="flex justify-center items-center 
 w-14 absolute -mt-5">
 <Lottie animationData={animal} loop={true} />
 </div>
<h2 class="text-lg max-sm:text-[14px] mx-auto text-[#213063]">
 بیمه حیوانات خانگی  </h2>
</div>
<p class="text-gray-600 flex-grow text-center mx-auto w-11/12 py-3 text-[12px]"> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
<button class="text-[#55c7e0] hover:underline text-[14px] text-left px-6 py-2 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
<div className="w-full">
<img src="./img/servics/animal.jpg " alt="" className=" rounded-3xl" /></div>
</div>
  
  
</div>
</div>
  )

}

export default Services