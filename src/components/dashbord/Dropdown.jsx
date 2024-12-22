import { useState } from "react"
export default function Dropdown(props) {
    
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const [selectedOption, setSelectedOption] = useState("انتخاب کنید");
     
       const handleDropdownToggle = () => {
         setIsDropdownOpen((prev) => !prev);
       };
     
       const handleOptionSelect = (option) => {
         setSelectedOption(option);
         setIsDropdownOpen(false); 
         props.onSelect(option) //send data
       };
     
       const options = props.items;
     
  return (
   <>
     {/* Dropdown Button */}
     <div
     className={`max-lg:w-full bg-white rounded-2xl  px-4 py-2 border border-gray-300 shadow-sm focus:outline-none text-[#213063] text-[18px] font-bold cursor-pointer flex justify-between items-center ${props.size}`}
     onClick={handleDropdownToggle}
   >
     {selectedOption}
     <img
       src="./img/icon/chevron-left.svg"
       className={`w-[20px] transform ${isDropdownOpen ? "-rotate-180" : "-rotate-90"}`}
       alt="dropdown icon"
     />
   </div>

   {/* Dropdown Options */}
   {isDropdownOpen && (
     <ul className ={`absolute  bg-white border border-gray-300 rounded-lg shadow-md  z-10 ${props.width} ${props.mt}`}>
       {options.map((option, index) => (
         <li
           key={index}
           className="px-4 py-2 text-[#213063] text-[18px] hover:bg-gray-100 cursor-pointer"
           onClick={() => handleOptionSelect(option)}
         >
           {option}
         </li>
       ))}
     </ul>
   )}
   </>
  )
}
