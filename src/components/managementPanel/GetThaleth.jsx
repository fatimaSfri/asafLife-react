import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";

const GetThaleth = () => {
  const [thalth, setThaleth] = useState([]);
  const [filterthaleth, setfilterthaleth] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchBimeBadaneh = async () => {
      try {
        const response = await axiosInstance.get("thaleth/report");
        console.log(response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setThaleth(response.data.data);
          setfilterthaleth(response.data.data);
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
    <div className="w-full h-full pt-2 " dir="rtl">
      <div className="w-full overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-right">
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">تاریخ تولد صاحب پلاک</th>
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">تلفن همراه</th>
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">آدرس</th>
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">عکس کارت ماشین (پشت و رو)</th>
              <th className="px-2 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-700">تصویر گواهی نامه</th>
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
                  key={thaleth.phone}
                  className="hover:bg-gray-50 transition-colors duration-200 text-right"
                >
                  <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {thaleth.owner_birthday}
                  </td>
                  <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {thaleth.address}
                  </td>
                  <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {thaleth.vehicle_cart_photos && thaleth.vehicle_cart_photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`vehicle_photo_${index}`}
                        className="w-16 h-16 rounded-md object-cover mx-1 inline-block"
                      />
                    ))}
                  </td>
                  <td className="px-2 md:px-6 py-4 text-xs md:text-sm text-gray-700">
                    {badaneh.certificate_photo && (
                      <img
                        src={badaneh.certificate_photo}
                        alt="عکس بیمه نامه"
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    )}
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
        >
          &lt;
        </button>

        {generatePageNumbers().map((pageNum, index) => (
          <button
            key={index}
            onClick={() => typeof pageNum === "number" && setCurrentPage(pageNum)}
            className={`px-4 py-2 rounded-md shadow-sm ${
              currentPage === pageNum
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
          className="px-4 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GetThaleth;
