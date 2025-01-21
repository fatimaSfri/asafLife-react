import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axiosInstance from "../axiosConfig";


export default function ManagementPanel() {

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/user/dashbord").then(response => {
      if (response.data) {
        const currentUserData = response.data.data
        if (currentUserData) {
          setCurrentUser(currentUserData);
        } else {
          console.warn('اطلاعات کاربر فعلی یافت نشد.');
        }
      } else {
        console.error("داده‌های دریافتی آرایه نیستند:", response.data);
      }
    }).catch(error => {
      console.error("خطا در دریافت اطلاعات کاربران:", error);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  const exit = async () => {
    if (!window.confirm("آیا برای خروج مطمئن هستید؟")) return;
    try {
      const response = await axiosInstance.get("/auth/logout");
      if (response.data) {

      } else {
        console.error("داده‌های دریافتی آرایه نیستند:", response.data);
      }
    } catch (error) {
      console.error("خطا در دریافت اطلاعات کاربران:", error);
    } finally {
      setLoading(false);
    }


  }

 

  return (
    <>
     
      <div className="w-full h-screen flex relative">
        <div className=" h-full w-3/12 bg-white rounded-e-xl z-10 shadow-2xl flex flex-col justify-evenly items-center max-lg:hidden overflow-hidden  " >
         <div className="w-[120px] h-[120px] rounded-full relative">
            <img src="../img/pannel/User.svg" alt="" className="object-center"/>
          <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#7a7a7a]">{currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : ''} </p>
          </div>

          <div className="w-9/12 h-[2px] bg-[#e9e9e9] "></div>
           <div className="w-11/12 -mt-10 h-[55vh]  flex flex-col justify-between " >
            <ul className="xl:w-[300px] lg:w-[250px] flex flex-col justify-evenly h-[50vh]  ">
            <NavLink
                to="/dashbord/services"
                className={({ isActive }) =>
                   isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl'
                }>
                <li className="flex items-center gap-4 ] xl:text-[18px]  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  سرویس ها</li>
              </NavLink>
              <div className="w-11/12 h-[1px] bg-[#e9e9e9] mx-auto"></div>
              <NavLink
                to="/dashbord/mycontracts"
                className={({ isActive }) =>
                    isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl'
                }>
                <li className="flex items-center gap-4  xl:text-[18px]  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  قرارداد های من </li></NavLink>

              
              <div className="w-11/12 h-[1px] bg-[#e9e9e9] mx-auto"></div>
              <NavLink
                to="/dashbord/car"
                className={({ isActive }) =>
                 isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl'
                }
              >
                <li className="flex items-center gap-4  xl:text-[18px] ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                   بدنه
                </li>
              </NavLink>
              <div className="w-11/12 h-[1px] bg-[#e9e9e9] mx-auto"></div>
              <NavLink
                to="/dashbord/GetCar"
                className={({ isActive }) =>
                    isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl'
                }
              >
                <li className="flex items-center gap-4  xl:text-[18px] ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block"></span>
                   جدول بدنه 
                </li>
              </NavLink>
              <div className="w-11/12 h-[1px] bg-[#e9e9e9] mx-auto"></div>
              <NavLink
                to="/dashbord/Third"
                className={({ isActive }) =>
                   isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl'
                }
              >
                <li className="flex items-center gap-4  xl:text-[18px] ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                   ثالث 
                </li>
              </NavLink>
              <div className="w-11/12 h-[1px] bg-[#e9e9e9] mx-auto"></div>
              <NavLink
                to="/dashbord/GetThird"
                className={({ isActive }) =>
              isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl'
                }
              >
                <li className="flex items-center gap-4  xl:text-[18px] ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                   جدول ثالث 
                </li>
              </NavLink>
              <div className="w-11/12 h-[1px] bg-[#e9e9e9] mx-auto"></div>
              <NavLink
                to="/dashbord/profile"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }
              >
                <li className="flex items-center gap-4  xl:text-[18px]  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  حساب کاربری
                </li>
              </NavLink>
            
            </ul>
            <div className=" mt-10">
            <div className="w-full   flex justify-center items-end  ">
              <img src="../../img/icon/exit.png" alt="" className=" w-10"/>
            <li className="flex h-10 gap-4 items-center justify-center text-[#535353] font-Kalameh-Bold cursor-pointer lg:text-[20px]" onClick={exit}>
                 خـــــروج
              </li>
            </div>
            <div className="w-10/12 h-[2px] bg-[#e9e9e9] px-10 mx-auto"></div>
             <div className="xl:text-[12px] max-xl:text-[10px] w-full flex justify-center whitespace-nowrap flex-nowrap overflow-hidden text-[#535353]"> کلیه حقوق مادی و معنوی شرکت <p className="px-[1px] text-[#55c7e0]">asaflife</p>محفوظ است.</div>
             </div>

          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}




