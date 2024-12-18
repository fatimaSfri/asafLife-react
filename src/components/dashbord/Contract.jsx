import Dashbord from "./Dashbord"
import Button from "../button/Button";
import Dropdown from "./Dropdown";
import Input from "./InputForDashbord";

export default function Contract() {

  const items = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"]
  const itemsPrson = [" حسن مومنی", "آرش رستمی", "لادن موسوی "]

  return (
    <>

  <Dashbord></Dashbord>
        <div className="w-full h-[800px] flex items-center justify-center bg-gray-200">
          <div className="lg:w-11/12 max-lg:w-[96%] h-[700px]  flex flex-col gap-8 justify-center items-center ">
            <h1 className="md:text-[28px] max-md:text-[20px] font-bold  text-[#213063] px-2 w-10/12">
             ثبت قرار داد  
          </h1>  
        <div className=" max-md:w-10/12 md:w-full mx-auto h-full flex flex-col  lg:gap-8 items-center "> 
        <div className="md:flex max-md:flex-col w-full gap-16">

        <Input lable="کد بیمه گذار" items="items-end" ></Input>
        <Input lable="کد رایانامه" items="items-start"></Input>

       </div>

       <div className="md:flex max-md:flex-col w-full gap-16">

              <Input lable="کد ملی" items="items-end" ></Input>
              <Input lable="کد رشته" items="items-start"></Input>
     
       </div>

        <div className="md:flex max-md:flex-col w-full gap-16">

       <div className=" w-full flex flex-col items-end justify-center">
       <div className="flex lg:w-8/12 max-lg:w-full">
            <p className="text-[16px] text-[#213063] mt-4">
              اسم فرد
            </p>
            <p className="text-red-500 text-[20px] pr-1 my-2">*</p>
          </div>
        <Dropdown size="w-8/12" width="w-[28%] max-lg:w-[80%]" mt="mt-[13.5rem]" items={itemsPrson}></Dropdown>
       </div>

       <div className=" w-full flex flex-col items-start justify-center">
         <div className="flex lg:w-8/12 max-lg:w-full">
            <p className="text-[16px] text-[#213063] mt-4">
              شرکت بیمه
            </p>
            <p className="text-red-500 text-[20px] pr-1 my-2">*</p>
          </div>
        <Dropdown size="w-8/12" width="lg:w-[28%] max-lg:w-[80%]" mt="mt-[13.5rem]" items={items} ></Dropdown>
       </div>
       </div>
       <Button mt="mt-10" width="lg:w-8/12" ></Button>
       </div>
       </div>
       </div>

  </>
  )
}
