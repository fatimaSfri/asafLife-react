import { useState } from "react"
import MenuForPannel from "./MenuForPannel"

export default function NavbarForPannel({width}) {

    const [toggle, setToggle] = useState(false)
    const icon = {
      menu: "../img/icon/menu-dark.svg",
      close: "../img/icon/arrow-r.svg"
    }
    function handleMenu() {
        if (window.innerWidth < 1200) {
          setToggle(prev => !prev)
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
        <div className={`h-20 flex lg:flex-row-reverse items-center justify-center py-10 ${!toggle?'w-full':'w-9/12'}`}>
          <img src={toggle ? icon.close : icon.menu} className={`${!toggle ? " w-10 h-8 p-[2px] mr-4 " : "w-10 h-6 ml-2 order-2 "}  font-[#4f4f4f] cursor-pointer z-50 lg:hidden  `} onClick={handleMenu}></img>
          {/* sm:w-10/12 max-sm:w-11/12 */}
          <div className={`h-16 flex items-center justify-end max-lg:px-4 ${width}`}>
            <img src="../img/icon/ASAF Logo copy.svg " alt="" className="md:h-14 max-md:h-10 " />
          </div>
        </div>
    </>
) 
}
