import CustomInput from "./CustomInput"
import Button from "../button/Button.jsx"

export default function Profile() {
  return (

    <div className=" w-full h-full flex items-center justify-center bg-[#e7e7e7] ">
      <div className=" w-10/12  grid lg:grid-cols-2 max-lg:grid-cols-1 gap-4 ">
       <CustomInput
        label="نام"
        value="فاطمه"
       ></CustomInput>
        <CustomInput
        label=" نام خانوادگی"
        value="صفری"
       ></CustomInput>
        <CustomInput
        label="کدملی"
        value="*******09"
       ></CustomInput>
       <div className=" flex items-end justify-end flex-col ">
       <div className={`flex w-full `}>
            <p className="text-[16px] text-[#213063] mt-4 ">
             آدرس
            </p>
            <p className="text-red-500 text-[20px] pr-1 my-2">*</p>
          </div>
       <textarea name="آدرس" id="1"
        className="h-10 rounded-2xl px-5 w-full" >
       </textarea>
       </div>
       {/* phone */}
       <div className=" h-20 flex items-center mt-6">
       <p className="bg-white p-4 rounded-lg text-[#213063]">شماره موبایل ثبت شده: 09036886218</p></div>
       <div className=" h-10 mt-10">
       <Button></Button></div>
    </div>
    </div>

  )
}
