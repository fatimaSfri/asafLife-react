import Dashbord from "./Dashbord"
import Button from "../button/Button";
import Input from "./InputForDashbord";

export default function InsuredPerson() {
  return (
     <>
      <Dashbord></Dashbord>
            <div className="w-full h-[800px]  flex items-center justify-center bg-gray-200">
              <div className="lg:w-11/12 max-lg:w-[96%] h-[700px] flex flex-col gap-8 justify-center items-center">
                <h1 className="md:text-[28px] max-md:text-[20px] font-bold  text-[#213063] w-10/12">
                تعریف شخص بیمه گذار 
              </h1> 
            <div className=" max-md:w-10/12 md:w-full h-full flex flex-col lg:gap-8 items-center mx-auto"> 
            <div className="md:flex max-md:flex-col w-full  gap-16 ">
             <Input lable="نام" items="items-end" ></Input>
             <Input lable=" نام خانوادگی" items="items-start"></Input>
           </div>
           <div className="md:flex max-md:flex-col w-full gap-16 ">
           <Input lable=" کد ملی " items="items-end"></Input>
           <Input lable=" شماره تماس " items="items-start"></Input>
          </div>
           <Button mt="mt-10" width="lg:w-8/12"></Button>
           </div> 
           </div>
           </div>
    
      </>
      )
    }
    
