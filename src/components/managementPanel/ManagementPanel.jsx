import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import MenuForPannel from "../managementPanel/MenuForPannel";
import axiosInstance from "../axiosConfig";


export default function ManagementPanel() {

  const [toggle, setToggle] = useState(false)
  const icon = {
    menu: "../img/icon/Menu.svg",
    close: "../img/icon/close.svg"
  }
  const [bgColor, setBgColor] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log('درخواست اطلاعات کاربران...');
      
      try {
        const response = await axiosInstance.get("/user/dashbord");
        // console.log(response);
        if (response.data) {
          // console.log(response.data.data);
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
      } catch (error) {
        console.error("خطا در دریافت اطلاعات کاربران:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  function handleMenu() {
    if (window.innerWidth < 700) {
      setToggle(prev => !prev)
      setBgColor(prev => !prev)
      console.log(toggle)
    }
  }

  return (
    <>
      <header className="rounded-b-sm  pt-0 w-full fixed z-40" >
        {toggle ? (
          <MenuForPannel></MenuForPannel>
        )
          : <div></div>
        }  </header>

      <div className="w-full flex h-screen shadow-lg relative">
        <div className={`w-full h-16 absolute  flex md:flex-row-reverse items-center ${!bgColor ? 'bg-[#e9e9e9] shadow-lg' : ''}`}>
          <img src={toggle ? icon.close : icon.menu} className={`${!toggle ? "w-10 h-8 p-[2px]" : "w-10 h-10"} mr-4 font-[#4f4f4f] lg:hidden cursor-pointer z-50 md:hidden `} onClick={handleMenu}></img>
          <div className="md:w-10/12 max-md:w-full h-full  flex items-center justify-between px-4 ">
            <img src="../img/pannel/Notification.svg" alt="" className="md:w-10 md:h-10 lg:mr-20 md:mr-12 mr-2 max-md:w-7 max-md:h-7" />
            <img src="../img/icon/ASAF Logo copy.svg" alt="" className="md:h-14 max-md:h-10" />
          </div>
        </div>

        <div className=" h-full w-3/12 bg-[#e9e9e9] rounded-e-xl z-10 shadow-2xl flex flex-col gap-20 items-center pt-28 max-md:hidden">
          <div className=" w-[120px] h-[120px] rounded-full relative">
            <img src="../img/pannel/User.svg" alt="" className="object-center " />
            {/* div for notification */}
            {/* <div className="xl:w-10 xl:h-10 max-xl:w-8 max-xl:h-8 bg-red-500 rounded-full absolute -mt-10 -mr-2 text-white"></div> */}
            <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#535353]">{currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : ''}</p>
          </div>


          <div className="w-full h-[1px] bg-black"></div>

          <div>
            
            <ul className="xl:w-[300px] lg:w-[250px] h-[300px]  flex flex-col justify-evenly" >
                <NavLink
                to="/dashbord/profile"
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
                to="/dashbord/car"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
                }
              >
                <li className="flex items-center gap-4  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block text-[#535353]"></span>
                   بدنه
                </li>
              </NavLink>
              <NavLink
                to="/dashbord/GetCar"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
                }
              >
                <li className="flex items-center gap-4  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block text-[#535353]"></span>
                   جدول بدنه 
                </li>
              </NavLink>
              <NavLink
                to="/dashbord/Third"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
                }
              >
                <li className="flex items-center gap-4  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block text-[#535353]"></span>
                   ثالث 
                </li>
              </NavLink>
              <NavLink
                to="/dashbord/GetThird"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
                }
              >
                <li className="flex items-center gap-4  ">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block text-[#535353]"></span>
                   جدول ثالث 
                </li>
              </NavLink>


              <NavLink
                to="/dashbord/services"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
                }>
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  سرویس ها</li>
              </NavLink>
                
              <NavLink
                to="/dashbord/mycontracts"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(250,250,250,0.9)] rounded-xl h-10 flex items-center' : ''
                }>
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  قرارداد های من </li></NavLink>

          
              <li className="flex items-center gap-4">
                <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                خروج
              </li>

            </ul>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}




