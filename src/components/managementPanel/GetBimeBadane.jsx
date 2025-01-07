import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";


const GetBimeBadane = () => {
  const [bimeha, setBimeh] = useState([]);
  const [filterBimeha, setfilterBimeha] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recordsPerPage = 10;


  const convertToPersianNumbers = (num) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num.toString().split('').map(char => persianNumbers[parseInt(char)] || char).join('');
  };

  useEffect(() => {
    const fetchBimeBadaneh = async () => {
      try {
        const response = await axiosInstance.get("badane/report");
        console.log(response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setBimeh(response.data.data);
          setfilterBimeha(response.data.data);
        } else {
          console.error("داده‌های دریافتی آرایه نیستند:", response.data);
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات کاربران:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBimeBadaneh();
  }, []);

  const totalPages = Math.ceil(filterBimeha.length / recordsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return filterBimeha.slice(startIndex, endIndex);
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
    <div className="w-full h-full pt-6" dir="rtl">
      <div className="w-full overflow-x-auto shadow-lg rounded-lg">
        <div className="h-20"></div>
        <table className="w-full max-md:w-[95%] h-1/3  rounded-2xl overflow-hidden ">
          <thead>
            <tr className="bg-gray-200 rounded-2xl h-14 max-md:text-[12px] ">
              <th className="">شماره همراه</th>
              <th className="">آدرس</th>
              <th className="">وضعیت</th>
              {/* <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">عکس کارت ماشین (پشت و رو)</th> */}
              {/* <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">کارت ملی</th> */}
              {/* <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">تصویر بیمه نامه</th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-700">در حال بارگذاری...</td>
              </tr>
            ) : (
              getCurrentPageData().map((badaneh) => (
                <tr
                  key={badaneh.id}
                  className="hover:bg-gray-50 transition-colors duration-200 text-right"
                >
                  <td className="border border-gray-300 text-center">
                    {badaneh.phone}
                  </td>
                  <td className="border border-gray-300 text-center">
                    {badaneh.address}
                  </td>
                  <td className="border border-gray-300 text-center">
                    {badaneh.status === "pending_review" ? "در انتظار بررسی" : badaneh.status}
                  </td>

                  {/* <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {badaneh.vehicle_cart_photos && badaneh.vehicle_cart_photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`vehicle_photo_${index}`}
                        className="w-16 h-16 rounded-md object-cover mx-1 inline-block"
                      />
                    ))}
                  </td> */}
                  {/* <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {badaneh.national_cart_photo && (
                      <img
                        src={badaneh.national_cart_photo}
                        alt="عکس کارت ملی"
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    )}
                  </td> */}
                  {/* <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {badaneh.insurer_photo && (
                      <img
                        src={badaneh.insurer_photo}
                        alt="عکس بیمه نامه"
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    )}
                  </td> */}
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
        >
          &lt;
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
            {convertToPersianNumbers(pageNum)}
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

export default GetBimeBadane;
