import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react';
import axiosInstance from "../axiosConfig";

export default function MenuForPannel({onChange}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggel ,setToggel]= useState(false)

  function handelMenu(){
    setToggel(prev => !prev)
    onChange(toggel)
    console.log(toggel)
  }




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
        <div className='h-screen w-full bg-[rgba(0,0,0,0.5)] z-30 ' > 
       
           <div className=" h-full w-9/12 bg-white rounded-e-xl z-10 shadow-2xl flex flex-col gap-20 items-center pt-28  ">
           <div className=" w-[120px] h-[120px] rounded-full relative">
             <img src="../img/pannel/User.svg" alt="" className="object-center "/>
             <p className="mt-6 text-center xl:text-[20px] font-KalamehBold text-[#535353] ">{currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : ''}</p>
           </div>
           
         
           <div className="w-9/12 h-[2px] bg-[#e9e9e9] "></div>
       
           <div className="w-11/12 h-[55%] -mt-16 ">
           <ul className="w-full h-[350px]  flex flex-col justify-evenly" >
                <NavLink
                to="/dashbord/profile"
                className={({ isActive }) =>
                   isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                } 
              >
                <li className="flex items-center gap-4 " onClick={handelMenu}>
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2 block "></span>
                  پروفایل
                </li>
              </NavLink>
              <NavLink
                to="/dashbord/car"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }
              >
                <li className="flex items-center gap-4 " onClick={handelMenu}>
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                   بدنه
                </li>
              </NavLink>
              <NavLink
                to="/dashbord/GetCar"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }
              >
                <li className="flex items-center gap-4 " onClick={handelMenu}>
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                   جدول بدنه 
                </li>
              </NavLink>
              <NavLink
                to="/dashbord/Third"
                className={({ isActive }) =>
                   isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }
              >
                <li className="flex items-center gap-4 " onClick={handelMenu}>
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                   ثالث 
                </li>
              </NavLink>
              <NavLink
                to="/dashbord/GetThird"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }
              >
                <li className="flex items-center gap-4 " onClick={handelMenu}>
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block"></span>
                   جدول ثالث 
                </li>
              </NavLink>


              <NavLink
                to="/dashbord/services"
                className={({ isActive }) =>
                   isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }>
                <li className="flex items-center gap-4" onClick={handelMenu}>
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  سرویس ها</li>
              </NavLink>
                
              <NavLink
                to="/dashbord/mycontracts"
                className={({ isActive }) =>
                  isActive ? 'bg-[rgba(33,48,99,0.9)] rounded-xl h-10 flex items-center text-white ' : 'text-[#4e4e4e] hover:bg-[rgba(250,250,250,0.9)] rounded-xl '
                }>
                <li className="flex items-center gap-4" onClick={handelMenu}>
                  <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                  قرارداد های من </li></NavLink>

          
              {/* <li className="flex items-center gap-4" onClick={handelMenu}>
                <span className="w-3 h-3 bg-[#55c7e0] rounded-full mr-2  block "></span>
                خروج
              </li> */}

            </ul>
          </div>
          <div className=" mb-16">
          <div className="w-full  flex justify-center items-end ">
              <img src="../../img/icon/exit.png" alt="" className=" w-10"/>
            <li className="flex h-10 gap-4 items-center justify-center text-[#535353] font-Kalameh-Bold cursor-pointer lg:text-[20px]">
                 خـــــروج
              </li>
            </div>
            <div className="w-10/12 h-[2px] bg-[#e9e9e9] px-10 mx-auto "></div>
             <p className=" max-xl:text-[8px] w-full flex justify-center whitespace-nowrap flex-nowrap overflow-hidden text-[#535353] mt-2"> کلیه حقوق مادی و معنوی شرکت <p className="px-[1px] text-[#55c7e0]">asaflife</p>محفوظ است.</p>
          </div>


          </div>
        </div>
        
)
}
