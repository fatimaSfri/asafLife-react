import { useState } from "react";
// import SearchUser from "./SearchDashbord";

export default function Dropdown(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("انتخاب کنید");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (item) => {
    setSelectedOption(item.value); 
    setIsDropdownOpen(false);
    props.onSelect(item.key);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = props.items.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${props.flex}`}>
      {/* برچسب */}
      <label className={`text-[16px] text-[#213063] py-2 pt-3 ${props.labelW}`}>
        {props.name}
      </label>

      {/* دکمه Dropdown */}
      <div
        className={`max-lg:w-full bg-white rounded-2xl px-4 py-2 border border-gray-300 shadow-sm focus:outline-none text-[#213063] text-[18px] font-bold cursor-pointer flex items-center justify-between ${props.size}`}
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

      {/* محتوای Dropdown */}
      {isDropdownOpen && (
        <div
          className={`absolute bg-white border border-gray-300 rounded-lg shadow-md z-10 ${props.width} ${props.mt}`}
        >
          {/* جستجو */}
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="جستجو..."
              className="w-full px-2 py-1 border rounded-md focus:outline-none"
            />
          </div>

          {/* لیست آیتم‌ها */}
          <ul className="max-h-60 overflow-auto">
            {filteredItems.map((item) => (
              <li
                key={item.key}
                className="px-4 py-2 text-[#213063] text-[18px] hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionSelect(item)}
              >
                {item.value}
              </li>
            ))}
            {filteredItems.length === 0 && (
              <li className="px-4 py-2 text-gray-400 text-[16px]">
                موردی یافت نشد
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
