import Dashbord from "./Dashbord"
import Button from "../button/Button";
import Dropdown from "./Dropdown";

export default function Contract() {

  const items = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"]
  const itemsPrson = [" حسن مومنی", "آرش رستمی", "لادن موسوی "]
  return (
    <>

  <Dashbord></Dashbord>
        <div className="w-full h-[802px] flex items-center justify-center bg-gray-200">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px]  flex flex-col gap-10 md:px-16 -mt-40 ">
            <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063] px-4">
             ثبت قرار داد  
          </h1>
          
        <div className=" max-md:w-10/12 md:w-full mx-auto h-full flex flex-col gap-8 items-center max-lg:justify-evenly"> 
        <div className="md:flex max-md:flex-col w-full gap-2">

       <div className=" w-full flex flex-col items-center justify-center">
          <div className="flex lg:w-8/12 max-lg:w-full">
            <p className="text-[16px] text-[#213063]">
              کد بیمه گذار
            </p>
            <p className="text-red-500 text-[20px] pr-1">*</p>
          </div>

        <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
       </div>

       <div className="w-full flex flex-col items-center justify-center">
          <div className="flex lg:w-8/12 max-lg:w-full">
            <p className="text-[16px] text-[#213063]">
              کد رایانامه
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
              رشته
            </p>
            <p className="text-red-500 text-[20px] pr-1">*</p>
          </div>
           <input type="text" className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5"></input>
       </div>

       </div>

        <div className="md:flex max-md:flex-col w-full">

       <div className=" w-full flex flex-col items-center justify-center">
       <div className="flex lg:w-8/12 max-lg:w-full">
            <p className="text-[16px] text-[#213063]">
              اسم فرد
            </p>
            <p className="text-red-500 text-[20px] pr-1">*</p>
          </div>
        <Dropdown size="w-8/12" width="w-[28%] max-lg:w-[80%]" mt="mt-[13.5rem]" items={itemsPrson}></Dropdown>
       </div>

       <div className=" w-full flex flex-col items-center justify-center">
         <div className="flex lg:w-8/12 max-lg:w-full">
            <p className="text-[16px] text-[#213063]">
              شرکت بیمه
            </p>
            <p className="text-red-500 text-[20px] pr-1">*</p>
          </div>
        <Dropdown size="w-8/12" width="lg:w-[28%] max-lg:w-[80%]" mt="mt-[13.5rem]" items={items} ></Dropdown>
       </div>

       </div>
       <Button mt="mt-10"></Button>

       </div>
        
       </div>
       </div>

  </>
  )
}
