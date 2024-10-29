import './navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar(){
 
  const [toggle, setToggle] = useState(false)

function handleMenu(){ 
  setToggle(prev => !prev) 
   console.log(toggle)

}

return(


     <>
     <header className="md:bg-[rgba(250,250,250,0.7)] max-md:bg-white rounded-b-sm mt-0 pt-0 w-full fixed z-50  " >
                  <nav className="flex items-center justify-between  h-16  "> 
              {toggle ?(
              <ul className="flex flex-col items-center  lg:flex-row h-48  dropdown-menu absolute top-[85px] max-lg:bg-[#0000009f]  
                 text-lg font-bold  lg:justify-center w-full z-50 " dir="rtl">

                 <a className="w-full text-center hover:bg-[#c2fff1]"><li className="hover:text-[#008061] text-[#00C293] pt-2 font-asaf py-2  cursor-pointer">خانه</li></a>
                  <a href="" className="w-full text-center hover:bg-[#c2fff1]"><li className="hover:text-[#008061] text-[#00C293]   py-2 cursor-pointer w-full"> پشتیبانی</li></a>
                  <a href="" className="w-full text-center hover:bg-[#c2fff1]"> <li className="hover:text-[#008061] px-3 text-[#00C293] py-2 cursor-pointer "> سرویس</li></a>
                  <a className="w-full text-center hover:bg-[#c2fff1]"><li className="hover:text-[#008061] px-3 text-[#00C293] py-2 cursor-pointer">سامانه</li> </a>  

                </ul>)
                :<div>
                  
                </div> 
               }


                 </nav> </header>
                <div className="bg-[rgba(250,250,250,0.5)]  max-lg:bg-white rounded-b-sm mt-0 pt-0  fixed w-full z-50" >
                 <div className="flex items-center  justify-between px-7 h-16 ">

                     <div className="flex justify-start">
                        <img src="/img/icon/hambericon.svg" className="w-16 h-16 font-[#4f4f4f] z-50 lg:hidden cursor-pointer"  onClick={handleMenu}></img>
                        <img src="/img/icon/ASAF Life Insurance.svg" className="w-32 max-md:w-44 h-15  max-md:mr-3 max-md:hidden"></img>
                           </div>
                    
                     
                     <div className="dropdown-menu  left-0 max-lg:bg-[#0000009f] w-full flex flex-col items-center gap-7 
                                 text-lg font-bold  max-lg:invisible lg:flex-row lg:justify-center  z-50 " >

                        <ul className=" lg:flex-row lg:gap-8 dropdown-menu  max-lg:bg-[#0000009f] w-full flex flex-col items-center
                        text-lg font-bold  max-lg:invisible  lg:justify-center z-50 " dir="rtl">

                           
                        <a><li className="hover:text-[#008061] text-[#00C293] px-3 font-asaf cursor-pointer">خانه</li></a>
                        <a href="#"><li className="hover:text-[#008061] text-[#00C293]  px-3 py-5 cursor-pointer"> پشتیبانی </li></a>
                        <a href="#"><li className="hover:text-[#008061] px-3 text-[#00C293] py-5 cursor-pointer"> سرویس</li></a>
                        <a><li className="hover:text-[#008061] px-3 text-[#00C293] py-5 cursor-pointer">سامانه</li></a>
                         </ul>

                     </div>

                      <div className="w-56
                      h-16 pt-2 max-md:w-60 ">
                      <button className="button w-full h-10  text-white bg-gradient-to-r max-md:text-[14px] from-[#008061] to-[#a1f1df] flex">
                     <Link  to="/login" className="max-md:text-[12px] w-1/2 h-full pt-2 register pl-[10px]"> ثبت نام</Link>
                     <Link  to="/login"  className="max-md:text-[12px] w-[58%] pt-2 h-full rounded-3xl bg-[#008061] login absolute left-0"> ورود</Link>
                      </button>
                      </div>
                
                    </div>
                    </div>
                    </>

)}

export default Navbar
