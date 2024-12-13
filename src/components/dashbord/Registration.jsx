import Dashbord from "./Dashbord";
import { useState } from "react";
import File from "./File";

export default function Registration() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("انتخاب کنید");

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); 
  };

  const options = ["بیمه حکمت", "بیمه ایران", "بیمه دانا"];

  return (
    <>
      <Dashbord></Dashbord>
      <div className="w-full h-[1000px] border-4 border-red-900 flex items-center justify-center">
        <div className="w-11/12 h-[700px] border-4 border-blue-500 flex flex-col gap-10 md:px-16 max-md:px-8">
          <h1 className="md:text-[28px] max-md:text-[16px] font-bold pt-4 text-[#213063]">
            ثبت شرکت بیمه
          </h1>
          <div className="flex">
            <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
              شرکت بیمه را انتخاب کنید
            </p>
            <p className="text-red-500 text-[20px]">*</p>
          </div>
          <div className="w-full flex justify-center relative">
            {/* Dropdown Button */}
            <div
              className="w-10/12 bg-white rounded-lg block px-4 py-2 border border-gray-300 shadow-sm focus:outline-none text-[#213063] text-[20px] font-bold cursor-pointer flex justify-between items-center"
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
              <ul className="absolute w-10/12 mt-12 bg-white border border-gray-300 rounded-lg shadow-md  z-10">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-[#213063] text-[20px] hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex">
            <p className="md:text-[20px] max-md:text-[16px] text-[#213063]">
              آواتار بیمه را انتخاب کنید
            </p>
            <p className="text-red-500 text-[20px]">*</p>
          </div>
          <File></File>
        </div>

        
      </div>
    </>
  );
}
