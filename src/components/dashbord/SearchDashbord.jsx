import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";

const searchConfig = {
  user: {
    endpoint: "/user",
    searchField: (item) => `${item.first_name} ${item.last_name}`,
    placeholder: "جستجوی کاربر...",
  },
  insurance: {
    endpoint: "/insurance",
    searchField: (item) => item.name,
    placeholder: "جستجوی بیمه...",
  },
  insuranceUser: {
    endpoint: "/insurance-user",
    searchField: (item) =>
      `${item.user.first_name} ${item.user.last_name} ${item.user.national_id} ${item.insurance.name}`,
    placeholder: "جستجوی کاربر-بیمه...",
  },
};

export default function SearchComponent({ onSelect, type = "user",props }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataOptions, setDataOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const config = searchConfig[type] || searchConfig["user"];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(config.endpoint);
        const data = response.data?.data || [];
        setDataOptions(data);
        setFilteredOptions(data.slice(-7)); // 3 رکورد آخر هنگام بارگذاری
      } catch (error) {
        console.error(`خطا در دریافت اطلاعات:`, error);
        setDataOptions([]);
        setFilteredOptions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [config]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredOptions(dataOptions.slice(-7));
    } else {
      const filtered = dataOptions.filter((item) =>
        config.searchField(item).toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered.slice(-7));
    }
  }, [searchTerm, dataOptions, config]);

  const handleSelect = (item) => {
    const displayName = config.searchField(item); 
    setSelectedOption(displayName); 
    setSearchTerm("");
    setIsDropdownOpen(false); 
    onSelect(item.id); 
  };

  return (
    <div className="relative w-full">
      {/* فیلد جستجو */}
      <input
        type="text"
        placeholder={selectedOption || config.placeholder} // نمایش نام انتخاب‌شده یا جای‌خالی
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsDropdownOpen(true); // باز کردن دراپ‌داون هنگام تغییر
        }}
        onFocus={() => {
          if (searchTerm.trim() !== "") {
            setIsDropdownOpen(true); // باز کردن دراپ‌داون فقط اگر جستجو خالی نباشد
          }
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
  
      {/* نمایش نتایج جستجو */}
      {isDropdownOpen && searchTerm.trim() !== "" && ( // نمایش دراپ‌داون فقط اگر جستجو خالی نباشد
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
                {config.searchField(item)}
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










// import React, { useState, useEffect } from "react";
// import axiosInstance from "../axiosConfig";

// const searchConfig = {
//   user: {
//     endpoint: "/user",
//     searchField: (item) => `${item.first_name} ${item.last_name}`,
//     placeholder: "جستجوی کاربر...",
//   },
//   insurance: {
//     endpoint: "/insurance",
//     searchField: (item) => item.name,
//     placeholder: "جستجوی بیمه...",
//   },
//   insuranceUser: {
//     endpoint: "/insurance-user",
//     searchField: (item) =>
//       `${item.user.first_name} ${item.user.last_name} ${item.user.national_id} ${item.insurance.name}`,
//     placeholder: "جستجوی کاربر-بیمه...",
//   },
// };

// export default function SearchComponent({ onSelect, type = "user" }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [dataOptions, setDataOptions] = useState([]);
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const config = searchConfig[type] || searchConfig["user"];

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axiosInstance.get(config.endpoint);
//         const data = response.data?.data || [];
//         setDataOptions(data);
//         setFilteredOptions(data.slice(-7)); // 3 رکورد آخر هنگام بارگذاری
//       } catch (error) {
//         console.error(`خطا در دریافت اطلاعات:`, error);
//         setDataOptions([]);
//         setFilteredOptions([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [config]);

//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredOptions(dataOptions.slice(-7));
//     } else {
//       const filtered = dataOptions.filter((item) =>
//         config.searchField(item).toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredOptions(filtered.slice(-7));
//     }
//   }, [searchTerm, dataOptions, config]);

//   const handleSelect = (item) => {
//     const displayName = config.searchField(item); 
//     setSelectedOption(displayName); 
//     setSearchTerm("");
//     setIsDropdownOpen(false); 
//     onSelect(item.id); 
//   };

//   return (
//     <div className="relative w-full">
//       {/* فیلد جستجو */}
//       <input
//         type="text"
//         placeholder={selectedOption || config.placeholder} // نمایش نام انتخاب‌شده یا جای‌خالی
//         value={searchTerm}
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//           setIsDropdownOpen(true);
//         }}
//         onFocus={() => setIsDropdownOpen(true)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       {/* نمایش نتایج جستجو */}
//       {isDropdownOpen && (
//         <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto mt-1 z-50">
//           {isLoading ? (
//             <li className="px-4 py-2 text-gray-500">در حال بارگذاری...</li>
//           ) : filteredOptions.length > 0 ? (
//             filteredOptions.map((item) => (
//               <li
//                 key={item.id}
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleSelect(item)}
//               >
//                 {config.searchField(item)}
//               </li>
//             ))
//           ) : (
//             <li className="px-4 py-2 text-gray-500">نتیجه‌ای یافت نشد</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }
