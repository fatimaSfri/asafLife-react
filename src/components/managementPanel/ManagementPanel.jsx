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

    <div className="w-full flex h-screen shadow-lg relative">
<<<<<<< HEAD
    <div className={`w-full h-16 absolute  flex md:flex-row-reverse items-center ${!bgColor?'bg-[#e9e9e9] shadow-lg':''}`}>
    <img src={toggle?icon.close:icon.menu} className={`${!toggle?"w-10 h-8 p-[2px]":"w-10 h-10"} mr-4 font-[#4f4f4f] lg:hidden cursor-pointer z-50 md:hidden `} onClick={handleMenu}></img>
    <div className="md:w-10/12 max-md:w-full h-full  flex items-center justify-between px-4 ">
     <img src="../img/pannel/Notification.svg" alt="" className="md:w-10 md:h-10 md:mr-20 mr-2 max-md:w-6 max-md:w-h-6" />
     <img src="../img/icon/ASAF Logo copy.svg" alt="" className="md:h-14 max-md:h-10" />
    </div>
=======
    <div className={`w-full h-16 absolute max-md:z-40 ${!bgColor?'bg-[#e9e9e9] shadow-lg':''}`}>
    <img src={toggle?icon.close:icon.menu} className={`${!toggle?"w-8 h-6":"w-10 h-10"} font-[#4f4f4f] lg:hidden cursor-pointer z-50`} onClick={handleMenu}></img>
>>>>>>> feature-branch
    </div>
   
    <div className=" h-full w-3/12 bg-[#e9e9e9] rounded-e-xl z-10 shadow-2xl flex flex-col gap-20 items-center pt-28 max-md:hidden">
    <div className=" w-[120px] h-[120px] rounded-full relative">
      <img src="../img/pannel/User.svg" alt="" className="object-center "/>
      {/* div for notification */}
<<<<<<< HEAD
      {/* <div className="xl:w-10 xl:h-10 max-xl:w-8 max-xl:h-8 bg-red-500 rounded-full absolute -mt-10 -mr-2 text-white"></div> */}
=======
      {/* <div className="xl:w-10 xl:h-10 max-xl:w-8 max-xl:h-8 bg-red-500 rounded-full absolute -mt-10 -mr-2 text-white "></div> */}
>>>>>>> feature-branch
      <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#535353]">حسن مومنی</p>
    </div>
    
  
    <div className="w-full h-[1px] bg-black"></div>

    <div>
    <ul className="xl:w-[300px] lg:w-[250px] h-[300px]  flex flex-col justify-evenly" >

    <NavLink
            to="/panel/profile"
            className={({ isActive }) =>
              isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
            }
          >
        <li className="flex items-center gap-4  ">
          <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block text-[#535353]"></span>
          پروفایل 
       </li> 
     </NavLink>

   <NavLink
            to="/panel/services"
            className={({ isActive }) =>
           isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
              }> 
           <li className="flex items-center gap-4"> 
         <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
           سرویس ها</li>
 </NavLink>

 <NavLink
           to="/panel/mycontracts"
            className={({ isActive }) =>
          isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
              }>
         <li className="flex items-center gap-4">
         <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
          قرارداد های من </li></NavLink>
 
      <NavLink
           to="/panel/support"
            className={({ isActive }) =>
        isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
           } >
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
