import Lottie from "lottie-react";
import blog from '/src/assets/json/blog.json'

export default function Blog(props) {

  return (
    <>
    
    <div class=" w-full flex flex-col items-center justify-center h-auto py-20 xl:mt-10 " >
    <div className="xl:w-[1100px] lg:w-[900px] md:w-[700px] sm:w-[400px] max-sm:w-[300px] flex items-center "> 
    <div className="flex justify-center items-center 
     w-14  -mt-5">
     <Lottie animationData={blog} loop={true} />
     </div>
     <p className="font-bold text-[#213063] text-[18px] px-2"> {props.text}</p> 
    </div>
   <div class="grid gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">


 {/* 1 */}
 <div class="bg-white rounded-3xl shadow min-w-[200px] max-w-[350px] flex flex-col  min-h-[350px] ">
    {/* px-8 */}
    <div className="w-full">
    <img src="./img/blog/blog3.jpg " alt="" className="  rounded-2xl " /></div>
    <div className="font-bold w-10/12   flex relative">
   <h2 class="text-lg max-sm:text-[14px]  text-[#213063] mt-4 mr-6">
    مشاوره </h2>
    </div>
    <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-1 text-[12px] "> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
    <button class="text-[#55c7e0] hover:underline text-[14px] text-left ml-6  py-4 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
   
  </div>

   {/* 2 */}

   <div class="bg-white rounded-3xl shadow min-w-[200px] max-w-[350px] flex flex-col  min-h-[350px] ">
    {/* px-8 */}
    <div className="w-full">
    <img src="./img/blog/blog2.jpg " alt="" className="  rounded-2xl " /></div>
    <div className="font-bold w-10/12   flex relative">
   <h2 class="text-lg max-sm:text-[14px]  text-[#213063] mt-4 mr-6">
     مشاوره</h2>
    </div>
    <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-1 text-[12px] "> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
    <button class="text-[#55c7e0] hover:underline text-[14px] text-left ml-6  py-4 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
   
  </div>

   {/* 3 */}

   <div class="bg-white rounded-3xl shadow min-w-[200px] max-w-[350px] flex flex-col  min-h-[350px] ">
    {/* px-8 */}
    <div className="w-full">
    <img src="./img/blog/blog1.jpg " alt="" className="  rounded-2xl " /></div>
    <div className="font-bold w-10/12   flex relative">
   <h2 class="text-lg max-sm:text-[14px]  text-[#213063] mt-4 mr-6">
    مشاوره </h2>
    </div>
    <p class="text-gray-600 flex-grow text-center mx-auto w-11/12  py-1 text-[12px] "> شرکت کارگذاری آینده ســــازان آسایـش فردا با سابقه ۳۰ سالــه مدیران خود در عرضه تجارت و بیمه و ایجاد باشگــاه مشتریــان</p>
    <button class="text-[#55c7e0] hover:underline text-[14px] text-left ml-6  py-4 max-sm:text-[12px]">  توضیحات بیشتر &#62; </button>
   
  </div>


 </div>
 </div>
 </>
  )
}
