import  { useState } from "react";
import SearchUser from "./SearchDashbord";

export default function Dropdown(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("انتخاب کنید");

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  const handleOptionSelect = (item) => {
    setSelectedOption(item.name || item.first_name + " " + item.last_name ||
      item.user.first_name+ " " + item.user.last_name +" "+ item.insurance.name);
    setIsDropdownOpen(false);
    props.onSelect(item.key); 
  };

  const handleSearchUserSelect = (user) => {
    setSelectedOption(user.first_name + " " + user.last_name); 
    props.onSelect(user);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`${props.flex}`} >
      {/* Dropdown Button */}
       <label className={`text-[16px] text-[#213063] py-2 pt-3 ${props.labelW}`}>{props.name}</label>
      <div
        className={`max-lg:w-full bg-white rounded-2xl px-4 py-2 border border-gray-300 shadow-sm focus:outline-none text-[#213063] text-[18px] font-bold cursor-pointer flex  items-center justify-between ${props.size}`}
        onClick={handleDropdownToggle}
      >
        {selectedOption}
        <img
          src="./img/icon/chevron-left.svg"
          className={`w-[20px] transform ${
            isDropdownOpen ? "-rotate-180" : "-rotate-90"
          }`}
          alt="dropdown icon"
        />
      </div>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div
          className={`absolute bg-white border border-gray-300 rounded-lg shadow-md z-10 ${props.width} ${props.mt}`}
        >
          {/* SearchUser Component */}
          <SearchUser
            onSelect={handleSearchUserSelect}
            type={props.type}
          />

          {/* Dropdown Options */}
          <ul className="max-h-60 overflow-auto">
            {props.items.map((item, index) => (
              <li
                key={item.key}
                className="px-4 py-2 text-[#213063] text-[18px] hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionSelect(item)}>
                  {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
