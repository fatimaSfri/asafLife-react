import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import MenuForPannel from "../managementPanel/MenuForPannel";
import axiosInstance from "../axiosConfig";


export default function ManagementPanel() {

  const [toggle, setToggle] = useState(false)
  const icon = {
    menu: "../img/icon/menu-dark.svg",
    close: "../img/icon/arrow-r.svg"
  }
  const [bgColor, setBgColor] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/user/dashbord").then(response => {
      if (response.data) {
        const currentUserData = response.data.data
        // console.log(currentUserData);
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

  function handleMenu() {
    if (window.innerWidth < 1200) {
      setToggle(prev => !prev)
      setBgColor(prev => !prev)
      // console.log(toggle)
    }
  }

  function onChange(e) {
    setToggle(e)
  }

  return (
    <>
      <header className="rounded-b-sm pt-0 w-full fixed z-40" >
        {toggle ? (
          <MenuForPannel onChange={onChange} ></MenuForPannel>
        )
          : <div></div>
        }  </header>

      <div className="w-full flex h-screen relative  ">
        <div className={` h-16  absolute  flex lg:flex-row-reverse items-center ${!toggle?'w-full':'w-9/12'}`}>
          <img src={toggle ? icon.close : icon.menu} className={`${!toggle ? "w-10 h-8 p-[2px] mr-4" : "w-10 h-6 ml-2 order-2"}  font-[#4f4f4f]  cursor-pointer z-50 lg:hidden `} onClick={handleMenu}></img>
          <div className="lg:w-10/12 max-lg:w-full h-full flex items-center justify-end px-4 " >
            <img src="../img/icon/ASAF Logo copy.svg" alt="" className="md:h-14 max-md:h-10 xl:pl-10 xl:mt-10" />
          </div>
        </div>

        <div className=" h-full w-3/12 bg-white rounded-e-xl z-10 shadow-2xl flex flex-col justify-evenly  items-center  max-lg:hidden overflow-y-hidden " >
          <div className=" w-[120px] h-[120px]  rounded-full relative ">
            <img src="../img/pannel/User.svg" alt="" className="object-center " />
          <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#7a7a7a]">{currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : ''} ttttt</p>
          </div>

          <div className="w-9/12 h-[2px] bg-[#e9e9e9] "></div>

          <div className="w-11/12 -mt-10 h-[55vh]  flex flex-col justify-between " >
            
            <ul className="xl:w-[300px] lg:w-[250px] flex flex-col justify-evenly h-[50vh]  ">
                <NavLink
                to="/dashbord/profile"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }
              >
                <li className="flex items-center gap-4  xl:text-[18px]  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  پروفایل
                </li>
              </NavLink>
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

            </ul>
            <div className=" mt-10">
            <div className="w-full   flex justify-center items-end  ">
              <img src="../../img/icon/exit.png" alt="" className=" w-10"/>
            <li className="flex h-10 gap-4 items-center justify-center text-[#535353] font-Kalameh-Bold cursor-pointer lg:text-[20px]" onClick={exit}>
                 خـــــروج
              </li>
            </div>
            <div className="w-10/12 h-[2px] bg-[#e9e9e9] px-10 mx-auto"></div>
             <p className="xl:text-[12px] max-xl:text-[10px] w-full flex justify-center whitespace-nowrap flex-nowrap overflow-hidden text-[#535353]"> کلیه حقوق مادی و معنوی شرکت <p className="px-[1px] text-[#55c7e0]">asaflife</p>محفوظ است.</p>
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




