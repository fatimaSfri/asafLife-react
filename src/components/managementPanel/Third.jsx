import "../newbanner/NewBanner.css"
import MultiFile from "./MultiFile.jsx"
import CustomInput from './CustomInput';

export default function Third() {





  return (
    <div className="w-full md:h-[150vh] max-md:h-[200vh] bg-[#e9e9e9]">
      <div className="w-full h-[400px]  flex justify-center items-end">
      <div className="max-xl:w-11/12 xl:w-8/12 h-5/6 flex items-center justify-center rounded-2xl bg-gradient-circle-carBody">
      <img src="./img/ten-ten/img-ob.png" alt="" className="object-cover lg:h-[400px]"/>
      </div>
      </div>
      {/* form */}
      <div className="w-full  flex flex-col items-center justify-center">
       <div className=" w-full h-[130px] max-xl:w-11/12 xl:w-8/12 flex flex-col">
        <div className=" flex justify-end">
           <img src="./img/logo/tavon.webp" alt="" className="h-20"/> 
        </div>
        <div className="w-full flex items-center justify-center relative">
         <div className="bg-[#55c7e0] w-4 h-4 rounded-full"></div>
         <div className="w-full h-[1.5px] bg-[#55c7e0] mx-1"></div>
         <p className="absolute bg-[#e9e9e9] px-6 lg:text-[20px] font-KalamehBold text-[#213063]">ثالث بدنه</p>
        </div>
       </div> 
       <div className=" flex max-xl:w-11/12 xl:w-8/12 ">
       <MultiFile
       textbox1= "لطفاً تصویر گواهینامه خود را بارگذاری کنید"
       textbox2= "لطفاً تصویر رو کارت ماشین خود را بارگذاری کنید"
       textbox3= "لطفاً تصویر پشت کارت ماشین خود را بارگذاری کنید"
       ></MultiFile>
       </div>
       <div className="max-lg:w-11/12 lg:w-11/12 mt-10 rounded-lg flex flex-col items-center justify-center ">
       <div className="max-md:w-10/12 md:w-full h-full flex flex-col  items-center mx-auto">
       <div className="md:flex max-md:flex-col w-full gap-4 ">
       <CustomInput
        label=" تاریخ تولد صاحب پلاک"
        items="items-end"
        name=""
        width="lg:w-8/12 max-lg:w-full"/>
       <CustomInput
        label=" تلفن همراه"
        items="items-start"
        name=""
        width="lg:w-8/12 max-lg:w-full"/>
       </div>
       </div>
       <div className="max-md:w-10/12 md:w-full h-full flex flex-col items-center mx-auto">
       <div className="md:flex max-md:flex-col lg:w-8/12 max-lg:w-full gap-4">
       <CustomInput
                  label=" آدرس دقیق"
                  items="items-start"
                  name=""
                  width="lg:w-[48%] max-lg:w-full"
              
                />
         </div>
       </div>
       <div className="lg:w-8/12 max-lg:w-full max-lg:items-end max-sm:px-8 h-16 flex justify-end">
       <button className='w-[150px] h-10 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2'
      style={{
        background: 'linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 50%)',
      }}
     >
      تایید
     </button>
       </div>
       </div>
       
    
      </div>

    </div>
  )
}
