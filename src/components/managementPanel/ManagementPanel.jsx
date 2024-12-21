import { Outlet  , NavLink} from "react-router-dom";
import  { useState } from 'react';
import MenuForPannel from "../managementPanel/MenuForPannel";

export default function ManagementPanel() {

  const [toggle ,setToggle] = useState(false)
  const icon ={
    menu:"../img/icon/Menu.png", close:"../img/icon/close.svg"
   }
   const [bgColor, setBgColor] = useState(false);

  function handleMenu(){ 
    if(window.innerWidth < 700){
    setToggle(prev => !prev) 
    setBgColor(prev => !prev)
    console.log(toggle)
  }}
  
  return (
<>
 <header className="rounded-b-sm  pt-0 w-full fixed z-40 " >     
              {toggle ?(
                <MenuForPannel></MenuForPannel>
            )
              :<div></div> 
               }  </header>

    <div className="w-full flex  h-screen border border-red-900 shadow-lg relative">
    <div className={`w-full h-20 absolute max-md:z-40 ${!bgColor?'bg-[rgba(230,230,230,0.9)] shadow-lg':''}`}>
    <img src={toggle?icon.close:icon.menu} className={`${!toggle?"w-8 h-6":"w-10 h-10"} font-[#4f4f4f]  lg:hidden cursor-pointer z-50`} onClick={handleMenu}></img>
    </div>
   
    <div className=" h-full border border-green-900 w-3/12 bg-gray-200 rounded-lg z-10 shadow-2xl flex flex-col gap-20 items-center pt-28 max-md:hidden ">
    <div className="border-4 border-red-500 w-[120px] h-[120px] rounded-full "></div>
    <div className="w-full h-[1px] bg-black"></div>

    <div>
    <ul className=" border border-red-500  xl:w-[400px] lg:w-[300px] h-[300px]  flex flex-col justify-evenly" >

    <NavLink
            to="/panel/profile"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
          >
        <li className="flex items-center gap-4">
          <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
          پروفایل 
       </li> 
     </NavLink>

   <NavLink
            to="/panel/services"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'}> 
           <li className="flex items-center gap-4"> 
         <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
           سرویس ها</li>
 </NavLink>

 <NavLink
           to="/panel/mycontracts"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'}>
         <li className="flex items-center gap-4">
         <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
          قرارداد های من </li></NavLink>
 
      <NavLink
           to="/panel/support"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'}>
         <li className="flex items-center gap-4">
          <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
        پشتیبانی 
         </li></NavLink>

    <li className="flex items-center gap-4">
    <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
    خروج  
    </li>

    </ul>
   </div>
   </div>
     <div className="w-full h-full border-2 border-blue-500 flex justify-center items-center">
   <Outlet></Outlet>
   </div>
    </div>
  </>
  )
}
