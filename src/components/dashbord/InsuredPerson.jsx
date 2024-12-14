import Dashbord from "./Dashbord"
import Button from "../button/Button";

export default function InsuredPerson() {
  return (
     <>
      <Dashbord></Dashbord>
            <div className="w-full h-[802px]  flex items-center justify-center bg-gray-200">
              <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col gap-10 md:px-16 -mt-40">
                <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063]">
                تعریف شخص بیمه گذار 
              </h1>
              
            <div className="  max-md:w-10/12 md:w-full h-full flex flex-col lg:gap-8 items-center max-lg:gap-20 mx-auto"> 
            <div className="md:flex max-md:flex-col w-full gap-2">
    
           <div className=" w-full flex flex-col items-center justify-center">
              <div className="flex lg:w-8/12 max-lg:w-full">
                <p className="text-[16px] text-[#213063]">
                  نــام
                </p>
                <p className="text-red-500 text-[20px] pr-1">*</p>
              </div>
    
            <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
           </div>
    
           <div className="w-full flex flex-col items-center justify-center">
              <div className="flex lg:w-8/12 max-lg:w-full">
                <p className="text-[16px] text-[#213063]">
                  نــام خانوادگی
                </p>
                <p className="text-red-500 text-[20px] pr-1">*</p>
              </div>
    
            <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
           </div>
    
    
           </div>
    
           <div className="md:flex max-md:flex-col w-full gap-2">
    
           <div className=" w-full flex flex-col items-center justify-center">
              <div className="flex lg:w-8/12 max-lg:w-full">
                <p className="text-[16px] text-[#213063]">
                  کد ملی
                </p>
                <p className="text-red-500 text-[20px] pr-1">*</p>
              </div>
               <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
           </div>
    
           <div className=" w-full flex flex-col items-center justify-center">
              <div className="flex lg:w-8/12 max-lg:w-full">
                <p className="text-[16px] text-[#213063]">
                  شماره تماس
                </p>
                <p className="text-red-500 text-[20px] pr-1">*</p>
              </div>
               <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
           </div>
    
           </div>
    
           <Button mt="mt-10"></Button>
    
           </div>
            
           </div>
           </div>
    
      </>
      )
    }
    
