import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import moment from 'moment-jalaali';

const GetThaleth = () => {
  const [thaleth, setThaleth] = useState([]);
  const [filterthaleth, setFilterThaleth] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recordsPerPage = 10;

  // تابع برای تبدیل اعداد به فارسی
  const convertToPersianNumbers = (num) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num.toString().split('').map(char => persianNumbers[parseInt(char)] || char).join('');
  };

  // تبدیل تاریخ میلادی به شمسی
  const convertToShamsi = (date) => {
    return moment(date).locale('fa').format('jYYYY/jMM/jDD'); // فرمت شمسی
  };

  useEffect(() => {
    const fetchBimeBadaneh = async () => {
      try {
        const response = await axiosInstance.get("thaleth/report");
        console.log(response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setThaleth(response.data.data);
          setFilterThaleth(response.data.data);
        } else {
          console.error("Received data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBimeBadaneh();
  }, []);

  const totalPages = Math.ceil(filterthaleth.length / recordsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return filterthaleth.slice(startIndex, endIndex);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      let middleStart = Math.max(2, currentPage - 2);
      let middleEnd = Math.min(totalPages - 1, currentPage + 2);

      if (middleStart > 2) {
        pageNumbers.push("...");
      }

      for (let i = middleStart; i <= middleEnd; i++) {
        pageNumbers.push(i);
      }

      if (middleEnd < totalPages - 1) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  return (
    <div className="w-full h-full pt-2" dir="rtl">
      <div className="w-full overflow-x-auto shadow-lg rounded-lg pb-50">
        <table className="min-w-full table-auto ">
          <thead>
            <tr className="text-right relative">
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">تاریخ تولد صاحب پلاک</th>
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">تلفن همراه</th>
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">آدرس</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-700">در حال بارگذاری...</td>
              </tr>
            ) : (
              getCurrentPageData().map((thaleth) => (
                <tr
                  key={thaleth.id}
                  className="hover:bg-gray-50 transition-colors duration-200 text-right"
                >
                  <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {convertToShamsi(thaleth.owner_birthday)} {/* تاریخ به شمسی */}
                  </td>
                  <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {convertToPersianNumbers(thaleth.phone)} {/* شماره به فارسی */}
                  </td>
                  <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {thaleth.address}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        ></button>

        {generatePageNumbers().map((pageNum, index) => (
          <button
            key={index}
            onClick={() => typeof pageNum === "number" && setCurrentPage(pageNum)}
            className={`px-4 py-2 rounded-md shadow-sm ${currentPage === pageNum
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-gray-50"
              }`}
          >
            {convertToPersianNumbers(pageNum)} {/* شماره صفحه به فارسی */}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        ></button>
      </div>
    </div>
  );
};

export default GetThaleth;
