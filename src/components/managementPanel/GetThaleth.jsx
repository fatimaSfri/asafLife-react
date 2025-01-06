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
      <div className="w-full overflow-x-auto shadow-lg rounded-lg ">
        <div className="h-20"></div>
        <table className="w-full max-md:w-[95%] h-1/3  rounded-2xl overflow-hidden " >
            <thead>
              <tr key={thaleth.id} className="bg-gray-200 rounded-2xl h-14 max-md:text-[12px] ">
              <th className="">تاریخ تولد صاحب پلاک</th>
              <th className="">تلفن همراه</th>
              <th className="">آدرس</th>
              <th className="">وضعیت</th>
              </tr>
            </thead>
            <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-700">در حال بارگذاری...</td>
              </tr>
            ) : (
              getCurrentPageData().map((thaleth) => (
                <tr
                  key={thaleth.id}
                  className="max-md:text-[12px]"
                >
                  <td className="border border-gray-300 text-center">
                    {convertToShamsi(thaleth.owner_birthday)} {/* تاریخ به شمسی */}
                  </td>
                  <td className="border border-gray-300 text-center">
                    {convertToPersianNumbers(thaleth.phone)} {/* شماره به فارسی */}
                  </td>
                  <td className="border border-gray-300 text-center">
                    {thaleth.address}
                  </td>
                  <td className="border border-gray-300 text-center">
                    {thaleth.status === "pending_review" ? "در انتظار بررسی" : thaleth.status}
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
