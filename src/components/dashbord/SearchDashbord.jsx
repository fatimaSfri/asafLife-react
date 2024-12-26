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
        let endpoint = "";
        switch (type) {
          case "user":
            endpoint = "/user";
            break;
          case "insurance":
            endpoint = "/insurance";
            break;
          case "insurance-user":
            endpoint = "/insurance-user";
            break;
          default:
            endpoint = "/user";
        }

        const response = await axiosInstance.get(endpoint);

        let combinedData = [];

        if (type === "insurance-user") {
          combinedData = response.data?.data?.map((item) => ({
            id: item.id || Math.random(),
            user: item.user || null,
            insurance: item.insurance || null,
          })) || [];
        } else if (type === "user") {
          combinedData = response.data?.data?.map((user) => ({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            national_id: user.national_id,
            type: "user",
          })) || [];
        } else if (type === "insurance") {
          combinedData = response.data?.data?.map((insurance) => ({
            id: insurance.id,
            name: insurance.name,
            type: "insurance",
          })) || [];
        }

        setDataOptions(combinedData);
        setFilteredOptions(combinedData);
      } catch (error) {
        console.error(`خطا در دریافت اطلاعات:`, error);
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
        if (item.user && item.user.first_name) {
          const searchField = `${item.user.first_name} ${item.user.last_name} ${item.user.national_id || ""}`;
          return searchField
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        } else if (item.insurance && item.insurance.name) {
          return item.insurance.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        } else if (type === "user" && item.first_name) {
          const searchField = `${item.first_name} ${item.last_name} ${item.national_id || ""}`;
          return searchField
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        } else if (type === "insurance" && item.name) {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      });
      setFilteredOptions(filtered);
    }
  }, [searchTerm, dataOptions, type]);


  const handleSelect = (item) => {
    let displayName = "";

    if (item.user && item.insurance) {
      displayName = `${item.user.first_name} ${item.user.last_name} - ${item.user.national_id || "نامشخص"} - ${item.insurance.name}`;
    } else if (item.user) {
      displayName = `${item.user.first_name} ${item.user.last_name} - ${item.user.national_id || "نامشخص"}`;
    } else if (item.insurance) {
      displayName = `نامشخص - نامشخص - ${item.insurance.name}`;
    } else if (item.first_name) {
      displayName = `${item.first_name} ${item.last_name} - ${item.national_id || "نامشخص"}`;
    } else if (item.name) {
      displayName = `نامشخص - نامشخص - ${item.name}`;
    } else {
      displayName = "نامشخص - نامشخص - نامشخص";
    }

    setSearchTerm(displayName);
    onSelect(item);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full">

      <input
        type="text"
        placeholder={
          type === "user"
            ? "جستجوی کاربر..."
            : type === "insurance"
            ? "جستجوی بیمه..."
            : "جستجوی کاربر یا بیمه..."
        }
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsDropdownOpen(true);
        }}
        onFocus={() => setIsDropdownOpen(true)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />


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
                {item.user && item.insurance
                  ? `${item.user.first_name} ${item.user.last_name} - ${item.user.national_id || "نامشخص"} - ${item.insurance.name}`
                  : item.user
                  ? `${item.user.first_name} ${item.user.last_name} - ${item.user.national_id || "نامشخص"}`
                  : item.insurance
                  ? `نامشخص - نامشخص - ${item.insurance.name}`
                  : item.first_name
                  ? `${item.first_name} ${item.last_name} - ${item.national_id || "نامشخص"}`
                  : item.name || "نامشخص - نامشخص - نامشخص"}
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
