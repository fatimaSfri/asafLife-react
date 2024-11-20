

export default function Menu() {

  return (
    <div className='h-screen w-full bg-[rgba(0,0,0,0.8)] z-30 ' dir='ltr'> 
    <div className='h-full w-10/12 bg-gray-200 rounded-e-3xl flex flex-col items-center justify-center gap-y-5 '> 
    <div className=' w-10/12 h-[80%]'> 
    <div className='flex justify-center items-end  h-[7%] gap-2'>
       <img src="./src/assets/img/menu/ASAFLogo.svg" className="w-[100px]"></img>  
      <p className=' text-[14px] font-bold text-[#213063] mb-1'> آینــده ســازان آسایــش فـردا</p></div> 
      <div className='h-[2px] w-full bg-gray-400 mt-4'></div>
      <div className='w-full h-[10%] flex items-center justify-center'>
      <div className='w-[50px]  h-3/6 rounded-lg bg-blue-950 flex items-center justify-center ' >
       <img src="./src/assets/img/icon/search.png" alt=""  className='w-6 h-6'/></div>
       <input type="search" placeholder='جستجو' className='w-full  h-3/6 bg-white px-4 rounded-r-lg '/>
                     
      </div>
      <div className='w-full  h-full flex flex-col '>
        {/* ************ */}
       <div className="bg-white w-full h-14 mt-2 rounded-xl flex justify-end items-center">
         <p className="text-[18px]"> خانه</p>
         <img src="./src/assets/img/menu/home.png" alt="" className="w-6 h-6 mx-4" />
         <img src="./src/assets/img/menu/angle.svg" alt="" className="w-6 h-6 mx-4" />
       </div>
         {/* ************ */}
         <div className="bg-white w-full h-14 mt-2 rounded-xl flex justify-end items-center">
         <p className="text-[18px]"> سرویس ها</p>
         <img src="./src/assets/img/menu/service-tools.png" alt="" className="w-6 h-6 mx-4" />
         <img src="./src/assets/img/menu/angle.svg" alt="" className="w-6 h-6 mx-4" />
       </div>
         {/* ************ */}
         <div className="bg-white w-full h-14 mt-2 rounded-xl flex justify-end items-center">
         <p className="text-[18px]"> درباره ما</p>
         <img src="./src/assets/img/menu/mentoring.png" alt="" className="w-6 h-6 mx-4" />
         <img src="./src/assets/img/menu/angle.svg" alt="" className="w-6 h-6 mx-4" />
       </div>
         {/* ************ */}
         <div className="bg-white w-full h-14 mt-2 rounded-xl flex justify-end items-center">
         <p className="text-[18px]"> وبلاگ</p>
         <img src="./src/assets/img/menu/web-design.png" alt="" className="w-6 h-6 mx-4" />
         <img src="./src/assets/img/menu/angle.svg" alt="" className="w-6 h-6 mx-4" />
       </div>
         {/* ************ */}
         <div className="bg-white w-full h-14 mt-2 rounded-xl flex justify-end items-center">
         <p className="text-[18px]"> پشتیبانی</p>
         <img src="./src/assets/img/menu/helpdesk.png" alt="" className="w-6 h-6 mx-4" />
         <img src="./src/assets/img/menu/angle.svg" alt="" className="w-6 h-6 mx-4" />
       </div>
         {/* ************ */}
         <div className="bg-white w-full h-14 mt-2 rounded-xl flex justify-end items-center">
         <p className="text-[18px]"> سامانه</p>
         <img src="./src/assets/img/menu/files.png" alt="" className="w-6 h-6 mx-4" />
         <img src="./src/assets/img/menu/angle.svg" alt="" className="w-6 h-6 mx-4" />
       </div>

      </div>
 
    </div>
    
    <button className="w-9/12 bg-white text-[#55c7e0] h-9  rounded-xl">ورود / ثبت نام</button>
    <div className='h-[2px] w-9/12 bg-gray-400 '></div>
    <div className="w-full h-10 -mt-4 flex flex-row-reverse mx-auto gap-2  justify-center overflow-hidden"> 
    <div className="flex items-center "> 
    <p className="text-gray-500 text-[14px] ">09121887644</p>
    <img src="./src/assets/img/menu/phone.png" alt="" className="w-5 h-5"/>
   </div>
   <div className="flex items-center "> 
    <p className="text-gray-500 text-[14px] ">021-91098951</p>
    <img src="./src/assets/img/menu/fax.png" alt="" className="w-5 h-5"/>
   </div>

    <div></div> 
    </div>
     </div>
    </div>
  )
}
