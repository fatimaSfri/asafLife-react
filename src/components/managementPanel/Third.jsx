import "../newbanner/NewBanner.css"
import File from "./File"
export default function Third() {
  return (
    <div className="w-full h-screen border-4 border-red-500 bg-[#e9e9e9]">
      <div className="w-full h-[400px] border border-red-800 flex justify-center items-end">
      <div className="max-xl:w-11/12 xl:w-8/12 h-5/6 flex items-center justify-center rounded-2xl bg-gradient-circle-carBody">
      <img src="./img/ten-ten/img-ob.png" alt="" className="object-cover lg:h-[400px]"/>
      </div>
      </div>
      {/* form */}
      <div className="w-full h-[550px] border border-blue-400 flex flex-col items-center justify-center">
       <div className="border border-red-500 w-full h-[130px] max-xl:w-11/12 xl:w-8/12 flex flex-col">
        <div className=" flex justify-end">
           <img src="./img/logo/tavon.webp" alt="" className="h-20"/> 
        </div>
        <div className="w-full flex items-center justify-center relative">
         <div className="bg-[#55c7e0] w-4 h-4 rounded-full"></div>
         <div className="w-full h-[1.5px] bg-[#55c7e0] mx-1"></div>
         <p className="absolute bg-[#e9e9e9] px-6 lg:text-[20px] font-KalamehBold text-[#213063]">ثالث بدنه</p>
        </div>
       </div> 
       <div className="border border-red-500 flex w-10/12 h-[500px]">
       <File></File>
       <File></File>
       </div>
    
      </div>

    </div>
  )
}
