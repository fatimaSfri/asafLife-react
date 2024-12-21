import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig"; 

const GetDashbordUsers = () => {
  const [users, setUsers] = useState([]); 
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/user");
        console.log(response.data); 
        if (response.data && Array.isArray(response.data.data)) {
          setUsers(response.data.data); 
          setFilteredUsers(response.data.data); 
        } else {
          console.error("داده‌های دریافتی آرایه نیستند:", response.data);
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات کاربران:", error);
      }
    };
  
    fetchUsers();
  }, []);
  

  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    pageNumbers.push(1, 2);

    let middleStart = Math.max(3, currentPage - 2);
    let middleEnd = Math.min(totalPages - 2, currentPage + 2);

    if (currentPage < 10) {
      middleStart = 3;
      middleEnd = 10;
    }

    if (middleStart > 3) {
      pageNumbers.push("...");
    }

    for (let i = middleStart; i <= middleEnd; i++) {
      pageNumbers.push(i);
    }

    if (middleEnd < totalPages - 2) {
      pageNumbers.push("...");
    }

    pageNumbers.push(totalPages - 1, totalPages);

    return pageNumbers;
  };

  return (
    <div className="p-6" dir="rtl">
      <div className="w-full overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-right">
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">نام</th>
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">نام خانوادگی</th>
              <th className="hidden lg:table-cell px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">کد ملی</th>
              <th className="hidden md:table-cell px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">شماره همراه</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {getCurrentPageData().map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors duration-200 text-right"
              >
                <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                  {user.firstName}
                </td>
                <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                  {user.lastName}
                </td>
                <td className="hidden lg:table-cell px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                  {user.nationalId}
                </td>
                <td className="hidden md:table-cell px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                  {user.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="w-5 h-5 inline-block transform rotate-180 border-r-2 border-t-2 border-gray-700"></span>
        </button>

        {generatePageNumbers().map((pageNum, index) => (
          <button
            key={index}
            onClick={() => typeof pageNum === "number" && setCurrentPage(pageNum)}
            className={`px-4 py-2 rounded-md shadow-sm ${currentPage === pageNum
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-50"
              }`}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="w-5 h-5 inline-block border-r-2 border-t-2 border-gray-700"></span>
        </button>
      </div>
    </div>
  );
};

export default GetDashbordUsers;
