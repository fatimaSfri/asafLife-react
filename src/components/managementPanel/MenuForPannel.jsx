import { NavLink } from "react-router-dom"

export default function MenuForPannel() {

    return (
<<<<<<< HEAD
        <div className='h-screen w-full bg-[rgba(0,0,0,0.8)] z-30 ' > 
=======
        <div className='h-screen w-full bg-[rgba(0,0,0,0.8)] z-30 ' dir='ltr'> 
>>>>>>> feature-branch
       
           <div className=" h-full w-10/12 bg-[#e9e9e9] rounded-e-xl z-10 shadow-2xl flex flex-col gap-20 items-center pt-28 ">
           <div className=" w-[120px] h-[120px] rounded-full relative">
             <img src="../img/pannel/User.svg" alt="" className="object-center "/>
             {/* div for notification */}
             {/* <div className="xl:w-10 xl:h-10 max-xl:w-8 max-xl:h-8 bg-red-500 rounded-full absolute -mt-10 -mr-2 text-white "></div> */}
<<<<<<< HEAD
             <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#535353] ">حسن مومنی</p>
=======
             <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#535353]">حسن مومنی</p>
>>>>>>> feature-branch
           </div>
           
         
           <div className="w-full h-[1px] bg-black"></div>
       
           <div>
<<<<<<< HEAD
           <ul className="max-sm:w-[250px] sm:w-[350px] h-[300px] flex  flex-col justify-evenly " >
=======
           <ul className="xl:w-[300px] lg:w-[250px] h-[300px]  flex flex-col justify-evenly" >
>>>>>>> feature-branch
       
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
        </div>
        
)
}
