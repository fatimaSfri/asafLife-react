import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";

export default function SearchComponent({ onSelect, type = "user" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataOptions, setDataOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const endpoint = type === "user" ? "/user" : "/insurance";
        const response = await axiosInstance.get(endpoint);
        const data = response.data?.data || [];
        setDataOptions(data);
        setFilteredOptions(data);
      } catch (error) {
        console.error(`خطا در دریافت اطلاعات ${type === "user" ? "کاربران" : "بیمه‌ها"}:`, error);
        setDataOptions([]);
        setFilteredOptions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [type]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredOptions(dataOptions);
    } else {
      const filtered = dataOptions.filter((item) => {
        const searchField = type === "user" ? `${item.first_name} ${item.last_name}` : item.name;
        return searchField.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredOptions(filtered);
    }
  }, [searchTerm, dataOptions, type]);

  const handleSelect = (item) => {
    const displayName = type === "user" ? `${item.first_name} ${item.last_name}` : item.name;
    setSearchTerm(displayName); 
    onSelect(item); 
    setIsDropdownOpen(false); 
  };

  return (
    <div className="relative w-full">
      {/* فیلد جستجو */}
      <input
        type="text"
        placeholder={type === "user" ? "جستجوی کاربر..." : "جستجوی بیمه..."}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsDropdownOpen(true);
        }}
        onFocus={() => setIsDropdownOpen(true)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* نمایش نتایج جستجو */}
      {isDropdownOpen && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto mt-1 z-50">
          {isLoading ? (
            <li className="px-4 py-2 text-gray-500">در حال بارگذاری...</li>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                {type === "user"
                  ? `${item.first_name} ${item.last_name}`
                  : item.name}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">نتیجه‌ای یافت نشد</li>
          )}
        </ul>
      )}
    </div>
  );
}
