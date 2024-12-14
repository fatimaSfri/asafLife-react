import Dashbord from "./Dashbord";
import Dropdown from "./Dropdown";
import File from "./File";
import Button from "../button/Button";

export default function Registration() {
  const items = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"]

  return (
    <>
      <Dashbord></Dashbord>
      <div className="w-full h-[802px] flex items-center justify-center bg-gray-200 ">
        <div className="w-11/12 h-[700px]  flex flex-col gap-10 md:px-16 max-md:px-8 -mt-40">
          <h1 className="md:text-[28px] max-md:text-[20px] font-bold pt-8 text-[#213063]">
            ثبت شرکت بیمه
          </h1>
          <div className="flex">
            <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
              شرکت بیمه را انتخاب کنید
            </p>
            <p className="text-red-500 text-[20px]">*</p>
          </div>
          <div className="w-full flex justify-center relative">
          <Dropdown size="md:w-10/12 max-md:w-full" width="md:w-10/12 max-md:full" mt="m-12" items={items} ></Dropdown>
          </div>
          <div className="flex">
            <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
              آواتار بیمه را انتخاب کنید
            </p>
            <p className="text-red-500 text-[20px]">*</p>
          </div>
            <File></File>
            <Button></Button>
         </div>
        </div>
       
    </>
  );
}
