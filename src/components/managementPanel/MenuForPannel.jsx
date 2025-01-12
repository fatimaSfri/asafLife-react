import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react';
import axiosInstance from "../axiosConfig";

export default function MenuForPannel() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUsers = async () => {
      console.log('درخواست اطلاعات کاربران...');
      
      try {
        const response = await axiosInstance.get("/user/dashbord");
        console.log(response);
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

    return (
        <div className='h-screen w-full bg-[rgba(0,0,0,0.8)] z-30 ' > 
       
           <div className=" h-full w-10/12 bg-[#e9e9e9] rounded-e-xl z-10 shadow-2xl flex flex-col gap-20 items-center pt-28 ">
           <div className=" w-[120px] h-[120px] rounded-full relative">
             <img src="../img/pannel/User.svg" alt="" className="object-center "/>
             <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#535353] ">{currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : ''}</p>
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
        </div>
        
)
}
