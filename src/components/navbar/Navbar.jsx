import './navbar.css'
import  { useState, useEffect } from 'react';
import Menu from '../menu/Menu'
import { Link } from 'react-router-dom';

function Navbar(){
 
  const [toggle ,setToggle] = useState(false)
  // const [searchToggle ,setSearchToggle] = useState(false)

function handleMenu(){ 
  setToggle(prev => !prev) 
  console.log(toggle)
  if(toggle === false){
  setBgColor(false); }
  else if(window.scrollY > 700){
    setBgColor(true); 
  }
}

const [bgColor, setBgColor] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) { 
      setBgColor(true); 
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

// function handleSearch(){
//   setSearchToggle(prev => !prev)
//  }

return(

     <>
       {/* menu for max-sm */}
           <header className="rounded-b-sm  pt-0 w-full fixed z-40 " >     
              {toggle ?(
                <Menu></Menu>
            )
             
              :<div></div> 
               }  </header>

                {/* menu for sm */}
                <div className= {`rounded-b-sm mt-0 pt-0 flex flex-row-reverse max-md:justify-end fixed w-full
                 z-40   transition-colors duration-300 ${bgColor?'bg-[rgba(33,48,99,0.9)] shadow-lg':''}`}>

                 <div className="flex items-center justify-between px-7 h-16 w-full">
                 <div className="dropdown-menu left-0 max-lg:bg-[#0000009f] w-full flex flex-col max-lg:items-center gap-7 
                                 text-lg font-bold  max-lg:invisible lg:flex-row lg:justify-center z-30 mr-20" >

                        <ul className=" lg:flex-row lg:gap-8 dropdown-menu  max-lg:bg-[#0000009f] w-full flex flex-col items-center
                        text-lg font-bold  max-lg:invisible  z-40 " dir="rtl">
                
                        <a><li className="hover:text-[#55c7e0] text-white px-3 font-asaf cursor-pointer">خانه</li></a>
                        <a href="#"><li className="hover:text-[#55c7e0] text-white  px-3 py-5 cursor-pointer"> پشتیبانی </li></a>
                        <a><li className="hover:text-[#55c7e0] px-3 text-white py-5 cursor-pointer">سامانه</li></a>
                        <Link to="/login"><li className="hover:text-[#55c7e0] px-3 text-white py-5 cursor-pointer">ثبت نام / ورود</li></Link>
                         </ul>

                     </div>

                     <div className='w-96 h-4/6 flex items-center md:justify-center max-md:justify-end '>
                     <input type="search" placeholder='جستجو'
                      className='md:w-10/12 h-5/6 bg-white md:px-4 rounded-r-lg -mr-20 max-lg:hidden'/>
                     <div className='w-2/12 h-5/6 rounded-lg bg-blue-950 flex items-center justify-center max-lg:hidden'>
                     <img src="./img/icon/search.png" alt=""  className='w-6 h-6'/></div>
                     </div>
                        <div className=" flex lg:flex-row-reverse max-lg:flex w-1/12 max-lg:absolute " >
                        <img src="./img/icon/Menu.png" className="w-8 h-6 font-[#4f4f4f]  lg:hidden cursor-pointer " onClick={handleMenu} ></img></div>
                        <img src="./img/icon/Asaflogo.png" className= {`w-32 max-md:w-44  max-md:mr-3 max-md:hidden  ${toggle?'hidden':''}`} ></img>
                     
                       
                    </div>
                    </div>
                    </>
)}

export default Navbar
